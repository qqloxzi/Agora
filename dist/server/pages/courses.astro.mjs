/* empty css                                */
import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { s as supabase } from '../chunks/supabase_D1QsuwKJ.mjs';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://agoragoakademisi.com");
const $$Coursecard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Coursecard;
  const { course } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/courses/${course.id}`, "href")} class="block bg-white p-3 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 relative group h-full text-left"> <div class="flex gap-4 h-full"> <div class="shrink-0"> <img${addAttribute(course.image_url || "https://via.placeholder.com/100", "src")}${addAttribute(course.title, "alt")} class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg border border-gray-100"> </div> <div class="flex flex-col justify-between flex-grow"> <div> <div class="flex items-center gap-2 mb-1"> <div class="w-4 h-4 bg-gray-200 rounded-sm overflow-hidden"></div> <span class="text-xs font-semibold text-gray-500">${course.provider}</span> </div> <h3 class="font-bold text-gray-900 text-sm md:text-base leading-snug mb-1 line-clamp-2 group-hover:underline decoration-blue-600 underline-offset-2"> ${course.title} </h3> </div> <div class="flex items-center gap-2 text-xs text-gray-600 mt-2"> <span class="bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-medium">Ders</span> ${course.rating && renderTemplate`<span class="flex items-center gap-1 font-bold text-yellow-600">
★ ${course.rating} </span>`} </div> </div> </div> </a> ${renderScript($$result, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/coursecard.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/coursecard.astro", void 0);

const $$Courses = createComponent(async ($$result, $$props, $$slots) => {
  const { data: courses, error } = await supabase.from("courses").select("*").order("created_at", { ascending: false });
  const { data: { user } } = await supabase.auth.getUser();
  const currentUserId = user?.id;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xD6\u011Fretmen Masas\u0131", "lang": "tr" }, { "default": async ($$result2) => renderTemplate` <title>Kurslar | Agora Go Akademisi</title> ` })} ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 py-8"> <div class="flex items-center justify-between mb-8"> <h1 class="text-3xl font-bold">Tüm Eğitimler</h1> <span class="text-sm text-gray-500">${courses?.length || 0} kurs mevcut</span> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${courses?.map((course) => renderTemplate`${renderComponent($$result, "CourseCard", $$Coursecard, { "course": course, "currentUserId": currentUserId })}`)} ${(!courses || courses.length === 0) && renderTemplate`<div class="col-span-full text-center py-12 text-gray-500">
Henüz aktif bir kurs bulunmuyor.
</div>`} </div> </div> `;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/courses.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/courses.astro";
const $$url = "/courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Courses,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
