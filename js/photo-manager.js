// ============================================================
// PHOTO MANAGER — upload foto dinamis (unlimited, tidak stretch)
// Dipakai Auto tab. Depends on: app.js (fitPreviewScale, toast)
// ============================================================

let autoPhotoData = [];

// Batas resize (audit QA/QC BUG-3): foto dari kamera HP modern umumnya
// 3-12MB & resolusi tinggi (mis. 4000x3000), jauh lebih besar dari yang
// dibutuhkan untuk report (ditampilkan sebagai thumbnail & di-capture
// html2canvas scale:2 ke kanvas lebar 1000px). Tanpa resize, base64-nya
// (±33% lebih besar dari file asli) membengkakkan memory browser dengan
// cepat kalau guru upload banyak foto — berisiko lag/crash di HP
// low-end. 1600px cukup tajam untuk scale:2 export tanpa membawa beban
// resolusi kamera penuh yang tidak pernah terlihat sepenuhnya oleh siapa pun.
const PHOTO_MAX_DIMENSION = 1600;
const PHOTO_JPEG_QUALITY = 0.82;

/**
 * Resize (downscale, mempertahankan aspect ratio) & compress 1 file
 * gambar ke JPEG lewat <canvas>, tanpa library eksternal. Kalau file
 * gagal dibaca sebagai gambar (mis. HEIC yang tidak didukung browser),
 * reject supaya caller bisa skip file itu dengan pesan yang jelas,
 * bukan menyimpan data korup.
 */
function _resizePhotoFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`Gagal membaca file "${file.name}".`));
    reader.onload = ev => {
      const img = new Image();
      img.onerror = () => reject(new Error(`Format gambar "${file.name}" tidak didukung browser (coba JPG/PNG).`));
      img.onload = () => {
        let { width, height } = img;
        if (width > PHOTO_MAX_DIMENSION || height > PHOTO_MAX_DIMENSION) {
          const scale = PHOTO_MAX_DIMENSION / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', PHOTO_JPEG_QUALITY));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/** Baca file foto yang dipilih guru (multi-select), resize+compress lewat canvas, push ke `autoPhotoData[]`. Async per-file, render grid setelah semua selesai. */
async function handlePhotoAdd(e, isAuto) {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;

  const results = await Promise.allSettled(files.map(_resizePhotoFile));

  let failCount = 0;
  results.forEach(r => {
    if (r.status === 'fulfilled') {
      autoPhotoData.push(r.value);
    } else {
      failCount++;
      console.error('[photo-manager]', r.reason);
    }
  });

  renderPhotoGrid();
  e.target.value = '';

  if (failCount > 0) {
    toast(`${failCount} foto gagal diproses dan tidak ditambahkan. Cek format filenya (JPG/PNG dianjurkan).`, 'error');
  }
}

/** Hapus 1 foto dari `autoPhotoData[]` berdasar index, render ulang grid. */
function removePhotoAt(isAuto, index) {
  autoPhotoData.splice(index, 1);
  renderPhotoGrid();
  toast('Foto dihapus', 'success');
}

// Lebar konten laporan yang di-export: kanvas #auto-report-preview SELALU
// 1000px (lihat catatan "DO NOT modify" di css/style.css), dikurangi
// padding kiri+kanan .rpt-body (40px+40px) = 920px. Kalau salah satu dari
// dua angka itu diubah di CSS, angka ini WAJIB ikut disesuaikan.
const RPT_CONTENT_WIDTH = 920;
const RPT_GRID_GAP = 12;

/**
 * Hitung lebar & tinggi PERSIS (dalam pixel) untuk tiap foto di grid
 * laporan, supaya cocok 1:1 antara preview di browser dan hasil
 * download PNG/PDF (html2canvas). Lihat komentar panjang di css/style.css
 * bagian "DYNAMIC PHOTO GRID" untuk kenapa ini tidak dihitung lewat CSS
 * persentase/aspect-ratio biasa.
 * - 1 foto  → hero lebar penuh (rasio ~1.92:1)
 * - 2 foto  → berdampingan sama besar (rasio 16:10)
 * - 3+ foto → 2 foto pertama jadi baris "hero" (tinggi sama, lebar ~58/42),
 *             sisanya jadi tile 3-per-baris (rasio 4:3)
 */
function computePhotoLayout(n) {
  const W = RPT_CONTENT_WIDTH, G = RPT_GRID_GAP;
  const layout = [];
  if (n <= 0) return layout;
  if (n === 1) {
    layout.push({ w: W, h: Math.round(W * 0.52) });
    return layout;
  }
  if (n === 2) {
    const w = Math.floor((W - G) / 2);
    const h = Math.round(w * 0.625);
    layout.push({ w, h }, { w: W - G - w, h });
    return layout;
  }
  // 3+ foto: baris hero (2 foto pertama, tinggi seragam)
  const heroH = 320;
  const w0 = Math.round(heroH * 16 / 10);
  const w1 = W - G - w0;
  layout.push({ w: w0, h: heroH }, { w: w1, h: heroH });
  // Baris tile: sisanya, 3 per baris, rasio 4:3
  const tileW = Math.floor((W - G * 2) / 3);
  const tileH = Math.round(tileW * 0.75);
  for (let i = 2; i < n; i++) layout.push({ w: tileW, h: tileH });
  return layout;
}

/** Render ulang grid thumbnail foto di 2 tempat (form input & preview report) dari `autoPhotoData[]`, sembunyikan section kalau kosong. Grid laporan (`auto-photo-grid`) dapat ukuran exact-pixel dari computePhotoLayout(); grid input sidebar (`auto-photo-grid-input`) pakai ukuran seragam sederhana (diatur CSS `.photo-grid-input`, lihat style.css) karena bukan target export. */
function renderPhotoGrid() {
  const arr = autoPhotoData;
  const section = document.getElementById('auto-photo-section');
  const layout = computePhotoLayout(arr.length);

  const buildThumb = (src, i, sized) => {
    const sizeStyle = sized ? ` style="width:${layout[i].w}px;height:${layout[i].h}px"` : '';
    return `
    <div class="photo-thumb-wrap"${sizeStyle}>
      <img src="${src}" alt="Photo ${i + 1}">
      <button type="button" class="btn-photo-overlay-del" data-html2canvas-ignore="true" onclick="removePhotoAt(true, ${i})" title="Remove Photo" aria-label="Remove photo ${i + 1}">✕</button>
    </div>`;
  };

  const inputGrid = document.getElementById('auto-photo-grid-input');
  if (inputGrid) inputGrid.innerHTML = arr.map((src, i) => buildThumb(src, i, false)).join('');

  const reportGrid = document.getElementById('auto-photo-grid');
  if (reportGrid) reportGrid.innerHTML = arr.map((src, i) => buildThumb(src, i, true)).join('');

  const countBadge = document.getElementById('auto-photo-count-badge');
  if (countBadge) countBadge.textContent = `${arr.length} ${arr.length === 1 ? 'Photo' : 'Photos'} Loaded`;

  if (section) section.style.display = arr.length === 0 ? 'none' : '';
  fitPreviewScale();
}

