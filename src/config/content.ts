export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const heroContent = {
  badge: 'Jasa Website Profesional',
  title: 'Bikin Website Bisnis Tanpa Ribet',
  description:
    'Desain menarik, cepat diakses, dan responsif di berbagai perangkat.',
  ctaPrimary: 'Konsultasi Gratis',
  ctaSecondary: 'Lihat Layanan',
};

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama proses pembuatan website?',
    answer:
      'Durasi pengerjaan menyesuaikan kebutuhan proyek dan kelengkapan materi dari klien.',
  },
  {
    id: 'faq-2',
    question: 'Apakah sudah termasuk domain dan hosting?',
    answer:
      'Detail domain dan hosting mengikuti paket serta kesepakatan proyek.',
  },
];

export const pricingList: PricingItem[] = [
  {
    name: 'Basic',
    price: '1.5 Jt',
    description: 'Cocok untuk landing page promosi produk atau layanan.',
    features: ['Website satu halaman', 'Desain responsif', 'Tombol WhatsApp'],
  },
  {
    name: 'Pro',
    price: '3 Jt',
    description: 'Untuk profil perusahaan dan bisnis jasa profesional.',
    features: [
      'Website multi halaman',
      'Komponen interaktif sesuai kebutuhan',
      'SEO dasar dan sitemap',
    ],
    isPopular: true,
  },
];
