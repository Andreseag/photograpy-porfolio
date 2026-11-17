import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://laurarodriguezfotografia.com",
  compressHTML: true,
  adapter: vercel(),
});
