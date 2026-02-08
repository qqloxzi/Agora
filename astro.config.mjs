import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from '@astrojs/react';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // 👇 BU SATIRI EKLEMENİZ ŞART (SSR MODUNU AÇAR)
  output: 'server',

  site: "https://agoragoakademisi.com",
  integrations: [tailwind(), mdx(), sitemap(), icon(), react()],

  adapter: node({
    mode: "standalone",
  }),
});