// ============================================================
// DATA — file inti, SELALU dimuat (kecil, cukup untuk isi dropdown Criteria/Course)
// ============================================================
// COURSE_DATA (isi lesson per course, dulu ~108K di file ini) sudah
// dipecah per criteria ke js/data.junior.js / data.kids.js / data.teens.js
// dan dimuat SECARA DINAMIS oleh js/lazy-loader.js begitu guru memilih
// criteria di dropdown — lihat rencana-10-10-non-security.md bagian 5.1.
//
// COURSE_DATA dideklarasikan di sini sebagai objek KOSONG supaya semua
// kode lain (auto-tab.js, exam.js) yang mengakses COURSE_DATA sebagai
// variabel global tetap bekerja tanpa perlu diubah — file data.<criteria>.js
// nantinya cuma menambahkan property lewat Object.assign(COURSE_DATA, {...}),
// bukan mendeklarasikan ulang variabelnya.
// ============================================================

const COURSE_DATA = {};

const COURSE_MAP = {
  "Junior": [
    "3D ANIMATOR",
    "Website Designer",
    "Virtual World Maker",
    "Little Programmer"
  ],
  "Kids": [
    "Coding Explorer",
    "Tech Explorer",
    "Game Developer",
    "Code and Design with Roblox",
    "Interactive Mechanics on Roblox",
    "Full Stack Programming on Roblox",
    "Advanced Lua Programming on Roblox"
  ],
  "Teens": [
    "AI Computer Vision",
    "Python for Data Science",
    "AI Machine Learning",
    "JavaScript Developer",
    "Web Developer Teens",
    "Android Developer",
    "Python for AI",
    "Python Game Developer",
    "Python Coder"
  ]
};

// English templates — friendly language for parents (non-native teachers)

