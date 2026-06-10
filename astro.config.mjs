// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    site: 'https://imeiman.github.io',
    base: '/newgetup',
    plugins: [tailwindcss()],
  },
});
