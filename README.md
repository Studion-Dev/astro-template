# 🚀 Astro Web Service Template

Template website agensi / jasa pembuatan website profesional berbasis **Astro**, **Tailwind CSS v4**, dan **Alpine.js**. Didesain dengan arsitektur _Config-Driven_ agar proses _development_ dan maintenance untuk tiap klien baru bisa selesai dalam hitungan menit.

---

## 🛠️ Tech Stack & Integrasi

- **Framework:** [Astro](https://astro.build/) (Latest)
- **Package Manager:** `pnpm`
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Interaktivitas UI:** [Alpine.js](https://alpinejs.dev/) + `@alpinejs/collapse`
- **Icon:** `@lucide/astro` / Native SVG
- **Image Engine:** Sharp
- **SEO & Utility:** `@astrojs/sitemap`, Dynamic `robots.txt`

---

## 🚀 Panduan Memulai (Quick Start)

### 1. Clone / Gunakan Template

Klik tombol **"Use this template"** di repositori GitHub ini, atau clone secara lokal:

```bash
# Clone Github commit terbaru
git clone --depth=1 https://github.com/Studion-Dev/astro-template.git nama-project-klien
cd nama-project-klien
```

atau

```bash
# Clone lokal commit terbaru
git clone --depth=1 file:///D:/Dev/astro-template ../Portfolio\ Landing\ Page/nama-project-baru
cd ../Portfolio\ Landing\ Page/nama-project-klien
```

### 2. Putus hubungan dengan template

```bash
# Putus hubungan dengan template (menghapus file .git)
rm -rf .git
```

### 3. Inisialisasi Ulang & Install Dependencies

```bash
git init
pnpm install
```

### 4. Jalankan Local Development

```bash
pnpm dev
```

### 5. # Tambahkan remote ke repo github

```bash
git remote add origin git@github-agency:Studion-Dev/[nama repositori].git
git remote add origin git@github-personal:Dion-Mantovani/[nama repositori].git
```

Buka http://localhost:4321 di browser untuk melihat hasilnya.

---

## ⚙️ Workflow Klien Baru (Langkah Pertama Pasca-Clone)

Setiap kali mendapatkan project klien baru, lakukan 3 langkah sederhana ini tanpa perlu menyentuh atau merombak kodingan UI/Komponen:

1. **Ubah Identitas & SEO (`src/config/site.ts`)**
   - Isikan Nama Klien, Tagline, Deskripsi, Nomor WhatsApp, Email, Alamat, dan Link Navigasi.
2. **Ubah Isi Konten (`src/config/content.ts`)**
   - Isikan teks Hero, daftar FAQ (Accordion), daftar Paket Harga (Pricing), dan Testimoni (Carousel).
3. **Set URL Domain Klien (`astro.config.mjs`)**
   - Ganti properti `site` ke domain asli klien (misal: `https://klienbisnis.com`) agar `sitemap-index.xml` dan `robots.txt` ter-generate otomatis dengan akurat.
4. **Atur Skema Warna (`src/styles/global.css`)**
   - Sesuaikan variabel `--color-primary` dan `--color-secondary` di blok `@theme` sesuai brand identity klien.

---

## 📁 Arsitektur Folder Project

```bash
astro-template/
├── public/
│   ├── favicon.svg
│   └── images/               # Asset statis global (og-image, logo klien)
├── src/
│   ├── components/
│   │   ├── core/             # Layout global: Navbar.astro, Footer.astro, SEO.astro
│   │   ├── sections/         # Blok halaman utama: Hero, StatsSection, StaggeredSection
│   │   └── ui/               # Komponen reusabel: Accordion, Tabs, Carousel
│   ├── config/               # 🔴 WAKTU MAINTENANCE: Cukup edit 2 file ini!
│   │   ├── site.ts           # Metadata, info kontak, menu navigasi
│   │   └── content.ts        # Data teks hero, FAQ, Testimoni, Paket Harga
│   ├── layouts/
│   │   └── Layout.astro      # Root HTML shell + font & script global
│   ├── pages/
│   │   ├── index.astro       # Entry point landing page utama
│   │   └── robots.txt.ts     # Dynamic robots.txt generator (Dev vs Prod aware)
│   ├── script/
│   │   ├── alpine.ts         # Registrasi plugin Alpine.js (@alpinejs/collapse)
│   │   └── animations.ts     # Engine Intersection Observer (Reveal & Counter)
│   └── styles/
│       └── global.css        # Base Tailwind v4, @theme variables, & @utility custom
├── astro.config.mjs
├── prettier.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🎭 Fitur Utility & Animasi Kustom

### 1. Scroll Reveal Animation

Cukup tambahkan class berikut pada elemen HTML/Astro yang ingin dianimasikan saat di-scroll:

- **`class="reveal"`** $\rightarrow$ Elemen meluncur dari **bawah**.
- **`class="reveal-left"`** $\rightarrow$ Elemen meluncur dari **kiri**.
- **`class="reveal-right"`** $\rightarrow$ Elemen meluncur dari **kanan**.

#### Animasi Berurutan (Staggered Reveal)

Gunakan utility `delay-*` bawaan Tailwind CSS v4 untuk memberikan efek animasi yang muncul secara berurutan:

```html
<div class="reveal">Item 1 (Muncul Pertama)</div>
<div class="reveal delay-200">Item 2 (Jeda 200ms)</div>
<div class="reveal delay-400">Item 3 (Jeda 400ms)</div>
```

### 2. Counter Animation Numbers

Gunakan class counter dan atribut data-target untuk angka statistik yang otomatis bertambah (counting animation) saat elemen masuk ke viewport:

```html
<span class="counter" data-target="150">0</span>+
<!-- Hasil: 150+ -->
<span class="counter" data-target="4.9">0</span>/5.0
<!-- Hasil: 4.9/5.0 -->
<span class="counter" data-target="10000">0</span>k+
<!-- Hasil: 10k+ -->
```

### 3. Scrollbar Utilities

- **`class="no-scrollbar"`** $\rightarrow$ Menyembunyikan scrollbar total.
- **`class="scrollbar-autohide"`** $\rightarrow$ Scrollbar hanya muncul saat area di-hover/scroll.
- **`class="scrollbar-visible"`** $\rightarrow$ Scrollbar minimalis selalu terlihat.

---

## 🟢 Yang Boleh & Disarankan Untuk Diubah

- **`src/config/site.ts & src/config/content.ts`**: Tempat utama untuk penyesuaian data klien.
- **`src/styles/global.css (@theme section)`**: Mengubah warna utama, font, dan variabel styling.
- **`src/pages/index.astro`**: Menyusun ulang / memanggil section UI sesuai paket jasa yang diambil klien.

---

## 🛑 Yang Sangat Tidak Disarankan Diubah (Kecuali Ada Kebutuhan Spesifik)

- **`src/script/alpine.ts & src/script/animations.ts`**: Core engine untuk animasi interaktif dan observer.
- **`src/pages/robots.txt.ts`**: Menjaga agar localhost/staging tidak di-indeks Google secara tidak sengaja, tapi otomatis diizinkan saat build produksi.
- **`src/components/core/SEO.astro`**: Penanganan OpenGraph & Twitter Meta Tag.

---

## 📜 Command Reference

| Perintah           | Fungsi                                                                   |
| :----------------- | :----------------------------------------------------------------------- |
| `pnpm dev`         | Menjalankan server lokal untuk development (`http://localhost:4321`)     |
| `pnpm build`       | Membangun file output produksi yang sudah di-minify ke folder `dist/`    |
| `pnpm preview`     | Uji coba lokal untuk melihat hasil build produksi sebelum di-deploy      |
| `pnpm astro check` | Memeriksa error tipe TypeScript dan sintaks file Astro secara menyeluruh |
