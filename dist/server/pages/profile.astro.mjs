/* empty css                                */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DQB4DWMI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_5IXkEw1O.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Profilim | Agora Go Akademisi", "data-astro-cid-wwes6yjo": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="profile-container" data-astro-cid-wwes6yjo> <div class="profile-card" data-astro-cid-wwes6yjo> <div class="profile-header" data-astro-cid-wwes6yjo> <div class="avatar-circle" data-astro-cid-wwes6yjo> <span id="avatar-initial" data-astro-cid-wwes6yjo>?</span> </div> <h1 id="display-username" data-astro-cid-wwes6yjo>Yükleniyor...</h1> <p id="display-email" class="email-text" data-astro-cid-wwes6yjo>...</p> </div> <div class="rank-display-section" data-astro-cid-wwes6yjo> <div class="rank-badge-container" data-astro-cid-wwes6yjo> <span class="rank-title" data-astro-cid-wwes6yjo>Mevcut Seviye</span> <div class="rank-value" id="display-rank" data-astro-cid-wwes6yjo>20 Kyu</div> </div> <div class="xp-container" data-astro-cid-wwes6yjo> <div class="xp-info" data-astro-cid-wwes6yjo> <span id="current-xp" data-astro-cid-wwes6yjo>0 XP</span> <span id="next-rank-info" data-astro-cid-wwes6yjo>Sonraki seviyeye devam et</span> </div> <div class="progress-track" data-astro-cid-wwes6yjo> <div class="progress-fill" id="xp-bar" style="width: 0%" data-astro-cid-wwes6yjo></div> </div> </div> </div> <div class="profile-info" data-astro-cid-wwes6yjo> <div class="info-item" data-astro-cid-wwes6yjo> <span class="label" data-astro-cid-wwes6yjo>Kayıt Tarihi</span> <span id="info-date" class="value" data-astro-cid-wwes6yjo>-</span> </div> <div class="info-item" data-astro-cid-wwes6yjo> <span class="label" data-astro-cid-wwes6yjo>Hesap Durumu</span> <span class="value active-status" data-astro-cid-wwes6yjo>Aktif Üye</span> </div> </div> <div class="profile-actions" data-astro-cid-wwes6yjo> <button id="logout-btn" class="btn-danger" data-astro-cid-wwes6yjo>Oturumu Kapat</button> </div> </div> </div> ` })} ${renderScript($$result, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/profile.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/profile.astro", void 0);

const $$file = "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
