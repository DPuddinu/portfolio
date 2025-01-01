import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    compress(),
    sitemap()
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
