# CHANGELOG — Timedoor Report Generator

Riwayat perubahan yang **sudah selesai dikerjakan**. Untuk rencana/tugas yang
masih berjalan, lihat `TODO.md`. Untuk rencana besar & rasional di balik tiap
keputusan, lihat `rencana-10-10-non-security.md`.

---

## [Unreleased] — Perbaikan Hasil Audit QA/QC (Performance/UX/Efficiency)

Menindaklanjuti audit QA/QC eksternal (scope: Performance/efisiensi &
UX-UI, Security dikecualikan atas permintaan). Semua temuan BUG-1 s/d
BUG-5 + risiko aksesibilitas di bawah sudah diperbaiki.

- **BUG-1 (HIGH)** — `js/exam-templates-data.js` (132KB) dulu dimuat
  unconditional di setiap page load, tidak ikut pola lazy-load per
  criteria walau strukturnya sendiri sudah per-criteria. Sekarang jadi
  shell kosong (~1.3KB) + 3 file baru (`exam-templates.junior.js` 17KB,
  `.kids.js` 48KB, `.teens.js` 71KB) dimuat dinamis oleh
  `js/lazy-loader.js` lewat `loadCriteriaData()`, sama seperti pola
  `data.<criteria>.js`/`templates.<criteria>.js`. `scripts/compile-exam-templates.js`
  & `.github/workflows/ci.yml` (CI diff-gate) disesuaikan untuk generate
  & memvalidasi keempat file ini.
- **BUG-2 (MEDIUM)** — Preview murid (Auto tab) di-rebuild penuh
  (`innerHTML` teardown, semua kartu) + forced reflow (`offsetHeight`)
  di SETIAP keystroke saat mengetik nama/progress. Ditambah
  `autoUpdateTableDebounced()` (200ms) khusus untuk `oninput` nama &
  progress; trigger lain (ganti dropdown, tambah/hapus murid, dll) tetap
  instan.
- **BUG-3 (MEDIUM)** — Upload foto murid disimpan full-resolution tanpa
  compress (bisa 3-12MB/foto dari kamera HP modern). Sekarang di-resize
  (max 1600px sisi terpanjang) & di-compress (JPEG q0.82) lewat
  `<canvas>` di `js/photo-manager.js` sebelum disimpan ke
  `autoPhotoData[]`, native tanpa library eksternal.
- **BUG-4 (LOW)** — `.btn-photo-overlay-del` didefinisikan 2x di
  `css/style.css` dengan ukuran berbeda (28px vs 22px); definisi kedua
  menang lewat cascade, membuat tombol hapus foto (aksi destruktif) di
  bawah standar touch target mobile. Definisi dead code dihapus, ukuran
  dinaikkan ke 36x36px.
- **BUG-5 (LOW)** — Selector CSS `#report-preview` adalah dead code
  (tidak ada elemen dengan ID itu — Exam Report tab pakai `<textarea>`,
  bukan preview visual). Dihapus dari selector list, komentar "DO NOT
  modify" diperbarui supaya tidak menyebut ID yang tidak ada.
- **Aksesibilitas (risiko, sebelumnya 0 atribut `aria-*` di codebase)** —
  Ditambahkan: `role="status" aria-live="polite"` di toast (+ durasi
  tampil sekarang menyesuaikan panjang pesan, sebelumnya fixed 3 detik
  untuk semua pesan); `aria-label` di semua tombol icon-only (hapus
  murid, hapus foto, cancel/save inline form); `role="dialog"
  aria-modal="true"` + label terprogram di overlay login PIN & modal
  Health Check.
- **Mobile** — Tambah breakpoint `@media (max-width: 480px)` untuk HP
  entry-level (sebelumnya cuma ada 1200px & 768px) — menyesuaikan
  padding/layout form sidebar, TIDAK mengubah `#auto-report-preview`
  (tetap 1000px fixed, export canvas tidak boleh terdistorsi). Tambah
  `<link rel="preconnect">` untuk Google Fonts.

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

### Testing — Setup Jest untuk Fungsi Murni (Batch 4)
- `npm test` (Jest) — 57 test, 3 suite: `tests/frontend-pure-functions.test.js`
  (`escHtml`, `formatDate`, `formatDateLong`, `formatProgressHTML` dari
  `app.js`; `getCourseTabName` dari `course-tab-map.js`; `fillExamTemplateText_`
  dari `exam.js`), `tests/gas-pure-functions.test.js` (`findColumnIndex_`,
  `isTrue_`, `computePendingCheckpoint_` dari `Code.gs`), dan
  `tests/compile-exam-templates.test.js` (`normalizeWhitespace_`,
  `isKnownLabel_`, `extractVariantsForCategory_`, `compileSheet`).
- `tests/helpers/loadScriptGlobals.js`: helper vm-sandbox untuk load file
  browser-global (`.js`) dan Apps Script (`.gs`) tanpa perlu tambah
  `module.exports` ke file aslinya (supaya tetap jalan normal di
  browser/Apps Script tanpa bundler).
- `.github/workflows/ci.yml`: tambah job `unit-tests` (jalankan `npm test`),
  terpisah dari job `exam-template-mapping-check` yang sudah ada.
- **2 bug nyata ketemu langsung dari proses nulis test** (bukan cuma
  nambah cakupan test, tapi benar-benar menemukan hal yang salah):
  1. **Bug parser (regression guard)**: heuristik deteksi "block title baru"
     di `compile-exam-templates.js` masih rentan false-positive kalau baris
     konten tidak diikuti baris kosong sebelum header section berikutnya —
     sebelumnya cuma "diakali" dengan selalu kasih baris kosong pemisah di
     data (lihat entri ROBLOX_EXPLORER di atas), bukan benar-benar di-fix di
     parser-nya. Sekarang diperkuat dengan heuristik baru: judul blok asli
     SELALU diakhiri nomor blok (dicek ke 60 judul blok yang ada di seluruh
     dataset saat ini, semuanya cocok pola ini), sedangkan teks narasi tidak
     pernah begitu.
  2. **Bug fungsional**: placeholder manual `[MASUKAN_NILAI UJIAN]` (dipakai
     di puluhan teks exam template yang ditulis sepanjang sesi ini) ternyata
     selama ini KEBUANG kurungnya oleh safety-net bracket-cleanup di
     `fillExamTemplateText_` — hasil akhirnya "MASUKAN_NILAI UJIAN" tanpa
     kurung, menyatu dengan kalimat, gampang kelewatan guru. Diperbaiki
     dengan melindungi placeholder ini secara eksplisit sebelum safety-net
     jalan.

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
