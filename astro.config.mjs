import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
