export const siteConfig = {
  name: 'Nama Bisnis',
  description: 'Deskripsi singkat bisnis atau perusahaan.',
  url: 'https://domain-klien.com',
  ogImage: '/images/og.jpg',

  contact: {
    whatsapp: '6281234567890',
    email: 'halo@domainklien.com',
    address: 'Jakarta, Indonesia',
  },

  navigation: [
    { name: 'Beranda', href: '/' },
    { name: 'Layanan', href: '/layanan/' },
    { name: 'Tentang Kami', href: '/tentang-kami/' },
    { name: 'Kontak', href: '/kontak/' },
  ],
} as const;
