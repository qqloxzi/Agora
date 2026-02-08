import { b as createAstro, c as createComponent, e as addAttribute, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, m as maybeRenderHead, k as defineScriptVars, i as renderSlot, d as renderScript, j as renderHead } from './astro/server_DQB4DWMI.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */

const $$Astro$i = createAstro("https://agoragoakademisi.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$h = createAstro("https://agoragoakademisi.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$g = createAstro("https://agoragoakademisi.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$f = createAstro("https://agoragoakademisi.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$e = createAstro("https://agoragoakademisi.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$d = createAstro("https://agoragoakademisi.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$c = createAstro("https://agoragoakademisi.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$b = createAstro("https://agoragoakademisi.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-seo@0.8.4_prettier@3.7.4_typescript@5.9.3/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="my-20"> <div class="flex justify-center space-x-6 mb-4"> <a href="https://www.instagram.com/agoragoakademisi/" target="_blank" rel="noopener noreferrer" aria-label="Agora Instagram" class="text-slate-500 hover:text-slate-700 transition-colors"> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg> </a> <a href="https://www.facebook.com/profile.php?id=61583449484168" target="_blank" rel="noopener noreferrer" aria-label="Agora Facebook" class="text-slate-500 hover:text-slate-700 transition-colors"> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg> </a> <a href="https://www.youtube.com/@Agoragoakademisi" target="_blank" rel="noopener noreferrer" aria-label="Agora YouTube" class="text-slate-500 hover:text-slate-700 transition-colors"> <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path> <path d="m10 15 5-3-5-3z"></path> </svg> </a> </div> <p class="text-center text-sm text-slate-500">
Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} Agora Go Akademisi. Tüm hakları saklıdır.
</p> </footer>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$a = createAstro("https://agoragoakademisi.com");
const $$Astronav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Astronav;
  const { closeOnClick = false } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      `.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'], ["", " <script>(function(){", '\n["DOMContentLoaded", "astro:after-swap"].forEach((event) => {\n  document.addEventListener(event, addListeners);\n});\n\n// Function to clone and replace elements\nfunction cloneAndReplace(element) {\n  const clone = element.cloneNode(true);\n  element.parentNode.replaceChild(clone, element);\n}\n\nfunction addListeners() {\n  // Clean up existing listeners\n  const oldMenuButton = document.getElementById("astronav-menu");\n  if (oldMenuButton) {\n    cloneAndReplace(oldMenuButton);\n  }\n\n  const oldDropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  oldDropdownMenus.forEach((menu) => {\n    cloneAndReplace(menu);\n  });\n\n  // Mobile nav toggle\n  const menuButton = document.getElementById("astronav-menu");\n  menuButton && menuButton.addEventListener("click", toggleMobileNav);\n\n  // Dropdown menus\n  const dropdownMenus = document.querySelectorAll(".astronav-dropdown");\n  dropdownMenus.forEach((menu) => {\n    const button = menu.querySelector("button");\n    button &&\n      button.addEventListener("click", (event) =>\n        toggleDropdownMenu(event, menu, dropdownMenus)\n      );\n\n    // Handle Submenu Dropdowns\n    const dropDownSubmenus = menu.querySelectorAll(\n      ".astronav-dropdown-submenu"\n    );\n\n    dropDownSubmenus.forEach((submenu) => {\n      const submenuButton = submenu.querySelector("button");\n      submenuButton &&\n        submenuButton.addEventListener("click", (event) => {\n          event.stopImmediatePropagation();\n          toggleSubmenuDropdown(event, submenu);\n        });\n    });\n  });\n\n  // Clicking away from dropdown will remove the dropdown class\n  document.addEventListener("click", closeAllDropdowns);\n\n  if (closeOnClick) {\n    handleCloseOnClick();\n  }\n}\n\nfunction toggleMobileNav() {\n  [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {\n    el.classList.toggle("hidden");\n  });\n}\n\nfunction toggleDropdownMenu(event, menu, dropdownMenus) {\n  toggleMenu(menu);\n\n  // Close one dropdown when selecting another\n  Array.from(dropdownMenus)\n    .filter((el) => el !== menu && !menu.contains(el))\n    .forEach(closeMenu);\n\n  event.stopPropagation();\n}\n\nfunction toggleSubmenuDropdown(event, submenu) {\n  event.stopPropagation();\n  toggleMenu(submenu);\n\n  // Close sibling submenus at the same nesting level\n  const siblingSubmenus = submenu\n    .closest(".astronav-dropdown")\n    .querySelectorAll(".astronav-dropdown-submenu");\n  Array.from(siblingSubmenus)\n    .filter((el) => el !== submenu && !submenu.contains(el))\n    .forEach(closeMenu);\n}\n\nfunction closeAllDropdowns(event) {\n  const dropdownMenus = document.querySelectorAll(".dropdown-toggle");\n  const dropdownParent = document.querySelectorAll(\n    ".astronav-dropdown, .astronav-dropdown-submenu"\n  );\n  const isButtonInsideDropdown = [\n    ...document.querySelectorAll(\n      \\`.astronav-dropdown button, .astronav-dropdown label, .astronav-dropdown input,\n	  .astronav-dropdown-submenu button, .astronav-dropdown-submenu label, .astronav-dropdown-submenu input,\n	  #astronav-menu\\`\n    ),\n  ].some((button) => button.contains(event.target));\n  if (!isButtonInsideDropdown) {\n    dropdownMenus.forEach((d) => {\n      // console.log("I ran", d);\n      // if (!d.contains(event.target)) {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.classList.add("hidden");\n      // }\n    });\n    dropdownParent.forEach((d) => {\n      d.classList.remove("open");\n      d.removeAttribute("open");\n      d.setAttribute("aria-expanded", "false");\n    });\n  }\n}\n\nfunction toggleMenu(menu) {\n  menu.classList.toggle("open");\n  const expanded = menu.getAttribute("aria-expanded") === "true";\n  menu.setAttribute("aria-expanded", expanded ? "false" : "true");\n  menu.hasAttribute("open")\n    ? menu.removeAttribute("open")\n    : menu.setAttribute("open", "");\n\n  const dropdownToggle = menu.querySelector(".dropdown-toggle");\n  const dropdownExpanded = dropdownToggle.getAttribute("aria-expanded");\n  dropdownToggle.classList.toggle("hidden");\n  dropdownToggle.setAttribute(\n    "aria-expanded",\n    dropdownExpanded === "true" ? "false" : "true"\n  );\n}\n\nfunction closeMenu(menu) {\n  // console.log("closing", menu);\n  menu.classList.remove("open");\n  menu.removeAttribute("open");\n  menu.setAttribute("aria-expanded", "false");\n  const dropdownToggles = menu.querySelectorAll(".dropdown-toggle");\n  dropdownToggles.forEach((toggle) => {\n    toggle.classList.add("hidden");\n    toggle.setAttribute("aria-expanded", "false");\n  });\n}\n\nfunction handleCloseOnClick() {\n  const navMenuItems = document.querySelector(".astronav-items");\n  const navToggle = document.getElementById("astronav-menu");\n  const navLink = navMenuItems && navMenuItems.querySelectorAll("a");\n\n  const MenuIcons = navToggle.querySelectorAll(".astronav-toggle");\n\n  navLink &&\n    navLink.forEach((item) => {\n      item.addEventListener("click", () => {\n        navMenuItems?.classList.add("hidden");\n        MenuIcons.forEach((el) => {\n          el.classList.toggle("hidden");\n        });\n      });\n    });\n}\n})();<\/script>'])), renderSlot($$result, $$slots["default"]), defineScriptVars({ closeOnClick }));
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/Astronav.astro", void 0);

const $$Astro$9 = createAstro("https://agoragoakademisi.com");
const $$MenuIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="astronav-menu" aria-label="Toggle Menu"> ${renderSlot($$result, $$slots["default"], renderTemplate` <svg fill="currentColor"${addAttribute([className], "class:list")} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${spreadAttributes(rest)}> <title>Toggle Menu</title> <path class="astronav-close-icon astronav-toggle hidden" fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"></path> <path class="astronav-open-icon astronav-toggle" fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"></path> </svg> `)} </button>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/MenuIcon.astro", void 0);

const $$Astro$8 = createAstro("https://agoragoakademisi.com");
const $$OpenIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-open-icon astronav-toggle", className], "class:list")}${spreadAttributes(rest)}>${renderSlot($$result, $$slots["default"])}</span>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/OpenIcon.astro", void 0);

const $$Astro$7 = createAstro("https://agoragoakademisi.com");
const $$CloseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(["astronav-close-icon astronav-toggle hidden", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/CloseIcon.astro", void 0);

const $$Astro$6 = createAstro("https://agoragoakademisi.com");
const $$MenuItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MenuItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(["astronav-items astronav-toggle", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </nav>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/MenuItems.astro", void 0);

const $$Astro$5 = createAstro("https://agoragoakademisi.com");
const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Dropdown;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<menu${addAttribute(["astronav-dropdown", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false">${renderSlot($$result, $$slots["default"])}</menu>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/Dropdown.astro", void 0);

const $$Astro$4 = createAstro("https://agoragoakademisi.com");
const $$DropdownSubmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DropdownSubmenu;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown-submenu", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/DropdownSubmenu.astro", void 0);

const $$Astro$3 = createAstro("https://agoragoakademisi.com");
const $$DropdownItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DropdownItems;
  const { class: className, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["astronav-dropdown dropdown-toggle hidden", className], "class:list")}${spreadAttributes(rest)} aria-expanded="false"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/DropdownItems.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://agoragoakademisi.com");
const $$StickyHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$StickyHeader;
  const {
    scrollY = 100,
    defaultClass = "",
    activeClass = "",
    class: className = "",
    ...rest
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<header", "", " data-astro-cid-nvpbalwk> ", " </header> <script data-astro-rerun>(function(){", '\n  // @ts-nocheck\n  let lastKnownScrollPosition = 0;\n  let ticking = false;\n\n  const header = document.querySelector(".astronav-sticky-header");\n\n  // Define two different scroll positions\n  const addScrollY = Math.max(scrollY, 50); // Scroll position to add active class\n  const removeScrollY = Math.max(scrollY - 50, 10); // Scroll position to remove active class\n\n  function updateAnimation(scrollPos) {\n    if (scrollPos > addScrollY) {\n      header.classList.remove(...defaultClass.split(" "));\n      header.classList.add("is-active", ...activeClass.split(" "));\n      header.setAttribute("active", "");\n    } else if (scrollPos < removeScrollY) {\n      header.classList.remove("is-active", ...activeClass.split(" "));\n      header.classList.add(...defaultClass.split(" "));\n      header.removeAttribute("active");\n    }\n  }\n\n  window.addEventListener("scroll", function () {\n    lastKnownScrollPosition = window.scrollY;\n    if (!ticking) {\n      window.requestAnimationFrame(function () {\n        updateAnimation(lastKnownScrollPosition);\n        ticking = false;\n      });\n\n      ticking = true;\n    }\n  });\n})();<\/script> '])), maybeRenderHead(), addAttribute(["astronav-sticky-header", className, defaultClass], "class:list"), spreadAttributes(rest), renderSlot($$result, $$slots["default"]), defineScriptVars({ scrollY, defaultClass, activeClass }));
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/node_modules/.pnpm/astro-navbar@2.4.0/node_modules/astro-navbar/src/components/StickyHeader.astro", void 0);

const $$Astro$1 = createAstro("https://agoragoakademisi.com");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const menuitems = [
    { title: "Ligler", path: "/ligler" },
    { title: "Planlar", path: "/pricing" },
    { title: "Go A\u011Fac\u0131", path: "/goagaci" },
    { title: "K\xFCt\xFCphane", path: "/blog" },
    { title: "Hakk\u0131nda", path: "/about" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm h-20 transition-all"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full"> ${renderComponent($$result, "Astronav", $$Astronav, {}, { "default": async ($$result2) => renderTemplate`<div class="flex items-center justify-between w-full h-full">  <div class="flex-1 flex items-center justify-start"> <a href="/" class="flex items-center gap-2"> <img src="/for-light-logo.svg" alt="Agora Logo" class="h-10 w-auto object-contain block dark:hidden"> <img src="/for-dark-logo.svg" alt="Agora Dark Logo" class="h-10 w-auto object-contain hidden dark:block"> </a> </div>  <div class="hidden lg:flex flex-none justify-center"> ${renderComponent($$result2, "MenuItems", $$MenuItems, { "class": "hidden lg:flex" }, { "default": async ($$result3) => renderTemplate` <ul class="flex items-center gap-8"> ${menuitems.map((item) => {
    const isSpecial = item.title === "Go A\u011Fac\u0131";
    return renderTemplate`<li class="relative flex items-center"> <a${addAttribute(item.path, "href")}${addAttribute(`transition-all duration-300 whitespace-nowrap ${isSpecial ? "text-lg font-extrabold text-indigo-600 dark:text-indigo-400 scale-110 hover:scale-125 drop-shadow-sm" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium hover:scale-105"}`, "class")}> ${item.title} </a> </li>`;
  })} </ul> ` })} </div>  <div class="flex-1 flex items-center justify-end gap-4">  <div class="hidden lg:flex items-center gap-4"> <div id="nav-auth-container" class="flex items-center"> <a id="nav-login-btn" href="/signup" class="whitespace-nowrap px-6 py-2.5 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors shadow-sm hover:shadow-md">
Giriş Yap
</a> <a id="nav-profile-btn" href="/profile" class="hidden flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all border border-transparent hover:border-gray-200"> <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"> <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path> </svg> </div> <span id="nav-user-name" class="text-sm font-medium text-gray-700 dark:text-gray-200">Profilim</span> </a> </div> <div class="h-6 w-px bg-gray-200 dark:bg-gray-700"></div> <button id="theme-toggle" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all focus:outline-none"> <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg> <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> </button> </div> <div class="block lg:hidden"> ${renderComponent($$result2, "MenuIcon", $$MenuIcon, { "class": "w-6 h-6 text-gray-800 dark:text-gray-200" })} </div> </div> </div> ${renderComponent($$result2, "MenuItems", $$MenuItems, { "class": "hidden lg:hidden mt-4" }, { "default": async ($$result3) => renderTemplate` <ul class="flex flex-col gap-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-lg p-4 shadow-lg"> ${menuitems.map((item) => renderTemplate`<li><a${addAttribute(item.path, "href")} class="block py-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium">${item.title}</a></li>`)} <li class="pt-2 border-t border-gray-100 dark:border-gray-800">  <a id="mobile-nav-login-btn" href="/signup" class="block py-2 text-center text-white bg-slate-800 rounded-full font-bold">
Giriş Yap
</a>  <a id="mobile-nav-profile-btn" href="/profile" class="hidden flex items-center justify-center gap-2 py-2 text-center text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full font-bold border border-indigo-100 dark:border-indigo-800"> <div class="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 text-xs">
👤
</div> <span id="mobile-user-name">Profilim</span> </a> </li> </ul> ` })} ` })} </div> </header> <div class="h-20"></div> ${renderScript($$result, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/navbar/navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/navbar/navbar.astro", void 0);

const $$CookieConsent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="cookie-banner" class="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 hidden transition-all duration-500 transform translate-y-full"> <div class="max-w-screen-xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4"> <div class="text-slate-600 text-sm md:text-base"> <p>
Sizlere daha iyi hizmet sunabilmek için sitemizde çerezler (cookies) kullanıyoruz. 
        Detaylı bilgi için <a href="/KVKK" class="text-black font-semibold underline hover:text-slate-700">Gizlilik ve Çerez Politikamızı</a> inceleyebilirsiniz.
</p> </div> <div class="flex gap-3"> <button id="accept-cookies" class="bg-black text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors whitespace-nowrap shadow-sm">
Kabul Et
</button> <button id="close-cookie-banner" class="text-slate-500 hover:text-slate-800 p-2" aria-label="Kapat"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </button> </div> </div> </div> ${renderScript($$result, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/CookieConsent.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://agoragoakademisi.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const resolvedImageWithDomain = new URL(
    "/CircleLogo450.png",
    Astro2.site
  ).toString();
  const { title } = Astro2.props;
  const makeTitle = title ? title + " | Agora Go Akademisi" : "Agora Go Akademisi - \xC7evrimi\xE7i Go E\u011Fitim Platformu";
  return renderTemplate(_a || (_a = __template(['<html lang="tr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/CircleLogo450.ico"><meta name="generator"', "><script>\n      const theme = (() => {\n        if (typeof localStorage !== 'undefined' && localStorage.getItem('color-theme')) {\n          return localStorage.getItem('color-theme');\n        }\n        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n          return 'dark';\n        }\n        return 'light';\n      })(); \n    \n      if (theme === 'dark') {\n        document.documentElement.classList.add('dark');\n        document.documentElement.classList.remove('light'); \n      } else {\n        document.documentElement.classList.remove('dark'); \n        document.documentElement.classList.add('light');    \n      }\n    <\/script>", '<script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "Organization",\n      "name": "Agora Go Akademisi",\n      "url": "https://agoragoakademisi.com",\n      "logo": "https://agoragoakademisi.com/CircleLogo450.png"\n    }\n    <\/script>', '</head> <body class="bg-[#DFE1E5] dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"> <div id="app-navbar"> ', " </div> <main> ", ' </main> <div id="app-footer"> ', " </div> ", "  </body> </html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, { "title": makeTitle, "description": "Agora Go Akademisi, T\xFCrkiye'deki oyuncular i\xE7in \xE7evrimi\xE7i Go e\u011Fitimi sunan bir platformdur...", "canonical": canonicalURL, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: `Agora Go Akademisi - \xC7evrimi\xE7i Go E\u011Fitim Platformu`,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Agora Go Akademisi Ana Sayfa"
    }
  } }), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "CookieConsent", $$CookieConsent, {}));
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
