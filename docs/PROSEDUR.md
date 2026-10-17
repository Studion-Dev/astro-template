## CSS & Tailwind Optimization

### Standar

- Gunakan Tailwind CSS untuk styling, layout, spacing, warna, dan responsive design.
- Gunakan pendekatan mobile-first.
- Simpan design tokens global seperti warna dan font di `src/styles/global.css`.
- Gunakan CSS custom hanya jika utility Tailwind tidak cukup atau style perlu dipakai berulang.
- Hindari CSS duplikat, utility custom yang tidak diperlukan, dan animasi global yang tidak digunakan.
- Pertahankan aksesibilitas, termasuk focus state dan `prefers-reduced-motion`.

### Prosedur Customization

1. Ubah design tokens di `global.css` jika ingin mengganti warna atau font global.
2. Gunakan utility Tailwind langsung untuk kebutuhan styling komponen.
3. Tambahkan CSS custom hanya untuk kebutuhan khusus yang sulit ditangani dengan utility Tailwind.
4. Jika mengubah style global, periksa dampaknya pada Navbar, Footer, dan seluruh halaman.
5. Setelah selesai, jalankan `npm run build` dan periksa tampilan di mobile serta desktop.

### Hindari

- Menambahkan framework CSS lain tanpa kebutuhan jelas.
- Membuat utility atau komponen hanya untuk menghindari class Tailwind yang panjang.
- Menghapus style global tanpa memeriksa dependensinya.
- Mengorbankan tampilan atau aksesibilitas demi mengurangi ukuran CSS.

<br><br>

## JavaScript Optimization

### Standar

- Utamakan HTML native dan CSS sebelum menggunakan JavaScript.
- Gunakan JavaScript biasa untuk interaksi sederhana; tambahkan library hanya jika benar-benar diperlukan.
- Manfaatkan Astro Components untuk konten statis tanpa hydration.
- Muat script hanya pada halaman atau komponen yang membutuhkannya.
- Gunakan event listener seperlunya dan pastikan tidak terpasang berulang kali.
- Pastikan semua interaksi mendukung keyboard dan aksesibilitas.

### Prosedur Implementasi

1. Identifikasi fitur yang benar-benar membutuhkan JavaScript.
2. Gunakan script lokal pada komponen jika interaksinya hanya digunakan di komponen tersebut.
3. Gunakan script global hanya untuk fungsi yang memang dibutuhkan di banyak halaman.
4. Hindari hydration framework (`client:*`) jika interaksi dapat dibuat dengan JavaScript biasa.
5. Setelah implementasi, jalankan `npm run build` dan periksa Console serta performa halaman.

### Hindari

- Menambahkan library untuk interaksi sederhana seperti toggle atau FAQ.
- Menggunakan `client:load` tanpa kebutuhan yang jelas.
- Memuat script pihak ketiga yang tidak diperlukan.
- Menjalankan script yang sama berulang kali saat navigasi halaman.
- Menghapus JavaScript penting hanya demi mengejar skor PageSpeed.

<br><br>

## Image Optimization

### Standar

- Simpan gambar konten yang perlu diproses Astro di `src/assets/images/`.
- Simpan aset dengan URL tetap, seperti `favicon` dan OG image, di `public/`.
- Gunakan `Image` atau `Picture` dari `astro:assets` untuk gambar lokal yang perlu dioptimalkan.
- Gunakan format AVIF atau WebP untuk foto jika sesuai; gunakan SVG untuk logo dan ikon berbasis vektor.
- Tentukan ukuran gambar sesuai kebutuhan tampil dan hindari file beresolusi berlebihan.
- Setiap gambar harus memiliki dimensi yang sesuai agar layout tidak bergeser saat gambar dimuat.
- Gunakan `alt` deskriptif untuk gambar informatif dan `alt=""` untuk gambar dekoratif.

### Prosedur Implementasi

#### 1. Hero Image

1. Pilih gambar dengan komposisi yang cocok untuk area hero dan tetap jelas pada layar mobile.
2. Simpan gambar di `src/assets/images/`.
3. Gunakan `Image` atau `Picture` dari `astro:assets` dengan ukuran dan format output yang sesuai.
4. Jika gambar menjadi elemen Largest Contentful Paint (LCP), jangan gunakan `loading="lazy"`.
5. Pastikan gambar memiliki dimensi yang jelas dan gunakan `fetchpriority="high"` hanya jika gambar tersebut memang merupakan kandidat LCP utama.
6. Jika menggunakan hero background, periksa apakah gambar dimuat terlalu lambat. Untuk gambar utama yang penting bagi LCP, prioritaskan elemen gambar HTML jika sesuai dengan desain.
7. Uji crop, ukuran, dan keterbacaan hero pada mobile serta desktop.

#### 2. Gambar Produk, Layanan, dan Portfolio

1. Simpan gambar lokal di `src/assets/images/`.
2. Gunakan `Image` dari `astro:assets` agar ukuran dan format gambar dapat dioptimalkan saat build.
3. Tentukan rasio gambar yang konsisten untuk kartu produk atau portfolio.
4. Gunakan `object-fit: cover` jika gambar perlu mengisi area dengan ukuran tetap.
5. Berikan `alt` sesuai isi gambar; jangan mengulang kata kunci secara berlebihan.
6. Gunakan lazy loading untuk gambar yang berada di bawah fold dan tidak diperlukan saat halaman pertama kali tampil.

#### 3. Gambar Konten dan Thumbnail

1. Gunakan gambar dengan resolusi yang sesuai ukuran tampil.
2. Gunakan lazy loading untuk gambar di bawah fold jika sesuai.
3. Hindari memuat banyak gambar berukuran besar sekaligus.
4. Gunakan `Picture` jika membutuhkan format atau sumber gambar berbeda untuk kondisi tertentu.
5. Periksa tampilan gambar pada berbagai ukuran layar.

#### 4. Validasi

1. Pastikan seluruh gambar tampil dengan benar setelah `npm run build`.
2. Periksa apakah gambar hero menjadi kandidat LCP dan apakah ukurannya sesuai.
3. Jalankan PageSpeed Insights untuk memeriksa rekomendasi optimasi gambar.
4. Perbaiki gambar yang terlalu besar, menyebabkan layout shift, atau memperlambat LCP.

### Hindari

- Menggunakan `loading="lazy"` pada gambar hero/LCP utama.
- Menggunakan gambar resolusi tinggi tanpa kebutuhan.
- Memakai CSS background untuk semua gambar, termasuk gambar produk dan konten.
- Menggunakan `alt` kosong untuk gambar yang menyampaikan informasi penting.
- Menambahkan library optimasi gambar lain tanpa kebutuhan jelas.

<br><br>

## Font Optimization

### Standar

- Gunakan Google Fonts dengan font family dan weight yang benar-benar dibutuhkan.
- Gunakan `preconnect` untuk mempercepat koneksi ke server Google Fonts.
- Gunakan `display=swap` agar teks tetap tampil saat font sedang dimuat.
- Tetapkan fallback font seperti `system-ui` di `global.css`.
- Pastikan font body dan heading konsisten dengan design tokens di `global.css`.

### Prosedur Implementasi

1. Tentukan font family dan weight yang dibutuhkan berdasarkan desain website.
2. Tambahkan `preconnect` untuk `fonts.googleapis.com` dan `fonts.gstatic.com`.
3. Batasi weight pada URL Google Fonts agar tidak memuat variasi yang tidak digunakan.
4. Atur font global melalui design tokens di `global.css`.
5. Setelah perubahan, jalankan `npm run build` dan periksa tampilan font pada mobile serta desktop.
6. Gunakan PageSpeed Insights untuk mengevaluasi dampak font terhadap performa.

### Hindari

- Memuat banyak font family atau weight tanpa kebutuhan.
- Menambahkan preload font secara otomatis tanpa mengidentifikasi font yang benar-benar kritis.
- Menggunakan terlalu banyak variasi font dalam satu halaman.
- Menghapus fallback font.
- Menganggap optimasi font selesai hanya berdasarkan konfigurasi; validasi performa tetap diperlukan.

<br><br>

## Third-Party Scripts Optimization

### Standar

- Jangan menambahkan third-party script jika tidak dibutuhkan oleh fitur website.
- Evaluasi dampak setiap script eksternal terhadap loading, JavaScript execution, dan Core Web Vitals.
- Muat script hanya pada halaman yang membutuhkannya.
- Gunakan metode pemuatan yang sesuai, seperti `defer` atau `async`, berdasarkan kebutuhan script.
- Utamakan alternatif ringan untuk embed video, peta, chat, dan widget eksternal.
- Pastikan integrasi pihak ketiga tidak mengganggu aksesibilitas dan fungsi utama website.

### Prosedur Implementasi

1. Identifikasi kebutuhan layanan eksternal, seperti Analytics, Maps, video, live chat, atau booking widget.
2. Periksa apakah fitur tersebut dapat dibuat menggunakan solusi native atau alternatif yang lebih ringan.
3. Tambahkan script hanya jika diperlukan dan batasi cakupannya pada halaman terkait.
4. Tentukan strategi pemuatan berdasarkan kebutuhan script dan dependensinya.
5. Setelah implementasi, jalankan `npm run build` dan periksa request eksternal melalui DevTools Network.
6. Jalankan PageSpeed Insights untuk mengevaluasi dampaknya terhadap performa.

### Hindari

- Menambahkan script tracking atau widget secara default pada semua proyek.
- Memuat embed berat sebelum pengguna membutuhkannya jika alternatif interaktif yang lebih ringan memungkinkan.
- Menggunakan `async` atau `defer` tanpa memahami kebutuhan eksekusi script.
- Menganggap semua script eksternal pasti buruk; evaluasi berdasarkan kebutuhan dan dampaknya.

<br><br>

## Technical SEO Foundation

### Standar

- Gunakan struktur HTML semantik seperti `header`, `nav`, `main`, `section`, dan `footer` sesuai fungsinya.
- Pastikan setiap halaman memiliki `title` dan `meta description` yang unik dan relevan.
- Gunakan canonical URL yang sesuai untuk setiap halaman.
- Pastikan halaman memiliki atribut `lang` yang benar.
- Gunakan heading secara terstruktur, dengan satu H1 utama yang menjelaskan topik halaman.
- Sediakan Open Graph metadata dan gambar OG yang valid.
- Gunakan sitemap XML dan `robots.txt` yang sesuai dengan domain produksi.
- Pastikan halaman penting dapat diakses dan diindeks oleh mesin pencari.

### Prosedur Implementasi

1. Atur informasi bisnis, domain, dan metadata default melalui `src/config/site.ts`.
2. Pastikan `Layout.astro` meneruskan `title` dan `description` ke `SEO.astro`, dengan fallback untuk halaman yang tidak menentukan nilainya.
3. Periksa `SEO.astro` agar menghasilkan title, meta description, canonical URL, Open Graph, dan Twitter metadata dengan benar.
4. Pastikan setiap halaman memiliki title, description, H1, dan canonical URL yang sesuai dengan kontennya.
5. Periksa internal links, navigasi, status HTTP, dan halaman yang tidak seharusnya diindeks.
6. Pastikan sitemap dan `robots.txt` menggunakan domain produksi yang benar.
7. Jalankan `npm run build`, lalu validasi halaman produksi menggunakan Google Search Console dan alat pemeriksaan SEO bila diperlukan.

### Hindari

- Menggunakan title atau meta description yang sama untuk semua halaman tanpa alasan.
- Membiarkan domain placeholder pada konfigurasi produksi.
- Menggunakan canonical URL yang salah atau mengarah ke halaman lain.
- Memblokir halaman penting melalui `robots.txt` atau `noindex`.
- Menganggap `robots.txt` sebagai mekanisme untuk mencegah halaman masuk indeks.
- Menganggap skor SEO tinggi otomatis menjamin peringkat pencarian.

<br><br>

## Animation & Interaction Optimization

### Standar

- Utamakan CSS transitions dan animations untuk efek visual sederhana.
- Gunakan JavaScript native hanya untuk interaksi yang membutuhkan logika, seperti mobile navigation, dropdown, atau accordion.
- Prioritaskan animasi `transform` dan `opacity` agar lebih ramah terhadap rendering browser.
- Gunakan animasi secukupnya dan pastikan konten utama tetap mudah diakses.
- Dukung preferensi pengguna melalui `prefers-reduced-motion`.
- Pastikan semua interaksi dapat digunakan melalui keyboard dan memiliki state yang jelas.

### Prosedur Implementasi

1. Tentukan apakah kebutuhan cukup ditangani dengan CSS atau memerlukan JavaScript.
2. Gunakan utility Tailwind untuk transisi dan animasi sederhana; tambahkan CSS custom hanya jika diperlukan.
3. Untuk interaksi, gunakan JavaScript native sebelum mempertimbangkan library tambahan.
4. Hindari animasi yang mengubah layout secara terus-menerus, seperti animasi `width`, `height`, atau posisi layout jika alternatif `transform` tersedia.
5. Tambahkan dukungan `prefers-reduced-motion` untuk mengurangi atau menonaktifkan animasi yang tidak esensial.
6. Uji interaksi menggunakan mouse, keyboard, dan layar sentuh.
7. Periksa kelancaran animasi pada mobile serta dampaknya terhadap CLS dan performa menggunakan DevTools dan PageSpeed Insights.

### Hindari

- Menambahkan library animasi besar untuk efek sederhana.
- Menggunakan animasi berlebihan yang mengganggu fokus pengguna.
- Menjalankan animasi terus-menerus tanpa kebutuhan.
- Mengandalkan hover sebagai satu-satunya cara mengakses fitur.
- Menggunakan scroll animation atau parallax secara berlebihan.
- Mengorbankan aksesibilitas demi efek visual.

<br><br>

## Caching & CDN Optimization

### Standar

- Manfaatkan CDN dan caching bawaan Vercel untuk website Astro static.
- Bedakan strategi caching untuk HTML, aset hasil build, dan file di folder `public/`.
- Jangan menambahkan custom cache headers tanpa kebutuhan yang jelas.
- Pastikan deployment baru tidak menyebabkan browser terus menggunakan aset versi lama.
- Hindari caching jangka panjang untuk file yang URL-nya tetap tetapi kontennya sering berubah.

### Prosedur Implementasi

#### 1. Konfigurasi Dasar

1. Pastikan website menggunakan output static jika tidak membutuhkan SSR.
2. Gunakan konfigurasi deployment Vercel standar terlebih dahulu.
3. Jangan membuat `vercel.json` atau file header khusus hanya untuk menambahkan caching bawaan.
4. Pastikan domain produksi dan deployment berjalan dengan benar.

#### 2. Aset Hasil Build

1. Biarkan Astro menghasilkan aset CSS dan JavaScript hasil build.
2. Pertahankan nama file hasil build yang menggunakan hash atau fingerprint agar perubahan aset menghasilkan URL baru.
3. Jangan mengubah nama atau proses output aset secara manual tanpa alasan yang jelas.
4. Periksa header respons aset melalui browser DevTools atau perintah HTTP.

#### 3. File di Folder `public/`

1. Identifikasi file yang disajikan langsung dari `public/`, seperti favicon, robots.txt, OG image, dan file verifikasi.
2. Periksa header respons aktual untuk mengetahui kebijakan caching yang diterapkan.
3. Jangan mengasumsikan semua file di `public/` otomatis mendapatkan cache jangka panjang.
4. Jika perlu mengatur cache secara khusus, pastikan kebijakan tersebut sesuai dengan jenis file dan frekuensi perubahannya.

#### 4. Custom Cache Headers

1. Tambahkan custom cache headers hanya jika hasil pemeriksaan menunjukkan kebutuhan nyata.
2. Tentukan kebijakan terpisah untuk HTML dan aset statis.
3. Gunakan cache jangka panjang hanya untuk aset yang URL-nya berubah ketika kontennya berubah.
4. Untuk file yang menggunakan URL tetap tetapi kontennya dapat diperbarui, gunakan kebijakan cache yang memungkinkan pembaruan tepat waktu.
5. Setelah konfigurasi diubah, deploy ke preview dan periksa header respons sebelum menerapkannya ke produksi.

#### 5. Validasi

1. Periksa status HTTP dan header `Cache-Control` pada HTML serta beberapa aset penting.
2. Pastikan aset baru dapat dimuat setelah deployment baru.
3. Uji website setelah hard refresh dan pada kunjungan berikutnya.
4. Jalankan PageSpeed Insights untuk memeriksa rekomendasi caching browser.
5. Jika caching tidak sesuai, identifikasi respons dan header yang bermasalah sebelum mengubah konfigurasi.

### Hindari

- Menambahkan aturan cache global tanpa memahami dampaknya.
- Memberikan cache jangka panjang pada HTML yang harus segera mencerminkan perubahan konten.
- Memberikan cache jangka panjang pada file ber-URL tetap yang sering diperbarui.
- Menganggap semua aset di `public/` otomatis memiliki cache yang sama dengan aset hasil build.
- Menganggap cache browser, CDN, dan cache hasil build sebagai hal yang sama.
- Menambahkan konfigurasi caching hanya demi mengejar skor PageSpeed tanpa memeriksa kebutuhan aktual.

<br><br>

## Vercel Deployment Configuration

### Standar

- Gunakan static deployment untuk website bisnis yang tidak membutuhkan SSR.
- Manfaatkan deteksi konfigurasi Astro otomatis dari Vercel jika sudah sesuai.
- Samakan kebutuhan versi Node.js antara lingkungan lokal dan Vercel.
- Pastikan domain produksi, metadata, canonical URL, sitemap, dan robots.txt menggunakan konfigurasi yang benar.
- Gunakan Preview Deployment untuk menguji perubahan sebelum masuk produksi.
- Simpan environment variables di pengaturan Vercel jika proyek membutuhkannya.
- Jangan mengekspos secret atau kredensial melalui kode client-side.

### Prosedur Implementasi

#### 1. Persiapan Proyek

1. Pastikan `npm run build` berhasil dijalankan tanpa error.
2. Periksa `astro.config.mjs` dan pastikan nilai `site` menggunakan domain produksi yang benar.
3. Pastikan URL pada `src/config/site.ts` konsisten dengan domain produksi.
4. Periksa `package.json` dan gunakan versi Node.js yang kompatibel dengan proyek.
5. Pastikan seluruh dependensi dan konfigurasi yang dibutuhkan sudah tercatat di repository.

#### 2. Konfigurasi Vercel

1. Import repository proyek ke Vercel.
2. Pastikan Framework Preset terdeteksi sebagai Astro.
3. Periksa Root Directory, Install Command, Build Command, dan Output Directory. Gunakan deteksi otomatis jika sudah benar.
4. Pastikan Production Branch mengarah ke branch utama yang digunakan untuk rilis.
5. Tambahkan environment variables hanya jika dibutuhkan oleh proyek.
6. Jangan menambahkan `vercel.json` atau adapter Vercel jika tidak ada kebutuhan khusus.

#### 3. Deployment

1. Deploy proyek ke Preview Deployment terlebih dahulu.
2. Periksa hasil build dan pastikan tidak ada error deployment.
3. Uji halaman utama, seluruh halaman penting, navigasi, formulir, dan interaksi.
4. Periksa title, meta description, canonical URL, Open Graph, sitemap, dan robots.txt.
5. Pastikan URL preview tidak digunakan sebagai domain canonical produksi.
6. Jika seluruh pemeriksaan lolos, deploy perubahan yang disetujui ke Production Deployment.

#### 4. Validasi Produksi

1. Pastikan domain custom sudah terhubung dan menggunakan HTTPS.
2. Buka halaman utama dan seluruh halaman penting melalui domain produksi.
3. Periksa halaman yang tidak ditemukan, internal links, gambar, font, dan aset hasil build.
4. Pastikan sitemap dapat diakses dan robots.txt tidak memblokir halaman yang seharusnya diindeks.
5. Jalankan PageSpeed Insights untuk mengevaluasi performa mobile dan desktop.
6. Jika terjadi kegagalan, periksa build logs dan browser Console sebelum mengubah konfigurasi.

### Hindari

- Membiarkan domain placeholder pada konfigurasi produksi.
- Mengubah output directory atau build command tanpa memahami kebutuhan Astro.
- Menambahkan SSR atau adapter hanya karena website menggunakan Vercel.
- Menyimpan secret di kode sumber atau variabel berawalan `PUBLIC_`.
- Menganggap deployment berhasil berarti seluruh halaman dan fitur sudah berfungsi.
- Menerapkan konfigurasi khusus tanpa kebutuhan yang terverifikasi.

<br><br>

## Production-Ready Checklist

### Standar

- Pastikan seluruh halaman dan fitur berfungsi sebelum website dipublikasikan.
- Pastikan performa, SEO teknis, aksesibilitas, dan responsive design sudah diperiksa.
- Pastikan konfigurasi domain, metadata, sitemap, robots.txt, dan HTTPS benar.
- Pastikan tidak ada error build, broken links, atau aset yang gagal dimuat.
- Validasi website pada mobile dan desktop, bukan hanya melalui tampilan lokal.
- Jalankan pemeriksaan akhir setelah deployment ke domain produksi.

### Prosedur Implementasi

#### 1. Build dan Kode

- [ ] Jalankan `npm run build` dan pastikan build berhasil tanpa error.
- [ ] Periksa warning yang berpotensi memengaruhi fungsi atau performa.
- [ ] Hapus kode, dependensi, dan aset yang tidak digunakan jika sudah dipastikan aman dihapus.
- [ ] Pastikan tidak ada secret, kredensial, atau informasi sensitif di kode client-side.
- [ ] Periksa browser Console untuk error JavaScript.

#### 2. Konten dan Navigasi

- [ ] Pastikan seluruh halaman memiliki konten final dan tidak ada teks placeholder.
- [ ] Periksa navigasi, internal links, CTA, WhatsApp, dan formulir.
- [ ] Pastikan semua tautan eksternal mengarah ke tujuan yang benar.
- [ ] Periksa halaman 404 dan tautan yang rusak.
- [ ] Pastikan semua gambar memiliki ukuran, tampilan, dan atribut `alt` yang sesuai.

#### 3. Responsive Design dan Aksesibilitas

- [ ] Periksa layout pada mobile, tablet, dan desktop.
- [ ] Pastikan tidak ada horizontal overflow atau elemen yang bertumpuk.
- [ ] Uji navigasi menggunakan keyboard dan pastikan focus state terlihat.
- [ ] Periksa kontras teks, label formulir, dan struktur heading.
- [ ] Pastikan animasi menghormati preferensi `prefers-reduced-motion`.

#### 4. SEO Teknis

- [ ] Pastikan setiap halaman memiliki title, meta description, dan H1 yang relevan.
- [ ] Periksa canonical URL agar sesuai dengan URL produksi.
- [ ] Pastikan Open Graph metadata dan gambar OG berfungsi.
- [ ] Periksa sitemap XML dan `robots.txt` pada domain produksi.
- [ ] Pastikan halaman yang harus diindeks tidak terkena `noindex` atau pemblokiran yang tidak disengaja.
- [ ] Pastikan halaman yang tidak boleh diindeks ditangani sesuai kebutuhan.

#### 5. Performa dan Keamanan

- [ ] Jalankan PageSpeed Insights pada mobile dan desktop.
- [ ] Evaluasi Core Web Vitals, terutama LCP, INP, dan CLS.
- [ ] Optimalkan gambar, font, CSS, JavaScript, dan script pihak ketiga berdasarkan hasil pemeriksaan.
- [ ] Pastikan HTTPS aktif dan domain produksi berfungsi dengan benar.
- [ ] Periksa request jaringan dan pastikan tidak ada aset penting yang gagal dimuat.
- [ ] Pastikan environment variables dan integrasi eksternal dikonfigurasi dengan aman.

#### 6. Deployment dan Validasi Akhir

- [ ] Uji Preview Deployment sebelum rilis produksi.
- [ ] Pastikan domain custom sudah terhubung ke deployment produksi.
- [ ] Uji kembali halaman dan fitur penting setelah deployment.
- [ ] Periksa metadata, canonical URL, sitemap, dan `robots.txt` melalui domain produksi.
- [ ] Simpan hasil pemeriksaan dan catat masalah yang masih perlu diperbaiki.
- [ ] Pastikan tersedia cara untuk melakukan rollback jika deployment menimbulkan masalah.

### Hindari

- Meluncurkan website sebelum build dan fitur utama diuji.
- Menganggap skor PageSpeed tinggi menjamin seluruh aspek kualitas website sudah baik.
- Mengabaikan warning atau error hanya karena halaman terlihat normal.
- Menguji hanya di desktop atau hanya melalui development server.
- Menghapus kode atau dependensi tanpa memeriksa dampaknya.
- Menganggap semua halaman harus mendapat skor 100 untuk dianggap siap produksi.
- Menyatakan website siap sebelum masalah kritis diperbaiki.
