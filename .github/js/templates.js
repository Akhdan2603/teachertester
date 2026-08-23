// ============================================================
// TEMPLATES / TEMPLATES_EN — file inti, SELALU dimuat (shell kosong)
// ============================================================
// Isi template teks progress per course (dulu ~124K di file ini) sudah
// dipecah per criteria ke js/templates.junior.js / templates.kids.js /
// templates.teens.js dan dimuat SECARA DINAMIS oleh js/lazy-loader.js
// begitu guru memilih criteria di dropdown — lihat
// rencana-10-10-non-security.md bagian 5.1.
//
// Dideklarasikan di sini sebagai objek KOSONG (bukan dihapus total) supaya
// kode lain (auto-tab.js, exam.js) yang mengakses TEMPLATES/TEMPLATES_EN
// sebagai variabel global tetap bekerja tanpa perlu diubah — file
// templates.<criteria>.js nantinya cuma menambahkan property lewat
// Object.assign(TEMPLATES, {...}), bukan mendeklarasikan ulang variabelnya.
//
// Edit teks templatenya di file per-criteria yang sesuai, bukan di sini.
// ============================================================

const TEMPLATES = {};
const TEMPLATES_EN = {};
