export const STATUSES = [
  { value: "cotizada", label: "Cotizada" },
  { value: "confirmada", label: "Confirmada" },
  { value: "realizada", label: "Realizada" },
  { value: "entregada", label: "Entregada" },
  { value: "cancelada", label: "Cancelada" },
] as const;

export const SESSION_TYPES = [
  "Familia",
  "Retrato",
  "Bebé",
  "Embarazo",
  "Niños",
  "Boda",
  "Otro",
];

const TZ = "America/Bogota";
const OFFSET = "-05:00";
const LOCAL_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;

// Valores tal como los maneja el formulario (todo en texto)
export type SessionFormValues = {
  client_id: string;
  type: string;
  starts_at: string; // 'YYYY-MM-DDTHH:mm' en hora de Bogotá
  ends_at: string;
  location: string;
  price: string;
  status: string;
  notes: string;
};

export const emptySession = (client_id = ""): SessionFormValues => ({
  client_id,
  type: "",
  starts_at: "",
  ends_at: "",
  location: "",
  price: "",
  status: "cotizada",
  notes: "",
});

// timestamptz (UTC) -> valor para <input type="datetime-local"> en Bogotá
export function toLocalInput(ts: string | null): string {
  if (!ts) return "";
  return new Date(new Date(ts).getTime() - 5 * 3600_000)
    .toISOString()
    .slice(0, 16);
}

const toISO = (local: string) => new Date(`${local}:00${OFFSET}`).toISOString();

export function parseSessionForm(form: FormData) {
  const get = (k: string) => String(form.get(k) ?? "").trim();

  const values: SessionFormValues = {
    client_id: get("client_id"),
    type: get("type"),
    starts_at: get("starts_at"),
    ends_at: get("ends_at"),
    location: get("location"),
    price: get("price"),
    status: get("status") || "cotizada",
    notes: get("notes"),
  };

  const fail = (error: string) => ({ values, error, payload: null });

  if (!values.client_id) return fail("Selecciona un cliente");
  if (!values.type) return fail("Selecciona el tipo de sesión");
  if (!LOCAL_RE.test(values.starts_at))
    return fail("La fecha y hora de inicio son obligatorias");
  if (values.ends_at && !LOCAL_RE.test(values.ends_at))
    return fail("La hora de fin no es válida");
  if (values.ends_at && values.ends_at <= values.starts_at) {
    return fail("El fin debe ser posterior al inicio");
  }
  if (!STATUSES.some((s) => s.value === values.status))
    return fail("Estado no válido");

  const digits = values.price.replace(/\D/g, "");

  return {
    values,
    error: undefined,
    payload: {
      client_id: values.client_id,
      type: values.type,
      starts_at: toISO(values.starts_at),
      ends_at: values.ends_at ? toISO(values.ends_at) : null,
      location: values.location || null,
      price: digits ? Number(digits) : null,
      status: values.status,
      notes: values.notes || null,
    },
  };
}

// Para mostrar en pantalla
export const formatDate = (ts: string) =>
  new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: TZ,
  }).format(new Date(ts));

export const formatCOP = (n: number | string | null) =>
  n == null || n === ""
    ? "—"
    : new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }).format(Number(n));

export const statusLabel = (v: string) =>
  STATUSES.find((s) => s.value === v)?.label ?? v;
