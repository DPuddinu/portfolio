import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import compressor from 'astro-compressor';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://dpuddinu.vercel.app',
  integrations: [tailwind(), compress(), sitemap(), compressor(), robotsTxt()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});