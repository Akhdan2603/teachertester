// ============================================================
// MAPPING: Nama Course di Dropdown Aplikasi → Nama Tab di
// Spreadsheet Exam Template (Junior/Kids/Teens)
// ============================================================
// KENAPA FILE INI ADA: nama course yang guru pilih di dropdown
// (lihat COURSE_MAP di data.js) tidak selalu sama persis dengan
// nama tab di 3 spreadsheet exam template. File ini menjembatani
// keduanya.
//
// value `null` artinya BELUM ADA mapping yang pasti/dikonfirmasi.
// Kalau guru pilih course yang mapping-nya null, sistem otomatis
// fallback ke MODE MANUAL (form kosong, guru ketik sendiri) —
// TIDAK error, TIDAK fetch data yang salah. Aman, tapi kurang efisien
// sampai mapping-nya dilengkapi.
//
// CARA ISI: buka spreadsheet exam template criteria terkait, lihat
// nama tab persis (harus sama persis termasuk huruf besar/kecil &
// underscore), lalu isi di sini.
// ============================================================

const COURSE_TAB_MAP = {
  Junior: {
    "3D ANIMATOR": "3D_ANIMATOR",
    "Website Designer": "WEBSITE_DESIGNER",
    "Virtual World Maker": "VIRTUAL_WORLD_MAKER", // Diisi otomatis dari sintesis daily-report objectives (lihat dokumentasi terpisah)
    "Little Programmer": "LITTLE_PROGRAMMER",     // Diisi otomatis dari sintesis daily-report objectives (lihat dokumentasi terpisah)
  },
  Kids: {
    "Coding Explorer": "XPLORER",                        // TODO: mungkin "XPLORER"? mohon konfirmasi
    "Tech Explorer": "TECH_EXPLORER",                     // Diisi otomatis dari sintesis daily-report objectives (lihat dokumentasi terpisah)
    "Game Developer": "GAMEDEV",                         // TODO: mungkin "GAMEDEV"? mohon konfirmasi
    "Code and Design with Roblox": "ROBLOX_EXPLORER",             // TODO: salah satu dari ROBLOX_DESIGNER/ROBLOX_CODER/dst?
    "Interactive Mechanics on Roblox": "ROBLOX_DESIGNER",         // TODO
    "Full Stack Programming on Roblox": "ROBLOX_CODER",        // TODO
    "Advanced Lua Programming on Roblox": "ROBLOX_ADVANCE CODER",      // TODO
    // Catatan: "Python Coder" & "Python Game Developer" SENGAJA tidak ada di
    // sini — dulu sempat ke-mapping di sini secara keliru (copy-paste), tapi
    // keduanya bukan course Kids (cek COURSE_MAP di data.js: course itu cuma
    // ada di daftar Teens). getCourseTabName('Kids', 'Python Coder') memang
    // tidak akan pernah dipanggil dari UI karena dropdown Kids tidak
    // menawarkan course itu. Mapping yang benar ada di bawah, di blok Teens.
  },
  Teens: {
    "Web Developer Teens": "WEB_DEV",
    "Python for Data Science": "PYTHON_FOR_DATA_SCIENCE(16)",
    "AI Machine Learning": "PYTHON_FOR_ML(16)",
    "AI Computer Vision": "PYTHON_FOR_CV(16)",        // TODO: mungkin "PYTHON_FOR_CV(16)"? mohon konfirmasi
    "JavaScript Developer": "JAVASCRIPT_DEVELOPER",    // Diisi otomatis dari sintesis daily-report objectives (lihat dokumentasi terpisah)
    "Android Developer": "APP_DEV",         // TODO: mungkin "APP_DEV"? mohon konfirmasi
    "Python Coder": "PYTHON_CODER",    // CONFIRMED: cocok persis dengan tab "PYTHON_CODER" di spreadsheet TEENS
    "Python for AI": "PYTHON AI (32Meeting)",  // Dipakai sesuai instruksi — CATATAN: isi tab ini belum
                                        // di-generalize pakai placeholder [NAMA_STUDENT]/[grade] (lihat
                                        // dokumentasi terpisah), dan blok 2 masih kosong total.

    "Python Game Developer": "PYTHON_GAME_DEV",  // Diisi otomatis dari sintesis daily-report objectives (lihat dokumentasi terpisah).
                                        // Catatan: tab "PYTHON_GAMER" yang ada di spreadsheet KIDS TETAP TIDAK
                                        // dipakai untuk ini — beda criteria/level, isinya juga untuk course Kids
                                        // yang berbeda. Tab "PYTHON_GAME_DEV" ini baru & khusus dibuat di
                                        // spreadsheet TEENS.

  },
};

// Helper: ambil nama tab untuk 1 course, return null kalau belum di-mapping
function getCourseTabName(criteria, courseName) {
  const map = COURSE_TAB_MAP[criteria];
  if (!map) return null;
  return map[courseName] || null;
}
