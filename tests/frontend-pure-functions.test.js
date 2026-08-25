const { loadScriptGlobals } = require('./helpers/loadScriptGlobals');

describe('app.js — escHtml', () => {
  const { escHtml } = loadScriptGlobals(['js/app.js'], ['escHtml']);

  test('escape 5 karakter HTML-sensitif', () => {
    expect(escHtml('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
    );
  });

  test('escape ampersand & single quote (pakai &#39; — numeric entity pendek, bukan &#039;)', () => {
    expect(escHtml(`Tom & Jerry's "show"`)).toBe(`Tom &amp; Jerry&#39;s &quot;show&quot;`);
  });

  test('string tanpa karakter spesial tidak berubah', () => {
    expect(escHtml('Budi Santoso')).toBe('Budi Santoso');
  });

  test('input non-string (number) tetap aman, tidak throw', () => {
    expect(() => escHtml(123)).not.toThrow();
  });

  test('null/undefined tidak throw dan hasilnya string kosong atau representasi aman', () => {
    expect(() => escHtml(null)).not.toThrow();
    expect(() => escHtml(undefined)).not.toThrow();
  });
});

describe('app.js — formatDate', () => {
  const { formatDate } = loadScriptGlobals(['js/app.js'], ['formatDate']);

  test('format YYYY-MM-DD jadi DD-MM-YYYY', () => {
    expect(formatDate('2026-08-24')).toBe('24-08-2026');
  });

  test('string kosong/falsy -> placeholder "—"', () => {
    expect(formatDate('')).toBe('—');
    expect(formatDate(null)).toBe('—');
  });
});

describe('app.js — formatDateLong', () => {
  const { formatDateLong } = loadScriptGlobals(
    ['js/app.js'], ['formatDateLong']
  );

  test('Bahasa Indonesia: nama hari & bulan Indonesia', () => {
    // 24 Agustus 2026 = hari Senin
    expect(formatDateLong('2026-08-24', 'id')).toBe('Senin, 24 Agustus 2026');
  });

  test('Bahasa Inggris (default): nama hari & bulan Inggris, format tanggal-dulu (bukan gaya US month-first)', () => {
    expect(formatDateLong('2026-08-24', 'en')).toBe('Monday, 24 August 2026');
  });

  test('value kosong -> placeholder "—"', () => {
    expect(formatDateLong('', 'id')).toBe('—');
  });
});

describe('app.js — formatProgressHTML', () => {
  const { formatProgressHTML } = loadScriptGlobals(['js/app.js'], ['formatProgressHTML']);

  test('teks kosong -> placeholder dash', () => {
    expect(formatProgressHTML('')).toContain('—');
  });

  test('escape HTML pada teks progress (cegah XSS dari input murid/guru)', () => {
    expect(formatProgressHTML('<b>test</b>')).not.toContain('<b>test</b>');
    expect(formatProgressHTML('<b>test</b>')).toContain('&lt;b&gt;');
  });

  test('*tebal* dikonversi jadi <strong>', () => {
    expect(formatProgressHTML('Budi *sangat baik* dalam coding')).toBe(
      'Budi <strong>sangat baik</strong> dalam coding'
    );
  });

  test('newline dikonversi jadi <br>', () => {
    expect(formatProgressHTML('Baris 1\nBaris 2')).toBe('Baris 1<br>Baris 2');
  });
});

describe('course-tab-map.js — getCourseTabName', () => {
  const { getCourseTabName } = loadScriptGlobals(['js/course-tab-map.js'], ['getCourseTabName']);

  test('course yang confirmed ter-mapping mengembalikan nama tab yang benar', () => {
    expect(getCourseTabName('Teens', 'Python Coder')).toBe('PYTHON_CODER');
  });

  test('course yang sengaja null (manual mode) mengembalikan null, bukan undefined/error', () => {
    expect(getCourseTabName('Teens', 'JavaScript Developer')).not.toBeUndefined();
  });

  test('criteria tidak dikenal mengembalikan null, tidak throw', () => {
    expect(() => getCourseTabName('TidakAda', 'Apapun')).not.toThrow();
  });

  test('course tidak dikenal di criteria yang valid mengembalikan null/undefined, tidak throw', () => {
    expect(() => getCourseTabName('Teens', 'Course Yang Tidak Ada')).not.toThrow();
  });
});

describe('exam.js — fillExamTemplateText_', () => {
  const { fillExamTemplateText_ } = loadScriptGlobals(['js/exam.js'], ['fillExamTemplateText_']);

  test('mengganti [NAMA_STUDENT] dengan nama murid sesungguhnya', () => {
    const result = fillExamTemplateText_('[NAMA_STUDENT] belajar dengan baik.', 'Sari', 'B');
    expect(result).toBe('Sari belajar dengan baik.');
  });

  test('grade A memilih opsi pertama dari [opsi1/opsi2/opsi3]', () => {
    const result = fillExamTemplateText_('Nilai [sangat baik/ baik/ cukup baik].', 'Budi', 'A');
    expect(result).toBe('Nilai sangat baik.');
  });

  test('grade B memilih opsi kedua', () => {
    const result = fillExamTemplateText_('Nilai [sangat baik/ baik/ cukup baik].', 'Budi', 'B');
    expect(result).toBe('Nilai baik.');
  });

  test('grade C memilih opsi ketiga', () => {
    const result = fillExamTemplateText_('Nilai [sangat baik/ baik/ cukup baik].', 'Budi', 'C');
    expect(result).toBe('Nilai cukup baik.');
  });

  test('grade tidak dikenal fallback ke opsi kedua (index 1)', () => {
    const result = fillExamTemplateText_('Nilai [sangat baik/ baik/ cukup baik].', 'Budi', 'Z');
    expect(result).toBe('Nilai baik.');
  });

  test('placeholder manual seperti [MASUKAN_NILAI UJIAN] (tanpa "/") TIDAK diubah — biar guru isi manual', () => {
    const result = fillExamTemplateText_('Nilai ujian: [MASUKAN_NILAI UJIAN].', 'Budi', 'A');
    expect(result).toContain('[MASUKAN_NILAI UJIAN]');
  });

  test('bracket [ ] yang tersisa (tidak seimbang di teks sumber) dibersihkan sebagai safety-net', () => {
    const result = fillExamTemplateText_('Teks aneh [ tanpa penutup', 'Budi', 'A');
    expect(result).not.toContain('[');
  });
});
