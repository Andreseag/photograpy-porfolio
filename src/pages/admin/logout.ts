import type { APIRoute } from "astro";
export const prerender = false;

export const POST: APIRoute = async ({ locals, redirect }) => {
  const supabase = (
    locals as typeof locals & {
      supabase: { auth: { signOut: () => Promise<unknown> } };
    }
  ).supabase;
  await supabase.auth.signOut();
  return redirect("/admin/login");
};
