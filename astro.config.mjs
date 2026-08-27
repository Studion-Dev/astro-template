// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs(), sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp', // Menggunakan Sharp untuk optimasi gambar
    },
  },
})
