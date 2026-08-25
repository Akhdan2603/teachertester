// ============================================================
// loadScriptGlobals — helper untuk unit test Jest
// ============================================================
// Frontend (js/*.js) dan backend (google-apps-script/*.gs) sama-sama
// ditulis sebagai script "classic" (browser-global / Apps Script global),
// BUKAN module CommonJS — tidak ada `module.exports` di dalamnya (dan
// memang sebaiknya tidak ditambahkan cuma demi testing, supaya tetap jalan
// normal di browser/Apps Script tanpa bundler apapun).
//
// Untuk bisa di-unit-test dari Jest (Node), helper ini menjalankan isi
// file di dalam `vm` sandbox terisolasi (bukan `require()` biasa — Node
// tidak paham extension `.gs`, dan CommonJS wrapper Node juga tidak cocok
// untuk script yang assign ke global scope), lalu mengembalikan fungsi/
// variabel yang namanya diminta. Sandbox diberi stub minimal untuk
// `document`/`window`/`console` supaya file yang punya sedikit kode
// top-level yang menyentuh DOM (contoh: `document.addEventListener(...)`
// di exam.js, `window.addEventListener(...)` di app.js) tidak crash saat
// dimuat — TAPI fungsi UI yang sesungguhnya (yang manipulasi DOM secara
// aktif) tetap TIDAK bisa dites lewat helper ini, cuma fungsi murni
// (logic tanpa DOM) yang cocok. Itu memang batasan yang disengaja: sesuai
// TODO.md, target Batch 4 ini fungsi murni saja (escHtml, findColumnIndex_,
// computePendingCheckpoint_, fillExamTemplateText_, dll), bukan full
// browser-automation testing (itu scope terpisah, lebih besar).

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const REPO_ROOT = path.join(__dirname, '..', '..');

function makeDomStub() {
  const noop = () => {};
  const fakeEl = () => ({
    addEventListener: noop, appendChild: noop, style: {}, classList: { add: noop, remove: noop, toggle: noop },
    setAttribute: noop, getAttribute: () => null, querySelector: () => null, querySelectorAll: () => [],
    value: '', textContent: '', innerHTML: '', disabled: false,
  });
  return {
    addEventListener: noop,
    // Sengaja return elemen stub (bisa di-assign .value/.textContent dst),
    // BUKAN null — beberapa file (app.js) punya kode top-level yang langsung
    // set properti elemen saat file dimuat (contoh: isi tanggal hari ini ke
    // input date), bukan cuma di dalam function. Kalau return null, itu akan
    // throw "Cannot set properties of null" begitu file di-load ke sandbox,
    // padahal fungsi yang mau ditest sama sekali tidak terkait itu.
    getElementById: fakeEl,
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: fakeEl,
    head: { appendChild: noop },
    body: { classList: { add: noop, remove: noop } },
  };
}

/**
 * Muat 1 atau lebih file script (.js frontend / .gs Apps Script) ke dalam
 * 1 sandbox bersama (supaya file yang saling bergantung ke variabel global
 * yang sama — misal exam.js butuh EXAM_TEMPLATES dari exam-templates-data.js
 * — bisa dites bersamaan), lalu kembalikan objek berisi nama-nama global
 * yang diminta.
 *
 * @param {string[]} relPaths - path relatif dari root repo, urutan penting
 *   (file belakangan bisa pakai variabel dari file duluan).
 * @param {string[]} exportNames - nama variabel/fungsi top-level yang mau
 *   diambil dari sandbox setelah semua file selesai dimuat.
 * @returns {Object} objek { namaVariabel: nilainya }
 */
function loadScriptGlobals(relPaths, exportNames) {
  const sandbox = {
    console,
    document: makeDomStub(),
    window: { addEventListener: () => {} },
    setTimeout, clearTimeout, Date, Math, JSON, Array, Object, String, Number, RegExp,
  };
  vm.createContext(sandbox);

  relPaths.forEach(relPath => {
    const fullPath = path.join(REPO_ROOT, relPath);
    const code = fs.readFileSync(fullPath, 'utf8');
    vm.runInContext(code, sandbox, { filename: fullPath });
  });

  const result = {};
  exportNames.forEach(name => { result[name] = sandbox[name]; });
  return result;
}

module.exports = { loadScriptGlobals };
