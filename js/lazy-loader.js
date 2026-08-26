// ============================================================
// LAZY LOADER — muat data.<criteria>.js, templates.<criteria>.js, &
// exam-templates.<criteria>.js secara dinamis, hanya saat guru pertama
// kali pilih criteria itu.
// ============================================================
// Bagian dari performance split (rencana-10-10-non-security.md bagian 5.1).
// Sebelumnya js/data.js (108K) dan js/templates.js (124K) SELALU dimuat
// penuh di <head>, walau guru cuma pakai 1 criteria per sesi kerja (guru
// Junior nggak pernah butuh data Kids/Teens, dst). Sekarang js/data.js dan
// js/templates.js cuma berisi shell kosong (COURSE_DATA={}, TEMPLATES={},
// TEMPLATES_EN={}) + COURSE_MAP yang kecil; isi sesungguhnya per criteria
// dimuat lewat fungsi loadCriteriaData() di bawah, dipanggil dari
// onCriteriaChange (auto-tab.js) dan onExamCriteriaChange (exam.js).
//
// js/exam-templates-data.js (132K) ikut dibereskan dengan pola yang sama
// (audit QA/QC BUG-1) — sebelumnya file itu TIDAK ikut lazy-load walau
// strukturnya sendiri sudah per-criteria; sekarang cuma shell kosong
// (EXAM_TEMPLATES={}) dan isinya dimuat di sini juga, lewat
// exam-templates.<criteria>.js yang di-generate scripts/compile-exam-templates.js.
//
// Depends on: harus dimuat SEBELUM auto-tab.js dan exam.js di index.html
// (tapi SESUDAH js/data.js, js/templates.js, dan js/exam-templates-data.js,
// supaya COURSE_DATA/TEMPLATES/TEMPLATES_EN/EXAM_TEMPLATES sudah ada
// sebagai objek kosong untuk di-populate).

const CRITERIA_FILE_SUFFIX = { Junior: 'junior', Kids: 'kids', Teens: 'teens' };

// Cache per criteria: null = belum pernah dimuat, Promise = sedang/sudah
// dimuat (resolved promise di-reuse supaya panggilan berikutnya instan,
// dan supaya 2 baris murid yang pilih criteria sama tidak double-fetch).
const _criteriaLoadCache = {};

function _loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    // Kalau tag <script> dengan src ini sudah ada (misal termuat manual atau
    // dipanggil 2x bersamaan), jangan inject lagi — tinggal resolve.
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) { resolve(); return; }
    const el = document.createElement('script');
    el.src = src;
    el.onload = () => resolve();
    el.onerror = () => reject(new Error(`Gagal memuat ${src}`));
    document.head.appendChild(el);
  });
}

/**
 * Pastikan data.<criteria>.js, templates.<criteria>.js, dan
 * exam-templates.<criteria>.js sudah dimuat. Aman dipanggil berkali-kali
 * untuk criteria yang sama (di-cache) — selalu `await` hasil panggilan
 * ini sebelum membaca COURSE_DATA[course], TEMPLATES[course], atau
 * EXAM_TEMPLATES[criteria] untuk criteria yang bersangkutan.
 *
 * @param {string} criteria - "Junior" | "Kids" | "Teens"
 * @returns {Promise<boolean>} true kalau berhasil (atau criteria kosong/tidak dikenal, no-op), false kalau gagal dimuat
 */
async function loadCriteriaData(criteria) {
  const suffix = CRITERIA_FILE_SUFFIX[criteria];
  if (!suffix) return true; // criteria kosong/tidak dikenal — biarkan caller yang urus (dropdown kosong dsb)

  if (!_criteriaLoadCache[criteria]) {
    _criteriaLoadCache[criteria] = Promise.all([
      _loadScriptOnce(`js/data.${suffix}.js`),
      _loadScriptOnce(`js/templates.${suffix}.js`),
      _loadScriptOnce(`js/exam-templates.${suffix}.js`),
    ]);
  }

  try {
    await _criteriaLoadCache[criteria];
    return true;
  } catch (err) {
    // Reset cache supaya bisa dicoba ulang (misal gagal karena masalah
    // jaringan sesaat), jangan biarkan 1 kegagalan mengunci criteria ini
    // selamanya untuk sisa sesi.
    delete _criteriaLoadCache[criteria];
    console.error('[lazy-loader]', err);
    if (typeof toast === 'function') {
      toast(`Gagal memuat data untuk criteria "${criteria}". Cek koneksi lalu coba pilih ulang.`, 'error');
    }
    return false;
  }
}
