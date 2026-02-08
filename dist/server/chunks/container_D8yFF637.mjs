import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, i as renderSlot, a as renderTemplate } from './astro/server_DQB4DWMI.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://agoragoakademisi.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className, fluid = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "mx-auto px-4 lg:px-8",
    // Kenar boşluklarını biraz artırdık
    fluid ? "w-full max-w-[1920px]" : "max-w-screen-xl",
    // Fluid ise geniş, değilse standart
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/alikarakaya/Desktop/Agora/Agora_1.0.1/src/components/container.astro", void 0);

export { $$Container as $ };
