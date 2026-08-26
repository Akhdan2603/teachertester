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

/** Render ulang grid thumbnail foto di 2 tempat (form input & preview report) dari `autoPhotoData[]`, sembunyikan section kalau kosong. */
function renderPhotoGrid() {
  const arr = autoPhotoData;
  const gridIds = ['auto-photo-grid-input', 'auto-photo-grid'];
  const section = document.getElementById('auto-photo-section');

  const thumbHtml = arr.map((src, i) => `
    <div class="photo-thumb-wrap">
      <img src="${src}" alt="Photo ${i + 1}">
      <button type="button" class="btn-photo-overlay-del" data-html2canvas-ignore="true" onclick="removePhotoAt(true, ${i})" title="Remove Photo" aria-label="Remove photo ${i + 1}">✕</button>
    </div>`).join('');

  gridIds.forEach(id => {
    const grid = document.getElementById(id);
    if (grid) grid.innerHTML = thumbHtml;
  });

  if (section) section.style.display = arr.length === 0 ? 'none' : '';
  fitPreviewScale();
}

