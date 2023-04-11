/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderHead, f as renderSlot, F as Fragment } from '../astro.c7e3c792.mjs';
import 'html-escaper';
import { join } from 'node:path';
/* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$l = createAstro();
const $$HeadScripts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$HeadScripts;
  return renderTemplate(_a || (_a = __template(["<!-- Google Tag Manager --><script client:load>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PVDLBXZ');<\/script>\n<!-- End Google Tag Manager -->"])));
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/HeadScripts.astro");

const $$Astro$k = createAstro();
const $$AfterBodyOpen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$AfterBodyOpen;
  return renderTemplate`<!-- Google Tag Manager (noscript) -->${maybeRenderHead($$result)}<noscript><iframe title="Google Analytics" src="https://www.googletagmanager.com/ns.html?id=GTM-PVDLBXZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/AfterBodyOpen.astro");

const $$Astro$j = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Search;
  Astro2.props;
  const bundlePath = join("/", "_pagefind/");
  return renderTemplate`${maybeRenderHead($$result)}<div class="infor-searchbar h-full" data-pagefind-ui=""${addAttribute(bundlePath, "data-bundle-path")}></div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/atoms/Search.astro");

const $$Astro$i = createAstro();
const $$AsideRadioElements = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
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
    <div${addAttribute(tightGap === true ? `mt-2px flex flex-wrap justify-items-stretch w-auto gap-2px` : `mt-4 flex flex-wrap justify-items-stretch w-auto gap-2`, "class")} ">

        ${industry.map(
    (industry2) => renderTemplate`<!-- Option --><div${addAttribute(`{ option: '${industry2}' }`, "x-data")} @click="select(option)" @keydown.enter.stop.prevent="select(option)" @keydown.space.stop.prevent="select(option)" :aria-checked="isSelected(option)" :tabindex="hasRovingTabindex(option, $el) ? 0 : -1" :aria-labelledby="$id('radio-option-label')" :aria-describedby="$id('radio-option-description')" x-id="['radio-option-label', 'radio-option-description']" role="radio" :class="{ 'bg-brand9 hover:bg-brand9 border-brand9 text-base1 focus:bg-brand9 active:bg-brand9': isSelected(option) }" class="flex cursor-pointer rounded-lg border border-base3 bg-base3  px-3 py-2 items-center text-xs font-semibold flex-grow group">
            <!-- Checked Indicator -->
                <span${addAttribute(tightGap === true ? `hidden visibility-none aria-hidden="true"` : `inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-3 border-base1 group-hover:border-base1 bg-base1 group-hover:bg-brand9 ring-1 ring-base2 group-hover:ring-base2 :class="{ 'bg-brand9 hover:focus:bg-brand9': isSelected(option) }"`, "class")} ">
                    <span class="inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border-3 border-base1 group-hover:border-base1 bg-base1 group-hover:bg-brand9 ring-1 ring-base2 group-hover:ring-base2" :class="{ 'bg-brand9 hover:focus:bg-brand9': isSelected(option) }" aria-hidden="true"></span>
                </span>

            <span${addAttribute(tightGap === true ? `ml-0 mr-auto` : `ml-2`, "class")} ">
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

const $$Astro$h = createAstro();
const $$AsideIndustries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$AsideIndustries;
  const industry = ["Aerospace & Defense", "Automotive", "Distribution", "Fashion", "Food & Beverage", "Healthcare", "Hospitality", "Manufacturing"];
  return renderTemplate`${renderComponent($$result, "AsideRadioElements", $$AsideRadioElements, { "industry": industry })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/AsideIndustries.astro");

const $$Astro$g = createAstro();
const $$AsideLearningLifecycle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$AsideLearningLifecycle;
  const industry = ["Explore", "Prepare", "Execute", "Sustain", "Elevate"];
  return renderTemplate`${renderComponent($$result, "AsideRadioElements", $$AsideRadioElements, { "industry": industry })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/AsideLearningLifecycle.astro");

const $$Astro$f = createAstro();
const $$AsideRoles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$AsideRoles;
  const industry = ["A Auxiliary", "A Class Lineman", "A-Operator", "A/C Tech (Air Conditioning Technician)", "A/C Technician (Air Conditioning Technician)", "Aadc Plans Staff Officer", "Abalone Fisherman", "Abalone Processor", "Abatement Worker", "Abattoir Supervisor", "Able Bodied Seaman (AB Seaman)", "Able Bodied Tankerman (AB Tankerman)", "Able Bodied Watchman (AB Watchman)", "Able Seaman", "Abnormal Psychology Teacher", "Abrasive and Polished Products Supervisor", "Abrasive Band Winder", "Abrasive Coating Machine Operator", "Abrasive Coating Machine Set Up Operator", "Abrasive Grader", "Abrasive Grader Helper", "Abrasive Grinder", "Abrasive Mixer", "Abrasive Mixer Helper", "Abrasive Sawyer", "Abrasive Wheel Molder", "Abrasive Worker", "Abrasives Sales Representative", "Absorber Operator", "Absorption and Adsorption Engineer", "Absorption Operator", "Absorption Plant Operator", "Abstract Clerk", "Abstract Searcher", "Abstract Writer", "Abstracter", "AC/DC Motor Repair Person", "AC/DC Rewinder", "AC/DC Winder", "Academic Advisement Director", "Academic Adviser", "Academic Advising Director", "Academic Advisor", "Academic Affairs Dean", "Academic Affairs Director", "Academic Affairs Vice President", "Academic Computing Director", "Academic Coordinator", "Academic Counselor", "Academic Dean"];
  const tightGap = true;
  return renderTemplate`${renderComponent($$result, "AsideRadioElements", $$AsideRadioElements, { "tightGap": tightGap, "industry": industry })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/system/AsideRoles.astro");

const $$Astro$e = createAstro();
const $$AsideFilter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$AsideFilter;
  return renderTemplate`<!-- Static sidebar for desktop -->${maybeRenderHead($$result)}<div class="lg:fixed lg:z-50 lg:flex lg:w-2/6 lg:flex-col left-8 top-8 h-auto bottom-8">
                <!-- Sidebar component -->
                <div class="flex grow flex-col gap-y-2 overflow-y-auto rounded-2xl bg-base1 border border-base4 shadow-2xl p-6 overflow-y-hidden relative">
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
                              ${renderComponent($$result, "AsideRoles", $$AsideRoles, {})}
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
                        <button class="bg-brand9 hover:bg-brand10 active:bg-brand-11 text-base1 px-3 py-2 rounded-lg font-semibold text-sm w-full">Pull Learning Paths based on your selection</button>
                      </div>
                  </nav>
                </div>
              </div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/AsideFilter.astro");

const $$Astro$d = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
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
  <body class="bg-base1 overflow-x-hidden w-vw">
    ${renderComponent($$result, "AfterBodyOpen", $$AfterBodyOpen, {})}
    <div>
      ${renderComponent($$result, "AsideFilter", $$AsideFilter, {})}

      <div class="bg-brand1">
        <div class="sticky bg-brand9 top-0 z-40 pl-2/6 flex top-0 bottom-0 p-8 pb-0 items-center justify-right">
          <form class="w-full p-0 right-0 left-auto m-auto">
            <label for="voice-search" class="sr-only">Search Learning Paths at Infor...</label>
            <div class="relative w-full bg-brand9 rounded-lg p-0 mr-0 ml-auto rounded-lg w-full">
              ${renderComponent($$result, "Search", $$Search, { "class": "w-full bg-transparent", "placeholder": "Search Learning Paths, Industry Accredidations, Courses around your role...", "required": true })}
              <button type="button" class="absolute inset-y-0 right-0 flex items-center">
              </button>
            </div>
          </form>
        </div>

        <main class="ml-auto mr-0">
          <div class="px-4 sm:px-6 lg:px-0 lg:pl-0">
<!-- infor content 2 -->



<!-- infor content 3 -->
            <!-- Infor content -->
            ${renderSlot($$result, $$slots["default"])}
          </div>
        </main>
      </div>
    </div>
  </body></html>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/layouts/Layout.astro");

const $$Astro$c = createAstro();
const $$Card1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Card1;
  const { image, title, subtitle, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="w-full group p-3.5">
    <a${addAttribute(`${link}`, "href")}>
      <div class="relative p-6 h-full bg-white border hover:border-base6 rounded-xl shadow-sm transition-shadow hover:shadow-2xl">
        <img class="absolute left-0 top-0" src="/bg-svgs/gradient.svg">
        <div class="relative z-10 flex flex-col justify-between h-full">
          <div class="mb-24 flex flex-col flex-wrap">
            <div class="bg-brand9 shadow-inner shadow-xl  border-6 border-brand10 w-20 h-20 ml-0 mb-2 mr-auto items-center justify-center flex flex-shrink-1 rounded-full">
                <img${addAttribute(`${image}`, "src")} class="self-center m-6 flex align-center items-center max-h-10 max-w-10 m-auto object-fill filter-drop-shadow filter-invert"></div>
            <h3 class="mb-2 text-lg font-bold font-heading leading-snug">${title}</h3>
            <p class="text-sm text-base8 font-medium">
              <span>Industry</span>
              <span class="px-2">•</span>
              <span>Learning Paths</span>
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/Card1.astro");

const $$Astro$b = createAstro();
const $$SectionOne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SectionOne;
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data } = await response.json();
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="py-24 pl-2/6 bg-brand1overflow-hidden">
    <div class="container pl-16 pr-4 mx-auto">
      <h2 class="mb-5 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading font-heading tracking-px-n leading-none">Heads of Industry</h2>
      <p class="mb-16 text-lg text-base9 text-center font-medium leading-normal md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condimentum vitae vel purus.</p>
      <div class="md:max-w-6xl mx-auto">
        <div class="flex flex-wrap mb-10">
            ${data.map((post2) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
          <div class="w-full max-w-1/3">
            ${renderComponent($$result2, "Card1", $$Card1, { "link": `${post2.attributes.cardImage.data.attributes.url}`, "title": `${post2.attributes.title}`, "image": `${post2.attributes.cardImage.data.attributes.url}` })}
          </div>
    ` })}`)} 
        </div>
        <a class="flex justify-center items-center text-center font-semibold text-brand10 hover:text-brand9 leading-normal" href="#">
          <span class="mr-2.5">See all 600+ Learning Paths</span>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.83333 3.33337L14.5 8.00004M14.5 8.00004L9.83333 12.6667M14.5 8.00004L2.5 8.00004" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/sections/SectionOne.astro");

const $$Astro$a = createAstro();
const $$SectionTwo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SectionTwo;
  return renderTemplate`${maybeRenderHead($$result)}<section class="pt-24 pb-36 pl-2/6 bg-brand3 overflow-hidden">
    <div class="container pl-12 pr-4 mx-auto">
      <h2 class="mb-7 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Let’s see how it works</h2>
      <p class="mb-20 font-sans text-lg text-gray-900 text-center md:max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elemen tum.</p>
      <div class="relative bg-no-repeat bg-center rounded-2xl text-brand1 bg-cover bg-fixed bg-brand11 overflow-hidden rounded-4xl" style="height: 648px; 
      
      background-color: rgb(24, 24, 27);
      background-image: radial-gradient(at 0% 0%, rgb(30, 58, 138) 0, transparent 46%), radial-gradient(at 76% 11%, rgb(30, 58, 138) 0, transparent 61%), radial-gradient(at 54% 32%, rgb(30, 58, 138) 0, transparent 45%), radial-gradient(at 34% 7%, rgb(30, 58, 138) 0, transparent 20%), radial-gradient(at 4% 21%, rgb(15, 23, 42) 0, transparent 100%), radial-gradient(at 56% 28%, rgb(30, 58, 138) 0, transparent 80%);
    ">
        <!-- <div class="relative bg-no-repeat bg-center rounded-2xl bg-cover bg-fixed overflow-hidden rounded-4xl" style="height: 648px; background-image: url('https://res.cloudinary.com/dzt7kq3la/image/upload/v1680515621/signal_card_29_97834bfca6.jpg');"> -->
        <div class="absolute top-0 left-0 p-14 md:p-20 md:pb-0 overflow-y-auto h-full">
          <div class="flex flex-wrap">
            <div class="w-full">
              <div class="flex flex-wrap -m-2 leading-6 cursor-default">
                <div class="p-1 w-full">
                  <div class="flex flex-wrap -m-6 cursor-default">
                    <div class="p-6 w-auto">
                      <div class="relative mb-3 w-10 h-10 text-lg font-bold leading-7 text-white bg-indigo-600 rounded-full">
                        <img class="block absolute top-0 left-0 max-w-full rounded-lg h-auto align-middle" src="shape-icons/gradient.svg" alt="" data-config-id="auto-img-2-2">
                        <span class="absolute top-1/2 left-1/2" data-config-id="auto-txt-2-2" style="transform: matrix(1, 0, 0, 1, -3.5, -13.5);">1</span>
                      </div>
                      <img class="block relative left-3 max-w-full h-auto align-middle" src="shape-icons/line.svg" alt="" data-config-id="auto-img-3-2">
                    </div>
                    <div class="flex-1 p-6">
                      <div class="md:max-w-xs">
                        <h3 class="mx-0 mt-0 mb-3 text-2xl font-semibold leading-snug" data-config-id="auto-txt-3-2">
                          Explore a Path
                        </h3>
                        <p class="m-0 font-medium leading-relaxed text-gray-700" data-config-id="auto-txt-4-2">
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-1 w-full">
                  <div class="flex flex-wrap -m-6 cursor-default">
                    <div class="p-6 w-auto">
                      <div class="relative -left-1 mb-3 w-10 h-10 text-lg font-bold leading-7 text-white bg-indigo-600 rounded-full">
                        <img class="block absolute top-0 left-0 rounded-lg max-w-full h-auto align-middle" src="shape-icons/gradient.svg" alt="" data-config-id="auto-img-4-2">
                        <span class="absolute top-1/2 left-1/2" data-config-id="auto-txt-5-2" style="transform: matrix(1, 0, 0, 1, -5, -13.5);">2</span>
                      </div>
                      <img class="block relative left-3 max-w-full h-auto align-middle" src="shape-icons/line2.svg" alt="" data-config-id="auto-img-5-2">
                    </div>
                    <div class="flex-1 p-6">
                      <div class="md:max-w-xs">
                        <h3 class="mx-0 mt-0 mb-3 text-2xl font-semibold leading-snug" data-config-id="auto-txt-6-2">
                          Register to start your personal & professional advancement within Infor
                        </h3>
                        <p class="m-0 font-medium leading-relaxed text-gray-700" data-config-id="auto-txt-7-2">
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-1 w-full">
                  <div class="flex flex-wrap -m-6 cursor-default">
                    <div class="p-6 w-auto">
                      <div class="relative left-5 mb-3 w-10 h-10 text-lg font-bold leading-7 rounded-lgtext-white bg-indigo-600 rounded-full">
                        <img class="block absolute top-0 left-0 max-w-full h-auto rounded-lg align-middle" src="shape-icons/gradient.svg" alt="" data-config-id="auto-img-6-2">
                        <span class="absolute top-1/2 left-1/2" data-config-id="auto-txt-8-2" style="transform: matrix(1, 0, 0, 1, -5, -13.5);">3</span>
                      </div>
                    </div>
                    <div class="flex-1 p-6">
                      <div class="md:max-w-xs">
                        <h3 class="mx-0 mt-0 mb-3 text-2xl font-semibold leading-snug" data-config-id="auto-txt-9-2">
                          Continue your journey
                        </h3>
                        <p class="m-0 font-medium leading-relaxed text-gray-700" data-config-id="auto-txt-10-2">
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/sections/SectionTwo.astro");

const $$Astro$9 = createAstro();
const $$SectionNine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SectionNine;
  return renderTemplate`${maybeRenderHead($$result)}<div class="relative max-w-vw">
  <div class="overflow-visible relative" style="z-index: 2;">
    <div class="pt-0 mx-auto w-64 xl:flex xl:w-auto xl:justify-center sm:w-64 sm:pt-0">
      <div class="grid justify-items-center w-64 font-sans opacity-100 xl:w-64 xl:justify-items-stretch xl:gap-y-0 sm:w-64 sm:gap-y-0" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; opacity: 1; gap: 0px 20px; grid-template: &quot;.&quot; / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-auto-columns: 1fr;">
        <img src="shape-icons/61c9dfabd1ade58aabcb3e3d_-%20Sphere-3.png" loading="lazy" alt="" class="inline-block absolute w-24 max-w-full align-middle xl:w-32 sm:left-1/4" style="inset: auto auto 2% 8%; z-index: 3;">
      </div>
    </div>
  </div>
  <div class="overflow-visible pt-12" style="z-index: 2;">
    <img src="shape-icons/61c9dfabd1ade55fa2cb3e39_-%20Sphere.png" loading="lazy" alt="" class="inline-block absolute w-16 max-w-full xl:w-20 sm:w-24" style="top: -10px; right: 30%; z-index: 3;">
  </div>
  <img src="shape-icons/61c9dfaad1ade51453cb3e30_-%20Sphere%20BO.png" loading="lazy" alt="" class="inline-block absolute w-20 max-w-full xl:w-24 sm:w-24" style="inset: 470px 370px auto auto;"><img src="shape-icons/61c9dfabd1ade58aabcb3e3d_-%20Sphere-3.png" loading="lazy" alt="" class="absolute w-32 max-w-full" style="inset: 240px -100px auto auto; z-index: 3;"><img src="shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-32 max-w-full" style="inset: 530px auto auto -70px;"><img src="shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-24 max-w-full sm:w-32" style="inset: 620px auto auto -30px;"><img src="shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-24 max-w-full xl:w-24" style="inset: 1130px -5% auto auto;"><img src="shape-icons/61c9dfabd1ade52175cb3e3b_-%20Sphere-2.png" loading="lazy" alt="" class="inline-block absolute w-20 max-w-full" style="inset: 700px 78% auto auto; z-index: 3;"><img src="shape-icons/61c9dfaad1ade589f7cb3e32_-%20Sphere%20SO.png" loading="lazy" alt="" class="inline-block absolute w-10 max-w-full" style="inset: 700px 0px auto 22%; z-index: 3;"><img src="shape-icons/61c9dfaad1ade589f7cb3e32_-%20Sphere%20SO.png" loading="lazy" alt="" class="inline-block absolute w-10 max-w-full" style="inset: 1140px 0px auto 86%; z-index: 3;"><img src="shape-icons/61c9dfaad1ade589f7cb3e32_-%20Sphere%20SO.png" loading="lazy" alt="" class="inline-block absolute w-10 max-w-full align-middle" style="inset: 010px 0px auto 75%;"><img src="shape-icons/61c9dfabd1ade55fa2cb3e39_-%20Sphere.png" loading="lazy" alt="" class="inline-block absolute w-8 max-w-full sm:w-10" style="top: 660px; right: 3%; z-index: 3;"><img src="shape-icons/61c9dfabd1ade55fa2cb3e39_-%20Sphere.png" loading="lazy" alt="" class="inline-block absolute w-8 max-w-full align-middle xl:w-10" style="top: 500px; right: 7%;">
</div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/sections/SectionNine.astro");

const $$Astro$8 = createAstro();
const $$Card2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Card2;
  return renderTemplate`<!-- CARD HOUSING -->${maybeRenderHead($$result)}<div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <!-- CARD -->
          <div class="relative p-6  bg-white border hover:border-base6 rounded-xl shadow-sm transition-shadow hover:shadow-2xl">
            <a class="inline-block absolute top-0 right-0 m-6 text-base11 hover:text-base11" href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
            <div class="inline-flex items-center justify-center w-32 h-32 mb-6 rounded-lg" style="
            filter: drop-shadow(7px 7px 7px #cccccc);
            -webkit-filter: drop-shadow(7px 7px 7px #cccccc);">
<img class="w-32 h-32" src="/infor__cardIcon_1.svg">
            </div>
            <h4 class="text-xl text-base12 font-bold mb-3">In-flight Management</h4>
            <p class="text-base11 mb-5">This learning path is for Project Managers who utilize various Infor Deployment Method (IDM) part of their responsibilities. As part of Project Management Foundations, completion of this path is expected within 30 days of your start date.</p>
            <div class="flex items-center mb-6">
              <div class="flex mr-2">
                <img class="w-8 h-8 rounded-full object-cover" src="avatars/tovuti_avatar_4.jpg" alt="">
                <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="avatars/tovuti_avatar_8.jpg" alt="">
                <img class="w-8 h-8 -ml-2 rounded-full object-cover" src="avatars/tovuti_avatar_9.jpg" alt="">
                <div class="flex items-center justify-center w-8 h-8 -ml-2 bg-brand9 rounded-full">
                  <div class="flex items-center justify-center align-center w-7 h-7 text-xs text-base1 font-semibold rounded-full pb-1 leading-auto">+2</div>
                </div>
              </div>
              <span class="text-xs text-base9">Join 1,500+ of your peers</span>
            </div>
            <a class="block py-4 px-12 text-center text-white font-bold text-sm leading-6 bg-blue10 hover:bg-blue9 rounded-xl transition duration-200" href="#">Explore this Learning Path</a>
          </div>
          <!-- END CARD -->
        </div>
        <!-- END CARD HOUSING -->`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/Card2.astro");

const $$Astro$7 = createAstro();
const $$Breadcrumbs1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Breadcrumbs1;
  return renderTemplate`${maybeRenderHead($$result)}<section>
    <div class="bg-base2 border mb-8 rounded-lg">
      <div class="container px-8 text-xs mx-auto">
        <div class="flex flex-wrap h-16 py-4 items-center">
          <a class="inline-block text-xs text-brand9 font-bold" href="#">Home</a>
          <span class="mx-3">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.453338 1.05338L0.453338 5.20671L0.453339 8.94671C0.453339 9.58671 1.22667 9.90671 1.68001 9.45338L5.13334 6.00005C5.68667 5.44671 5.68667 4.54671 5.13334 3.99338L3.82 2.68005L1.68001 0.540046C1.22667 0.093379 0.453338 0.41338 0.453338 1.05338Z" fill="currentColor"></path>
            </svg>
          </span>
          <a class="inline-block text-xs  text-brand9 font-bold" href="#">Catalogue</a>
          <span class="mx-3">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.453338 1.05338L0.453338 5.20671L0.453339 8.94671C0.453339 9.58671 1.22667 9.90671 1.68001 9.45338L5.13334 6.00005C5.68667 5.44671 5.68667 4.54671 5.13334 3.99338L3.82 2.68005L1.68001 0.540046C1.22667 0.093379 0.453338 0.41338 0.453338 1.05338Z" fill="currentColor"></path>
            </svg>
          </span>
          <a class="inline-block text-xs text-green-500 font-bold" href="#">Product</a>
        </div>
      </div>
    </div>
  </section>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/organisms/Breadcrumbs1.astro");

const $$Astro$6 = createAstro();
const $$SectionTen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SectionTen;
  return renderTemplate`${maybeRenderHead($$result)}<section class="w-full pl-2/6">
    <div class="container w-full pl-16 px-4 mx-auto">
        ${renderComponent($$result, "Breadcrumbs1", $$Breadcrumbs1, {})}
      <!-- CARD WRAPPER -->
      <div class="flex flex-wrap -mx-4 -mb-6">
        ${renderComponent($$result, "Card2", $$Card2, {})}
        ${renderComponent($$result, "Card2", $$Card2, {})}
        ${renderComponent($$result, "Card2", $$Card2, {})}
        ${renderComponent($$result, "Card2", $$Card2, {})}
        ${renderComponent($$result, "Card2", $$Card2, {})}
        ${renderComponent($$result, "Card2", $$Card2, {})}
      </div>
      <!-- END CARD WRAPPER -->
    </div>
  </section>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/sections/SectionTen.astro");

const $$Astro$5 = createAstro();
const $$Section11 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Section11;
  return renderTemplate`${maybeRenderHead($$result)}<section class="relative py-24 md:pt-32 pr-4 pl-2/6 w-full bg-base9" style="
background-color: rgb(185, 28, 28);
background-image: radial-gradient(at 7% 72%, rgb(224, 231, 255) 0, transparent 92%), radial-gradient(at 53% 8%, rgb(236, 252, 203) 0, transparent 60%), radial-gradient(at 95% 100%, rgb(30, 64, 175) 0, transparent 8%), radial-gradient(at 81% 56%, rgb(163, 230, 53) 0, transparent 69%), radial-gradient(at 16% 71%, rgb(132, 204, 22) 0, transparent 33%), radial-gradient(at 44% 87%, rgb(39, 39, 42) 0, transparent 17%);
">
    <div class="container mx-auto relative pl-16 pr-4">
      <img class="hidden md:block absolute bottom-0 left-0 mb-52 lg:mb-12 w-full" src="/half-circles-with-logo_onDark.svg" alt="">
      <div class="relative">
        <div class="flex items-center mb-24 sm:mb-40">
          <span class="font-heading text-xl text-white">01</span>
          <div class="mx-4 rounded-full bg-gray-200 h-1 w-1"></div>
          <span class="font-heading text-xl text-white">Introduction</span>
        </div>
        <div class="text-center mb-32">
          <h1 class="font-heading text-5xl sm:text-6xl md:text-7xl text-base12 font-semibold">How it works?</h1>
        </div>
        <div class="flex flex-wrap -mx-4 mb-24 md:mb-52">
          <div class="w-full md:w-1/2 2xl:w-1/4 px-4 mb-16 2xl:mb-0">
            <div class="max-w-xs mx-auto pt-8 pb-14 px-8 bg-white border hover:border-base6 rounded-xl hover:transition-shadow hover:shadow-sm  shadow-2xl bg-white border hover:border-base6 rounded-xl hover:transition-shadow hover:shadow-sm  shadow-2xl">
              <span class="text-sm text-base9">Course 1</span>
              <h4 class="text-3xl mt-1 mb-8">Infor: Introduction to IPON 2.0</h4>
              <div>
                <span class="font-light text-base9">Start anytime!</span>
                <a class="inline-block font-light text-base9 hover:text-gray-400" href="#">Click here</a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 2xl:w-1/4 px-4 2xl:mt-52 mb-16 2xl:mb-0">
            <div class="max-w-xs mx-auto pt-8 pb-14 px-8 bg-white border hover:border-base6 rounded-xl hover:transition-shadow hover:shadow-sm  shadow-2xl">
              <span class="text-sm text-base9">Event 1</span>
              <h4 class="text-3xl mt-1 mb-8">Register to start your path to certification</h4>
              <div>
                <span class="font-light text-base9">Get started.</span>
                <a class="inline-block font-light text-base9 hover:text-gray-400" href="#">Click here</a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 2xl:w-1/4 px-4 2xl:mt-52 mb-16 md:mb-0">
            <div class="max-w-xs mx-auto pt-8 pb-14 px-8  bg-white border hover:border-base6 rounded-xl hover:transition-shadow hover:shadow-sm  shadow-2xl">
              <span class="text-sm text-base9">Course 2</span>
              <h4 class="text-3xl mt-1 mb-8">Find your unique style</h4>
              <div>
                <span class="font-light text-base9">Get started.</span>
                <a class="inline-block font-light text-base9 hover:text-gray-400" href="#">Click here</a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 2xl:w-1/4 px-4">
            <div class="max-w-xs mx-auto pt-16 pb-8 bg-red11 border border-red10 hover:border-red10 px-6 rounded-xl hover:transition-shadow hover:shadow-sm  shadow-2xl">
              <span class="text-sm text-base3">Certification</span>
              <h4 class="text-3xl text-base1 mt-1 mb-8">Build your career!</h4>
              <div>
                <span class="font-light text-base12">Get started.</span>
                <a class="inline-block font-light text-red1 hover:text-red-3" href="#">Click here</a>
              </div>
            </div>
          </div>
        </div>
        <img class="block mx-auto md:hidden" src="/half-circles-with-logo_onDark.svg" alt="">
        <div class="sm:flex"><a class="inline-block w-full sm:w-auto sm:mr-24 md:mr-40 mb-2 sm:mb-0 text-white" href="#">Download Learning Path handout</a><a class="inline-block w-full sm:w-auto sm:mr-auto mb-2 sm:mb-0 text-white" href="#">Have you taken this course and interested in becoming a mentor? Click here.</a><a class="inline-block w-full sm:w-auto text-white" href="#">Message a mentor of this course</a></div>
      </div>
    </div>
  </section>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/components/sections/Section11.astro");

const $$Astro$4 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Infor." }, { "default": ($$result2) => renderTemplate`

${renderComponent($$result2, "SectionOne", $$SectionOne, {})}
${renderComponent($$result2, "SectionTwo", $$SectionTwo, {})}
${renderComponent($$result2, "SectionNine", $$SectionNine, {})}
${renderComponent($$result2, "SectionTen", $$SectionTen, {})}
${renderComponent($$result2, "SectionEleven", $$Section11, {})}
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/index.astro");

const $$file$4 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/index.astro";
const $$url$4 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const response = await fetch("http://127.0.0.1:1337/api/industry?populate=*");
  await response.json();
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "index" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main>
<!-- {
    data.map((path) => (
    <>  
<h2>{path.attributes.Title}</h2>
<p>{path.attributes.ShortDescription}</p>
<img
src={path.attributes.CardImage.data.attributes.formats.large.url}
alt={path.attributes.Title}
/>
    </>
  ))
} -->

</main>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industry/index.astro");

const $$file$3 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industry/index.astro";
const $$url$3 = "/industry";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
async function getStaticPaths$1() {
  const response = await fetch("http://127.0.0.1:1337/api/industries?populate=*");
  const { data } = await response.json();
  return data.map((industry) => ({
    params: { slug: industry.slug },
    props: industry
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$$1;
  const industry = Astro2.props;
  await industry.render();
  return renderTemplate`${maybeRenderHead($$result)}<h2>${industry.attributes.title}</h2>
<h1>test</h1>
<div></div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industry/[...slug].astro");

const $$file$2 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/industry/[...slug].astro";
const $$url$2 = "/industry/[...slug]";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$2,
    getStaticPaths: getStaticPaths$1,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const response = await fetch("http://127.0.0.1:1337/api/learning-paths?populate=*");
  await response.json();
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "index" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main>
<!-- {
    data.map((path) => (
    <>  
<h2>{path.attributes.Title}</h2>
<p>{path.attributes.ShortDescription}</p>
<img
src={path.attributes.CardImage.data.attributes.formats.large.url}
alt={path.attributes.Title}
/>
    </>
  ))
} -->

</main>
` })}`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/path/index.astro");

const $$file$1 = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/path/index.astro";
const $$url$1 = "/path";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch("http://127.0.0.1:1337/api/learning-paths?populate=*");
  const { data } = await response.json();
  return data.map((path) => ({
    params: { slug: path.slug },
    props: path
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const path = Astro2.props;
  await path.render();
  return renderTemplate`${maybeRenderHead($$result)}<h2>${path.attributes.title}</h2>
<h1>test</h1>
<div></div>`;
}, "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/path/[...slug].astro");

const $$file = "/Users/prodkt/Documents/OfficialProdktDevelopment/INFOR-STATIC/src/pages/path/[...slug].astro";
const $$url = "/path/[...slug]";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d };
