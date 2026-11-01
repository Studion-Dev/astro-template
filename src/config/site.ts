import type { SiteConfig } from './types';

/**
 * Identitas bisnis klien.
 *
 * Ini satu-satunya tempat untuk nama, kontak, alamat, sosial media,
 * navigasi, dan metadata SEO. `astro.config.mjs` membaca `url` dari sini,
 * jadi domain tidak perlu diubah di dua tempat.
 */
export const siteConfig = {
  name: 'NAMA_BISNIS',
  legalName: '',
  tagline: 'TAGLINE_BISNIS',
  description: 'DESKRIPSI_BISNIS',

  url: 'https://example.com',

  contact: {
    // Format internasional tanpa tanda plus, contoh: 6281234567890
    whatsapp: '',
    phone: '',
    email: '',
    // Contoh: Senin–Sabtu 09.00–18.00
    hours: '',
  },

  address: {
    street: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Indonesia',
  },

  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: '',
  },

  // Untuk homepage satu halaman, gunakan anchor (contoh: #kontak).
  // Target anchor wajib punya id yang sesuai di halaman.
  navigation: [
    { label: 'Beranda', href: '/' },
    { label: 'Kontak', href: '#kontak' },
  ],

  seo: {
    defaultTitle: 'NAMA_BISNIS | TAGLINE_BISNIS',
    titleTemplate: '%s | NAMA_BISNIS',
    defaultDescription: 'DESKRIPSI_BISNIS',
    ogImage: '/og-image.png',
    locale: 'id_ID',
    // Samakan dengan --color-primary di src/styles/global.css
    themeColor: '#2563eb',
  },
} satisfies SiteConfig;

/** Nomor WA tanpa karakter selain angka. */
export function getWhatsAppNumber(): string {
  return siteConfig.contact.whatsapp.replace(/\D/g, '');
}

/**
 * URL WhatsApp click-to-chat.
 * Mengembalikan `null` jika nomor belum diisi, supaya komponen bisa
 * menyembunyikan tombol alih-alih menghasilkan link rusak.
 */
export function getWhatsAppUrl(message?: string): string | null {
  const number = getWhatsAppNumber();

  if (!number) return null;

  const query = message ? `?text=${encodeURIComponent(message)}` : '';

  return `https://wa.me/${number}${query}`;
}

/** Alamat satu baris, tanpa bagian yang kosong. */
export function getFormattedAddress(): string {
  const { street, city, province, postalCode, country } = siteConfig.address;

  return [street, city, province, postalCode, country]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(', ');
}
