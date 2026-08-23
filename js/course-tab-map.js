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
    "Virtual World Maker": null,   // TODO: belum ada tab yang cocok di spreadsheet JUNIORS
    "Little Programmer": null,     // TODO: belum ada tab yang cocok di spreadsheet JUNIORS
  },
  Kids: {
    "Coding Explorer": "XPLORER",                        // TODO: mungkin "XPLORER"? mohon konfirmasi
    "Tech Explorer": null,                                // TODO: course baru, belum ada tab exam template
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
    "JavaScript Developer": null,      // TODO: belum jelas cocok ke tab yang mana
    "Android Developer": "APP_DEV",         // TODO: mungkin "APP_DEV"? mohon konfirmasi
    "Python Coder": "PYTHON_CODER",    // CONFIRMED: cocok persis dengan tab "PYTHON_CODER" di spreadsheet TEENS
    "Python for AI": null,             // TODO: kandidat tab "PYTHON AI (32Meeting)" ada di spreadsheet TEENS,
                                        // tapi nama tab pakai konvensi berbeda ("32Meeting") yang tidak
                                        // dijelaskan di manapun — JANGAN ditebak, perlu konfirmasi manual ke
                                        // pemilik spreadsheet dulu sebelum dipasang.
    "Python Game Developer": null,     // Manual-only by design: tidak ada tab yang jelas cocok untuk course ini
                                        // di spreadsheet TEENS (tab "PYTHON_GAMER" cuma ada di spreadsheet KIDS,
                                        // beda criteria). Ini bukan gap yang lupa diisi — sampai ada tab yang
                                        // jelas dibuat khusus, guru diarahkan ke mode manual (form kosong).
  },
};

// Helper: ambil nama tab untuk 1 course, return null kalau belum di-mapping
function getCourseTabName(criteria, courseName) {
  const map = COURSE_TAB_MAP[criteria];
  if (!map) return null;
  return map[courseName] || null;
}
