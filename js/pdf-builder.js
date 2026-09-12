// ============================================================
// PDF BUILDER — capture PNG, generate PDF (dipakai Auto tab & Exam tab)
// Depends on: app.js (formatDate, toast, escHtml, fitPreviewScale)
// ============================================================

// ============================================================
// LAZY LOAD html2canvas + jsPDF — dimuat hanya sekali, saat pertama kali
// dibutuhkan (Export PDF/PNG diklik), bukan selalu di setiap page load.
// ============================================================
let _pdfLibsPromise = null;

/** Muat 1 file JS eksternal via <script> tag, resolve saat berhasil load. Dipakai untuk lazy-load html2canvas & jsPDF. */
function loadScript_(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error(`Gagal memuat library: ${src}`));
    document.head.appendChild(s);
  });
}

/** Pastikan html2canvas & jsPDF sudah termuat (lazy, sekali saja — di-cache di `_pdfLibsPromise`). Panggil ini sebelum capturePNG/buildAndSavePDF. */
function ensurePdfLibsLoaded_() {
  if (!_pdfLibsPromise) {
    _pdfLibsPromise = Promise.all([
      typeof html2canvas === 'undefined'
        ? loadScript_('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js')
        : Promise.resolve(),
      typeof window.jspdf === 'undefined'
        ? loadScript_('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
        : Promise.resolve(),
    ]);
  }
  return _pdfLibsPromise;
}

/**
 * Render 1 elemen (kartu preview report) jadi PNG canvas via html2canvas,
 * dipaksa full-width 1000px tanpa scroll/transform supaya hasil capture-nya
 * lengkap (bukan cuma bagian yang kelihatan di layar).
 */
async function capturePNG(elementId) {
  await ensurePdfLibsLoaded_();
  const el = document.getElementById(elementId);
  const originalOverflow = el.style.overflow;
  el.style.overflow = 'visible';
  
  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    windowWidth: 1200,
    onclone: (clonedDoc) => {
      const clonedEl = clonedDoc.getElementById(elementId);
      if (clonedEl) {
        clonedEl.style.transform = 'none';
        clonedEl.style.width = '1000px';
        clonedEl.style.minWidth = '1000px';
        if (clonedEl.parentElement) {
          clonedEl.parentElement.style.height = 'auto';
          clonedEl.parentElement.style.width = '1000px';
          clonedEl.parentElement.style.overflow = 'visible';
        }
      }
    }
  });
  
  el.style.overflow = originalOverflow;
  return canvas;
}

// ============================================================
// AUTO TAB

/** Ambil dimensi asli 1 gambar (dari data URL/src) — dipakai buildAndSavePDF supaya foto di-fit proporsional (bukan gepeng) di grid PDF. */
function getImageDims_(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth || 4, h: img.naturalHeight || 3 });
    img.onerror = () => resolve({ w: 4, h: 3 });
    img.src = src;
  });
}

/**
 * Template kolase grid foto untuk PDF, per JUMLAH foto (bukan formula
 * kolom generik) — dipanggil oleh buildAndSavePDF(). Mengembalikan array
 * rect {x,y,w,h} (mm) sejumlah `count`, sudah dalam urutan foto ke-1..N.
 * Semua ukuran cuma menentukan BATAS SEL — foto digambar di dalamnya
 * dengan scale "letterbox fit" (lihat pemanggil), jadi apapun geometri
 * sel di sini, foto tidak akan pernah stretch/gepeng.
 *   - 1 foto  → 1 panel lebar panorama
 *   - 2 foto  → 2 panel berdampingan sama besar
 *   - 3 foto  → 1 panel besar kiri + 2 panel kecil ditumpuk kanan
 *   - 4 foto  → grid 2x2 sama besar
 *   - 5+ foto → grid 3 kolom, baris terakhir rata kiri
 */
function getPhotoCellLayout_(count, x0, y0, contentW, gap) {
  const cells = [];
  if (count === 1) {
    const w = contentW, h = Math.round(w * (9 / 22));
    cells.push({ x: x0, y: y0, w, h });
  } else if (count === 2) {
    const w = (contentW - gap) / 2, h = 50;
    cells.push({ x: x0, y: y0, w, h });
    cells.push({ x: x0 + w + gap, y: y0, w, h });
  } else if (count === 3) {
    const bigW = contentW * 0.6, smallW = contentW - bigW - gap;
    const bigH = 58, smallH = (bigH - gap) / 2;
    cells.push({ x: x0, y: y0, w: bigW, h: bigH });
    cells.push({ x: x0 + bigW + gap, y: y0, w: smallW, h: smallH });
    cells.push({ x: x0 + bigW + gap, y: y0 + smallH + gap, w: smallW, h: smallH });
  } else if (count === 4) {
    const w = (contentW - gap) / 2, h = 42;
    for (let i = 0; i < 4; i++) {
      const row = Math.floor(i / 2), col = i % 2;
      cells.push({ x: x0 + col * (w + gap), y: y0 + row * (h + gap), w, h });
    }
  } else {
    const cols = 3, h = 40;
    const w = (contentW - gap * (cols - 1)) / cols;
    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / cols), col = i % cols;
      cells.push({ x: x0 + col * (w + gap), y: y0 + row * (h + gap), w, h });
    }
  }
  return cells;
}

/**
 * Susun & simpan PDF report (dipakai Daily Auto Report & Exam Report) —
 * gambar manual pakai jsPDF primitives (bukan screenshot html2canvas),
 * supaya teksnya tetap selectable/searchable di PDF hasil akhir, bukan
 * gambar raster. Layout: header hijau, grid foto dokumentasi (kalau ada),
 * lalu tabel murid (status/nama/lesson/progress) yang auto page-break
 * kalau kepanjangan. `labels` berisi teks yang sudah di-translate sesuai
 * bahasa aktif (title, labelKelas, labelTanggal, colName, colProgress, fileName).
 */
async function buildAndSavePDF({kelas, tanggal, photos, students, labels}) {
  await ensurePdfLibsLoaded_();
  const {jsPDF}=window.jspdf;
  const doc=new jsPDF({orientation:'landscape',unit:'mm',format:'a4'});
  const W=doc.internal.pageSize.getWidth(),H=doc.internal.pageSize.getHeight();
  const G_DARK=[20,83,45],G_MED=[22,163,74],G_LIGHT=[240,253,244],SLATE=[30,41,59],WHITE=[255,255,255],MUTED=[100,116,139];
  doc.setFillColor(...WHITE);doc.rect(0,0,W,H,'F');
  
  // Header card
  doc.setFillColor(...G_DARK);doc.roundedRect(14,12,W-28,26,4,4,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(15);doc.setTextColor(...WHITE);doc.text(labels.title,22,27);
  doc.setFillColor(255,255,255,50);doc.roundedRect((W-50)/2,16,50,18,3,3,'F');
  doc.setFontSize(9);doc.setTextColor(...WHITE);doc.text('Timedoor Academy',W/2,27,{align:'center'});
  doc.setFont('helvetica','normal');doc.setFontSize(9.5);doc.setTextColor(240,253,244);doc.text(labels.labelKelas + kelas,W-22,23,{align:'right'});
  doc.text(labels.labelTanggal + tanggal,W-22,30,{align:'right'});
  
  const MARGIN=14,GAP=8;
  const photoSrcs = (photos || []).filter(src => !!src);
  const photoCount = photoSrcs.length;

  let PHOTO_Y=44, photoBlockHeight=0;

  if (photoCount > 0) {
    // Template kolase per JUMLAH foto (bukan formula kolom generik lagi) —
    // supaya hasilnya punya komposisi yang enak dilihat mirip galeri di
    // preview web, sekaligus tetap 100% tidak stretch: tiap foto SELALU
    // digambar pakai getImageDims_() + Math.min(cellW/w, cellH/h) — scale
    // "letterbox fit" yang menjaga rasio asli foto, tidak pernah
    // melar/gepeng, apapun rasio aslinya. Sisa ruang kosong di sel (kalau
    // rasio foto beda dari sel) dibiarkan sebagai letterbox abu-abu muda,
    // bukan dipaksa mengisi penuh dengan cara men-distorsi gambar.
    const contentW = W - MARGIN * 2;
    const cells = getPhotoCellLayout_(photoCount, MARGIN, PHOTO_Y, contentW, GAP);

    for (let idx = 0; idx < photoCount; idx++) {
      const cell = cells[idx];
      const src = photoSrcs[idx];
      doc.setFillColor(248, 250, 252); doc.roundedRect(cell.x, cell.y, cell.w, cell.h, 1.5, 1.5, 'F');

      const dims = await getImageDims_(src);
      const scale = Math.min(cell.w / dims.w, cell.h / dims.h);
      const drawW = dims.w * scale, drawH = dims.h * scale;
      const offX = cell.x + (cell.w - drawW) / 2, offY = cell.y + (cell.h - drawH) / 2;
      const fmt = src.startsWith('data:image/png') ? 'PNG' : 'JPEG';
      doc.addImage(src, fmt, offX, offY, drawW, drawH);
    }
    const maxBottom = Math.max(...cells.map(c => c.y + c.h));
    photoBlockHeight = maxBottom - PHOTO_Y;
  }

  const TABLE_X=MARGIN,TABLE_W=W-MARGIN*2,COL_NAME_W=44,COL_LESSON_W=32;
  let rowY = photoCount === 0 ? PHOTO_Y : PHOTO_Y+photoBlockHeight+8;
  const HEADER_H=9;
  doc.setFillColor(...G_DARK);doc.roundedRect(TABLE_X,rowY,TABLE_W,HEADER_H,2,2,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(8.5);doc.setTextColor(...WHITE);
  doc.text('STATUS',TABLE_X+4,rowY+6);
  doc.text(labels.colName,TABLE_X+18,rowY+6);
  doc.text('LESSON',TABLE_X+18+COL_NAME_W,rowY+6);
  doc.text(labels.colProgress,TABLE_X+18+COL_NAME_W+COL_LESSON_W,rowY+6);
  rowY+=HEADER_H;
  
  doc.setFont('helvetica','normal');doc.setFontSize(9);
  students.forEach((s,idx)=>{
    if(!s.nama&&!s.progress)return;
    const plainText = (s.progress||'—').replace(/\*/g,'');
    const lines=doc.splitTextToSize(plainText,TABLE_W-COL_NAME_W-COL_LESSON_W-24);
    const cellH=Math.max(12,lines.length*5+8);
    if(rowY+cellH>H-20){doc.addPage();rowY=20;}
    if(idx%2===0){doc.setFillColor(...G_LIGHT);doc.rect(TABLE_X,rowY,TABLE_W,cellH,'F');}
    doc.setDrawColor(226,232,240);doc.setLineWidth(0.2);doc.line(TABLE_X,rowY+cellH,TABLE_X+TABLE_W,rowY+cellH);
    
    // Status dot
    const isDone = s.status === 'done' || s.status === 'double' || !/in progress|working on|belum|absent/i.test(s.progress||'');
    doc.setFillColor(...(isDone ? [22,163,74] : [245,158,11]));
    doc.circle(TABLE_X+8,rowY+7,2.5,'F');
    
    // Student Name
    doc.setFont('helvetica','bold');doc.setTextColor(...G_DARK);
    doc.text(s.nama||'—',TABLE_X+18,rowY+6.5);
    
    // Lesson Pill
    const lessonTag = getLessonTag(s);
    if(lessonTag){
      doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor(21,128,61);
      doc.setFillColor(240,253,244);
      doc.roundedRect(TABLE_X+18+COL_NAME_W,rowY+3.5,doc.getTextWidth(lessonTag)+6,5,1.5,1.5,'F');
      doc.text(lessonTag,TABLE_X+21+COL_NAME_W,rowY+7);
      doc.setFontSize(9);
    }
    
    // Progress
    doc.setFont('helvetica','normal');doc.setTextColor(...SLATE);doc.text(lines,TABLE_X+18+COL_NAME_W+COL_LESSON_W,rowY+6.5);
    rowY+=cellH;
  });
  
  const tableStartY = photoCount === 0 ? PHOTO_Y : PHOTO_Y+photoBlockHeight+8;
  doc.setDrawColor(...G_MED);doc.setLineWidth(0.5);
  doc.roundedRect(TABLE_X,tableStartY,TABLE_W,rowY-tableStartY,2,2,'S');
  doc.save(`${labels.fileName.replace(/\s+/g,'_')}.pdf`);
}


// ============================================================
// downloadReportPDF — pembungkus generik supaya Auto tab & Exam tab
// tidak duplikat kode try/catch/toast/tombol-disable (dulu ada
// downloadPDF, downloadAutoPDF, downloadExamPDF yang isinya 90% sama).
// Cukup kirim btnId + data + labels, sisanya sama untuk semua tab.
// ============================================================
/**
 * Pembungkus generik untuk tombol "Ekspor PDF" — handle disable/re-enable
 * tombol + toast progress/hasil, supaya Auto tab & Exam tab tidak duplikat
 * kode try/catch (dulu ada downloadPDF, downloadAutoPDF, downloadExamPDF
 * yang isinya 90% sama). Cukup kirim btnId + data + labels.
 */
async function downloadReportPDF({ btnId, btnDefaultText, kelas, tanggal, photos, students, labels }) {
  const btn = document.getElementById(btnId);
  if (btn) { btn.disabled = true; btn.textContent = 'Memproses...'; }
  toast('Membuat PDF...');
  try {
    await buildAndSavePDF({ kelas, tanggal, photos, students, labels });
    toast('PDF berhasil diunduh!', 'success');
  } catch (err) {
    toast('Error PDF: ' + err.message, 'error');
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = btnDefaultText || '📄 Ekspor PDF'; }
  }
}
