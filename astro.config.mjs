import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from '@astrojs/react';

export default defineConfig({
  site: "https://agoragoakademisi.com",
  integrations: [tailwind(), mdx(), sitemap(), icon(), react()],


});