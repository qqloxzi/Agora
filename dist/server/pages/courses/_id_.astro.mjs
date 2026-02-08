/* empty css                                   */
import { b as createAstro, c as createComponent, j as renderHead, e as addAttribute, d as renderScript, a as renderTemplate } from '../../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import 'clsx';
import { s as supabase } from '../../chunks/supabase_D1QsuwKJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://agoragoakademisi.com");
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: course, error } = await supabase.from("courses").select("*").eq("id", id).single();
  if (!course || error) {
    return Astro2.redirect("/404");
  }
  const { data: { user } } = await supabase.auth.getUser();
  let isJoined = false;
  if (user) {
    const { data: enrollment } = await supabase.from("course_enrollments").select("id").eq("user_id", user.id).eq("course_id", id).single();
    if (enrollment) isJoined = true;
  }
  return renderTemplate`<html lang="tr"> <head><title>${course.title} | Agora Go Akademisi</title>${renderHead()}</head> <body class="bg-[#F5F7F8] font-sans text-gray-800"> <div class="bg-white border-b border-gray-200"> <div class="max-w-5xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-start"> <div class="flex-1"> <a href="/courses" class="text-blue-600 text-sm font-semibold hover:underline mb-4 inline-block">← Tüm Kurslara Dön</a> <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">${course.title}</h1> <p class="text-lg text-gray-600 mb-6">${course.description}</p> <div class="flex items-center gap-4 text-sm font-medium"> <div class="flex items-center gap-2"> <span class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">Provider</span> <span>${course.provider}</span> </div> <div class="hidden md:block w-px h-4 bg-gray-300"></div> <div class="text-yellow-600 flex items-center gap-1"> <span>★ ${course.rating}</span> <span class="text-gray-400 font-normal">(450+ inceleme)</span> </div> </div> </div> <div class="w-full md:w-80 bg-white p-6 rounded-xl shadow-lg border border-gray-100 shrink-0"> <img${addAttribute(course.image_url, "src")}${addAttribute(course.title, "alt")} class="w-full h-40 object-cover rounded-lg mb-4"> <div class="mb-4"> <span class="text-2xl font-bold text-gray-900">Ücretsiz</span> </div> ${isJoined ? renderTemplate`<button disabled class="w-full py-3 bg-green-600 text-white font-bold rounded-lg cursor-default">
Zaten Kayıtlısınız ✅
</button>` : renderTemplate`<button id="join-btn"${addAttribute(course.id, "data-course-id")}${addAttribute(user?.id, "data-user-id")} class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
Şimdi Katıl
</button>`} <p class="text-xs text-center text-gray-500 mt-3">Herhangi bir zamanda iptal edilebilir.</p> </div> </div> </div> <div class="max-w-5xl mx-auto px-4 py-8"> <div class="max-w-3xl"> <h2 class="text-2xl font-bold mb-4">Bu derste neler öğreneceksiniz?</h2> <div class="prose prose-blue text-gray-600"> <p>Buraya dersin detaylı müfredatı veya uzun açıklaması gelebilir. Şimdilik veritabanındaki kısa açıklamayı tekrar gösteriyoruz, ancak ileride 'content' adında uzun bir metin alanı ekleyebilirsin.</p> <p>${course.description}</p> </div> </div> </div> ${renderScript($$result, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/courses/[id].astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/courses/[id].astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/courses/[id].astro";
const $$url = "/courses/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
