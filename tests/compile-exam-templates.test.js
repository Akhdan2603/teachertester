const {
  normalizeWhitespace_,
  isKnownLabel_,
  extractVariantsForCategory_,
  compileSheet,
} = require('../scripts/compile-exam-templates');

describe('normalizeWhitespace_', () => {
  test('collapse whitespace ganda/newline/tab jadi 1 spasi & trim', () => {
    expect(normalizeWhitespace_('  Coding   \n\tLiteracy  ')).toBe('Coding Literacy');
  });
});

describe('isKnownLabel_', () => {
  test('mengenali "NOTES" (case-insensitive)', () => {
    expect(isKnownLabel_('NOTES')).toBe(true);
    expect(isKnownLabel_('notes')).toBe(true);
  });
  test('mengenali baris yang diawali "VARIASI"', () => {
    expect(isKnownLabel_('VARIASI 1')).toBe(true);
    expect(isKnownLabel_('variasi 2')).toBe(true);
  });
  test('mengenali alias section (literacy/application/character)', () => {
    expect(isKnownLabel_('Coding Literacy and Concept')).toBe(true);
    expect(isKnownLabel_('Coding Practice')).toBe(true);
    expect(isKnownLabel_('Character')).toBe(true);
  });
  test('teks konten biasa BUKAN known label', () => {
    expect(isKnownLabel_('[NAMA_STUDENT] bisa memahami konsep dengan baik.')).toBe(false);
  });
  test('string kosong bukan known label', () => {
    expect(isKnownLabel_('')).toBe(false);
  });
});

describe('extractVariantsForCategory_ — versi FIXED (bukan port 1:1 dari .gs asli)', () => {
  // Struktur blockRows meniru 1 blok exam template: [title, sectionHeader,
  // NOTES, VARIASI1, content, ...]. Ini skenario yang membuktikan fix-nya
  // bekerja (baca komentar panjang di compile-exam-templates.js kenapa
  // versi asli .gs SELALU return [] di sini).
  const blockRows = [
    ['3D ANIMATOR 1'],
    ['Coding Literacy and Concept'],
    ['NOTES'],
    ['VARIASI 1'],
    ['[NAMA_STUDENT] bisa memahami konsep dasar dengan baik.'],
    [''],
    ['Coding Practice'],
    ['NOTES'],
    ['VARIASI 1'],
    ['[NAMA_STUDENT] bisa mengerjakan latihan dengan baik.'],
    [''],
    ['Character'],
    ['NOTES'],
    ['VARIASI 1'],
    ['[NAMA_STUDENT] sangat aktif di kelas.'],
  ];

  test('berhasil ekstrak teks literacy (tidak berhenti di baris NOTES seperti bug asli)', () => {
    const result = extractVariantsForCategory_(blockRows, 'literacy');
    expect(result).toEqual(['[NAMA_STUDENT] bisa memahami konsep dasar dengan baik.']);
  });

  test('berhasil ekstrak teks application', () => {
    const result = extractVariantsForCategory_(blockRows, 'application');
    expect(result).toEqual(['[NAMA_STUDENT] bisa mengerjakan latihan dengan baik.']);
  });

  test('berhasil ekstrak teks character', () => {
    const result = extractVariantsForCategory_(blockRows, 'character');
    expect(result).toEqual(['[NAMA_STUDENT] sangat aktif di kelas.']);
  });

  test('kategori yang section headernya tidak ada di blok -> array kosong (bukan error)', () => {
    const noCharacterBlock = blockRows.slice(0, 10); // potong sebelum section Character
    expect(extractVariantsForCategory_(noCharacterBlock, 'character')).toEqual([]);
  });

  test('section ada tapi kontennya kosong (langsung lanjut ke section lain) -> array kosong', () => {
    const emptyLiteracy = [
      ['Coding Literacy and Concept'],
      ['NOTES'],
      ['VARIASI 1'],
      [''], // konten kosong
      ['Coding Practice'],
      ['NOTES'],
      ['VARIASI 1'],
      ['isi practice'],
    ];
    expect(extractVariantsForCategory_(emptyLiteracy, 'literacy')).toEqual([]);
  });

  test('multi-variant (beberapa kolom di 1 baris VARIASI) semuanya terambil', () => {
    const multiVariant = [
      ['Character'],
      ['NOTES'],
      ['VARIASI 1', 'VARIASI 2'],
      ['Teks variasi A', 'Teks variasi B'],
    ];
    expect(extractVariantsForCategory_(multiVariant, 'character')).toEqual(['Teks variasi A', 'Teks variasi B']);
  });
});

describe('compileSheet — integrasi findAllCourseBlocks_ + extractVariantsForCategory_', () => {
  test('mendeteksi 2 blok dalam 1 sheet dan mengekstrak semua kategorinya dengan benar', () => {
    const rows = [
      ['COURSE 1'],
      ['Coding Literacy and Concept'], ['NOTES'], ['VARIASI 1'], ['literacy blok 1'], [''],
      ['Coding Practice'], ['NOTES'], ['VARIASI 1'], ['practice blok 1'], [''],
      ['Character'], ['NOTES'], ['VARIASI 1'], ['character blok 1'], [''], [''], [''],
      ['COURSE 2'],
      ['Coding Literacy and Concept'], ['NOTES'], ['VARIASI 1'], ['literacy blok 2'], [''],
      ['Coding Practice'], ['NOTES'], ['VARIASI 1'], ['practice blok 2'], [''],
      ['Character'], ['NOTES'], ['VARIASI 1'], ['character blok 2'],
    ];
    const { blocks, blockTitles } = compileSheet('TEST_SHEET', rows);

    expect(blockTitles).toEqual(['COURSE 1', 'COURSE 2']);
    expect(blocks[1].literacy).toEqual(['literacy blok 1']);
    expect(blocks[1].application).toEqual(['practice blok 1']);
    expect(blocks[1].character).toEqual(['character blok 1']);
    expect(blocks[2].literacy).toEqual(['literacy blok 2']);
    expect(blocks[2].character).toEqual(['character blok 2']);
  });

  test('regression guard: baris konten TANPA baris kosong pemisah sebelum header berikutnya TIDAK salah terdeteksi jadi block title baru', () => {
    // Ini persis skenario bug yang ditemukan di ROBLOX_EXPLORER (lihat
    // CHANGELOG.md) — pastikan tidak regresi lagi ke depannya.
    const rowsNoBlankSeparator = [
      ['COURSE 1'],
      ['Coding Literacy and Concept'], ['NOTES'], ['VARIASI 1'], ['literacy tanpa separator'],
      ['Coding Practice'], ['NOTES'], ['VARIASI 1'], ['practice tanpa separator'],
      ['Character'], ['NOTES'], ['VARIASI 1'], ['character tanpa separator'],
    ];
    const { blocks, blockTitles } = compileSheet('TEST_SHEET_NO_GAP', rowsNoBlankSeparator);
    expect(blockTitles).toEqual(['COURSE 1']); // harus tetap 1 blok, bukan 3
    expect(blocks[1].literacy).toEqual(['literacy tanpa separator']);
    expect(blocks[1].application).toEqual(['practice tanpa separator']);
    expect(blocks[1].character).toEqual(['character tanpa separator']);
  });

  test('warning dimunculkan untuk bracket [ ] tidak seimbang', () => {
    const rows = [
      ['COURSE 3'],
      ['Coding Literacy and Concept'], ['NOTES'], ['VARIASI 1'], ['teks [tidak tertutup'], [''],
      ['Coding Practice'], ['NOTES'], ['VARIASI 1'], ['teks normal'], [''],
      ['Character'], ['NOTES'], ['VARIASI 1'], ['teks normal juga'],
    ];
    const { warnings } = compileSheet('TEST_SHEET_BRACKET', rows);
    expect(warnings.some(w => w.includes('bracket'))).toBe(true);
  });
});
