import type { HomeContent } from '../types';

/**
 * Konten homepage.
 *
 * Hanya berisi section yang benar-benar dirender di `src/pages/index.astro`.
 * Saat menambah section baru: tambahkan key di `HomeContent`
 * (`src/config/types.ts`), isi datanya di sini, lalu render di halaman.
 */
export const homeContent = {
  hero: {
    eyebrow: 'ASTRO BUSINESS TEMPLATE',
    title: 'Fondasi website bisnis yang siap dirakit per klien.',
    description:
      'Layout, design token, navbar, footer, dan SEO sudah disiapkan. Section dan halaman dibangun sesuai brief masing-masing klien.',

    primaryCta: {
      label: 'Mulai dari brief',
      href: '#kontak',
    },

    secondaryCta: {
      label: 'Lihat struktur',
      href: '#struktur',
    },
  },
} satisfies HomeContent;
