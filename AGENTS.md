# AGENTS.md

Aturan kerja untuk agent (dan manusia) yang mengerjakan repo ini.
Baca file ini sebelum mengubah apa pun.

---

## 1. Apa repo ini

Template fondasi website bisnis untuk banyak klien. Yang permanen: layout shell,
navbar, footer, SEO, design token. Yang dirakit per klien: section, konten, halaman.

Repo ini **bukan** template yang sudah berisi konten bisnis jadi. Jangan menganggap
contoh yang ada sebagai konten final.

---

## 2. Sumber kebenaran (urutan prioritas)

1. `PRD.md` di root — brief bisnis per klien. **Tidak disertakan di repo template**;
   file ini diletakkan saat proyek klien dimulai.
2. `src/config/site.ts` — identitas, kontak, alamat, sosial, navigasi, SEO.
3. `src/config/types.ts` — kontrak tipe config dan konten.
4. `src/config/content/<halaman>.ts` — konten per halaman.
5. `src/styles/global.css` — design token.
6. `README.md` — cara pakai dan command.

---

## 3. Kontrak PRD

PRD adalah kebenaran **bisnis**. File ini dan struktur repo adalah kebenaran
**teknis**.

- PRD menentukan **apa** yang dibuat, bukan **bagaimana** file disusun.
- Kalau PRD bentrok dengan aturan teknis di sini, aturan teknis menang.
- Kalau PRD tidak lengkap, **tanya**. Jangan menebak.
- Kalau PRD meminta di luar scope (backend, CMS, auth, dark mode), konfirmasi dulu.

### 3.1 Field wajib PRD

Sebelum mulai coding, pastikan PRD memuat:

- [ ] Identitas: nama bisnis, tagline, deskripsi singkat.
- [ ] Domain produksi.
- [ ] Kontak: WhatsApp, telepon, email, alamat, jam operasional, sosial media.
- [ ] Tujuan utama dan CTA.
- [ ] Scope halaman (homepage saja atau ada halaman tambahan).
- [ ] Daftar section beserta urutan dan acceptance criteria.
- [ ] Warna brand: hex + role (Primary / Secondary brand / Accent / Neutral).
- [ ] Font, kalau bukan default template.
- [ ] Aset: logo, favicon, OG image, foto (URL atau file).
- [ ] Target deployment.
- [ ] Info legal yang ditampilkan (PT, NIB/AHU), bila ada.
- [ ] Status copy: mana yang final dari klien, mana yang boleh dikarang.

Kalau ada yang kosong, tanyakan dulu. Setelah dapat jawaban, baru kerjakan.

### 3.2 Mapping PRD → file

| Kebutuhan PRD                                   | Tujuan                                   |
| :---------------------------------------------- | :--------------------------------------- |
| Nama, legal name, tagline, deskripsi            | `src/config/site.ts`                     |
| Domain                                          | `siteConfig.url` (dibaca `astro.config`) |
| Kontak (WA, telepon, email, jam operasional)    | `siteConfig.contact`                     |
| Alamat                                          | `siteConfig.address`                     |
| Sosial media                                    | `siteConfig.social`                      |
| Navigasi (label + anchor/halaman)               | `siteConfig.navigation`                  |
| SEO (title, description, OG, locale)            | `siteConfig.seo`                         |
| Warna brand                                     | Token di `src/styles/global.css`         |
| Font                                            | Token di `src/styles/global.css`         |
| Copy hero, CTA, section                         | `src/config/content/<halaman>.ts`        |
| List terstruktur (paket, testimoni, FAQ)        | `content/<halaman>.ts` + `types.ts`      |
| Urutan section                                  | `src/pages/<halaman>.astro`              |
| Gambar                                          | `src/assets/images/` via `astro:assets`  |
| Interaksi (filter, modal, accordion)            | Script lokal di section terkait          |
| Info legal spesifik section (NIB, AHU, garansi) | `content/<halaman>.ts`                   |

Tipe baru untuk konten section ditambahkan ke `types.ts` **saat section itu dibuat**,
bukan di awal proyek.

### 3.3 Aturan konflik teknis

- **Setup project di PRD diabaikan.** Template sudah siap; jangan inisialisasi ulang.
- **Jangan membuat `tailwind.config.mjs`.** Token ada di `@theme` `global.css`.
- **Path komponen di PRD hanya saran.** Gunakan `core/`, `sections/`, dan `ui/`.
- **Jangan menduplikasi** `Navbar`, `Footer`, `Layout`, atau `SEO`. Edit yang sudah ada
  bila perlu.
- **Warna brand:**
  - Primary → `--color-primary` (+ `--color-primary-hover`)
  - Secondary brand → `--color-brand-secondary`
  - Accent → `--color-accent`
  - Netral/teks → `--color-foreground`, `--color-muted`
  - Jangan memakai nama `secondary` untuk warna teks; token itu sudah tidak ada.
- **Package ikon:** `@lucide/astro`, bukan `lucide-astro`.
- **Data terstruktur:** TypeScript di `src/config/content/`, bukan `src/data/*.json`.
  JSON hanya untuk dataset besar dan tetap wajib diberi tipe.
- **Gambar:** unduh ke `src/assets/images/`. Jangan hotlink URL eksternal dan jangan
  menaruh gambar konten di `public/`.
- **Interaksi:** JavaScript native. Tanpa framework island dan tanpa dependency baru.
- **Validasi silang PRD sebelum coding:** kategori di MVP vs filter vs data, CTA vs
  section yang ada, label navigasi vs `id` section, format harga, dan angka statistik.
  Kalau tidak konsisten, tanya.

### 3.4 Micro-task

PRD boleh berisi micro-task (Task 1, Task 2, dst).

- Setiap task dibaca sebagai **outcome + acceptance criteria**, bukan perintah path file.
- Path file di PRD tidak mengikat; petakan ke struktur template.
- Task "setup project / install / init" diabaikan. Mulai dari config, token, konten.
- Kerjakan berurutan. Sebelum tiap task, sebutkan file yang akan dibuat/diubah.
- Sesudah tiap task, jalankan `pnpm check` dan `pnpm build`.
- Jangan menandai task selesai sebelum acceptance criteria-nya benar-benar dicek.

---

## 4. Aturan keras

- **Jangan hardcode** identitas bisnis atau konten di file `.astro`. Semua lewat config.
- **Jangan ubah** `components/core/*`, `pages/robots.txt.ts`, `layouts/Layout.astro`,
  atau `scripts/reveal.js` untuk kebutuhan satu klien, kecuali memang ada bug.
- **Pengecualian anchor kontak:** saat memakai pattern `WhatsAppForm`, `id="kontak"`
  boleh dipindahkan dari `Footer.astro` ke section kontak. Lakukan sekali, konsisten,
  dan jangan biarkan dua elemen memakai ID yang sama.
- **Jangan tambah dependency** tanpa alasan yang bisa dijelaskan. JS native dulu.
- **Jangan pakai** framework client (React/Vue/Svelte/Alpine) untuk interaksi sederhana.
- **Jangan buat** halaman, section, atau komponen yang tidak diminta brief.
- **Jangan tinggalkan** teks placeholder (`NAMA_BISNIS`, `TAGLINE_BISNIS`, `DESKRIPSI_BISNIS`, dst).
- **Jangan buat link mati.** Setiap `href` harus punya halaman atau target anchor.
- **Light mode saja.** Jangan menambah toggle atau varian dark tanpa permintaan.
- **Jangan taruh** gambar konten di `public/`. Gunakan `src/assets/images/` + `astro:assets`.
- **Jangan pakai warna mentah** di komponen. Gunakan token (`primary`, `brand-secondary`,
  `accent`, `foreground`, `muted`, `surface`, `border`, `card`, `on-primary`).
  Warna primitive hanya diubah di `global.css`.
- **Jangan render** link WhatsApp/email kosong. Pakai helper dari `site.ts` yang
  mengembalikan `null` bila data belum ada.

---

## 5. Struktur & tanggung jawab folder

| Path                       | Isi                        | Boleh diubah?                        |
| :------------------------- | :------------------------- | :----------------------------------- |
| `src/config/site.ts`       | Identitas & SEO            | Ya, setiap klien                     |
| `src/config/types.ts`      | Tipe config/konten         | Ya, saat menambah bentuk konten baru |
| `src/config/content/`      | Konten halaman             | Ya, setiap klien                     |
| `src/components/core/`     | Navbar, Footer, SEO        | Hanya jika ada bug/kebutuhan global  |
| `src/components/sections/` | Section bisnis             | Ya, dirakit per klien                |
| `src/components/ui/`       | Primitif reusable          | Hanya saat dipakai ≥ 2 tempat        |
| `src/components/patterns/` | Referensi implementasi     | Jangan di-import, jangan dihapus     |
| `src/layouts/Layout.astro` | HTML shell & script global | Hanya jika ada bug/kebutuhan global  |
| `src/pages/`               | Halaman                    | Ya, sesuai brief                     |
| `src/scripts/`             | JS native                  | Ya, per kebutuhan                    |
| `src/styles/global.css`    | Token & base               | Ya, untuk brand klien                |
| `public/`                  | File ber-URL tetap         | Ya, favicon & og-image               |

`components/patterns/` berisi contoh referensi (About, FAQ, form WhatsApp). File di
sana **tidak boleh di-import langsung** ke halaman dan **tidak boleh dihapus**.
Copy ke `sections/` atau `ui/`, lalu sambungkan kontennya.

`components/ui/` dan `components/sections/` boleh kosong. Jangan membuat isi hanya
supaya folder terlihat lengkap.

---

## 6. Alur kerja per klien

1. **Baca `PRD.md`** di root (diletakkan saat proyek klien dimulai). Catat: tujuan,
   audiens, daftar section, warna/font, CTA, dan halaman. Cek checklist 3.1.
2. **Isi `src/config/site.ts`** — nama, tagline, deskripsi, `url`, kontak (termasuk
   jam operasional), alamat, sosial, navigasi, SEO.
3. **Tentukan token** — ubah primitive palette dan `--color-brand-secondary` /
   `--color-accent` di `global.css` sesuai brand klien. Jangan mengubah nama token.
4. **Perbarui `types.ts`** jika bentuk konten berubah (mis. section baru).
5. **Isi `src/config/content/<halaman>.ts`** — hanya key yang benar-benar dirender.
6. **Rakit section** di `src/components/sections/`:
   - boleh mulai dari `src/components/patterns/` (copy, jangan import langsung);
   - satu file per section, props bertipe;
   - konten berasal dari file content;
   - gambar dari `src/assets/images/` via `astro:assets`;
   - animasi memakai `data-reveal`.
7. **Panggil section** dari halaman (`src/pages/index.astro` atau halaman baru).
8. **Perbarui navigasi** — `href` harus cocok dengan halaman/anchor yang ada.
   Target anchor wajib punya `id` dan `scroll-mt-*`.
9. **Ganti aset** — `public/og-image.png`, `public/favicon.svg`, gambar konten.
10. **Verifikasi** (lihat bagian 8).

---

## 7. Konvensi kode

- **Astro components**, bukan framework UI. Props memakai `interface Props` + `Astro.props`.
- **Tanpa `client:*`** kecuali interaksi benar-benar butuh JS. Untuk toggle, accordion,
  carousel: tulis JS native di `<script>` lokal komponen.
- **Script global** hanya di `Layout.astro`. Script lokal tetap di komponennya.
- **Mobile-first.** Mulai dari layout satu kolom, tambah breakpoint `sm/md/lg`.
- **Aksesibilitas wajib:** landmark semantik (`header`, `nav`, `main`, `section`, `footer`),
  satu `h1` per halaman, `alt` deskriptif, focus state terlihat, interaksi bisa keyboard.
- **Animasi:** hanya `transform`/`opacity`, hormati `prefers-reduced-motion`.
- **Gambar:** `Image`/`Picture` dari `astro:assets`; hero jangan lazy.
- **Format:** Prettier sudah dikonfigurasi (single quote, 2 spasi, plugin Astro + Tailwind).

---

## 8. Verifikasi wajib

Jalankan sebelum menyatakan selesai:

```bash
pnpm check
pnpm build
pnpm format:check
```

Lalu cek manual di `pnpm preview`:

- Tidak ada teks placeholder.
- Semua link navigasi hidup; anchor tidak tertutup navbar.
- Menu mobile bisa dibuka/tutup, `Escape` menutup, ikon berganti.
- Tidak ada overflow horizontal di 320px.
- Meta title/description/OG benar; `/og-image.png` tidak 404.
- `robots.txt` di produksi berisi `Allow: /` + `Sitemap:`.
- Fokus keyboard terlihat di seluruh elemen interaktif.
- Filter/modal/accordion (jika ada) bisa dipakai dengan keyboard.

---

## 9. Definition of done

- [ ] Semua gap di checklist 3.1 sudah dikonfirmasi.
- [ ] Brief/PRD tercermin di konten dan section.
- [ ] Semua data klien ada di `site.ts` + `content/`, tidak ada hardcode.
- [ ] `types.ts` sesuai bentuk konten yang dipakai.
- [ ] `pnpm check` dan `pnpm build` lolos tanpa error.
- [ ] Checklist verifikasi bagian 8 terpenuhi.
- [ ] Tidak ada dependency/folder/file baru yang tidak terpakai.
