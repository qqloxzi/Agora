/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BS15tbb5.mjs';
import { $ as $$Picture } from '../chunks/_astro_assets_DVqf0n_6.mjs';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
import { $ as $$Container } from '../chunks/container_D8yFF637.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dz5zlz8T.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const publishedTeamMembers = await getCollection("team", ({ data }) => {
    return !data.draft && data.publishDate < /* @__PURE__ */ new Date();
  });
  const teamMembersWithContent = await Promise.all(
    publishedTeamMembers.map(async (member) => {
      const { Content } = await member.render();
      return { ...member, Content };
    })
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hakk\u0131m\u0131zda - Agora Go Akademisi" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate`kısaca...` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate`Agora Go Akademisi` })}` })} ${maybeRenderHead()}<div class="mt-16 max-w-4xl mx-auto"> <div class="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow duration-300"> <h2 class="font-bold text-2xl text-slate-800 mb-4">
Vizyonumuz
</h2> <p class="text-slate-600 leading-relaxed">
Go Akademisi olarak vizyonumuz; her seviyedeki oyuncunun gelişimine katkı sağlamak, go kültürünü yaymak ve oyunun Türkiye'de daha geniş kitlelere ulaşmasını sağlamaktır.
</p></div> </div> <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-16"> ${teamMembersWithContent.map((item) => renderTemplate`<div class="group"> <div class="w-full aspect-square overflow-hidden rounded-md bg-slate-100"> ${renderComponent($$result3, "Picture", $$Picture, { "src": item.data.avatar.src, "alt": item.data.avatar.alt, "sizes": "(max-width: 800px) 100vw, 400px", "width": 400, "height": 400, "class": "w-full h-full object-cover object-center transition duration-300 group-hover:scale-105" })} </div> <div class="mt-5 text-center"> <h2 class="text-lg font-bold text-gray-800">${item.data.name}</h2> <h3 class="text-sm font-medium text-slate-500 mb-4"> ${item.data.title} </h3> <div class="text-slate-600 text-sm leading-relaxed px-2"> ${renderComponent($$result3, "item.Content", item.Content, {})} </div> </div> </div>`)} </div> ` })} ` })}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/about.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
