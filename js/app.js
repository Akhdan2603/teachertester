// ============================================================
// APP LOGIC — Main Application Functions & Rendering
// Depends on: data.js, templates.js
// ============================================================

let isAutoFit = { auto: true };

/**
 * Skala ulang kartu preview report ("Live Preview") supaya pas di area
 * scroll-nya (fit-to-screen) — dipanggil tiap kali kontennya berubah
 * (tambah murid, ganti foto, dll) dan saat window di-resize. Kalau
 * `isAutoFit.auto` false (guru klik toggle zoom manual), fungsi ini
 * skip auto-scaling dan biarkan ukuran natural/scroll manual.
 */
function fitPreviewScale() {
  const tab = 'auto';
  const previewId = 'auto-report-preview';
  const wrapperId = 'wrapper-' + tab;
  const scrollId = 'scroll-' + tab;
  const btnId = 'btn-zoom-' + tab;

  const el = document.getElementById(previewId);
  const wrapper = document.getElementById(wrapperId);
  const scroll = document.getElementById(scrollId);
  const btn = document.getElementById(btnId);

  if (!el || !wrapper || !scroll) return;

  const containerWidth = scroll.clientWidth;
  const targetWidth = 1000;

  if (isAutoFit[tab] && containerWidth > 0 && containerWidth < targetWidth) {
    const scale = containerWidth / targetWidth;
    el.style.transform = `scale(${scale})`;
    el.style.transformOrigin = 'top left';
    wrapper.style.height = Math.ceil(el.offsetHeight * scale) + 'px';
    wrapper.style.width = '100%';
    scroll.style.overflowX = 'hidden';
    if (btn) btn.innerHTML = '🔍 100% Size';
  } else {
    el.style.transform = 'none';
    wrapper.style.height = 'auto';
    wrapper.style.width = '1000px';
    scroll.style.overflowX = 'auto';
    if (btn) btn.innerHTML = '🔍 Fit to Screen';
  }
}

/** Toggle antara mode "Fit to Screen" (auto-scale) dan ukuran asli (scroll manual) untuk preview report di tab tertentu. */
function toggleZoomMode(tab) {
  isAutoFit[tab] = !isAutoFit[tab];
  fitPreviewScale();
}

window.addEventListener('resize', fitPreviewScale);

/** Pindah tab aktif (Daily Auto Report / Exam Report / Kelola Murid) — toggle class .active di tab-bar & tab-content. */
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  if (window.event && window.event.target) window.event.target.classList.add('active');
  setTimeout(fitPreviewScale, 50);
}

// ============================================================
// UTILS
// ============================================================
const HARI_EN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const BULAN_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const HARI_ID = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
const BULAN_ID = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

/** Format tanggal panjang dengan nama hari & bulan (mis. "Senin, 24 Agustus 2026"), dipakai di teks WhatsApp. `val` format "YYYY-MM-DD". */
function formatDateLong(val, lang = 'en') {
  if(!val) return '—';
  const [y,m,d] = val.split('-').map(Number);
  const dt = new Date(y,m-1,d);
  if (lang === 'id') {
    return `${HARI_ID[dt.getDay()]}, ${d} ${BULAN_ID[m-1]} ${y}`;
  }
  return `${HARI_EN[dt.getDay()]}, ${d} ${BULAN_EN[m-1]} ${y}`;
}
/** Format tanggal pendek DD-MM-YYYY (dipakai di header kartu report), dari input `<input type="date">` (format "YYYY-MM-DD"). */
function formatDate(s) {
  if(!s) return '—';
  const [y,m,d] = s.split('-');
  return `${d}-${m}-${y}`;
}
/**
 * Escape 5 karakter HTML-sensitif untuk cegah XSS. Dipakai di SELURUH
 * codebase untuk semua render data user (nama murid, teks progress, dll)
 * ke dalam innerHTML.
 */
function escHtml(s) {
  if (!s) return '';
  // Escape semua 5 karakter HTML-sensitif, termasuk kutip tunggal ('),
  // karena escHtml() dipakai juga untuk merender nilai ke dalam atribut
  // HTML yang didelimit kutip tunggal (mis. onclick='...'), bukan cuma
  // sebagai text content biasa. Tanpa escaping kutip tunggal, nilai yang
  // mengandung karakter ' bisa memutus delimiter atribut dan menyuntikkan
  // JavaScript arbitrer (stored XSS).
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
/** Format teks progress murid untuk ditampilkan: escape HTML, ubah *tebal* jadi <strong>, \n jadi <br>. Return placeholder "—" kalau kosong. */
function formatProgressHTML(text) {
  if (!text) return '<em style="color:#94a3b8">—</em>';
  let formatted = escHtml(text);
  formatted = formatted.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\n/g, '<br>');
  return formatted;
}
/**
 * Tampilkan notifikasi toast singkat di pojok layar. `type`: '', 'success',
 * atau 'error' (menentukan warna).
 *
 * Durasi tampil MENYESUAIKAN panjang pesan (audit QA/QC — risiko toast
 * fixed 3 detik untuk semua pesan): pesan pendek tetap ~3 detik, pesan
 * panjang (mis. error detail) diberi waktu ekstra supaya sempat terbaca
 * penuh sebelum auto-dismiss, dibatasi maksimum 8 detik supaya tidak
 * mengganggu kalau guru sudah selesai membaca.
 */
function toast(msg, type='') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'show ' + type;
  clearTimeout(el._t);
  const MIN_DURATION_MS = 3000;
  const MAX_DURATION_MS = 8000;
  const MS_PER_CHAR = 50; // ~20 karakter/detik, kecepatan baca santai
  const duration = Math.min(MAX_DURATION_MS, Math.max(MIN_DURATION_MS, String(msg).length * MS_PER_CHAR));
  el._t = setTimeout(() => el.className = '', duration);
}


// ============================================================
// UTILITAS SHARED (dipakai Auto tab, Exam tab, PDF builder)
// ============================================================

function getLessonTag(s) {
  if (!s) return '';
  if (s.lesson) {
    if ((s.status === 'double' || s.status === 'one_and_half') && s.lesson2) {
      return `Lesson ${s.lesson} & ${s.lesson2}`;
    }
    return `Lesson ${s.lesson}`;
  }
  const match = (s.progress || '').match(/Lesson\s+(\d+(?:\s*(?:&|and|,)\s*\d+)?)/i);
  return match ? match[0] : '';
}

// ============================================================
// INIT (bagian yang tidak bergantung fungsi tab-specific)
// ============================================================
const _t = new Date();
const _mm = String(_t.getMonth()+1).padStart(2,'0');
const _dd = String(_t.getDate()).padStart(2,'0');
const todayVal = _t.getFullYear()+'-'+_mm+'-'+_dd;
document.getElementById('auto-tanggal').value = todayVal;
// Sisa init (setLang, autoUpdatePreview, fitPreviewScale) dipindah ke
// akhir auto-tab.js — fungsi-fungsi itu didefinisikan di sana, dan
// dengan <script defer>, app.js jalan DULUAN sebelum auto-tab.js selesai
// dimuat, jadi manggilnya dari sini bakal "is not defined".