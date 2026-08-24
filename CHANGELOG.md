# CHANGELOG — Timedoor Report Generator

Riwayat perubahan yang **sudah selesai dikerjakan**. Untuk rencana/tugas yang
masih berjalan, lihat `TODO.md`. Untuk rencana besar & rasional di balik tiap
keputusan, lihat `rencana-10-10-non-security.md`.

---

## [Unreleased] — Migrasi Exam Template & Perbaikan Menyeluruh

### Fase 1 — Quick Wins (Functionality)
- Fix typo `"Adcanced Lua Programming on Roblox"` → `"Advanced Lua Programming on Roblox"`, konsisten di `data.js`, `templates.js`, `course-tab-map.js` (dulu cuma di sebagian tempat, bikin lookup course pecah).
- Tambah mapping `COURSE_TAB_MAP.Teens["Python Coder"] → "PYTHON_CODER"` (confirmed).
- Bersihkan 2 entri Kids yang salah taruh (`Python Coder`/`Python Game Developer` bukan course Kids).
- Map `"Python for AI"` (Teens) → tab `PYTHON AI (32Meeting)` (dikonfirmasi user), konten di-generalize dari contoh nyata guru (nama murid "Rashad" → placeholder).

### Fase 2/3 — Migrasi Exam Template ke Opsi B (Hybrid)
- `scripts/compile-exam-templates.js`: compile spreadsheet `excel/*.xlsx` → `js/exam-templates-data.js` (committed, bukan dibaca runtime lagi).
- `js/exam.js`: lookup lokal ke `EXAM_TEMPLATES` + `fillExamTemplateText_`, ganti network call `apiGetExamTemplate`.
- Hapus `google-apps-script/ExamTemplates.gs` & action `getExamTemplate` (tidak dipakai lagi).
- `HealthCheck.gs`: sesuaikan check spreadsheet exam template + validasi mapping course↔tab.
- `.github/workflows/ci.yml`: gate CI yang menjalankan compile script + validasi mapping (PR gagal kalau course baru lupa dimapping).
- **Temuan penting**: bug variable-shadowing di parser asli (`ExamTemplates.gs`) yang membuat fungsi ekstraksi teks SELALU return array kosong untuk semua kategori/blok/course tanpa kecuali — sudah diperbaiki di compile script versi baru.

### Kelengkapan Exam Template (audit menyeluruh)
- Isi 5 course yang sebelumnya sama sekali tidak punya tab exam template (Tech Explorer, Virtual World Maker, Little Programmer, JavaScript Developer, Python Game Developer) — disintesis dari daily-report objectives per course.
- **Temuan bug parser kedua**: teks konten yang tidak diikuti baris kosong sebelum header section berikutnya salah terdeteksi sebagai "block title baru" — ditemukan di `ROBLOX_EXPLORER` (blok 1 berisi tulisan asli guru yang akibatnya tidak pernah terbaca sistem apapun sebelumnya).
- **Temuan bug sistemik (severity tinggi)**: 35 teks *default* (variant pertama, otomatis tampil begitu tombol "Ambil Template" ditekan) di banyak course existing berisi nama murid asli yang di-hardcode (Reynold, Richard, Jojo, Insan, Afra, Dave, Gavin, Arka, El, Kent, dst), bukan placeholder `[NAMA_STUDENT]` — semua digeneralisasi.
- Lengkapi category "Character" yang kosong di 5 tab existing (`3D_ANIMATOR`, `WEBSITE_DESIGNER`, `GAMEDEV`, `WEB_DEV`, `APP_DEV`).
- `ROBLOX_DESIGNER`, `ROBLOX_CODER`, `ROBLOX_ADVANCE CODER`: kosong total sebelumnya, disintesis penuh dari daily-report objectives.
- Hasil akhir: **20/20 course** di `COURSE_MAP` (Junior/Kids/Teens) punya default exam text lengkap & tergeneralisasi benar — diverifikasi via sweep test end-to-end.

### Performance (bagian 5.1 rencana)
- `js/data.js` (108K) & `js/templates.js` (124K) — dulu SELALU dimuat penuh di `<head>` — sekarang jadi shell kecil (~6KB), isi sesungguhnya dipecah per criteria (`data.junior.js`/`kids.js`/`teens.js`, `templates.junior.js`/`kids.js`/`teens.js`).
- `js/lazy-loader.js` baru: `loadCriteriaData(criteria)` inject `<script>` dinamis saat guru pertama kali pilih criteria, di-cache, auto-retry kalau gagal.
- `js/auto-tab.js`/`js/exam.js` diubah async, await loading sebelum populate dropdown course/lesson.
- Dampak: initial payload 232KB → ~6KB; guru yang cuma pakai 1 criteria hemat 57–82% payload.

### UX/UI (bagian 6 rencana, berdasarkan review screenshot asli)
- Perbaiki inkonsistensi bahasa: label statis chrome admin ("Class Information", "Class Name", "Date", dll, dan beberapa toast/tombol seperti "Processing...", "Done!", "Export PDF") yang hardcode Inggris & tidak ikut toggle "Report Language" — diterjemahkan ke Indonesia, konsisten dengan chrome tab lain.
- Perbaiki placeholder dropdown kelas yang membingungkan ("Pilih Hari Dulu" padahal itu dropdown kelas).
- Tambah empty-state untuk preview report yang sebelumnya kosong total tanpa petunjuk.
- Perbaiki 4 kombinasi warna yang gagal WCAG AA contrast (dihitung, bukan eyeball) — gradient `--g500` (2.28:1 vs putih) diganti `--g700→--g900` (5.02:1).
- Tambah util `.loading-inline` (spinner) — sebelumnya tidak ada pola skeleton/spinner sama sekali di codebase.
- Audit & perbaiki inkonsistensi pesan error (1 titik pakai fallback bahasa Inggris, sisanya sudah konsisten).

### Documentation (bagian 7 rencana)
- `CHANGELOG.md` dipisah dari `TODO.md` (file ini).
- JSDoc ditambahkan untuk fungsi-fungsi non-trivial yang sebelumnya tanpa komentar sama sekali, di `app.js`, `pdf-builder.js`, `auto-tab.js`, `exam.js`, `kelola-murid.js`, `health-check.js`, `photo-manager.js`.
- SOP baru di `PANDUAN.md`: "Update Teks Exam Template" (3.6) dan checklist "Tambah Course Baru" (3.4) diperbarui untuk arsitektur baru (data per-criteria + exam template hybrid).

---

## Batch 1 — Selesai (Performa + Keamanan Dasar)

**Performa:**
- Semua `<script>` lokal pakai `defer` — HTML tidak lagi ke-block loading JS.
- `html2canvas` + `jsPDF` (600KB+) lazy-load — cuma dimuat pas tombol Export PDF/PNG pertama kali diklik.
- `getPendingExamsForTeacher` & `getStudentInfo` di-cache 30 detik (pola sama seperti `getJadwalForTeacher`/`getClassesForTeacher`), auto-invalidate begitu ada perubahan data.
- Logo `timedoor_logo_putih.png` (5480×1414px, 137KB) → resize + convert ke WebP (775×200px, 17.5KB — turun 87%).

**Keamanan:**
- `LockService` dipasang di semua endpoint yang menulis data — cegah race condition kalau 2 guru aksi bersamaan.
- `GAS_URL` dipindah ke `js/config.js` (di-gitignore), `js/config.example.js` sebagai template.
- `robots.txt` + `<meta name="robots" content="noindex, nofollow">` — cegah tool internal ke-indeks mesin pencari.

**Housekeeping:**
- `README.md` diisi lengkap.
