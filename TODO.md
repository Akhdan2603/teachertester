# TODO — Timedoor Report Generator

Tugas yang **masih berjalan/belum dikerjakan**. Untuk riwayat yang sudah
selesai, lihat `CHANGELOG.md`. Untuk rencana besar & rasional di balik tiap
keputusan, lihat `rencana-10-10-non-security.md`.

## 🚨 WAJIB: Setup `js/config.js`

`GAS_URL` ada di `js/config.js` — file ini **TIDAK ikut ter-commit** ke Git
(masuk `.gitignore`):

- [ ] Kalau clone ulang repo ini di device lain: copy `js/config.example.js`
      jadi `js/config.js`, isi `GAS_URL` dengan URL Web App Anda.

## 🔜 Setelah Sesi Perbaikan Ini — Wajib Sebelum Deploy

- [ ] **Redeploy Apps Script** (New version) — beberapa `.gs` berubah sejak
      migrasi exam template (`Code.gs`, `HealthCheck.gs`; `ExamTemplates.gs`
      sudah dihapus total).
- [ ] Push semua perubahan frontend ke GitHub, biarkan Vercel/Pages redeploy.
- [ ] Jalankan 🩺 Health Check dan beresin semua yang ❌ sebelum pemakaian live.
- [ ] **Review manusia** untuk 9+ tab exam template yang isinya hasil sintesis
      AI (bukan tulisan guru asli) — terutama istilah teknis & nada bahasa —
      sebelum dipakai ke murid sungguhan. Lihat `CHANGELOG.md` bagian
      "Kelengkapan Exam Template" untuk daftar lengkapnya.
- [ ] Kalau ada revisi teks exam template: edit di spreadsheet `excel/*.xlsx`,
      lalu `node scripts/compile-exam-templates.js` — SOP lengkap di
      `PANDUAN.md` bagian 3.6.

## 🔜 Batch 3 (Setelah Dianggap Rilis Stabil)

- [ ] **#6**: Generic-kan `err.message` yang diteruskan ke client di
      `doGet()` — **sengaja ditunda**, development masih aktif dan detail
      error itu yang mempercepat diagnosa. Bilang "sudah rilis" kalau mau
      ini dikerjakan.

## 🆕 Setup Manual (Perlu Akses Google Workspace, Bukan Kode)

- [ ] `GEMINI_API_KEY` di Script Properties (fitur AI Generate).
- [ ] Kolom "Email" di tab `Teacher` (fitur Calendar invite).

## 💡 Rekomendasi Follow-up (Bukan Bug, Perlu Keputusan Tim)

- [ ] Course `"Python for AI"` (Teens) pakai tab `PYTHON AI (32Meeting)` yang
      isinya cuma 1 contoh nyata dari 1 guru — konsisten tapi datanya tipis
      dibanding course lain yang sudah dilengkapi lebih menyeluruh. Boleh
      dibiarkan atau diperkaya lebih lanjut.
- [ ] UX/UI audit (bagian 6 rencana) baru mencakup 3 tab (Daily Auto Report,
      Exam Report, Kelola Murid) dari 4 screenshot yang diberikan — belum
      ada audit kondisi mobile/tablet atau UI saat API/network error.
- [ ] Variant kedua/ketiga (tombol "Varian Lain") di beberapa tab masih ada
      nama hardcoded — sengaja tidak disentuh karena itu memang contoh
      referensi manual untuk guru pilih & edit sendiri, bukan bug. Kalau mau
      digeneralisasi juga, itu keputusan terpisah.
- [ ] `xlsx` (devDependency, dipakai `scripts/compile-exam-templates.js`)
      punya 1 known vulnerability (prototype pollution + ReDoS) tanpa fix di
      npm registry publik — SheetJS merilis fix lewat registry mereka
      sendiri (`https://cdn.sheetjs.com`), bukan npm. Risiko rendah untuk
      proyek ini (cuma dipakai lokal, baca file `.xlsx` internal yang
      trusted, tidak ikut ke-deploy ke aplikasi live), tapi kalau mau
      benar-benar bersih, perlu ganti sumber install `xlsx`.
