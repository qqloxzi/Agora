/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
export { renderers } from '../renderers.mjs';

const $$Egitmen = createComponent(($$result, $$props, $$slots) => {
  const initialConfig = {
    id: "teacher-playground",
    size: 19,
    // Varsayılan olarak 19x19 açılır (Setup modunda değiştirebilirsin)
    turn: "black",
    title: "Yeni Soru \u015Eablonu",
    description: "Ta\u015Flar\u0131 dizmek i\xE7in SETUP, hamleleri kaydetmek i\xE7in RECORD moduna ge\xE7in.",
    initialState: "[]",
    // Boş tahta
    solution: { children: [] }
    // Boş çözüm ağacı
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xD6\u011Fretmen Masas\u0131" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div style="background-color: #2c3e50; min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding-top: 40px;"> <div style="text-align: center; margin-bottom: 30px;"> <h1 style="color: #f1c40f; margin: 0;">🎓 Öğretmen Masası</h1> <p style="color: #ecf0f1; margin-top: 10px; max-width: 600px; line-height: 1.5;">
Bu sayfada soruları hazırlayıp JSON formatında indirebilirsin. <br> <span style="opacity: 0.7; font-size: 0.9em;">(Önce taşları diz, sonra <b>🔴 Kayıt Başlat</b> diyerek hamleleri oyna ve <b>✅/❌</b> ile işaretle.)</span> </p> </div>  ${renderComponent($$result2, "GoBoardReact", null, { "client:only": "react", "problem": initialConfig, "isTeacher": true, "client:component-hydration": "only", "client:component-path": "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/GoBoardReact.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/egitmen.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/egitmen.astro";
const $$url = "/egitmen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Egitmen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
