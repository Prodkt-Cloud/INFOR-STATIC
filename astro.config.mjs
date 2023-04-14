import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import UnoCSS from "@unocss/astro";
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";
import pagefind from "astro-pagefind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [UnoCSS({
    configFile: './prodkt.config.ts'
  }), image(), mdx(), pagefind(), alpinejs()],
  output: "static",
  adapter: vercel()
});