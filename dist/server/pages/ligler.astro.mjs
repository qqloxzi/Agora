/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, e as addAttribute } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
import { $ as $$Container } from '../chunks/container_D8yFF637.mjs';
import { $ as $$Sectionhead } from '../chunks/sectionhead_Dz5zlz8T.mjs';
export { renderers } from '../renderers.mjs';

const $$Ligler = createComponent(($$result, $$props, $$slots) => {
  const leagues = [
    {
      id: 1,
      name: "Temel Ta\u015Flar Ligi",
      sub: "17-12 Kyu",
      status: "Kay\u0131tlar doldu",
      participants: ["Mehmed Samed Karap\u0131nar", "Tufan Baran Il\u0131cal\u0131", "Ekin Elya Tanr\u0131vere", "Ali Baran Mermutlu", "Arda Eren \u015Eahin", "Elif \xD6zta\u015F", "Duru \xD6rsal"],
      standings: [
        { rank: 1, name: "Mehmed Samed Karap\u0131nar", played: 3, points: 3 },
        { rank: 2, name: "Ali Baran Mermutlu", played: 2, points: 2 },
        { rank: 3, name: "Arda Eren \u015Eahin", played: 3, points: 2 },
        { rank: 4, name: "Tufan Baran Il\u0131cal\u0131", played: 2, points: 1 },
        { rank: 5, name: "Ekin Elya Tanr\u0131vere", played: 3, points: 1 },
        { rank: 6, name: "Duru \xD6rsal", played: 3, points: 0 },
        { rank: 7, name: "Elif \xD6zta\u015F", played: 2, points: 0 }
      ],
      fixtures: [
        { week: "1. Hafta", matches: [
          { p1: "Mehmed Samed Karap\u0131nar", p2: "Duru \xD6rsal", s1: 1, s2: 0 },
          { p1: "Ali Karakaya", p2: "Elif \xD6zta\u015F", s1: 0, s2: 0 },
          { p1: "Tufan Baran Il\u0131cal\u0131", p2: "Arda Eren \u015Eahin", s1: 0, s2: 1 },
          { p1: "Ekin Elya Tanr\u0131vere", p2: "Ali Baran Mermutlu", s1: 0, s2: 1 }
        ] },
        { week: "2. Hafta", matches: [
          { p1: "Elif \xD6zta\u015F", p2: "Mehmed Samed Karap\u0131nar", s1: 0, s2: 1 },
          { p1: "Arda Eren \u015Eahin", p2: "Duru \xD6rsal", s1: 1, s2: 0 },
          { p1: "Ali Baran Mermutlu", p2: "Ali Karakaya", s1: 0, s2: 0 },
          { p1: "Ekin Elya Tanr\u0131vere", p2: "Tufan Baran Il\u0131cal\u0131", s1: 0, s2: 1 }
        ] },
        { week: "3. Hafta", matches: [
          { p1: "Mehmed Samed Karap\u0131nar", p2: "Arda Eren \u015Eahin", s1: 1, s2: 0 },
          { p1: "Ali Baran Mermutlu", p2: "Elif \xD6zta\u015F", s1: 1, s2: 0 },
          { p1: "Duru \xD6rsal", p2: "Ekin Elya Tanr\u0131vere", s1: 0, s2: 1 },
          { p1: "Ali Karakaya", p2: "Tufan Baran Il\u0131cal\u0131", s1: 0, s2: 0 }
        ] },
        { week: "4. Hafta", matches: [
          { p1: "Ali Baran Mermutlu", p2: "Mehmed Samed Karap\u0131nar", s1: 0, s2: 0 },
          { p1: "Arda Eren \u015Eahin", p2: "Ekin Elya Tanr\u0131vere", s1: 0, s2: 0 },
          { p1: "Tufan Baran Il\u0131cal\u0131", p2: "Elif \xD6zta\u015F", s1: 0, s2: 0 },
          { p1: "Duru \xD6rsal", p2: "Ali Karakaya", s1: 0, s2: 0 }
        ] },
        { week: "5. Hafta", matches: [
          { p1: "Mehmed Samed Karap\u0131nar", p2: "Ekin Elya Tanr\u0131vere", s1: 0, s2: 0 },
          { p1: "Tufan Baran Il\u0131cal\u0131", p2: "Ali Baran Mermutlu", s1: 0, s2: 0 },
          { p1: "Arda Eren \u015Eahin", p2: "Ali Karakaya", s1: 0, s2: 0 },
          { p1: "Elif \xD6zta\u015F", p2: "Duru \xD6rsal", s1: 0, s2: 0 }
        ] },
        { week: "6. Hafta", matches: [
          { p1: "Tufan Baran Il\u0131cal\u0131", p2: "Mehmed Samed Karap\u0131nar", s1: 0, s2: 0 },
          { p1: "Ali Karakaya", p2: "Ekin Elya Tanr\u0131vere", s1: 0, s2: 0 },
          { p1: "Duru \xD6rsal", p2: "Ali Baran Mermutlu", s1: 0, s2: 0 },
          { p1: "Arda Eren \u015Eahin", p2: "Elif \xD6zta\u015F", s1: 0, s2: 0 }
        ] }
      ]
    },
    {
      id: 2,
      name: "Geli\u015Fim Ligi",
      sub: "11-6 Kyu",
      status: "Kay\u0131tlar doldu",
      participants: ["Sefa Atar", "Umut Can Dumlup\u0131nar", "Mert Karaka\u015F", "Murat \xD6zbay", "G\xFCl\u015Fen S\u0131la Demira\u011F", "Ali Moeninajafibadi", "Do\u011Fan Ergezen", "Do\u011Fukan Bora Alay"],
      standings: [
        { rank: 1, name: "Murat \xD6zbay", played: 0, points: 0 },
        { rank: 2, name: "Ali Moeninajafibadi", played: 0, points: 0 },
        { rank: 3, name: "Do\u011Fan Ergezen", played: 0, points: 0 },
        { rank: 4, name: "Do\u011Fukan Bora Alay", played: 0, points: 0 },
        { rank: 5, name: "G\xFCl\u015Fen S\u0131la Demira\u011F", played: 0, points: 0 },
        { rank: 6, name: "Mert Karaka\u015F", played: 0, points: 0 },
        { rank: 7, name: "Umut Can Dumlup\u0131nar", played: 0, points: 0 },
        { rank: 8, name: "Sefa Atar", played: 0, points: 0 }
      ],
      fixtures: [
        { week: "1. Hafta", matches: [
          { p1: "Sefa Atar", p2: "Umut Can Dumlup\u0131nar", s1: 1, s2: 0 },
          { p1: "Mert Karaka\u015F", p2: "Murat \xD6zbay", s1: 1, s2: 0 },
          { p1: "G\xFCl\u015Fen S\u0131la Demira\u011F", p2: "Ali Moeninajafibadi", s1: 0, s2: 1 },
          { p1: "Do\u011Fan Ergezen", p2: "Do\u011Fukan Bora Alay", s1: 1, s2: 0 }
        ] },
        { week: "2. Hafta", matches: [
          { p1: "Murat \xD6zbay", p2: "Sefa Atar", s1: 0, s2: 0 },
          { p1: "Ali Moeninajafibadi", p2: "Umut Can Dumlup\u0131nar", s1: 1, s2: 0 },
          { p1: "Do\u011Fukan Bora Alay", p2: "Mert Karaka\u015F", s1: 1, s2: 0 },
          { p1: "Do\u011Fan Ergezen", p2: "G\xFCl\u015Fen S\u0131la Demira\u011F", s1: 1, s2: 0 }
        ] },
        { week: "3. Hafta", matches: [
          { p1: "Sefa Atar", p2: "Mert Karaka\u015F", s1: 0, s2: 1 },
          { p1: "Umut Can Dumlup\u0131nar", p2: "G\xFCl\u015Fen S\u0131la Demira\u011F", s1: 1, s2: 0 },
          { p1: "Murat \xD6zbay", p2: "Do\u011Fan Ergezen", s1: 0, s2: 0 },
          { p1: "Do\u011Fukan Bora Alay", p2: "Ali Moeninajafibadi", s1: 1, s2: 0 }
        ] },
        { week: "4. Hafta", matches: [
          { p1: "Do\u011Fukan Bora Alay", p2: "Sefa Atar", s1: 1, s2: 0 },
          { p1: "Ali Moeninajafibadi", p2: "Do\u011Fan Ergezen", s1: 0, s2: 1 },
          { p1: "G\xFCl\u015Fen S\u0131la Demira\u011F", p2: "Murat \xD6zbay", s1: 0, s2: 1 },
          { p1: "Umut Can Dumlup\u0131nar", p2: "Mert Karaka\u015F", s1: 0, s2: 1 }
        ] },
        { week: "5. Hafta", matches: [
          { p1: "Sefa Atar", p2: "Do\u011Fan Ergezen", s1: 0, s2: 0 },
          { p1: "G\xFCl\u015Fen S\u0131la Demira\u011F", p2: "Do\u011Fukan Bora Alay", s1: 0, s2: 1 },
          { p1: "Ali Moeninajafibadi", p2: "Mert Karaka\u015F", s1: 1, s2: 0 },
          { p1: "Murat \xD6zbay", p2: "Umut Can Dumlup\u0131nar", s1: 0, s2: 0 }
        ] },
        { week: "6. Hafta", matches: [
          { p1: "G\xFCl\u015Fen S\u0131la Demira\u011F", p2: "Sefa Atar", s1: 0, s2: 0 },
          { p1: "Mert Karaka\u015F", p2: "Do\u011Fan Ergezen", s1: 0, s2: 0 },
          { p1: "Umut Can Dumlup\u0131nar", p2: "Do\u011Fukan Bora Alay", s1: 0, s2: 1 },
          { p1: "Ali Moeninajafibadi", p2: "Murat \xD6zbay", s1: 1, s2: 0 }
        ] }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ligler" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`6 haftalık lig maratonunda tüm karşılaşmaları takip edin.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`Ligler ve Oyuncular` })}` })} ${maybeRenderHead()}<div class="mt-8 text-center bg-slate-900 p-8 rounded-lg max-w-4xl mx-auto shadow-lg mb-16"> <h2 class="text-2xl font-bold text-white mb-2">1. Sezon Fikstürü</h2> <p class="text-indigo-200">Sonuçlar her hafta maç bitiminde güncellenir.</p> </div> <div class="flex flex-col gap-12 mx-auto max-w-screen-xl"> ${leagues.map((item) => renderTemplate`<div class="relative w-full bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 overflow-hidden"> <div class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg uppercase tracking-wider z-10"> ${item.status} </div> <div class="p-8"> <div class="flex items-baseline gap-4 mb-8 border-b border-gray-100 dark:border-gray-800 pb-4"> <h3 class="text-3xl font-bold text-gray-900 dark:text-white">${item.name}</h3> <span class="text-lg text-indigo-600 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-md">${item.sub}</span> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-gray-800">  <div class="pt-4 lg:pt-0"> <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4 text-lg"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
Katılımcılar
</div> <ul class="grid grid-cols-2 lg:grid-cols-1 gap-2"> ${item.participants.map((p) => renderTemplate`<li class="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 p-2 hover:bg-gray-50 dark:hover:bg-slate-800 rounded transition-colors"> <div class="w-2 h-2 rounded-full bg-green-500"></div> <span class="truncate"${addAttribute(p, "title")}>${p}</span> </li>`)} </ul> </div>  <div class="pt-8 lg:pt-0 lg:pl-12"> <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4 text-lg"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
Puan Durumu
</div> <div class="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700"> <table class="min-w-full text-sm text-left"> <thead class="bg-gray-50 dark:bg-slate-800 text-xs text-gray-500 uppercase font-semibold"> <tr> <th class="px-3 py-2 text-center w-10">#</th> <th class="px-3 py-2">Oyuncu</th> <th class="px-3 py-2 text-center w-12">P</th> </tr> </thead> <tbody class="divide-y divide-gray-100 dark:divide-gray-700"> ${item.standings && item.standings.map((s) => renderTemplate`<tr class="hover:bg-gray-50 dark:hover:bg-slate-800/50"> <td class="px-3 py-2 text-center font-medium text-gray-400">${s.rank}</td> <td class="px-3 py-2 font-medium text-gray-800 dark:text-gray-300 truncate max-w-[120px]"${addAttribute(s.name, "title")}>${s.name}</td> <td class="px-3 py-2 text-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20">${s.points}</td> </tr>`)} </tbody> </table> </div> </div>  <div class="pt-8 lg:pt-0 lg:pl-12"> <div class="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4 text-lg"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line></svg>
Fikstür (6 Hafta)
</div> <div class="space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin"> ${item.fixtures.map((fix) => renderTemplate`<div> <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 border-b border-gray-100 dark:border-gray-800 pb-1"> ${fix.week} </div> <div class="space-y-2"> ${fix.matches.map((m) => renderTemplate`<div class="grid grid-cols-[1fr_35px_20px_35px_1fr] items-center rounded-md overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm"> <div class="bg-white dark:bg-gray-100 text-slate-900 text-[11px] font-bold py-2 px-2 text-right truncate"${addAttribute(m.p1, "title")}> ${m.p1} </div> <input type="text" readonly${addAttribute(m.s1, "value")} class="w-full h-full text-center bg-gray-50 dark:bg-gray-200 text-slate-900 text-[11px] font-bold border-none outline-none"> <div class="bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-gray-300 border-x border-gray-200 dark:border-gray-700 h-full"> - </div> <input type="text" readonly${addAttribute(m.s2, "value")} class="w-full h-full text-center bg-slate-800 text-white text-[11px] font-bold border-none outline-none"> <div class="bg-slate-900 dark:bg-black text-white text-[11px] font-bold py-2 px-2 text-left truncate"${addAttribute(m.p2, "title")}> ${m.p2} </div> </div>`)} </div> </div>`)} </div> </div> </div> </div> </div>`)} </div> ` })} ` })}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/ligler.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/ligler.astro";
const $$url = "/ligler";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ligler,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
