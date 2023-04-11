
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import UnoCSS from "@unocss/astro";
import image from "@astrojs/image";
import pagefind from "astro-pagefind";
import vercel from "@astrojs/vercel/static";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
const __unconfig_default =  defineConfig({
  integrations: [UnoCSS({
    configFile: './prodkt.config.ts'
  }), image(), mdx(), pagefind(), alpinejs()],
  output: "static",
  adapter: vercel()
});
if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;