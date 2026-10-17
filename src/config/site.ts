export const siteConfig = {
  // Identitas bisnis
  name: 'BUSINESS_NAME',
  legalName: '',
  tagline: 'BUSINESS_TAGLINE',
  description: 'BUSINESS_DESCRIPTION',

  // Domain website
  url: 'https://example.com',

  // Informasi kontak
  contact: {
    whatsapp: '',
    phone: '',
    email: '',
  },

  // Alamat bisnis
  address: {
    street: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'Indonesia',
  },

  // Media sosial
  social: {
    instagram: '',
    facebook: '',
    tiktok: '',
    youtube: '',
  },

  // Navigasi global
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],

  // SEO dan social sharing
  seo: {
    defaultTitle: 'BUSINESS_NAME | BUSINESS_TAGLINE',
    titleTemplate: '%s | BUSINESS_NAME',
    defaultDescription: 'BUSINESS_DESCRIPTION',
    ogImage: '/images/og-image.jpg',
    locale: 'id_ID',
  },
};
