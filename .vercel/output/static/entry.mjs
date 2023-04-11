import { s as server_default } from './chunks/astro.c7e3c792.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4 } from './chunks/pages/all.e01b7489.mjs';
import 'html-escaper';
/* empty css                                 */import 'node:path';
/* empty css                                 */
const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/industry/index.astro", _page1],["src/pages/industry/[...slug].astro", _page2],["src/pages/path/index.astro", _page3],["src/pages/path/[...slug].astro", _page4],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

export { pageMap, renderers };
