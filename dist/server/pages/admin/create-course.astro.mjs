/* empty css                                   */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as renderScript, a as renderTemplate } from '../../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import 'clsx';
import { s as supabase } from '../../chunks/supabase_D1QsuwKJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://agoragoakademisi.com");
const $$CreateCourse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CreateCourse;
  const ADMIN_EMAIL = "alikarakayagg@gmail.com";
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || user.email !== ADMIN_EMAIL) return Astro2.redirect("/");
  return renderTemplate`${maybeRenderHead()}<div class="max-w-2xl mx-auto mt-10 p-8 bg-white border rounded-xl shadow-sm"> <h1 class="text-2xl font-bold mb-6 text-gray-800">Yeni Kurs Ekle</h1> <form id="create-course-form" class="flex flex-col gap-5"> <label class="block"> <span class="text-gray-700 font-semibold">Kurs Başlığı</span> <input type="text" name="title" required class="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Örn: Go Oyununa Giriş"> </label> <label class="block"> <span class="text-gray-700 font-semibold">Kapak Resmi (URL)</span> <input type="url" name="image_url" required class="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="https://ornek.com/resim.jpg"> <p class="text-xs text-gray-500 mt-1">Kare veya yatay bir görsel linki yapıştır.</p> </label> <label class="block"> <span class="text-gray-700 font-semibold">Sağlayıcı / Eğitmen</span> <input type="text" name="provider" value="Agora Go" class="mt-1 block w-full border border-gray-300 rounded-md p-2"> </label> <label class="block"> <span class="text-gray-700 font-semibold">Açıklama</span> <textarea name="description" required rows="4" class="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea> </label> <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-colors">
Kursu Yayınla
</button> </form> <p id="status-msg" class="mt-4 text-center font-medium"></p> </div> ${renderScript($$result, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/admin/create-course.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/admin/create-course.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/admin/create-course.astro";
const $$url = "/admin/create-course";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CreateCourse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
