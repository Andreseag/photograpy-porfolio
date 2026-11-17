import type { APIRoute } from "astro";
import { createHmac, timingSafeEqual } from "node:crypto";
import { supabaseAdmin } from "../../../lib/supabase-admin";

export const prerender = false;

function validSignature(raw: string, header: string | null) {
  const secret = import.meta.env.CAL_WEBHOOK_SECRET;
  if (!secret || !header) return false;
  const expected = createHmac("sha256", secret).update(raw).digest("hex");
  const a = Buffer.from(expected);
  const b = Buffer.from(header);
  return a.length === b.length && timingSafeEqual(a, b);
}

async function findOrCreateClient(att: any, phone: string | null) {
  const email = String(att?.email ?? "")
    .trim()
    .toLowerCase();
  const name = String(att?.name ?? "").trim() || email || "Sin nombre";

  if (email) {
    const { data: found } = await supabaseAdmin
      .from("clients")
      .select("id")
      .ilike("email", email)
      .limit(1)
      .maybeSingle();
    if (found) return found.id as string;
  }

  const { data, error } = await supabaseAdmin
    .from("clients")
    .insert({ name, email: email || null, phone })
    .select("id")
    .single();
  if (error) throw error;
  return data.id as string;
}

export const POST: APIRoute = async ({ request }) => {
  // IMPORTANTE: leer el cuerpo crudo ANTES de parsear
  const raw = await request.text();

  if (!validSignature(raw, request.headers.get("x-cal-signature-256"))) {
    return new Response("Unauthorized", { status: 401 });
  }

  const event = JSON.parse(raw);
  const trigger: string = event.triggerEvent;
  const d = event.payload ?? event;
  const uid: string | undefined = d.uid;

  // Pings de prueba u otros eventos sin reserva: responder OK
  if (!uid) return new Response("ok");

  try {
    if (trigger === "BOOKING_CANCELLED") {
      await supabaseAdmin
        .from("sessions")
        .update({ status: "cancelada" })
        .eq("cal_uid", uid);
      return new Response("ok");
    }

    if (trigger === "BOOKING_CREATED" || trigger === "BOOKING_RESCHEDULED") {
      const attendee = d.attendees?.[0];
      const phone =
        d.responses?.attendeePhoneNumber?.value ??
        attendee?.phoneNumber ??
        null;

      const fields = {
        cal_uid: uid,
        starts_at: d.startTime,
        ends_at: d.endTime ?? null,
        location: typeof d.location === "string" ? d.location : null,
        notes: d.additionalNotes || null,
        status: "confirmada",
      };

      // Reprogramación: actualizar la sesión existente (uid anterior)
      if (trigger === "BOOKING_RESCHEDULED" && d.rescheduleUid) {
        const { data: updated } = await supabaseAdmin
          .from("sessions")
          .update(fields)
          .eq("cal_uid", d.rescheduleUid)
          .select("id");
        if (updated && updated.length > 0) return new Response("ok");
      }

      // Evitar duplicados si Cal.com reintenta la entrega
      const { data: existing } = await supabaseAdmin
        .from("sessions")
        .select("id")
        .eq("cal_uid", uid)
        .maybeSingle();
      if (existing) return new Response("ok");

      const client_id = await findOrCreateClient(attendee, phone);
      const { error } = await supabaseAdmin.from("sessions").insert({
        ...fields,
        client_id,
        type: "Por definir", // Laura lo ajusta al revisar la reserva
        source: "cal",
      });
      if (error) throw error;
    }

    return new Response("ok");
  } catch (err) {
    console.error("Webhook Cal.com falló:", err);
    return new Response("Error", { status: 500 }); // Cal.com reintentará
  }
};
