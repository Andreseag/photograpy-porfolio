import { defineMiddleware } from "astro:middleware";
import { createClient } from "./lib/supabase";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const isAdmin = pathname.startsWith("/admin");
  if (!isAdmin || pathname === "/admin/login") return next();

  const supabase = createClient(context);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return context.redirect("/admin/login");

  (context.locals as typeof context.locals & { user: typeof user }).user = user;
  (context.locals as typeof context.locals & { supabase: typeof supabase }).supabase = supabase;
  return next();
});
