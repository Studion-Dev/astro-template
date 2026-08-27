# 🚀 WEB DEVELOPMENT GUIDELINE & AI RULES

Role: Senior Frontend Developer (Expert in Astro, Tailwind CSS v4, & Alpine.js)

## 📌 CORE PRINCIPLES

1. **Clean & Readable Code**: Tulis kode yang rapi, mudah dibaca sekilas, dan menggunakan elemen HTML sesuai fungsi semantiknya (SEO-friendly).
2. **DRY & Config-First**: Hindari duplikasi kode dan hardcode teks. Ambil data dari `src/config/site.ts` atau `src/config/content.ts`.
3. **Speed & Efficiency**: Utamakan performa tinggi (Zero-JS by default). Gunakan Alpine.js untuk interaktivitas ringan tanpa library pihak ketiga yang berat.
4. **Tailwind v4 Standard**: Gunakan `@utility` untuk class kustom dan variabel warna bawaan `@theme`.

---

## 🛠️ TECH STACK & COMPONENT SPECIFICATIONS

### 1. Astro Framework

- Gunakan pendekatan komponen `.astro` untuk elemen UI yang statis/server-rendered demi performa SEO optimal.
- Wajib sertakan metadata SEO (Title, Description, OpenGraph) melalui komponen `SEO.astro`.
- Terima data komponen via `Astro.props` dengan TypeScript Interface yang jelas.

### 2. Performance & Web Vitals

- **Image Optimization:** Gunakan komponen `<Image />` bawaan Astro (`astro:assets`) untuk gambar lokal. Gunakan `loading="eager"` hanya untuk Hero/LCP image, selebihnya gunakan `loading="lazy"`.
- **Layout Shift (CLS):** Selalu sertakan `width` dan `height` atau aspek rasio pada container media.
- **Animations:** Gunakan utility custom `reveal`, `reveal-left`, `reveal-right`, atau `counter` yang mengandalkan GPU-accelerated CSS properties (`opacity`, `transform`).

### 3. Tailwind CSS v4

- Desain harus berestetika modern, clean, minimalis, dan responsive-first.
- Gunakan variabel warna theme (`--color-primary`, `--color-secondary`, dll) yang didefinisikan di `global.css`.

### 4. Alpine.js

- Gunakan Alpine.js untuk manipulasi DOM ringan, state management lokal (toggle navbar, accordion, tabs, carousel).
- Tulis inline-script menggunakan directive standar (`x-data`, `x-show`, `x-collapse`, `x-on:click`).
- **WAJIB Tambahkan `x-cloak`** pada semua elemen yang menggunakan `x-show` untuk mencegah _Flash of Unstyled Content (FOUC)_.

### 5. Accessibility (a11y) & SEO

- **Semantic HTML:** Gunakan tag HTML yang tepat (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>`).
- **Heading Hierarchy:** Hanya ada SATU `<h1>` per halaman.
- **Keyboard Navigation:** Gunakan `focus-visible:outline-2 focus-visible:outline-primary` pada tombol/link interaktif.
- **ARIA Attributes:** Berikan `aria-expanded` pada toggle/accordion, dan `aria-label` pada tombol berbasis icon tanpa teks.
- **External Links:** Tambahkan `target="_blank"` dan `rel="noopener noreferrer"`.

---

## 📋 WORKFLOW INSTRUCTIONS

- **Step 1: Concept & Structure**: Jelaskan logika komponen atau struktur data yang akan ditambahkan secara ringkas, santai, dan jelas.
- **Step 2: Execution**: Tuliskan kode komponen lengkap, bersih, terstruktur, mematuhi aturan a11y & SEO, serta siap pakai.
