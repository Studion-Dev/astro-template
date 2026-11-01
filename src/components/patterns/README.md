# Patterns

Folder ini berisi **referensi implementasi**, bukan komponen produksi.

- Tidak di-import dari halaman mana pun.
- Tidak ikut ke bundle.
- Tetap dicek oleh `pnpm check`, jadi contohnya tidak basi.

Tujuannya: memberi agent pola konkret saat merakit section untuk klien baru.

---

## Cara pakai

1. **Copy** file yang relevan ke `src/components/sections/` (atau `ui/` bila benar-benar
   dipakai di banyak tempat).
2. **Ganti nama** file sesuai section klien.
3. **Sambungkan data:**
   - tambahkan key kontennya di `src/config/content/<halaman>.ts`;
   - tambahkan tipenya di `src/config/types.ts`;
   - oper props dari halaman.
4. **Sesuaikan aset:** gambar dari `src/assets/images/` via `astro:assets`.
5. **Perbarui navigasi** bila section punya `id` baru.
6. **Hapus komentar contoh** dan pastikan tidak ada teks placeholder.
7. Jalankan `pnpm check` dan `pnpm build`.

Jangan meng-import file dari folder ini langsung ke halaman. Copy dulu, baru dipakai.

---

## Daftar pattern

### `AboutSection.astro`

Section dua kolom: teks + gambar.

Props:

```ts
interface Props {
  eyebrow?: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  cta?: { label: string; href: string };
  imagePosition?: 'left' | 'right';
}
```

Contoh pemakaian:

```astro
---
import AboutSection from '../components/sections/AboutSection.astro';
import { homeContent } from '../config/content/home';
import aboutImage from '../assets/images/about.jpg';
---

<AboutSection
  {...homeContent.about}
  image={aboutImage}
  imageAlt="Tim klien sedang bekerja"
/>
```

### `FaqSection.astro`

Accordion berbasis `<details>/<summary>` native. Tanpa JavaScript, tetap bisa dipakai
dengan keyboard.

Props:

```ts
interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  items: { question: string; answer: string }[];
}
```

### `WhatsAppForm.astro`

Form yang menyusun pesan lalu membuka WhatsApp. Tanpa backend dan tanpa menyimpan data.

Props:

```ts
interface Props {
  title?: string;
  description?: string;
  topics?: string[];
  submitLabel?: string;
}
```

Catatan integrasi:

- Nomor WhatsApp diambil dari `siteConfig.contact.whatsapp`. Kalau kosong, form
  menampilkan pesan agar nomor dilengkapi.
- Section ini memakai `id="kontak"`, sama seperti footer. Saat dipakai, pindahkan
  `id="kontak"` dari `Footer.astro` ke section ini (lihat pengecualian di
  `AGENTS.md`). Jangan biarkan dua elemen memakai ID yang sama.
- Pesan tidak dikirim ke server. Semua terjadi di browser.

---

## Kapan dipromosikan ke `ui/`

Kalau sebuah pattern dipakai di **dua klien atau lebih** dan isinya benar-benar sama,
pindahkan ke `src/components/ui/` sebagai komponen reusable, lalu hapus dari folder ini.
