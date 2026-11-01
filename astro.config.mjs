import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site';

export default defineConfig({
  // Domain produksi hanya diatur di src/config/site.ts.
  site: siteConfig.url,
  trailingSlash: 'never',
  output: 'static',
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Halaman internal/development dan 404 tidak perlu masuk sitemap.
      filter: (page) => !page.includes('/dev/') && !/\/404\/?$/.test(page),
    }),
  ],
});
