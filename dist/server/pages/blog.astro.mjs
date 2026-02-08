/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BS15tbb5.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_DVqf0n_6.mjs';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
import { $ as $$Container } from '../chunks/container_D8yFF637.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dz5zlz8T.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const publishedBlogEntries = await getCollection("blog", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  publishedBlogEntries.sort(function(a, b) {
    return b.data.publishDate.valueOf() - a.data.publishDate.valueOf();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate` ${maybeRenderHead()}<span class="text-gray-600 dark:text-gray-300">Yazı göndermek için bizimle iletişime geçebilirsiniz</span> ` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate` <span class="text-gray-900 dark:text-white">Kütüphane</span> ` })}` })} <main class="mt-16"> <ul class="grid gap-16 max-w-4xl mx-auto"> ${publishedBlogEntries.map((blogPostEntry, index) => renderTemplate`<li> <a${addAttribute(`/blog/${blogPostEntry.slug}`, "href")} class="group block"> <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center"> ${renderComponent($$result3, "Picture", $$Picture, { "src": blogPostEntry.data.image.src, "alt": blogPostEntry.data.image.alt, "sizes": "(max-width: 800px) 100vw, 800px", "width": 800, "height": 600, "loading": index <= 2 ? "eager" : "lazy", "decoding": index <= 2 ? "sync" : "async", "class": "w-full rounded-md object-cover object-center bg-gray-100 dark:bg-gray-800 transition-colors" })} <div> <span class="text-blue-500 dark:text-blue-400 uppercase tracking-wider text-sm font-medium"> ${blogPostEntry.data.category} </span> <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> ${blogPostEntry.data.title} </h2> <div class="flex gap-2 mt-3 text-gray-500 dark:text-gray-400"> <span> ${blogPostEntry.data.author} </span> <span>• </span> <time${addAttribute(blogPostEntry.data.publishDate.toISOString(), "datetime")}> ${blogPostEntry.data.publishDate.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> </div> </div> </a> </li>`)} </ul> </main> ` })} ` })}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/blog.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
