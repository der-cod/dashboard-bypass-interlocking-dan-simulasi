DASHBOARD BYPASS DAN SIMULASI - VERSI PWA
==========================================

ISI PAKET
- index.html, manifest.webmanifest, sw.js, ikon (icon-*.png)
- lib/  : tempat tiga library ekspor (lihat bagian "Ekspor offline")

SYARAT PWA (penting)
PWA hanya bisa dipasang jika dibuka lewat HTTPS, atau lewat http://localhost.
Membuka lewat http://alamat-ip-server biasa TIDAK akan menampilkan tombol "Pasang aplikasi"
dan service worker tidak aktif. Halaman tetap bisa dipakai sebagai halaman web biasa.

CARA PASANG
1. Letakkan seluruh isi folder ini di satu folder pada web server (semua file sejajar).
2. Opsi hosting:
   a. Hosting statis berHTTPS (mis. Netlify, Cloudflare Pages, GitHub Pages). Paling mudah.
   b. IIS di server sendiri: buat site, aktifkan HTTPS dengan sertifikat yang dipercaya
      perangkat pengguna (sertifikat internal perusahaan). Tambahkan MIME type
      .webmanifest = application/manifest+json.
   c. Uji cepat di komputer sendiri: jalankan "python -m http.server 8000" di folder ini,
      lalu buka http://localhost:8000
3. Buka alamatnya di Chrome atau Edge. Tekan tombol "Pasang aplikasi" di halaman
   (atau menu browser > Instal aplikasi / Tambahkan ke layar utama).

EKSPOR OFFLINE (Excel dan PDF)
Ekspor memakai tiga library. Halaman mencoba folder lib/ lebih dulu, lalu internet (cdnjs).
Untuk server yang tidak terhubung internet, unduh tiga file ini di komputer yang punya
internet, lalu simpan di folder lib/ dengan nama persis seperti berikut:
   lib/xlsx.full.min.js              dari https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
   lib/jspdf.umd.min.js              dari https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js
   lib/jspdf.plugin.autotable.min.js dari https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js
Tanpa file ini dan tanpa internet, semua tampilan tetap jalan, hanya tombol ekspor yang
menampilkan pesan library belum tersedia.

MEMPERBARUI DATA
- Di halaman, tekan "Perbarui data (unggah DBF)" lalu pilih SP_Evt.DBF dan/atau MMM_Evt.DBF.
  Hasilnya tersimpan di browser perangkat itu saja (tidak dikirim ke server).
- Tombol "Kembali ke data bawaan" mengembalikan data awal yang tertanam di index.html.
- Untuk memperbarui data bawaan bagi semua pengguna, ganti index.html dengan versi baru.

MEMPERBARUI VERSI APLIKASI
Ganti index.html di server. Jika ada perubahan pada sw.js atau ikon, naikkan nomor
versi V di sw.js (mis. bypass-dash-v2) agar cache perangkat diperbarui.

PRIVASI
index.html memuat nama peralatan dan nama user dari event log. Simpan di server yang
aksesnya sesuai kebijakan perusahaan.
