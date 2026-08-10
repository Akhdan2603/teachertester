# TODO — Timedoor Report Generator

## 🚨 WAJIB: Setup `js/config.js` (Baru!)

`GAS_URL` sekarang pindah dari `js/api.js` ke `js/config.js` — file ini
**TIDAK ikut ter-commit** ke Git (masuk `.gitignore`), jadi:

- [ ] Kalau Anda clone ulang repo ini di device lain, **copy `js/config.example.js` jadi `js/config.js`**, isi `GAS_URL` dengan URL Web App Anda
- [ ] Untuk deploy yang sudah ada sekarang: `js/config.js` sudah saya isi dengan URL yang Anda pakai sebelumnya, tidak perlu ubah apa-apa — tinggal push seperti biasa

## ✅ Batch 1 — Selesai (Performa + Keamanan Dasar)

**Performa:**
- Semua `<script>` lokal pakai `defer` — HTML tidak lagi ke-block loading JS
- `html2canvas` + `jsPDF` (600KB+) sekarang **lazy-load** — cuma dimuat pas tombol Export PDF/PNG pertama kali diklik, bukan selalu di setiap buka halaman
- `getPendingExamsForTeacher` & `getStudentInfo` sekarang di-cache 30 detik (pola sama seperti `getJadwalForTeacher`/`getClassesForTeacher`), auto-invalidate begitu ada perubahan data
- Logo `timedoor_logo_putih.png` (5480×1414px, 137KB) → **resize + convert ke WebP** (775×200px, 17.5KB — turun 87%). Ukuran tampil aslinya cuma 40px tinggi, jadi file lama itu 35x lebih besar dari kebutuhan.

**Keamanan:**
- `LockService` dipasang di semua endpoint yang menulis data (submit report, tambah/hapus murid, dst) — cegah race condition kalau 2 guru aksi bersamaan persis di waktu yang sama
- `GAS_URL` dipindah ke `js/config.js` (di-gitignore), `js/config.example.js` sebagai template buat setup ulang
- `robots.txt` (Disallow semua) + `<meta name="robots" content="noindex, nofollow">` — cegah Google/mesin pencari mengindeks tool internal ini

**Housekeeping:**
- `README.md` diisi lengkap (ringkasan, struktur project, link ke PANDUAN.md/TODO.md)

- [ ] **Redeploy Apps Script** (New version) — `Code.gs` berubah (LockService + cache baru)
- [ ] Push semua perubahan frontend ke GitHub, biarkan Vercel/Pages redeploy
- [ ] Tes: buka Network tab DevTools, pastikan html2canvas/jsPDF TIDAK ter-load sampai tombol Export diklik
- [ ] Tes: 2 tab browser, login sebagai guru sama, submit report bersamaan di waktu yang sama-sama persis → salah satu harusnya dapat pesan "Sistem sedang sibuk" bukan data ke-timpa diam-diam

## 🔜 Batch 2 (Belum Dikerjakan — Perlu Kehati-hatian Lebih)

- [ ] **#9**: Split `data.js`/`templates.js` per Criteria (Junior/Kids/Teens), load sesuai pilihan guru — bukan semua sekaligus
- [ ] **#12**: Skeleton/placeholder loading state (ganti dari teks "Memuat..." polos)

## 🔜 Batch 3 (Setelah Dianggap Rilis Stabil)

- [ ] **#6**: Generic-kan `err.message` yang diteruskan ke client di `doGet()` — **sengaja ditunda**, karena development masih aktif dan detail error itu yang mempercepat diagnosa. Bilang "sudah rilis" kalau mau ini dikerjakan.

## 🔜 Batch 4 (Fondasi Jangka Panjang, Terpisah)

- [ ] **#4**: Setup Jest untuk fungsi murni (`escHtml`, `findColumnIndex_`, `computePendingCheckpoint_`, dll.) + GitHub Actions workflow dasar

## 🆕 Dari Update Sebelumnya (masih berlaku)

- [ ] `GEMINI_API_KEY` di Script Properties (fitur AI Generate)
- [ ] Kolom "Email" di tab `Teacher` (fitur Calendar invite)
- [ ] `"JavaScript Developer"` (Teens) masih `null` di `course-tab-map.js`
- [ ] Perbaiki typo kurung siku: `3D_ANIMATOR!A25`, `WEBSITE_DESIGNER!A25` (JUNIORS)
- [ ] Jalankan 🩺 Health Check dan beresin semua yang ❌ sebelum pemakaian live
