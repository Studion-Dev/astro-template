# Astro Business Template

Template fondasi untuk website bisnis (landing page & company profile) yang dipakai
lintas klien dan lintas niche.

Yang **permanen** di template ini: layout shell, navbar, footer, SEO, dan design token.
Yang **dirakit per klien**: section, konten, dan halaman sesuai brief.

---

## Teknologi

- **Framework:** Astro 7 (`output: 'static'`)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Interaktivitas:** JavaScript native (tanpa framework client)
- **Ikon:** `@lucide/astro` (tersedia, dipakai saat butuh)
- **Gambar:** `sharp` + `astro:assets`
- **SEO:** `@astrojs/sitemap`, `robots.txt` dinamis
- **Package manager:** pnpm
- **Font:** Google Fonts (Inter + Plus Jakarta Sans)

---

## Quick start

```bash
git clone --depth=1 https://github.com/Studion-Dev/astro-template.git nama-project-klien
cd nama-project-klien
rm -rf .git
git init
pnpm install
pnpm dev
```

Buka `http://localhost:4321`.

> `pnpm-workspace.yaml` di repo ini bukan workspace monorepo. Isinya setting pnpm
> (`allowBuilds` dan `minimumReleaseAgeExclude`), jadi biarkan apa adanya.

---

## Workflow klien baru

Urutan kerjanya sengaja dibuat pendek supaya agent maupun manusia tidak perlu
menyentuh komponen inti.

1. **Baca `PRD.md`** — brief bisnis per klien, diletakkan di root saat proyek
   dimulai (tidak disertakan di template). Panduan pemetaan PRD ada di `AGENTS.md`
   bagian 3.
2. **Identitas & SEO** — isi `src/config/site.ts`:
   nama, tagline, deskripsi, domain, kontak (termasuk jam operasional), alamat,
   sosial media, navigasi, SEO.
3. **Token desain** — sesuaikan palet di blok `@theme` `src/styles/global.css`.
   Ubah **primitive** (`--color-brand-*`, `--color-neutral-*`) dan warna brand
   `--color-brand-secondary` / `--color-accent`, bukan nama token semantic.
4. **Konten halaman** — isi `src/config/content/home.ts` (atau file per halaman lain).
5. **Section** — rakit section bisnis di `src/components/sections/`, lalu panggil
   dari `src/pages/index.astro`. Tambahkan key kontennya di
   `src/config/types.ts` + file content terkait.
6. **Navigasi** — pastikan setiap `href` di `siteConfig.navigation` mengarah ke
   halaman atau anchor yang benar-benar ada.
7. **Aset** — ganti `public/og-image.png` dan `public/favicon.svg`, lalu taruh
   gambar konten di `src/assets/images/`.
8. **Verifikasi** — `pnpm check`, `pnpm build`, lalu cek hasilnya di browser.

### Domain

Domain produksi **hanya** diatur di `src/config/site.ts` (`url`).
`astro.config.mjs` mengimpor nilai tersebut, jadi tidak ada duplikasi.

---

## Struktur folder

```text
.
├── public/                     # File ber-URL tetap: favicon, og-image
├── src/
│   ├── assets/images/          # Gambar konten (diproses astro:assets)
│   ├── components/
│   │   ├── core/               # Navbar, Footer, SEO — stabil
│   │   ├── sections/           # Section bisnis, dirakit per klien
│   │   ├── ui/                 # Primitif reusable (dibuat saat dibutuhkan)
│   │   └── patterns/           # Referensi: About, FAQ, form WhatsApp
│   ├── config/
│   │   ├── site.ts             # Identitas bisnis + helper WA/alamat
│   │   ├── types.ts            # Kontrak tipe config
│   │   └── content/
│   │       └── home.ts         # Konten homepage
│   ├── layouts/Layout.astro    # HTML shell, font, skip link, script global
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   └── robots.txt.ts
│   ├── scripts/reveal.js       # Scroll reveal (Intersection Observer)
│   └── styles/global.css       # Token, base styles, reveal CSS
├── AGENTS.md                   # Aturan kerja agent + kontrak PRD
└── astro.config.mjs
```

`PRD.md` tidak disertakan di template. File itu diletakkan di root saat proyek
klien dimulai.

Folder `components/ui/` dan `components/sections/` sengaja dibiarkan kosong
sampai ada kebutuhan nyata. Jangan membuat folder atau komponen yang belum dipakai.

Folder `components/patterns/` berisi referensi (About, FAQ, form WhatsApp). File di
sana tidak di-import dari halaman dan tidak ikut bundle. Copy dulu ke `sections/`,
lalu sambungkan kontennya.

---

## Konfigurasi

`siteConfig` (`src/config/site.ts`) memakai `satisfies SiteConfig`, sehingga field
yang salah atau kurang langsung gagal saat `pnpm check`.

Helper yang tersedia:

| Helper                     | Fungsi                                          |
| :------------------------- | :---------------------------------------------- |
| `getWhatsAppUrl(message?)` | URL `wa.me`, atau `null` jika nomor belum diisi |
| `getWhatsAppNumber()`      | Nomor WA tanpa karakter selain angka            |
| `getFormattedAddress()`    | Alamat satu baris tanpa bagian kosong           |

Komponen menyembunyikan tombol/link WhatsApp jika nomornya kosong, supaya tidak
ada link rusak saat template masih berupa placeholder.

### Navigasi

Untuk homepage satu halaman, gunakan anchor:

```ts
navigation: [
  { label: 'Beranda', href: '/' },
  { label: 'Kontak', href: '#kontak' },
],
```

Target anchor wajib punya `id` dan `scroll-mt-*` agar tidak tertutup navbar sticky.
`#kontak` sudah tersedia di footer.

---

## Animasi reveal

Tambahkan atribut `data-reveal` pada elemen:

```html
<div data-reveal="up">Muncul dari bawah</div>
<div data-reveal="left">Muncul dari kiri</div>
```

Nilai yang tersedia: `up`, `down`, `left`, `right`.
Efek berurutan bisa memakai inline `style="transition-delay: 80ms"` atau utility
`delay-*` Tailwind.

Semua animasi otomatis nonaktif saat `prefers-reduced-motion: reduce`.

---

## Gambar

- Gambar konten → `src/assets/images/`, render dengan `Image`/`Picture` dari
  `astro:assets` (lihat `src/assets/images/README.md`).
- File ber-URL tetap (favicon, og-image, verifikasi) → `public/`.
- Hero/LCP jangan `loading="lazy"`; gunakan `fetchpriority="high"`.

---

## Command

| Perintah            | Fungsi                                       |
| :------------------ | :------------------------------------------- |
| `pnpm dev`          | Development server (`http://localhost:4321`) |
| `pnpm build`        | Build produksi ke `dist/`                    |
| `pnpm preview`      | Cek hasil build secara lokal                 |
| `pnpm check`        | Cek tipe TypeScript & sintaks Astro          |
| `pnpm format`       | Format semua file dengan Prettier            |
| `pnpm format:check` | Cek format tanpa mengubah file               |

---

## Sebelum deploy

- [ ] Tidak ada teks placeholder (`NAMA_BISNIS`, `TAGLINE_BISNIS`, dst).
- [ ] `siteConfig.url` sudah domain produksi.
- [ ] Semua `href` navigasi hidup (tidak 404, anchor punya target).
- [ ] `public/og-image.png` dan `public/favicon.svg` sudah diganti.
- [ ] Nomor WhatsApp, email, dan alamat sudah benar.
- [ ] `pnpm check` dan `pnpm build` lolos.
- [ ] Cek manual di mobile: menu, anchor, overflow horizontal, focus keyboard.
- [ ] `robots.txt` di produksi berisi `Allow: /` + `Sitemap:`.

`robots.txt` otomatis `Disallow: /` saat development dan `Allow: /` saat build
produksi. Halaman juga mendapat `noindex` saat development.
