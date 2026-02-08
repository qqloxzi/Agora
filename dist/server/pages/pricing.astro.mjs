/* empty css                                */
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, s as spreadAttributes, i as renderSlot, r as renderComponent, F as Fragment } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
import { $ as $$Container } from '../chunks/container_D8yFF637.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dz5zlz8T.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://agoragoakademisi.com");
const $$Tick = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tick;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".16"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z" fill="currentColor"></path> </svg>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/ui/icons/tick.astro", void 0);

const $$Astro$1 = createAstro("https://agoragoakademisi.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/ui/link.astro", void 0);

const $$Astro = createAstro("https://agoragoakademisi.com");
const $$Pricing$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const { plan } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex flex-col w-full h-full order-first lg:order-none border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 rounded-3xl overflow-hidden transition-all hover:scale-[1.01] hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 relative">  ${plan.originalPrice && renderTemplate`<div class="absolute top-4 right-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold px-3 py-1 rounded-full tracking-wide"> ${plan.discount || "\u0130ND\u0130R\u0130M"} </div>`} <div class="text-center mb-6 mt-2"> <h4 class="text-sm font-bold tracking-widest text-gray-500 dark:text-gray-500 uppercase mb-3"> ${plan.name} </h4> <div class="flex flex-col items-center justify-center gap-1"> ${plan.originalPrice && renderTemplate`<p class="text-sm font-medium text-gray-400 line-through decoration-red-400/50 decoration-1"> ${plan.originalPrice} </p>`} <p class="text-5xl font-bold text-gray-900 dark:text-white tracking-tight"> ${plan.price && typeof plan.price === "object" ? plan.price.monthly : plan.price} </p> </div> </div> <ul class="grid mt-4 text-left gap-y-4 mb-8 flex-1"> ${plan.features.map((item) => renderTemplate`<li class="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium"> <div class="shrink-0 text-gray-900 dark:text-white"> ${renderComponent($$result, "Tick", $$Tick, { "class": "w-5 h-5" })} </div> <span>${item}</span> </li>`)} </ul> <div class="flex mt-auto"> ${renderComponent($$result, "Link", $$Link, { "href": plan.button.link || "#", "block": true, "style": plan.popular ? "primary" : "outline", "target": "_blank", "rel": "noopener noreferrer", "class": "rounded-xl", "*": true, "Buton": true, "k\xF6\u015Feleri": true, "de": true, "karta": true, "uyumlu": true, "hale": true, "getirildi": true, "*": true }, { "default": ($$result2) => renderTemplate`${plan.button.text || "Get Started"}` })} </div> </div> </div>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/pricing.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const pricing = [
    {
      name: "Temel Ta\u015Flar Ligi",
      price: "1000 TL",
      originalPrice: "1200 TL",
      discount: "%17",
      popular: true,
      features: [
        "17-12 kyu seviyeleri i\xE7in",
        "Online lig kat\u0131l\u0131m\u0131",
        "Her hafta bireysel oyun analizi",
        "Ders kay\u0131tlar\u0131na eri\u015Fim",
        "E\u011Fitmen: Ali Karakaya"
      ],
      button: {
        text: "Kay\u0131t Ol",
        link: "https://www.shopier.com/Agoragoakademisi/42122188"
      }
    },
    {
      name: "Geli\u015Fim Ligi",
      price: "1500 TL",
      originalPrice: "1800 TL",
      discount: "%17",
      popular: true,
      features: [
        "11-6 kyu seviyeleri i\xE7in",
        "Online lig kat\u0131l\u0131m\u0131",
        "Her hafta bireysel oyun analizi",
        "Ders kay\u0131tlar\u0131na eri\u015Fim",
        "E\u011Fitmen: O\u011Fuz Erdo\u011Fan"
      ],
      button: {
        text: "Kay\u0131t Ol",
        link: "https://www.shopier.com/Agoragoakademisi/42122246"
      }
    },
    {
      name: "Ayd\u0131nlanma Ligi",
      price: "2000 TL",
      originalPrice: "2400 TL",
      discount: "%17",
      popular: true,
      features: [
        "5 kyu ve \xFCst\xFC seviyeler i\xE7in",
        "Online lig kat\u0131l\u0131m\u0131",
        "Her hafta bireysel oyun analizi",
        "Ders kay\u0131tlar\u0131na eri\u015Fim",
        "E\u011Fitmen: Tu\u011Fkan Eren"
      ],
      button: {
        text: "Kay\u0131t Ol",
        link: "https://www.shopier.com/Agoragoakademisi/42122300"
      }
    },
    {
      name: "Go'ya \u0130lk Ad\u0131m",
      price: "\xDCcretsiz",
      originalPrice: "",
      popular: false,
      features: [
        "Online oturum",
        "Temel kavramlar, kurallar ve etik",
        "Go felsefesi",
        "Interaktif e\u011Fitim",
        "E\u011Fitmen: O\u011Fuz Erdo\u011Fan"
      ],
      button: {
        text: "Kay\u0131t Ol",
        link: "https://forms.gle/SgkPfyd4BNvyWr2g6"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kurs Planlar\u0131 | Agora Go Akademisi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`
2. Sezon için kayıtlar devam ediyor. Her bir kurs için 6 Kişilik kontenjan. Lütfen bizimle iletişime geçiniz.
` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Kurs Planları` })}` })} ${maybeRenderHead()}<div class="mt-6 text-center"> <p class="inline-block text-sm md:text-base font-medium text-slate-700 bg-slate-100 dark:text-slate-300 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-full">
Her lig için maksimum 6 kişi — Kontenjan dolduğunda kayıtlar kapanır.
</p> </div> <div id="plan-kutulari" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto max-w-screen-xl mt-8"> ${pricing.map((item) => renderTemplate`${renderComponent($$result3, "PricingCard", $$Pricing$1, { "plan": item })}`)} </div> <div class="mt-16 text-center"> <p class="text-lg text-black mb-8">
Üniversite öğrencilerine yönelik ek %10 indirim için "TESUJİ" kodunu kullanabilirsiniz.
</p> </div> ` })} ` })}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/pricing.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
