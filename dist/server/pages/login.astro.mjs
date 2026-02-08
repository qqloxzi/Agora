/* empty css                                */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderScript } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Giri\u015F Yap | Agora Go Akademisi", "data-astro-cid-sgpqyurt": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="login-container" data-astro-cid-sgpqyurt> <div class="login-header" data-astro-cid-sgpqyurt> <h1 data-astro-cid-sgpqyurt>Giriş Yap</h1> </div> <div id="selection-view" class="options-view" data-astro-cid-sgpqyurt> <button id="show-email-form" class="btn-theme" data-astro-cid-sgpqyurt>
E-posta ile giriş yap
</button> <div class="separator" data-astro-cid-sgpqyurt><span data-astro-cid-sgpqyurt>VEYA</span></div> <button id="google-login" class="btn-theme" data-astro-cid-sgpqyurt> <img src="https://www.google.com/favicon.ico" alt="Google" class="w-5 h-5" data-astro-cid-sgpqyurt>
Google ile giriş yap
</button> </div> <div id="email-form-view" class="hidden" data-astro-cid-sgpqyurt> <div class="login-card" data-astro-cid-sgpqyurt> <form id="login-form" data-astro-cid-sgpqyurt> <div class="input-group" data-astro-cid-sgpqyurt> <label for="email" data-astro-cid-sgpqyurt>E-posta</label> <input type="email" id="email" placeholder="E-posta adresinizi girin" required data-astro-cid-sgpqyurt> </div> <div class="input-group" data-astro-cid-sgpqyurt> <label for="password" data-astro-cid-sgpqyurt>Şifre</label> <input type="password" id="password" placeholder="Şifrenizi girin" required data-astro-cid-sgpqyurt> </div> <button type="submit" class="submit-btn" data-astro-cid-sgpqyurt>Giriş Yap</button> </form> <button id="back-to-selection" class="back-link" data-astro-cid-sgpqyurt>← Seçeneklere Geri Dön</button> </div> </div> <p id="message" data-astro-cid-sgpqyurt></p> </div>  ${renderScript($$result2, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/login.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/login.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
