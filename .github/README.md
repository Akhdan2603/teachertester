# Timedoor Report Generator

Web app internal untuk guru Timedoor Academy — otomatisasi pembuatan laporan
harian (Daily Report) dan laporan ujian (Exam Report) murid, terintegrasi
dengan Google Sheets sebagai database dan Telegram untuk reminder otomatis.

**100% gratis** — Google Apps Script (backend), Google Sheets (database),
Vercel/GitHub Pages (hosting frontend), Telegram Bot API (notifikasi),
Google Gemini free tier (AI generate opsional).

## Fitur Utama

- **Login PIN** — sekali masuk, guru langsung ke dashboard tanpa login ulang
- **Daily Auto Report** — pilih hari & kelas, murid otomatis termuat dari
  jadwal, generate laporan per-murid, kirim ke WhatsApp / export PDF
- **Exam Report** — checkpoint otomatis tiap kelipatan 8 lesson, generate
  teks lewat template spreadsheet ATAU AI (Gemini, digrounding ke data
  kurikulum lokal biar tidak mengarang)
- **Kelola Murid** — tambah/hapus murid & kelas langsung dari UI, tanpa
  perlu buka Google Sheets manual
- **Reminder otomatis** — Telegram + Google Calendar, checkpoint yang belum
  di-Exam Report diingatkan berkala
- **Tracking absensi** — tombol "Tidak Hadir" per murid, streak reset
  otomatis begitu murid hadir lagi
- **Health Check** — 1 tombol buat validasi seluruh setup (Script
  Properties, struktur sheet, token bot, trigger) sebelum dipakai live

## Struktur Project

```
├── index.html              Halaman utama (semua tab dalam 1 file)
├── css/style.css           Semua styling
├── js/
│   ├── config.js           GAS_URL Anda (TIDAK ikut commit — lihat config.example.js)
│   ├── config.example.js   Template config, copy jadi config.js
│   ├── data.js             COURSE_MAP + shell COURSE_DATA={} (kecil, selalu dimuat)
│   ├── data.junior.js / data.kids.js / data.teens.js  Isi COURSE_DATA per criteria, dimuat dinamis
│   ├── templates.js        Shell TEMPLATES={}/TEMPLATES_EN={} (kecil, selalu dimuat)
│   ├── templates.junior.js / templates.kids.js / templates.teens.js  Isi template per criteria, dimuat dinamis
│   ├── lazy-loader.js      loadCriteriaData() — muat data/templates.<criteria>.js on-demand saat guru pilih criteria
│   ├── course-tab-map.js   Mapping nama course → nama tab spreadsheet exam
│   ├── exam-templates-data.js  Data exam template hasil compile (JANGAN edit manual — lihat scripts/)
│   ├── api.js               Wrapper fetch ke Apps Script Web App
│   ├── auth.js              Login PIN + session
│   ├── app.js                Utilitas inti (format tanggal, toast, dll)
│   ├── photo-manager.js      Upload foto dinamis (unlimited, tidak stretch)
│   ├── pdf-builder.js        Generate PDF/PNG (dipakai Auto & Exam tab)
│   ├── auto-tab.js           Logic Daily Auto Report (landing page)
│   ├── exam.js               Logic Exam Report
│   ├── kelola-murid.js       Logic Kelola Murid
│   └── health-check.js       Logic tombol Health Check
├── google-apps-script/      Backend (deploy manual ke script.google.com)
│   ├── Code.gs               Entry point (doGet), auth, daily/exam report, cron reminder
│   ├── AdminSheets.gs        Sync view admin, absensi, Kelola Murid (CRUD)
│   ├── AIGenerator.gs        Integrasi Gemini AI
│   ├── HealthCheck.gs        Validasi setup
│   └── appsscript.json       Manifest (OAuth scopes)
├── scripts/
│   └── compile-exam-templates.js  Compile excel/*.xlsx → js/exam-templates-data.js
│                                   (jalankan tiap kali teks exam template diupdate,
│                                   lihat PANDUAN.md bagian 3.6)
├── excel/                   Spreadsheet sumber (admin/guru edit di sini): daily
│                             report templates + 3 exam template (Junior/Kids/Teens)
├── PANDUAN.md               Panduan setup & pemakaian lengkap, step-by-step
└── TODO.md                  Checklist yang masih perlu dikerjakan/diverifikasi
```

## Mulai dari Mana?

**Setup awal / deploy pertama kali** → baca **[PANDUAN.md](./PANDUAN.md)**,
ikuti Bagian 1 step-by-step (deploy Apps Script, isi Script Properties,
sambungkan frontend, setup Telegram bot, deploy hosting).

**Ada yang perlu diverifikasi/belum beres** → cek **[TODO.md](./TODO.md)**.

**Sudah jalan tapi ada masalah** → jalankan tombol **🩺 Health Check** di
layar login/footer dulu sebelum debug manual — biasanya langsung ketahuan
akar masalahnya (Script Property kosong, kolom sheet hilang, token invalid, dst).

## Development

Tidak ada build step — semua file JS/HTML/CSS langsung jalan di browser
tanpa bundler. Untuk deploy: push ke GitHub, hosting (Vercel/GitHub Pages)
auto-redeploy. Backend (`google-apps-script/*.gs`) harus di-copy manual ke
Apps Script editor dan di-deploy ulang tiap ada perubahan (lihat PANDUAN.md
Bagian 4 untuk detail).
