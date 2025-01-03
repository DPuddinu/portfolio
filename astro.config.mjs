import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

import compressor from 'astro-compressor';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), sitemap(), compressor()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});