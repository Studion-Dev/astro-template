/**
 * Homepage content
 */

export const homeContent = {
  // Hero section
  hero: {
    eyebrow: 'HERO_EYEBROW',
    title: 'HERO_TITLE',
    description: 'HERO_DESCRIPTION',

    primaryCta: {
      label: 'PRIMARY_CTA_LABEL',
      href: '#contact',
    },

    secondaryCta: {
      label: 'SECONDARY_CTA_LABEL',
      href: '#services',
    },

    image: {
      src: '/images/hero.jpg',
      alt: 'HERO_IMAGE_DESCRIPTION',
    },
  },

  // About section
  about: {
    eyebrow: 'ABOUT_EYEBROW',
    title: 'ABOUT_TITLE',
    description: 'ABOUT_DESCRIPTION',

    image: {
      src: '/images/about.jpg',
      alt: 'ABOUT_IMAGE_DESCRIPTION',
    },
  },

  // Benefits / value propositions
  benefits: {
    eyebrow: 'BENEFITS_EYEBROW',
    title: 'BENEFITS_TITLE',
    description: 'BENEFITS_DESCRIPTION',

    items: [
      {
        title: 'BENEFIT_1_TITLE',
        description: 'BENEFIT_1_DESCRIPTION',
      },
      {
        title: 'BENEFIT_2_TITLE',
        description: 'BENEFIT_2_DESCRIPTION',
      },
      {
        title: 'BENEFIT_3_TITLE',
        description: 'BENEFIT_3_DESCRIPTION',
      },
    ],
  },

  // Services / products / packages
  services: {
    eyebrow: 'SERVICES_EYEBROW',
    title: 'SERVICES_TITLE',
    description: 'SERVICES_DESCRIPTION',

    items: [
      {
        title: 'SERVICE_1_TITLE',
        description: 'SERVICE_1_DESCRIPTION',
        image: '/images/service-1.jpg',
        imageAlt: 'SERVICE_1_IMAGE_DESCRIPTION',
        ctaLabel: 'SERVICE_1_CTA_LABEL',
        ctaHref: '#contact',
      },
      {
        title: 'SERVICE_2_TITLE',
        description: 'SERVICE_2_DESCRIPTION',
        image: '/images/service-2.jpg',
        imageAlt: 'SERVICE_2_IMAGE_DESCRIPTION',
        ctaLabel: 'SERVICE_2_CTA_LABEL',
        ctaHref: '#contact',
      },
      {
        title: 'SERVICE_3_TITLE',
        description: 'SERVICE_3_DESCRIPTION',
        image: '/images/service-3.jpg',
        imageAlt: 'SERVICE_3_IMAGE_DESCRIPTION',
        ctaLabel: 'SERVICE_3_CTA_LABEL',
        ctaHref: '#contact',
      },
    ],
  },

  // Social proof / testimonials
  testimonials: {
    eyebrow: 'TESTIMONIALS_EYEBROW',
    title: 'TESTIMONIALS_TITLE',
    description: 'TESTIMONIALS_DESCRIPTION',

    items: [
      {
        name: 'CUSTOMER_1_NAME',
        role: 'CUSTOMER_1_ROLE',
        quote: 'CUSTOMER_1_TESTIMONIAL',
        image: '',
      },
      {
        name: 'CUSTOMER_2_NAME',
        role: 'CUSTOMER_2_ROLE',
        quote: 'CUSTOMER_2_TESTIMONIAL',
        image: '',
      },
    ],
  },

  // Frequently asked questions
  faq: {
    eyebrow: 'FAQ_EYEBROW',
    title: 'FAQ_TITLE',

    items: [
      {
        question: 'FAQ_QUESTION_1',
        answer: 'FAQ_ANSWER_1',
      },
      {
        question: 'FAQ_QUESTION_2',
        answer: 'FAQ_ANSWER_2',
      },
      {
        question: 'FAQ_QUESTION_3',
        answer: 'FAQ_ANSWER_3',
      },
    ],
  },

  // Final call to action
  finalCta: {
    eyebrow: 'FINAL_CTA_EYEBROW',
    title: 'FINAL_CTA_TITLE',
    description: 'FINAL_CTA_DESCRIPTION',
    buttonLabel: 'FINAL_CTA_BUTTON_LABEL',
    buttonHref: '#contact',
  },
};
