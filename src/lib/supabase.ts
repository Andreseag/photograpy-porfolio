import { createServerClient, parseCookieHeader } from "@supabase/ssr";
import type { AstroCookies } from "astro";

export function createClient(ctx: { request: Request; cookies: AstroCookies }) {
  return createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(ctx.request.headers.get("Cookie") ?? "").map(
            ({ name, value }) => ({ name, value: value ?? "" }),
          );
        },
        setAll(list) {
          list.forEach(({ name, value, options }) =>
            ctx.cookies.set(name, value, options),
          );
        },
      },
    },
  );
}
