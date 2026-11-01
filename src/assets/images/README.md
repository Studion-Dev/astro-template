# Assets gambar

Simpan gambar **konten** (hero, produk, layanan, portfolio, foto tim) di folder ini.

Astro akan memprosesnya melalui `astro:assets`, sehingga ukuran dan format
output bisa dioptimalkan saat build.

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../../assets/images/hero.jpg';
---

<Image
  src={heroImage}
  alt="Deskripsi gambar"
  widths={[640, 1024, 1600]}
  sizes="(min-width: 1024px) 1024px, 100vw"
  loading="eager"
  fetchpriority="high"
/>
```

Aturan:

- Hero/LCP: `loading="eager"` + `fetchpriority="high"`, jangan lazy.
- Gambar di bawah fold: `loading="lazy"`.
- Selalu isi `alt` deskriptif, atau `alt=""` untuk gambar dekoratif.
- Jangan taruh gambar konten di `public/` kecuali URL-nya memang harus tetap
  (favicon, og-image, file verifikasi).
