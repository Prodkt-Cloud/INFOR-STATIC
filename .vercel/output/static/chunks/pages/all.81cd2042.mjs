/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, F as Fragment } from '../astro.e81a75ab.mjs';
import 'html-escaper';
import { join } from 'node:path';
/* empty css                           */
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$w = createAstro();
const $$HeadScripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$HeadScripts;
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<!-- Google Tag Manager --><script client:load>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PVDLBXZ');<\/script>
<!-- End Google Tag Manager --><script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/persist@3.x.x/dist/cdn.min.js"><\/script>

`])));
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/HeadScripts.astro");

const $$Astro$v = createAstro();
const $$AfterBodyOpen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$AfterBodyOpen;
  return renderTemplate`<!-- Google Tag Manager (noscript) -->${maybeRenderHead($$result)}<noscript><iframe title="Google Analytics" src="https://www.googletagmanager.com/ns.html?id=GTM-PVDLBXZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/AfterBodyOpen.astro");

const $$Astro$u = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Search;
  Astro2.props;
  const bundlePath = join("/", "_pagefind/");
  return renderTemplate`${maybeRenderHead($$result)}<div class="infor-searchbar h-full" data-pagefind-ui=""${addAttribute(bundlePath, "data-bundle-path")}></div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/atoms/Search.astro");

const $$Astro$t = createAstro();
const $$LayoutHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$LayoutHeader;
  return renderTemplate`${maybeRenderHead($$result)}<div id="inforHeader" class="sticky bg-brand9 top-0 z-40 flex top-0 bottom-0 pt-8 pb-0 items-center justify-right">
<form class="w-full p-0 right-0 left-auto m-auto">
  <label for="voice-search" class="sr-only">Search Learning Paths at Infor...</label>
  <div class="relative w-full bg-brand9 rounded-lg p-0 mr-0 ml-auto rounded-lg w-full">
    ${renderComponent($$result, "Search", $$Search, { "class": "w-full", "placeholder": "Search Learning Paths, Industry Accredidations, Courses around your role...", "required": true })}
    <button type="button" class="absolute inset-y-0 right-0 flex items-center">
    </button>
  </div>
</form>
</div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/LayoutHeader.astro");

const $$Astro$s = createAstro();
const $$AsideRadioElements = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$AsideRadioElements;
  const { industry, tightGap } = Astro2.props;
  return renderTemplate`<!-- Radio Group -->${maybeRenderHead($$result)}<div x-data="{
        value: null,
        select(option) { this.value = option },
        isSelected(option) { return this.value === option },
        hasRovingTabindex(option, el) {
            // If this is the first option element and no option has been selected, make it focusable.
            if (this.value === null && Array.from(el.parentElement.children).indexOf(el) === 0) return true

            return this.isSelected(option)
        },
        selectNext(e) {
            let el = e.target
            let siblings = Array.from(el.parentElement.children)
            let index = siblings.indexOf(el)
            let next = siblings[index === siblings.length - 1 ? 0 : index + 1]

            next.click(); next.focus();
        },
        selectPrevious(e) {
            let el = e.target
            let siblings = Array.from(el.parentElement.children)
            let index = siblings.indexOf(el)
            let previous = siblings[index === 0 ? siblings.length - 1 : index - 1]

            previous.click(); previous.focus();
        },
    }" @keydown.down.stop.prevent="selectNext" @keydown.right.stop.prevent="selectNext" @keydown.up.stop.prevent="selectPrevious" @keydown.left.stop.prevent="selectPrevious" role="radiogroup" :aria-labelledby="$id('radio-group-label')" x-id="['radio-group-label']" class="w-full">

    <!-- Radio Group Label -->
    <label :id="$id('radio-group-label')" role="none" class="hidden">Industries: <span x-text="value"></span></label>
    <div${addAttribute(tightGap === true ? `mt-2px grid grid-cols-2 gap-2px ` : `mt-4 flex flex-wrap justify-items-stretch w-auto gap-2`, "class")} ">

        ${industry.map(
    (industry2) => renderTemplate`<!-- Option --><div${addAttribute(`{ option: '${industry2}' }`, "x-data")} @click="select(option)" @keydown.enter.stop.prevent="select(option)" @keydown.space.stop.prevent="select(option)" :aria-checked="isSelected(option)" :tabindex="hasRovingTabindex(option, $el) ? 0 : -1" :aria-labelledby="$id('radio-option-label')" :aria-describedby="$id('radio-option-description')" x-id="['radio-option-label', 'radio-option-description']" role="radio" :class="{ 'bg-brand9 hover:bg-brand9 border-brand9 text-base1 focus:bg-brand9 focus:text-brand1 active:text-brand1 active:bg-brand9': isSelected(option) }" class="flex cursor-pointer rounded-lg border border-base3 bg-base6 px-3 py-2 items-center text-xs font-semibold flex-grow group">
            <!-- Checked Indicator -->
                <span${addAttribute(tightGap === true ? `mr-3 hidden aria-hidden="true"` : `inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-3 border-base1 group-hover:border-base1 bg-base1 group-hover:bg-brand9 ring-1 ring-base2 group-hover:ring-base2 :class="{ 'bg-brand9 hover:focus:bg-brand9': isSelected(option) }"`, "class")} ">
                    <span class="inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-3 border-base1 group-hover:border-base1 bg-base1 group-hover:bg-brand9 ring-1 ring-base2 group-hover:ring-base2" :class="{ 'bg-brand9 hover:focus:bg-brand9': isSelected(option) }" aria-hidden="true"></span>
                </span>

            <span${addAttribute(tightGap === true ? `ml-0 mr-auto inforRole-list` : `ml-2`, "class")} ">
                <!-- Primary Label -->
                <p :id="$id('radio-option-label')" class="m-auto pb-0.5">${industry2}</p>

                <!-- Secondary Information -->
                <span :id="$id('radio-option-description')" class="mt-2 text-sm hidden">
                    ${industry2}
                </span>
            </span>
        </div>`
  )}
    </div>
</div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/AsideRadioElements.astro");

const $$Astro$r = createAstro();
const $$AsideIndustries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$AsideIndustries;
  const industry = ["Aerospace & Defense", "Automotive", "Distribution", "Fashion", "Food & Beverage", "Healthcare", "Hospitality", "Manufacturing"];
  return renderTemplate`${renderComponent($$result, "AsideRadioElements", $$AsideRadioElements, { "industry": industry })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/AsideIndustries.astro");

const $$Astro$q = createAstro();
const $$AsideLearningLifecycle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$AsideLearningLifecycle;
  const industry = ["Explore", "Prepare", "Execute", "Sustain", "Elevate"];
  return renderTemplate`${renderComponent($$result, "AsideRadioElements", $$AsideRadioElements, { "industry": industry })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/AsideLearningLifecycle.astro");

const $$Astro$p = createAstro();
const $$AsideFilter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$AsideFilter;
  return renderTemplate`<!-- Static sidebar for desktop --><!-- <div class="lg:fixed lg:z-50 lg:w-2/6 lg:flex-col left-8 top-8 h-auto bottom-8 transform"> -->${maybeRenderHead($$result)}<div id="toggleFilters" class="lg:fixed lg:z-50 lg:w-2/6 lg:flex-col left-8 top-8  bottom-8 transition-all duration-1000">
          
                <!-- Sidebar component -->
                <div class="flex flex-col h-92vh gap-y-2 overflow-y-auto rounded-2xl bg-base1 border border-base4 shadow-2xl p-6 overflow-y-hidden relative">
                  <a id="toggleBtn" class="toggleBtn inline-block absolute top-0 right-0 m-6 text-base11 hover:text-base11" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </a>
                  <nav class="flex flex-1 flex-col gap-4 h-full">
                      <div class=" rounded-lg">
                          <legend class="text-base font-semibold leading-6 mb-4">Industry</legend>
                          ${renderComponent($$result, "AsideIndustries", $$AsideIndustries, {})}
                      </div>
                      <div class=" rounded-lg">
                          <legend class="text-base font-semibold leading-6 mb-4">Learning Lifecycle</legend>
                          ${renderComponent($$result, "AsideLearningLifecycle", $$AsideLearningLifecycle, {})}
                      </div>
                      <div class=" rounded-lg border border-base4 overflow-hidden h-full">
                        <div class="px-3 py-2 border-b border-base4 flex items-center">
                          <legend class="text-base font-semibold leading-6">Roles</legend>
                        </div>
                        <div class="p-1px bottom-41px h-full relative">
                          <div class="flex flex-col  h-full gap-0 overflow-x-hidden overflow-y-scroll infor-scroll max-h-full bg-base1">
                            <h6 class="p-3 fixed top-0 sticky bg-base1 border-b border-base4 mb-0">A</h6>
                            <ul class="flex flex-row flex-wrap p-0 pr-1px">
                              <!-- <AsideRoles /> -->
                            <!-- <li href="#" class="text-xs font-medium leading-6 text-base12 rounded-md px-4 py-2 flex flex-row items-center gap-1 bg-base1 text-base9 hover:bg-base3 group cursor-pointer w-1/4"><Icon pack="carbon" name="user-role" class="w-4 w-4 group-hover:text-base12" />Developer</li>
                            <li href="#" class="text-xs font-medium leading-6 text-base12 rounded-md px-4 py-2 flex flex-row items-center gap-1 bg-base1 text-base9 hover:bg-base3 group cursor-pointer w-1/4"><Icon pack="carbon" name="user-role" class="w-4 w-4 group-hover:text-base12" />Developer</li>
                            <li href="#" class="text-xs font-medium leading-6 text-base12 rounded-md px-4 py-2 flex flex-row items-center gap-1 bg-base1 text-base9 hover:bg-base3 group cursor-pointer w-1/4"><Icon pack="carbon" name="user-role" class="w-4 w-4 group-hover:text-base12" />Developer</li> 
                            <li href="#" class="text-xs font-medium leading-6 text-base12 rounded-md px-4 py-2 flex flex-row items-center gap-1 bg-base1 text-base9 hover:bg-base3 group cursor-pointer w-1/4"><Icon pack="carbon" name="user-role" class="w-4 w-4 group-hover:text-base12" />Developer</li>
                             -->
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="p-2 rounded-lg">
                        <button href="/learning-paths/" class="bg-brand9 hover:bg-brand10 active:bg-brand-11 text-base1 px-3 py-2 rounded-lg font-semibold text-sm w-full">Pull Learning Paths based on your selection</button>
                      </div>
                  </nav>
                </div>
              </div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/AsideFilter.astro");

const $$Astro$o = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${title}</title>
    ${renderComponent($$result, "HeadScripts", $$HeadScripts, {})}
  ${renderHead($$result)}</head>
  <body class="bg-base3 overflow-x-hidden w-vw">
    ${renderComponent($$result, "AfterBodyOpen", $$AfterBodyOpen, {})}
    <div>
      ${renderComponent($$result, "AsideFilter", $$AsideFilter, {})}

      <div class="">
        ${renderComponent($$result, "LayoutHeader", $$LayoutHeader, {})}

        <main class="">
          <div id="inforMainSection" class="">
            <!-- Infor content -->
            ${renderSlot($$result, $$slots["default"])}
            <!-- Infor content -->
          </div>
        </main>
      </div>
    </div>
  </body></html>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/layouts/Layout.astro");

const $$Astro$n = createAstro();
const $$Tabs2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Tabs2;
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border border-base9 focus:border-brand9 focus:ring-brand9">
        
          <option selected="">Industry</option>
        
          <option>Role</option>
        
          <option>Learning Lifecycle</option>
        
          <option>Learning Paths</option>
        

      </select>
    </div>
    <div class="hidden sm:block pb-8">
      <nav class="isolate flex divide-x divide-base4 rounded-lg border outline-1 shadow-xl shadow-base4" aria-label="Tabs">
        

          <a href="/" class="text-gray-900 rounded-l-lg  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state:on="Current" x-state:off="Default" aria-current="page" x-state-description="Current: &quot;text-gray-900&quot;, Default: &quot;text-base7 hover:text-base9&quot;">
            <span>Industry</span>
            <span aria-hidden="true" class="bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a>
        
          <a href="/industries/aerospace-and-defense/" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
            <span>Role</span>
            <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a>
        
          <a href="/lifecycle/" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
            <span>Learning Lifecycle</span>
            <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a>
        
          <a href="/learning-paths/" class="text-base9 hover:text-base12 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
            <span>Learning Paths</span>
            <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a>
        
      </nav>
    </div>
  </div>

    </div>
  </div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/Tabs2.astro");

const $$Astro$m = createAstro();
const $$Card3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Card3;
  const { title, url, image } = Astro2.props;
  return renderTemplate`<!-- CARD HOUSING --><!-- CARD -->${maybeRenderHead($$result)}<a${addAttribute(`${url}`, "href")} class="relative overflow-hidden w-full flex items-center gap-14 p-6 bg-brand12 text-base3 rounded-2xl hover:shadow-blue7 transition-shadow hover:transition-shadow shadow-2xl" style="
          background-color: rgb(24, 24, 27);
          background-image: radial-gradient(at 100% 0%, rgb(30, 58, 138) 0, transparent 78%), radial-gradient(at 0% 10%, rgb(0, 0, 0) 0, transparent 89%), radial-gradient(at 100% 100%, rgb(30, 58, 138) 0, transparent 100%), radial-gradient(at 0% 43%, rgb(30, 58, 138) 0, transparent 100%), radial-gradient(at 0% 100%, rgb(30, 58, 138) 0, transparent 100%), radial-gradient(at 100% 100%, rgb(30, 58, 138) 0, transparent 100%), radial-gradient(at 100% 0%, rgb(0, 0, 0) 0, transparent 0%), radial-gradient(at 100% 0%, rgb(219, 234, 254) 0, transparent 38%);
        ">
            <div class="inline-flex items-center justify-center w-32 h-32 rounded-full" style="
            filter: drop-shadow(7px 7px 7px rgba(0, 0, 0, 0.5)));
            -webkit-filter: drop-shadow(7px 7px 7px rgba(0,0,0,0.5)); outline: 1px solid rgba(0,0,255,.1); outline-offset: 40px;">
            <img class="w-32 h-32 rounded-full shadow-2xl shadow-brand12" style="background: rgb(252,70,107);
            background: radial-gradient(circle, rgba(252,70,107,0) 50%, rgba(63,94,251,.325) 100%);  outline: 1px solid rgba(0,0,255,.1); outline-offset: 20px;"${addAttribute(`${image}`, "src")} shape-rendering="geometricPrecision">
            </div>
            <h4 class="text-xl font-bold">${title}</h4>
          </a>
          <!-- END CARD -->

        <!-- END CARD HOUSING -->`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/Card3.astro");

const $$Astro$l = createAstro();
const $$LandingPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$LandingPage;
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data: data2 } = await response.json();
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex w-full flex-row">
  <div class="w-full">
    ${renderComponent($$result, "Tabs2", $$Tabs2, {})}
  </div>
</div>
<section class="">



    <div class="">
      <h2 class="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading font-heading tracking-px-n leading-none">Infor Academy</h2>
      <p class="mb-16 text-lg text-base9 text-center font-medium leading-normal md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum vitae vel purus.</p>
      <div class="md:max-w-6xl mx-auto">
        <div class="grid grid-cols-2 gap-6 mb-12">
          
            ${data2.map((role2) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
            ${renderComponent($$result2, "Card3", $$Card3, { "url": `/industries/${role2.attributes.slug}/`, "image": role2.attributes.cardImage.data.attributes.url, "title": `${role2.attributes.title}` })}
    ` })}`)} 
        </div>
      </div>
    </div>
  </section>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/sections/LandingPage.astro");

const $$Astro$k = createAstro();
const $$FilterButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$FilterButton;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<button${addAttribute(text, "data-pagefind-filter")} x-bind="filterButton">${text}</button>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/atoms/FilterButton.astro");

const $$Astro$j = createAstro();
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "FilterButton", $$FilterButton, { "text": "test" })}
    ${renderComponent($$result2, "LandingPage", $$LandingPage, {})}
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/index.astro");

const $$file$g = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/index.astro";
const $$url$g = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$5,
    file: $$file$g,
    url: $$url$g
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro();
const $$SectionNine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SectionNine;
  return renderTemplate`${maybeRenderHead($$result)}<div class="relative max-w-vw">
  <div class="overflow-visible relative" style="z-index: 2;">
    <section class="overflow-hidden">
        <div class="container flex flex-wrap pr-4 mx-auto">
    ${renderSlot($$result, $$slots["default"])}
    </div>
    </section>
    <div class="pt-0 mx-auto w-64 xl:flex xl:w-auto xl:justify-center sm:w-64 sm:pt-0">
      <div class="grid justify-items-center w-64 font-sans opacity-100 xl:w-64 xl:justify-items-stretch xl:gap-y-0 sm:w-64 sm:gap-y-0" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1; gap: 0px 20px; grid-template: &quot;.&quot; / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr;">
        <img src="/shape-icons/61c9dfabd1ade58aabcb3e3d_-%20Sphere-3.png" loading="lazy" alt="" class="inline-block absolute w-24 max-w-full align-middle xl:w-32 sm:left-1/4" style="inset: auto auto 2% 8%; z-index: 3;">
      </div>
    </div>
  </div>
  <div class="overflow-visible pt-12" style="z-index: 2;">
    <img src="/shape-icons/61c9dfabd1ade55fa2cb3e39_-%20Sphere.png" loading="lazy" alt="" class="inline-block absolute w-16 max-w-full xl:w-20 sm:w-24" style="top: -10px; right: 30%; z-index: 3;">
  </div>
  <img src="/shape-icons/61c9dfaad1ade51453cb3e30_-%20Sphere%20BO.png" loading="lazy" alt="" class="inline-block absolute w-20 max-w-full xl:w-24 sm:w-24" style="inset: 470px 370px auto auto;"><img src="/shape-icons/61c9dfabd1ade58aabcb3e3d_-%20Sphere-3.png" loading="lazy" alt="" class="absolute w-32 max-w-full" style="inset: 240px -100px auto auto; z-index: 3;"><img src="/shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-32 max-w-full" style="inset: 530px auto auto -70px;"><img src="/shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-24 max-w-full sm:w-32" style="inset: 620px auto auto -30px;"><img src="/shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-24 max-w-full xl:w-24" style="inset: 1130px -5% auto auto;"><img src="/shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-20 max-w-full" style="inset: 700px 78% auto auto; z-index: 3;"><img src="/shape-icons/61c9dfaad1ade589f7cb3e32_-%20Sphere%20SO.png" loading="lazy" alt="" class="inline-block absolute w-10 max-w-full" style="inset: 700px 0px auto 22%; z-index: 3;"><img src="/shape-icons/61c9dfaad1ade589f7cb3e32_-%20Sphere%20SO.png" loading="lazy" alt="" class="inline-block absolute w-10 max-w-full" style="inset: 1140px 0px auto 86%; z-index: 3;"><img src="/shape-icons/61c9dfaad1ade589f7cb3e32_-%20Sphere%20SO.png" loading="lazy" alt="" class="inline-block absolute w-10 max-w-full align-middle" style="inset: 010px 0px auto 75%;"><img src="/shape-icons/61c9dfabd1ade55fa2cb3e39_-%20Sphere.png" loading="lazy" alt="" class="inline-block absolute w-8 max-w-full sm:w-10" style="top: 660px; right: 3%; z-index: 3;"><img src="/shape-icons/61c9dfabd1ade55fa2cb3e39_-%20Sphere.png" loading="lazy" alt="" class="inline-block absolute w-8 max-w-full align-middle xl:w-10" style="top: 500px; right: 7%;">
</div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/sections/SectionNine.astro");

const $$Astro$h = createAstro();
const $$NewCard1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$NewCard1;
  const { title, description, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="top-0 bottom-0 h-full top-8">
    <a${addAttribute(`${url}`, "href")} class="mx-auto">
      <div class="relative pt-16 h-full top-0 bottom-0 pb-10 group px-8 bg-brand1 rounded-2xl overflow-hidden">
        <img class="absolute top-0 left-0 h-full w-full object-cover" src="/Hypercolor Gradient.jpeg" alt="">
        <div class="relative h-full flex flex-col">
          <h3 class="text-3xl md:text-4xl font-bold text-brand12 mb-6">${title}</h3>
          <p class="font-medium text-blue-200 mb-36">${description}</p>
          <a class="w-full min-w-full px-6 top-auto bottom-0 mt-auto mb-0 py-3 leading-6 text-center font-semibold text-brand9 hover:text-brand3 bg-brand1 hover:bg-brand12 transition duration-200 rounded-lg" href="#">Get Started</a>
        </div>
      </div>
    </a>
  </div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/molecules/NewCard1.astro");

const $$Astro$g = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$4;
  const response = await fetch("http://127.0.0.1:1337/api/learning-paths?populate=*");
  const { data } = await response.json();
  console.log(data);
  return renderTemplate`<!-- {
    data.map((learningPath) => (
      <>
      <a href={\`/learning-paths/\${learningPath.attributes.slug}\`}> {learningPath.attributes.title} </a>
      </>
    ))
  } -->${renderComponent($$result, "Layout", $$Layout, { "title": "index" }, { "default": ($$result2) => renderTemplate`


${maybeRenderHead($$result2)}<div class="p-8 pt-12 mx-auto w-full border-b border-base6"> ${renderComponent($$result2, "Tabs2", $$Tabs2, {})} </div>
${renderComponent($$result2, "SectionNine", $$SectionNine, { "class": " overflow-hidden" }, { "default": ($$result3) => renderTemplate`
  <div class="grid grid-cols-3 justify-items-stretch grid-rows-1 relative top-0 gap-4 items-stretch">
  ${data.map((learningPath) => renderTemplate`${renderComponent($$result3, "NewCard1", $$NewCard1, { "url": `/learning-paths/${learningPath.attributes.slug}`, "title": `${learningPath.attributes.title}`, "description": `${learningPath.attributes.description}` })}`)}
  </div>
` })}
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/index.astro");

const $$file$f = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/index.astro";
const $$url$f = "/learning-paths";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$4,
    file: $$file$f,
    url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$3;
  const response = await fetch("http://127.0.0.1:1337/api/courses?populate=*");
  const { data } = await response.json();
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`${data.map((courses) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
      ${maybeRenderHead($$result3)}<a${addAttribute(`/courses/${courses.attributes.slug}`, "href")}> ${courses.attributes.title} </a>
      ` })}`)}` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/courses/index.astro");

const $$file$e = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/courses/index.astro";
const $$url$e = "/learning-paths/courses";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$3,
    file: $$file$e,
    url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro();
async function getStaticPaths$9() {
  const response = await fetch("http://127.0.0.1:1337/api/courses?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((courses) => {
      return {
        params: { slug: courses.attributes.slug },
        props: { courses }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$$9;
  const { courses } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Learning Paths" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead($$result2)}<a${addAttribute(`/courses/${courses.attributes.slug}`, "href")}> ${courses.attributes.title} </a>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/courses/[...slug].astro");

const $$file$d = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/courses/[...slug].astro";
const $$url$d = "/learning-paths/courses/[...slug]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$9,
    file: $$file$d,
    getStaticPaths: getStaticPaths$9,
    url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro();
async function getStaticPaths$8() {
  const response = await fetch("http://127.0.0.1:1337/api/learning-paths?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((learningPath) => {
      return {
        params: { slug: learningPath.attributes.slug },
        props: { learningPath }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$$8;
  const { learningPath } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Learning Paths" }, { "default": ($$result2) => renderTemplate`

${maybeRenderHead($$result2)}<div class="p-12 mx-auto w-full border-b border-base6"> ${renderComponent($$result2, "Tabs2", $$Tabs2, {})} </div>

<section class="relative">
  <div class="absolute top-0 left-0 h-px max-w-3xl bg-opacity-10"></div>
  <div class="absolute bottom-0 left-0 mb-0 h-px w-full bg-base6 bg-opacity-20"></div>
  <div class="container px-4 mx-auto">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-1/2 xl:w-2/5 lg:mb-0 lg:border-r border-base6 border-opacity-10">
        <div class="lg:max-w-lg pt-24 lg:pb-40 text-left px-12">
          <p class="text-regular mb-14">Learning Path</p>
          <h1 class="text-6xl sm:text-5xl font-heading font-semibold mb-16">${learningPath.attributes.title}</h1>
          <p class="text-2xl mb-14">Get started today!</p>
          <a class="group relative inline-block h-16 w-80 bg-base3 text-base4 rounded-lg"${addAttribute(`/learning-paths/${learningPath.attributes.url}`, "href")}>
            <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              <div class="flex inline-flex w-full items-center px-4 py-4 justify-center bg-brand11 rounded-lg">
                <span class="text-base font-semibold uppercase">Register for this Learning Path</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2 xl:w-3/5 px-4 xl:pl-24">
        <div class="lg:max-w-xl">
          <div class="flex flex-wrap -mx-4 lg:pt-44 pb-24 xl:pb-32">
            <div class="w-full sm:w-1/2 px-4 mb-32">
              <div class="max-w-2xs mx-auto xs:px-10">
                <img class="mb-10" src="/icons/dataflow-03.svg" alt="">
                <h4 class="text-3xl font-medium mb-2">Tovuti Certification</h4>
                <p>As always. Eloquent UI, with big hints of Learning & Growth.</p>
              </div>
            </div>
            <div class="w-full sm:w-1/2 px-4 mb-32">
              <div class="max-w-2xs mx-auto xs:px-10">
                <img class="mb-10" src="/icons/bar-chart-01.svg" alt="">
                <h4 class="text-3xl font-medium mb-2">Upskilling teams at Infor 2023</h4>
                <p>Oh, irreplaceable. Infor unlocking growth potential in students across the globe.</p>
              </div>
            </div>
            <div class="w-full px-4 mb-32 sm:mb-0">
              <div class="max-w-2xs mx-auto xs:px-10">
                <img class="mb-10" src="/icons/lightbulb-05.svg" alt="">
                <h4 class="text-3xl font-medium mb-2">WeDefine & REfine</h4>
                <p>Once you've identified your next move, it's time to prepare. This may involve conducting market research or developing a strategic plan. The key is to make sure that you're fully prepared before moving forward.</p>
              </div>
            </div>
            <div class="w-full mt-32 px-4 text-center">
              <a class="group inline-flex items-center" href="#">
                <div class="relative flex items-center justify-center w-20 h-20 mr-6 rounded-full">
                  <span class="text-gray-300 group-hover:text-blueGray-900 absolute top-0 left-0 w-full h-full transform group-hover:rotate-180 transition duration-500">
                    <svg width="81" height="81" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="80" height="80" rx="39" stroke="currentColor" stroke-width="2" stroke-dasharray="2 13"></rect></svg>
                  </span>
                  <span class="flex items-center text-2xl font-semibold">
                    <span class="text-xl">+</span>
                    <span "text-xl">8</span>
                  </span>
                </div>
                <span class="text-lg font-bold text-brand9">Includes 8 Courses!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
  <div class="py-20 bg-brand8 overflow-hidden radius-for-skewed">
    <div class="container mx-auto px-4">
      <div class="mb-16 max-w-md text-center mx-auto">
        <span class="text-purple-400 font-bold">Dolor sit amet consectutar</span>
        <h2 class="mb-2 text-4xl lg:text-5xl font-bold font-heading text-white">Learn &amp; Upskill with Infor</h2>
      </div>
      <div class="relative flex flex-wrap -mx-4 z-0">
        <img class="h-128 hidden xl:block absolute top-0 right-0 -mt-4 -mr-16" style="z-index: -1;" src="/line-light-gray.svg" alt="">
        <div class="mb-10 lg:mb-32 w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="max-w-xs">
            <span class="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-yellow-400 text-white rounded-full font-bold text-2xl">1</span>
            <h3 class="mb-4 text-2xl font-bold font-heading text-white">Lorem ipsum dolor sit amet consectutar</h3>
            <p class="text-gray-50 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
          </div>
        </div>
        <div class="mb-10 lg:mb-32 w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="max-w-xs">
            <span class="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-pink-400 text-white rounded-full font-bold text-2xl">2</span>
            <h3 class="mb-4 text-2xl font-bold font-heading text-white">Lorem ipsum dolor sit amet consectutar</h3>
            <p class="text-gray-50 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
          </div>
        </div>
        <div class="mb-10 lg:mb-32 w-full md:w-1/2 lg:w-1/3 px-4">
          <div class="max-w-xs">
            <span class="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-purple-400 text-white rounded-full font-bold text-2xl">3</span>
            <h3 class="mb-4 text-2xl font-bold font-heading text-white">Lorem ipsum dolor sit amet consectutar</h3>
            <p class="text-gray-50 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
          </div>
        </div>
        <div class="mb-10 w-full md:w-1/2 lg:w-1/3 px-4 order-last lg:order-1">
          <div class="max-w-xs">
            <span class="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-green-400 text-white rounded-full font-bold text-2xl">6</span>
            <h3 class="mb-4 text-2xl font-bold font-heading text-white">Lorem ipsum dolor sit amet consectutar</h3>
            <p class="text-gray-50 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
          </div>
        </div>
        <div class="mb-10 md:mb-0 w-full md:w-1/2 lg:w-1/3 px-4 order-1 lg:order-0">
          <div class="max-w-xs">
            <span class="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-blue-400 text-white rounded-full font-bold text-2xl">5</span>
            <h3 class="mb-4 text-2xl font-bold font-heading text-white">Lorem ipsum dolor sit amet consectutar</h3>
            <p class="text-gray-50 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 lg:order-last">
          <div class="max-w-xs">
            <span class="mb-4 lg:mb-10 flex w-16 h-16 items-center justify-center bg-yellow-400 text-white rounded-full font-bold text-2xl">4</span>
            <h3 class="mb-4 text-2xl font-bold font-heading text-white">Lorem ipsum dolor sit amet consectutar</h3>
            <p class="text-gray-50 leading-loose">Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="relative pt-28 pb-36 bg-white overflow-hidden">
  <div class="relative z-10 container px-4 mx-auto">
    <h2 class="mb-6 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none md:max-w-xl mx-auto">Select, Start, Grow</h2>
    <p class="mb-20 text-lg text-gray-900 text-center font-medium leading-normal md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elemen tum.</p>
    <div class="md:max-w-4xl mx-auto">
      <div class="flex flex-wrap -m-5">
        <div class="w-full md:w-1/2 p-5">
          <div class="bg-white bg-opacity-90 border border-blueGray-100 rounded-4xl shadow-9xl" style="backdrop-filter: blur(46px);">
            <div class="border-b border-blueGray-100">
              <div class="py-7 px-9">
                <h3 class="mb-3 text-xl text-gray-900 font-bold leading-snug">Standard</h3>
                <p class="text-gray-500 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consect etur adipiscing maror.</p>
              </div>
            </div>
            <div class="pt-8 bg-brand9 text-base3 pb-9 px-9">
              <p class="mb-6 text-gray-600 font-medium leading-relaxed">Features included:</p>
              <ul class="mb-11">
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">3 Team Members</p>
                </li>
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">1200+ UI Blocks</p>
                </li>
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">10 GB Cloud Storage</p>
                </li>
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">Individual Email Account</p>
                </li>
                <li class="flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">Premium Support</p>
                </li>
              </ul>
              <p class="mb-6 text-xl text-gray-500 font-semibold leading-normal">
                <span>Starting from</span>
                <span class="text-gray-900">$49/mo</span>
              </p>
              <div class="md:inline-block">
                <button class="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Start 14 days free trial</button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-5">
          <div class="bg-white bg-opacity-90 border border-blueGray-100 rounded-4xl shadow-9xl" style="backdrop-filter: blur(46px);">
            <div class="border-b border-blueGray-100">
              <div class="py-7 px-9">
                <h3 class="mb-3 text-xl text-gray-900 font-bold leading-snug">C. Strategic planning
                </h3>
                <p class="text-gray-500 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consect etur adipiscing maror.</p>
              </div>
            </div>
            <div class="pt-8 pb-9 px-9">
              <p class="mb-6 text-gray-600 font-medium leading-relaxed">Features included:</p>
              <ul class="mb-11">
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">3 Team Members</p>
                </li>
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">1200+ UI Blocks</p>
                </li>
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">10 GB Cloud Storage</p>
                </li>
                <li class="mb-4 flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">Individual Email Account</p>
                </li>
                <li class="flex items-center">
                  <svg class="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 10L9.16667 11.6667L12.5 8.33333M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="font-semibold leading-normal">Premium Support</p>
                </li>
              </ul>
              <p class="mb-6 text-xl text-gray-500 font-semibold leading-normal">
                <span>Starting from</span>
                <span class="text-gray-900">$99/mo</span>
              </p>
              <div class="md:inline-block">
                <button class="py-4 px-10 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Register for this course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="absolute bottom-0 left-0 w-full py-64 bg-indigo-600"></div>
</section>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/[...slug].astro");

const $$file$c = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/[...slug].astro";
const $$url$c = "/learning-paths/[...slug]";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$8,
    file: $$file$c,
    getStaticPaths: getStaticPaths$8,
    url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
async function getStaticPaths$7() {
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((industryTag) => {
      return {
        params: { slug: industryTag.attributes.slug },
        props: { industryTag }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$$7;
  const { industryTag } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead($$result2)}<a${addAttribute(`/${industryTag.attributes.slug}`, "href")}> ${industryTag.attributes.title} </a>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/[...industry].astro");

const $$file$b = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/learning-paths/[...industry].astro";
const $$url$b = "/learning-paths/[...industry]";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$7,
    file: $$file$b,
    getStaticPaths: getStaticPaths$7,
    url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$2;
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data } = await response.json();
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`${data.map((industry) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
      ${maybeRenderHead($$result3)}<a${addAttribute(`${industry.attributes.slug}`, "href")}> ${industry.attributes.title} </a>
      ` })}`)}` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industries/index.astro");

const $$file$a = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industries/index.astro";
const $$url$a = "/industries";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$a,
    url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
async function getStaticPaths$6() {
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((industryTag) => {
      return {
        params: { slug: industryTag.attributes.slug },
        props: { industryTag }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$$6;
  const { industryTag } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead($$result2)}<a${addAttribute(`/tag/${industryTag.attributes.slug}`, "href")}> ${industryTag.attributes.title} </a>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industries/[...tag].astro");

const $$file$9 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industries/[...tag].astro";
const $$url$9 = "/industries/[...tag]";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$6,
    file: $$file$9,
    getStaticPaths: getStaticPaths$6,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Tabs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Tabs;
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-5xl">
      
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" name="tabs" class="block w-full rounded-md border border-base9 focus:border-brand9 focus:ring-brand9">
        
          <!-- <option selected="">Industry</option>
        
          <option>Role</option>
        
          <option>Learning Lifecycle</option>
        
          <option>Learning Paths</option> -->
        

          <option selected="">A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
          <option>G</option>
          <option>H</option>
          <option>I</option>
          <option>J</option>
          <option>K</option>
          <option>L</option>
          <option>M</option>
          <option>N</option>
          <option>O</option>
          <option>P</option>
          <option>Q</option>
          <option>R</option>
          <option>S</option>
          <option>T</option>
          <option>U</option>
          <option>V</option>
          <option>W</option>
          <option>X</option>
          <option>Y</option>
          <option>Z</option>


      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="isolate flex divide-x divide-base4 rounded-lg border outline-1 shadow-xl shadow-base4" aria-label="Tabs">
        

        <a href="#" class="text-gray-900 rounded-l-lg  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state:on="Current" x-state:off="Default" aria-current="page" x-state-description="Current: &quot;text-gray-900&quot;, Default: &quot;text-base7 hover:text-base9&quot;">
          <span>A</span>
          <span aria-hidden="true" class="bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>B</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>C</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>D</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>E</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>E</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>F</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>G</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>H</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>I</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>I</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>J</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>K</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>L</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>M</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>N</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>O</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>P</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>Q</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>R</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>S</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>T</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>U</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>V</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>W</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>X</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>Y</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>
      
        <a href="#" class="text-base9 hover:text-base12 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-2 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
          <span>Z</span>
          <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
        </a>


          <!-- <a href="#" class="text-gray-900 rounded-l-lg  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state:on="Current" x-state:off="Default" aria-current="page" x-state-description="Current: &quot;text-gray-900&quot;, Default: &quot;text-base7 hover:text-base9&quot;">
            <span>Industry</span>
            <span aria-hidden="true" class="bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a>
        
          <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
            <span>Role</span>
            <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a>
        
          <a href="#" class="text-base9 hover:text-base12 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
            <span>Learning Lifecycle</span>
            <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a>
        
          <a href="#" class="text-base9 hover:text-base12 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-base2 focus:z-10" x-state-description="undefined: &quot;text-gray-900&quot;, undefined: &quot;text-base7 hover:text-base9&quot;">
            <span>Learning Paths</span>
            <span aria-hidden="true" class="bg-base3 group-hover:bg-brand9 absolute inset-x-0 bottom-1 mx-1.5 rounded-full h-0.75"></span>
          </a> -->
        
      </nav>
    </div>
  </div>

    </div>
  </div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/Tabs.astro");

const $$Astro$8 = createAstro();
async function getStaticPaths$5() {
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((industries) => {
      return {
        params: { slug: industries.attributes.slug },
        props: { industries }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$$5;
  const { industries } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "index" }, { "default": ($$result2) => renderTemplate`${industries.attributes.title}${maybeRenderHead($$result2)}<div class="flex flex-col gap-0 mb-8">
    ${renderComponent($$result2, "Tabs2", $$Tabs2, {})}
    ${renderComponent($$result2, "Tabs", $$Tabs, {})}</div>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industries/[...slug].astro");

const $$file$8 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industries/[...slug].astro";
const $$url$8 = "/industries/[...slug]";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$5,
    file: $$file$8,
    getStaticPaths: getStaticPaths$5,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$Searchtest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Searchtest;
  return renderTemplate(_a || (_a = __template([`<!-- <link href="/_pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/_pagefind/pagefind-ui.js" type="text/javascript"><\/script>

<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search" });
            bundlePath: "/.vercel/output/static/_pagefind/"
    });
<\/script> -->`])));
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/searchtest.astro");

const $$file$7 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/searchtest.astro";
const $$url$7 = "/searchtest";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Searchtest,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$1;
  const response = await fetch("http://127.0.0.1:1337/api/learning-lifecycles?populate=*");
  const { data } = await response.json();
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "index" }, { "default": ($$result2) => renderTemplate`${data.map((learningLifecycle) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
        ${maybeRenderHead($$result3)}<a${addAttribute(`/${learningLifecycle.attributes.slug}`, "href")}> ${learningLifecycle.attributes.title} </a>
        ` })}`)}<section class="">
    <div class="">
      <!-- <h2 class="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading font-heading tracking-px-n leading-none">Learning Lifecycle</h2> -->
      <!-- <p class="mb-16 text-lg text-base9 text-center font-medium leading-normal md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum vitae vel purus.</p> -->
      ${renderComponent($$result2, "Tabs2", $$Tabs2, {})}
      <div class="md:max-w-6xl mx-auto">
        <div class="grid grid-cols-3 gap-6 mb-12">
  
          ${data.map((cycle) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
                <div class="infor-lifecycle-card relative overflow-hidden w-full flex flex-col p-8 items-start gap-8 space-between bg-brand12 text-base3 rounded-xl hover:shadow-blue7 transition-shadow hover:transition-shadow ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" width="11" height="14" fill="currentColor" viewBox="0 0 11 14">
    <path d="M2.38 4.22c.349 0 .665-.083.95-.251.285-.172.512-.4.68-.686.172-.289.258-.607.258-.955s-.086-.664-.258-.95A1.89 1.89 0 0 0 3.33.7a1.803 1.803 0 0 0-.95-.258A1.8 1.8 0 0 0 1.432.7a1.937 1.937 0 0 0-.686.68 1.835 1.835 0 0 0-.252.95c0 .347.084.665.252.954.172.285.4.514.686.686.285.168.601.252.949.252Zm-.474.218c0 .585.18 1.082.54 1.488.359.402.888.699 1.587.89l2.947.832c.973.278 1.46.77 1.46 1.477v.41h.943v-.41c0-.582-.18-1.074-.54-1.477-.355-.406-.882-.705-1.581-.896L4.314 5.92c-.976-.274-1.464-.768-1.464-1.482v-.405h-.944v.404Zm7.008 4.91a1.84 1.84 0 0 0-.955.257 1.922 1.922 0 0 0-.686.686 1.836 1.836 0 0 0-.252.95c0 .347.084.663.252.949.172.285.4.511.686.68.289.167.607.251.955.251s.664-.084.95-.252a1.89 1.89 0 0 0 .679-.68 1.8 1.8 0 0 0 .258-.949c0-.347-.086-.664-.258-.949a1.876 1.876 0 0 0-.68-.686 1.803 1.803 0 0 0-.949-.257Zm0 .92c.27 0 .498.093.686.28a.94.94 0 0 1 .28.692c0 .27-.093.496-.28.68a.933.933 0 0 1-.686.281.94.94 0 0 1-.691-.281.914.914 0 0 1-.282-.68.94.94 0 0 1 .282-.691.94.94 0 0 1 .691-.281Z"></path>
  </svg>
  <div>
  <p class="m-0 font-semibold text-xs mb-3">Lifecycle level:</p>
                  <h2 class="font-black text-2xl m-0 uppercase">${cycle.attributes.title}</h2>
  <p class="m-0 font-semibold text-xs">X Learning Paths</p>
                </div>
                  <!-- <p class="m-0">{cycle.attributes.description}</p> -->
                  </div>
              ` })}`)}
  
      </div>
    </div>
  </div></section>
  ` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/lifecycle/index.astro");

const $$file$6 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/lifecycle/index.astro";
const $$url$6 = "/lifecycle";

const _page10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
async function getStaticPaths$4() {
  const response = await fetch("http://127.0.0.1:1337/api/learning-lifecycle?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((learningLifecycleTag) => {
      return {
        params: { slug: learningLifecycleTag.attributes.slug },
        props: { learningLifecycleTag }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$$4;
  const { learningLifecycleTag } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead($$result2)}<a${addAttribute(`/tag/${learningLifecycleTag.attributes.slug}`, "href")}> ${learningLifecycleTag.attributes.title} </a>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/lifecycle/[...tag].astro");

const $$file$5 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/lifecycle/[...tag].astro";
const $$url$5 = "/lifecycle/[...tag]";

const _page11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$4,
    file: $$file$5,
    getStaticPaths: getStaticPaths$4,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
async function getStaticPaths$3() {
  const response = await fetch("http://127.0.0.1:1337/api/learning-lifecycles?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((learningLifecycle) => {
      return {
        params: { slug: learningLifecycle.attributes.slug },
        props: { learningLifecycle }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$$3;
  const { learningLifecycle } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead($$result2)}<a${addAttribute(`/${learningLifecycle.attributes.slug}`, "href")}> ${learningLifecycle.attributes.title} </a>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/lifecycle/[...slug].astro");

const $$file$4 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/lifecycle/[...slug].astro";
const $$url$4 = "/lifecycle/[...slug]";

const _page12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$3,
    file: $$file$4,
    getStaticPaths: getStaticPaths$3,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await fetch("http://127.0.0.1:1337/api/learning-roles?populate=*");
  const { data } = await response.json();
  console.log(data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`${data.map((learningRole) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
      ${maybeRenderHead($$result3)}<a${addAttribute(`/${learningRole.attributes.slug}`, "href")}> ${learningRole.attributes.title} </a>
      ` })}`)}` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/index.astro");

const $$file$3 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/index.astro";
const $$url$3 = "/roles";

const _page13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
async function getStaticPaths$2() {
  const response = await fetch("http://127.0.0.1:1337/api/learning-roles?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((learningRoleTag) => {
      return {
        params: { slug: learningRoleTag.attributes.slug },
        props: { learningRoleTag }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$2;
  const { learningRoleTag } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead($$result2)}<a${addAttribute(`/tag/${learningRoleTag.attributes.slug}`, "href")}> ${learningRoleTag.attributes.title} </a>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/[...tag].astro");

const $$file$2 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/[...tag].astro";
const $$url$2 = "/roles/[...tag]";

const _page14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$2,
    file: $$file$2,
    getStaticPaths: getStaticPaths$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
async function getStaticPaths$1() {
  const response = await fetch("http://127.0.0.1:1337/api/learning-roles?populate=*");
  const { data: data2 } = await response.json();
  if (data2 && Array.isArray(data2)) {
    return data2.map((learningRole) => {
      return {
        params: { slug: learningRole.attributes.slug },
        props: { learningRole }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`



${maybeRenderHead($$result2)}<ul class="grid grid-cols-4">
  ${data.map((role) => renderTemplate`<li><a${addAttribute(`${industry}/${role.attributes.slug}`, "href")}>${`${role.attributes.title}`}</a></li>`)}

</ul>

` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/[...slug].astro");

const $$file$1 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/[...slug].astro";
const $$url$1 = "/roles/[...slug]";

const _page15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data } = await response.json();
  if (data && Array.isArray(data)) {
    return data.map((industries) => {
      return {
        params: { slug: industries.attributes.slug },
        props: { industries }
      };
    });
  } else {
    console.error("No data found");
    return [];
  }
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { industries } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "test" }, { "default": ($$result2) => renderTemplate`
${maybeRenderHead($$result2)}<a${addAttribute(`/${industries.attributes.slug}/${learningRole.attributes.slug}`, "href")}> ${industries.attributes.title} </a>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/[...industry].astro");

const $$file = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/roles/[...industry].astro";
const $$url = "/roles/[...industry]";

const _page16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i, _page10 as j, _page11 as k, _page12 as l, _page13 as m, _page14 as n, _page15 as o, _page16 as p };
