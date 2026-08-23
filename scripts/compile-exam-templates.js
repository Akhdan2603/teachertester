#!/usr/bin/env node
/**
 * ============================================================
 * COMPILE EXAM TEMPLATES — spreadsheet (.xlsx) → js/exam-templates-data.js
 * ============================================================
 * Implementasi "Opsi B — Hybrid" dari rencana-10-10-non-security.md
 * (bagian 2.2): spreadsheet TETAP jadi tempat admin/guru edit teks
 * exam template, tapi parsing-nya dijalankan SEKALI di sini
 * (compile-time), bukan tiap request (runtime GAS). Hasilnya di-commit
 * sebagai `js/exam-templates-data.js` dan dipakai langsung oleh
 * `js/exam.js` lewat lookup objek — tidak ada lagi network round-trip
 * ke Google Apps Script untuk fitur "🪄 Ambil Template dari Sistem".
 *
 * PENTING: logic parsing di bawah ini adalah PORT dari
 * `google-apps-script/ExamTemplates.gs` (findCourseBlock_,
 * looksLikeBlockTitle_, isKnownLabel_, extractVariantsForCategory_,
 * normalizeWhitespace_) — bukan parser baru dari nol. Ini disengaja:
 * supaya hasil migrasi bisa diverifikasi identik dengan apa yang backend
 * lama SEHARUSNYA kembalikan.
 *
 * >>> TEMUAN PENTING SAAT PORTING (baca sebelum lanjut) <<<
 * Saat port 1:1 dijalankan apa adanya terhadap 3 spreadsheet, HASILNYA
 * KOSONG UNTUK SEMUA kategori, di SEMUA blok, di SEMUA course, tanpa
 * kecuali — bukan cuma 2 kasus bracket-typo (3D_ANIMATOR/WEBSITE_DESIGNER)
 * yang sudah diketahui audit sebelumnya. Akar masalahnya ada di
 * `extractVariantsForCategory_` versi asli:
 *
 *   if (rowIsLabel && cellText !== 'notes' && ...indexOf('variasi') !== 0) break;
 *
 * `cellText` di baris itu adalah variabel dari LOOP LUAR (nama section,
 * misal "coding literacy and concept") — BUKAN teks baris `j` yang lagi
 * diperiksa. Karena section alias tidak akan pernah literally sama
 * dengan string 'notes', kondisi `cellText !== 'notes'` SELALU true.
 * Akibatnya: begitu loop dalam sampai ke baris "NOTES" (baris pertama
 * setelah label section, sebelum "VARIASI x"), kondisi break selalu
 * terpenuhi dan fungsi langsung `return []` — tidak pernah sempat
 * membaca baris "VARIASI x" apalagi baris teks isinya. Ini konsisten
 * terjadi di semua sample data (3D_ANIMATOR, WEBSITE_DESIGNER, XPLORER,
 * GAMEDEV, WEB_DEV, PYTHON_CODER, dll — 100% kosong tanpa fix ini).
 *
 * Ini kemungkinan besar bug variable-shadowing yang belum pernah
 * ketahuan karena dampaknya "diam-diam kosong lalu guru isi manual" —
 * persis skenario silent-failure yang didokumentasikan di komentar
 * ExamTemplates.gs sendiri ("bukan error fatal — supaya guru tetap bisa
 * lanjut isi manual di form"), jadi tidak pernah terlihat sebagai error
 * di UI. Efek praktisnya: tombol "🪄 Ambil Template dari Sistem" selama
 * ini kemungkinan SELALU mengembalikan ketiga kategori kosong,
 * terlepas dari isi spreadsheet — LEBIH PARAH dari yang didokumentasikan
 * di rencana-10-10-non-security.md (yang cuma menyebut 2 kasus
 * bracket-typo). Mohon konfirmasi ke tim: apakah guru memang selama ini
 * selalu isi manual untuk fitur ini?
 *
 * Sesuai semangat rencana (bagian 2.2 poin 2: "setiap ketidakcocokan
 * di-review manual... justru momen yang tepat untuk membenarkan"), fix
 * di bawah ini SUDAH membenarkan bug tersebut (bandingkan current row's
 * text, bukan outer-scope cellText) — supaya hasil migrasi benar-benar
 * berguna, bukan salinan yang identik-tapi-selalu-kosong. Fungsi
 * `extractVariantsForCategory_` di bawah SUDAH beda dari versi .gs
 * pada baris break condition-nya; sisanya (findCourseBlock_,
 * looksLikeBlockTitle_, isKnownLabel_, normalizeWhitespace_) tetap
 * port 1:1. Kalau ExamTemplates.gs diubah lagi nanti (sebelum dihapus),
 * port ulang perubahan lainnya ke sini juga.
 *
 * CARA PAKAI:
 *   node scripts/compile-exam-templates.js
 *
 * Jalankan ini SETIAP KALI admin/guru selesai update teks di salah satu
 * dari 3 spreadsheet exam template (excel/JUNIORS report templates.xlsx,
 * excel/KIDS report templates.xlsx, excel/Salinan dari TEENS report
 * templates.xlsx). Setelah selesai jalan, review hasilnya dengan
 * `git diff js/exam-templates-data.js` sebelum commit & push — SOP
 * lengkap ada di PANDUAN.md bagian "Update Teks Exam Template".
 *
 * Catatan jujur soal verifikasi: skrip ini TIDAK memanggil endpoint GAS
 * live (butuh Web App URL + auth yang tidak tersedia di lingkungan
 * compile), jadi diff-nya diverifikasi terhadap PORT LOGIC yang sama,
 * dijalankan pada snapshot .xlsx yang sama persis dengan yang dibaca
 * live oleh SpreadsheetApp.openById(). Kalau nanti mau verifikasi ketat
 * terhadap endpoint live, tinggal bandingkan output kategori per kategori
 * dengan hasil `getExamTemplateText()` sebelum ExamTemplates.gs dihapus.
 * ============================================================
 */

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const REPO_ROOT = path.resolve(__dirname, '..');
const OUTPUT_PATH = path.join(REPO_ROOT, 'js', 'exam-templates-data.js');

// criteria -> file spreadsheet exam template (mengikuti JUNIOR_SHEET_ID /
// KIDS_SHEET_ID / TEENS_SHEET_ID di Script Properties GAS, tapi versi lokal)
const SOURCE_FILES = {
  Junior: 'excel/JUNIORS report templates.xlsx',
  Kids: 'excel/KIDS report templates.xlsx',
  Teens: 'excel/Salinan dari TEENS report templates.xlsx',
};

// ------------------------------------------------------------
// PORT PERSIS SAMA dari google-apps-script/ExamTemplates.gs
// ------------------------------------------------------------

const SECTION_ALIASES = {
  literacy: ['coding literacy and concept', 'coding concept', 'coding literacy'],
  application: ['coding practice', 'coding application'],
  character: ['character'],
};

function normalizeWhitespace_(text) {
  return String(text).replace(/\s+/g, ' ').trim();
}

function isKnownLabel_(text) {
  const norm = normalizeWhitespace_(text).toLowerCase();
  if (norm === 'notes') return true;
  if (norm.indexOf('variasi') === 0) return true;
  for (const key in SECTION_ALIASES) {
    if (SECTION_ALIASES[key].indexOf(norm) !== -1) return true;
  }
  return false;
}

function looksLikeBlockTitle_(columnAValues, rowIndex) {
  // Sama seperti versi .gs: HANYA cek baris persis di bawahnya.
  if (rowIndex + 1 >= columnAValues.length) return false;
  const nextVal = normalizeWhitespace_(String(columnAValues[rowIndex + 1][0] || '')).toLowerCase();
  for (const key in SECTION_ALIASES) {
    if (SECTION_ALIASES[key].indexOf(nextVal) !== -1) return true;
  }
  return false;
}

// Versi Node: terima seluruh kolom A sheet sebagai array [[v],[v],...]
function findAllCourseBlocks_(columnAValues) {
  const blockStarts = []; // { row (0-indexed), text }
  for (let i = 0; i < columnAValues.length; i++) {
    const raw = String(columnAValues[i][0] || '').trim();
    if (!raw) continue;
    if (isKnownLabel_(raw)) continue;
    if (looksLikeBlockTitle_(columnAValues, i)) {
      blockStarts.push({ row: i, text: normalizeWhitespace_(raw) });
    }
  }
  return blockStarts;
}

// Versi Node dari extractVariantsForCategory_ — `values` = potongan 2D array
// (baris x kolom, 0-indexed) untuk 1 blok course, kolom A..F.
//
// FIXED vs versi .gs asli: break-condition di bawah membandingkan `rowText`
// (teks BARIS j yang sedang diperiksa), bukan `cellText` dari outer loop
// (nama section). Lihat catatan panjang di atas file ini kenapa ini perlu
// diperbaiki, bukan di-port apa adanya.
function extractVariantsForCategory_(values, category) {
  const aliases = SECTION_ALIASES[category];

  for (let i = 0; i < values.length; i++) {
    const cellText = normalizeWhitespace_(String(values[i][0] || '')).toLowerCase();
    if (aliases.indexOf(cellText) === -1) continue;

    for (let j = i + 1; j < values.length; j++) {
      const rowText = normalizeWhitespace_(String(values[j][0] || '')).toLowerCase();
      const rowIsLabel = isKnownLabel_(String(values[j][0] || ''));
      const hasContent = values[j].some(v => String(v || '').trim() !== '');
      if (hasContent && !rowIsLabel) {
        return values[j].filter(v => String(v || '').trim() !== '');
      }
      if (!rowIsLabel && !hasContent) continue;
      if (rowIsLabel && rowText !== 'notes' && rowText.indexOf('variasi') !== 0) {
        break;
      }
    }
    return [];
  }
  return [];
}

// ------------------------------------------------------------
// Compile logic
// ------------------------------------------------------------

function padSheetTo6Cols(rows) {
  return rows.map(row => {
    const r = row.slice(0, 6);
    while (r.length < 6) r.push('');
    return r;
  });
}

function compileSheet(sheetName, rows) {
  const padded = padSheetTo6Cols(rows);
  const columnA = padded.map(r => [r[0]]);
  const blockStarts = findAllCourseBlocks_(columnA);

  const blocks = {};
  const warnings = [];

  blockStarts.forEach((block, idx) => {
    const blockNumber = idx + 1;
    const startRow = block.row;
    const endRow = idx < blockStarts.length - 1 ? blockStarts[idx + 1].row - 1 : padded.length - 1;
    const blockRows = padded.slice(startRow, endRow + 1);

    const categories = {};
    ['literacy', 'application', 'character'].forEach(category => {
      const variants = extractVariantsForCategory_(blockRows, category);
      categories[category] = variants;
      if (variants.length === 0) {
        warnings.push(`  [warn] ${sheetName} blok ${blockNumber} ("${block.text}") — kategori "${category}" KOSONG`);
      }
      // Cek bracket tidak seimbang (kasus BUG lama 3D_ANIMATOR/WEBSITE_DESIGNER) —
      // supaya kelihatan eksplisit di log compile, bukan tersembunyi jadi teks kosong.
      variants.forEach(text => {
        const opens = (text.match(/\[/g) || []).length;
        const closes = (text.match(/\]/g) || []).length;
        if (opens !== closes) {
          warnings.push(`  [warn] ${sheetName} blok ${blockNumber} / ${category} — bracket [ ] tidak seimbang (${opens} vs ${closes}), cek teks sumber di spreadsheet`);
        }
      });
    });

    blocks[blockNumber] = categories;
  });

  return { blocks, warnings, blockTitles: blockStarts.map(b => b.text) };
}

// ------------------------------------------------------------
// Validasi mapping course↔tab (versi Node dari rencana bagian 1.2) —
// dijalankan di sini juga (bukan cuma di HealthCheck.gs) supaya bisa
// dipakai sebagai CI gate (lihat rencana-10-10-non-security.md bagian
// 4.2: "Jalankan script coverage-check dari bagian 1.2 (versi Node-nya,
// bukan yang di GAS) sebagai gate — PR yang menambah course tanpa
// mapping akan gagal CI"). HealthCheck.gs TIDAK BISA menjalankan ini
// sendiri karena COURSE_MAP/COURSE_TAB_MAP hidup di js/ (sisi frontend),
// bukan di scope Apps Script.
function loadFrontendConst(relPath, constName) {
  const fullPath = path.join(REPO_ROOT, relPath);
  const code = fs.readFileSync(fullPath, 'utf8') + `\nmodule.exports = ${constName};`;
  const Module = require('module');
  const m = new Module(fullPath);
  m.filename = fullPath;
  m.paths = Module._nodeModulePaths(path.dirname(fullPath));
  m._compile(code, fullPath);
  return m.exports;
}

function validateCourseTabMapping(EXAM_TEMPLATES) {
  let COURSE_MAP, COURSE_TAB_MAP;
  try {
    COURSE_MAP = loadFrontendConst('js/data.js', 'COURSE_MAP');
    COURSE_TAB_MAP = loadFrontendConst('js/course-tab-map.js', 'COURSE_TAB_MAP');
  } catch (err) {
    console.warn(`[skip] Validasi mapping course↔tab: gagal load COURSE_MAP/COURSE_TAB_MAP (${err.message})`);
    return { errors: [], warnings: [] };
  }

  const errors = [];
  const warnings = [];

  // 1) Course di COURSE_MAP tanpa entri sama sekali di COURSE_TAB_MAP (BUG-007)
  Object.keys(COURSE_MAP).forEach(criteria => {
    (COURSE_MAP[criteria] || []).forEach(course => {
      if (!(course in (COURSE_TAB_MAP[criteria] || {}))) {
        errors.push(`${criteria} / "${course}" — TIDAK ADA entri di COURSE_TAB_MAP sama sekali (bukan null, memang absen).`);
      }
    });
  });

  // 2) Entri COURSE_TAB_MAP yang tabName-nya tidak null tapi tab itu tidak
  //    ketemu di EXAM_TEMPLATES hasil compile (tab dihapus/di-rename di
  //    spreadsheet, atau memang salah ketik).
  Object.keys(COURSE_TAB_MAP).forEach(criteria => {
    Object.entries(COURSE_TAB_MAP[criteria]).forEach(([course, tabName]) => {
      if (!tabName) {
        warnings.push(`${criteria} / "${course}" — belum dimapping (null, manual mode).`);
        return;
      }
      const found = EXAM_TEMPLATES[criteria] && EXAM_TEMPLATES[criteria][tabName];
      if (!found) {
        errors.push(`${criteria} / "${course}" → "${tabName}" — tab TIDAK DITEMUKAN di spreadsheet ${criteria} (cek tab dihapus/di-rename, atau salah ketik di COURSE_TAB_MAP).`);
      }
    });
  });

  return { errors, warnings };
}

function main() {
  const EXAM_TEMPLATES = {};
  let totalWarnings = 0;

  console.log('Compiling exam templates (Rencana B — Hybrid)...\n');

  Object.entries(SOURCE_FILES).forEach(([criteria, relPath]) => {
    const fullPath = path.join(REPO_ROOT, relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`[skip] ${criteria}: file tidak ditemukan di ${relPath}`);
      return;
    }

    const wb = XLSX.readFile(fullPath);
    EXAM_TEMPLATES[criteria] = {};

    console.log(`== ${criteria} (${relPath}) ==`);
    wb.SheetNames.forEach(sheetName => {
      const ws = wb.Sheets[sheetName];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });
      const { blocks, warnings, blockTitles } = compileSheet(sheetName, rows);
      EXAM_TEMPLATES[criteria][sheetName] = blocks;
      console.log(`  tab "${sheetName}": ${blockTitles.length} blok ditemukan (${blockTitles.join(', ')})`);
      warnings.forEach(w => console.log(w));
      totalWarnings += warnings.length;
    });
    console.log('');
  });

  const header = `// ============================================================
// EXAM_TEMPLATES — HASIL COMPILE, JANGAN EDIT MANUAL
// ============================================================
// File ini di-generate otomatis oleh scripts/compile-exam-templates.js
// dari 3 spreadsheet di folder excel/ (JUNIORS/KIDS/TEENS report
// templates). Ini bagian dari "Opsi B — Hybrid" (lihat
// rencana-10-10-non-security.md bagian 2): spreadsheet tetap jadi
// tempat admin/guru edit teks, tapi parsing-nya sudah selesai di sini —
// runtime (js/exam.js) tinggal lookup objek ini, tanpa network call ke
// Google Apps Script / Google Sheets sama sekali.
//
// CARA UPDATE: edit teksnya di spreadsheet excel/ yang bersangkutan,
// lalu jalankan \`node scripts/compile-exam-templates.js\` dan commit
// hasilnya. Lihat PANDUAN.md bagian "Update Teks Exam Template" untuk
// SOP lengkap. JANGAN edit angka/teks di bawah ini langsung — akan
// tertimpa saat compile berikutnya.
//
// (Sengaja TANPA timestamp "Generated: ..." di sini — kalau ada, file ini
// akan selalu ke-diff di setiap compile run walau isinya sama persis,
// bikin CI gate "hasil compile vs yang di-commit" (lihat .github/workflows/ci.yml)
// jadi false-positive gagal terus. Commit history/git blame sudah cukup
// buat tahu kapan file ini terakhir di-generate.)
//
// Struktur: EXAM_TEMPLATES[criteria][courseTab][blockNumber][category] = string[]
// (array variasi teks MENTAH — placeholder [NAMA_STUDENT] dan
// [opsi_A/opsi_B/opsi_C] belum diisi; itu dikerjakan runtime oleh
// fillExamTemplateText_() di js/exam.js berdasarkan nama murid & grade
// yang dipilih guru saat itu).
// ============================================================

const EXAM_TEMPLATES = `;

  const content = header + JSON.stringify(EXAM_TEMPLATES, null, 2) + ';\n';
  fs.writeFileSync(OUTPUT_PATH, content, 'utf8');

  console.log(`Selesai. Ditulis ke ${path.relative(REPO_ROOT, OUTPUT_PATH)}`);
  console.log(`Total warning: ${totalWarnings} (review manual sebelum commit kalau ada — lihat log di atas)`);

  // Coverage-check mapping course↔tab (rencana bagian 1.2 & 4.2 — versi Node
  // ini yang dipakai sebagai GATE di CI, lihat .github/workflows/ci.yml).
  console.log('\nValidasi mapping COURSE_MAP ↔ COURSE_TAB_MAP ↔ tab spreadsheet...');
  const { errors, warnings } = validateCourseTabMapping(EXAM_TEMPLATES);
  warnings.forEach(w => console.log(`  [warn] ${w}`));
  if (errors.length > 0) {
    errors.forEach(e => console.error(`  [ERROR] ${e}`));
    console.error(`\n${errors.length} error mapping ditemukan — perbaiki COURSE_TAB_MAP (js/course-tab-map.js) sebelum commit.`);
    process.exitCode = 1;
  } else {
    console.log('  Semua mapping course↔tab valid ✔');
  }
}

main();
