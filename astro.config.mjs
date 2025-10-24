// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { SITE } from "./src/consts";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: SITE.URL,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
