// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import svelte from '@astrojs/svelte';

import partytown from '@astrojs/partytown';
import { SITE_DOMAIN } from './src/consts';

export default defineConfig({
    site: `https://www.${SITE_DOMAIN}`,
    integrations: [mdx(), sitemap({
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date(),
    }), svelte(), partytown()],
    vite: {
    plugins: [tailwindcss()],
  },
});