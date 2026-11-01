/**
 * Tipe konfigurasi template.
 *
 * File ini adalah kontrak antara data klien dan komponen.
 * Jika sebuah field wajib belum diisi, build akan gagal lebih awal
 * daripada menghasilkan halaman dengan konten kosong.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  /** Nomor WhatsApp format internasional tanpa tanda plus, contoh: 6281234567890 */
  whatsapp: string;
  phone: string;
  email: string;
  /** Jam operasional, contoh: Senin–Sabtu 09.00–18.00 */
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  tiktok: string;
  youtube: string;
}

export interface SeoConfig {
  defaultTitle: string;
  /** Gunakan `%s` sebagai placeholder judul halaman. */
  titleTemplate: string;
  defaultDescription: string;
  ogImage: string;
  locale: string;
  /** Samakan dengan `--color-primary` di `src/styles/global.css`. */
  themeColor: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  /** Domain produksi tanpa trailing slash, contoh: https://klien.com */
  url: string;
  contact: ContactInfo;
  address: Address;
  social: SocialLinks;
  navigation: NavItem[];
  seo: SeoConfig;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

/**
 * Konten khusus homepage.
 * Section baru menambahkan key-nya sendiri di sini (dan di `content/home.ts`)
 * agar tipe tetap menjadi sumber kebenaran.
 */
export interface HomeContent {
  hero: HeroContent;
}
