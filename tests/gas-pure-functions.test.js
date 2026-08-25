const { loadScriptGlobals } = require('./helpers/loadScriptGlobals');

// Semua fungsi di bawah ini di-cek dulu (baca kode-nya) sebelum ditest di
// sini: tidak ada satupun yang memanggil SpreadsheetApp/PropertiesService/
// dsb secara langsung — murni operasi string/array/object, jadi aman
// dijalankan di Node tanpa environment Apps Script sungguhan.

describe('Code.gs — findColumnIndex_', () => {
  const { findColumnIndex_ } = loadScriptGlobals(
    ['google-apps-script/Code.gs'], ['findColumnIndex_']
  );
  const header = ['Nama Lengkap', 'Nama Panggilan', '  Kelas  ', 'Email'];

  test('menemukan index kolom dengan nama persis sama', () => {
    expect(findColumnIndex_(header, 'Email')).toBe(3);
  });

  test('case-insensitive', () => {
    expect(findColumnIndex_(header, 'nama lengkap')).toBe(0);
    expect(findColumnIndex_(header, 'EMAIL')).toBe(3);
  });

  test('mengabaikan whitespace berlebih (collapse multi-space) di header maupun target', () => {
    expect(findColumnIndex_(header, 'Kelas')).toBe(2); // header aslinya '  Kelas  '
    expect(findColumnIndex_(header, '  Nama   Panggilan  ')).toBe(1); // whitespace ganda di target juga di-collapse jadi 1 spasi
  });

  test('kolom tidak ditemukan mengembalikan -1, bukan throw/undefined', () => {
    expect(findColumnIndex_(header, 'Kolom Tidak Ada')).toBe(-1);
  });

  test('header kosong tidak throw', () => {
    expect(() => findColumnIndex_([], 'Apapun')).not.toThrow();
    expect(findColumnIndex_([], 'Apapun')).toBe(-1);
  });
});

describe('Code.gs — isTrue_', () => {
  const { isTrue_ } = loadScriptGlobals(['google-apps-script/Code.gs'], ['isTrue_']);

  test('boolean true -> true', () => { expect(isTrue_(true)).toBe(true); });
  test('string "TRUE" (uppercase) -> true', () => { expect(isTrue_('TRUE')).toBe(true); });
  test('string "true" (lowercase, dari checkbox sheet) -> true', () => { expect(isTrue_('true')).toBe(true); });
  test('string "FALSE" -> false', () => { expect(isTrue_('FALSE')).toBe(false); });
  test('string kosong -> false', () => { expect(isTrue_('')).toBe(false); });
  test('undefined/null -> false, tidak throw', () => {
    expect(isTrue_(undefined)).toBe(false);
    expect(isTrue_(null)).toBe(false);
  });
});

describe('Code.gs — computePendingCheckpoint_', () => {
  const { computePendingCheckpoint_ } = loadScriptGlobals(
    ['google-apps-script/Code.gs'], ['computePendingCheckpoint_']
  );

  // colIndex meniru hasil buildStudentColumnIndex_: index kolom untuk tiap
  // field di row spreadsheet. Checkpoint yang didukung: 8,16,24,32,40,48.
  const colIndex = {
    selesai: 0,
    lesson8: 1, report8: 2,
    lesson16: 3, report16: 4,
    lesson24: -1, report24: -1, // course cuma sampai lesson 16 (2 blok)
  };

  test('course sudah ditandai Selesai -> tidak ada checkpoint pending (null)', () => {
    const row = [true, 8, true, 16, false]; // selesai=true walau report16 belum
    expect(computePendingCheckpoint_(row, colIndex)).toBeNull();
  });

  test('lesson 8 tercapai tapi report8 belum dibuat -> checkpoint 8 pending', () => {
    const row = [false, 8, false, '', false];
    expect(computePendingCheckpoint_(row, colIndex)).toBe(8);
  });

  test('lesson 8 sudah ada report-nya, lesson 16 belum tercapai -> tidak ada checkpoint pending', () => {
    const row = [false, 8, true, '', false];
    expect(computePendingCheckpoint_(row, colIndex)).toBeNull();
  });

  test('checkpoint 8 selesai, lesson 16 tercapai tapi report16 belum -> checkpoint 16 pending', () => {
    const row = [false, 8, true, 16, false];
    expect(computePendingCheckpoint_(row, colIndex)).toBe(16);
  });

  test('kedua checkpoint sudah ada report-nya -> tidak ada yang pending', () => {
    const row = [false, 8, true, 16, true];
    expect(computePendingCheckpoint_(row, colIndex)).toBeNull();
  });

  test('kolom checkpoint tidak ada di sheet ini (-1) dilewati, tidak throw', () => {
    // colIndex.lesson24/report24 = -1 (course ini cuma 2 blok) — pastikan
    // computePendingCheckpoint_ tidak salah baca row[-1] atau throw.
    const row = [false, 8, true, 16, true];
    expect(() => computePendingCheckpoint_(row, colIndex)).not.toThrow();
  });
});
