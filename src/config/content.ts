// Types untuk kepastian data TypeScript
export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface PricingItem {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
}

// Data Konten
export const heroContent = {
  badge: 'Jasa Website Profesional',
  title: 'Bikin Website Bisnis Tanpa Ribet',
  description:
    'Desain visual menarik, cepat diakses, dan responsif di semua perangkat.',
  ctaPrimary: 'Konsultasi Gratis',
  ctaSecondary: 'Lihat Paket',
}

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Berapa lama proses pembuatan websitenya?',
    answer:
      'Proses pengerjaan biasanya memakan waktu 3 - 7 hari kerja bergantung pada kelengkapan materi kamu.',
  },
  {
    id: 'faq-2',
    question: 'Apakah sudah termasuk domain dan hosting?',
    answer:
      'Ya, semua paket sudah include domain .com/.id dan hosting selama 1 tahun.',
  },
]

export const pricingList: PricingItem[] = [
  {
    name: 'Basic',
    price: '1.5 Jt',
    description: 'Cocok untuk landing page promosi produk tunggal.',
    features: [
      'Single Page / One Page',
      'Desain Responsif',
      'Tombol WhatsApp Direct',
    ],
  },
  {
    name: 'Pro',
    price: '3 Jt',
    description: 'Solusi lengkap untuk profil perusahaan & jasa profesional.',
    features: [
      'Multi Page',
      'Komponen Interaktif (Accordion/Tabs)',
      'SEO Basic + Sitemap',
    ],
    isPopular: true,
  },
]
