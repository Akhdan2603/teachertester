/**
 * ============================================================
 * HEALTH CHECK — validasi setup sebelum dipakai
 * ============================================================
 * Tujuan: kalau ada Script Property kosong, tab hilang, atau kolom
 * ketinggalan, ketahuan LEBIH AWAL lewat 1 tombol di UI — bukan baru
 * kelihatan saat guru pakai fitur dan dapat error samar-samar seperti
 * "Kolom X tidak ditemukan" atau "Siswa tidak ditemukan".
 *
 * Dipanggil dari frontend via action=healthCheck (doGet, read-only,
 * tidak mengubah data apa pun).
 * ============================================================
 */
function runHealthCheck() {
  const checks = [];
  const addCheck = (name, status, message) => checks.push({ name, status, message });

  // 1. Script Properties
  const props = PropertiesService.getScriptProperties();
  const requiredProps = ['TELEGRAM_TOKEN', 'MAIN_SHEET_ID', 'JUNIOR_SHEET_ID', 'KIDS_SHEET_ID', 'TEENS_SHEET_ID', 'ADMIN_CHAT_ID'];
  const optionalProps = ['GEMINI_API_KEY'];

  requiredProps.forEach(key => {
    const val = props.getProperty(key);
    addCheck(`Script Property: ${key}`, val ? 'ok' : 'error', val ? 'Terisi' : 'KOSONG — wajib diisi di Project Settings > Script Properties');
  });
  optionalProps.forEach(key => {
    const val = props.getProperty(key);
    addCheck(`Script Property: ${key}`, val ? 'ok' : 'warning', val ? 'Terisi' : 'Kosong — fitur AI Generate tidak akan bisa dipakai sampai ini diisi');
  });

  const mainSheetId = props.getProperty('MAIN_SHEET_ID');
  if (!mainSheetId) {
    addCheck('Spreadsheet utama', 'error', 'MAIN_SHEET_ID kosong, sisa pengecekan di-skip.');
    return { success: true, checks };
  }

  // 2. Bisa buka spreadsheet utama?
  let ss;
  try {
    ss = SpreadsheetApp.openById(mainSheetId);
    addCheck('Akses Spreadsheet utama', 'ok', `Berhasil dibuka: "${ss.getName()}"`);
  } catch (err) {
    addCheck('Akses Spreadsheet utama', 'error', 'Gagal dibuka — cek MAIN_SHEET_ID benar dan akun yang deploy script punya akses.');
    return { success: true, checks };
  }

  // 3. Tab wajib: Teacher, Student, Log_Laporan
  checkTabExists_(ss, TABS.TEACHER, checks);
  const studentOk = checkTabExists_(ss, TABS.STUDENT, checks);
  checkTabExists_(ss, TABS.LOG, checks);

  // 4. Kolom tab Teacher
  const teacherSheet = ss.getSheetByName(TABS.TEACHER);
  if (teacherSheet) {
    const header = teacherSheet.getRange(1, 1, 1, teacherSheet.getLastColumn()).getValues()[0];
    ['Name', 'PIN', 'Chat ID tele', 'status'].forEach(col => {
      checkColumnExists_(header, col, `Tab ${TABS.TEACHER}`, checks, 'error');
    });
    checkColumnExists_(header, 'Email', `Tab ${TABS.TEACHER}`, checks, 'warning', 'Tanpa ini, fitur "Ingatkan Report" (Calendar invite) tidak akan jalan — Telegram tetap jalan.');
  }

  // 5. Kolom tab Student (lengkap termasuk semua checkpoint)
  if (studentOk) {
    const studentSheet = ss.getSheetByName(TABS.STUDENT);
    const header = studentSheet.getRange(1, 1, 1, studentSheet.getLastColumn()).getValues()[0];
    STUDENT_BASE_HEADERS.forEach(col => checkColumnExists_(header, col, `Tab ${TABS.STUDENT}`, checks, 'error'));
    CHECKPOINTS.forEach(cp => {
      checkColumnExists_(header, `Lesson ${cp}`, `Tab ${TABS.STUDENT}`, checks, 'error');
      checkColumnExists_(header, `Report ${cp}`, `Tab ${TABS.STUDENT}`, checks, 'error');
      checkColumnExists_(header, `Last Reminder ${cp}`, `Tab ${TABS.STUDENT}`, checks, 'warning', 'Tanpa ini, reminder otomatis untuk checkpoint ini tidak akan terjadwal dengan benar.');
    });
  }

  // 6. Kolom tab Log_Laporan
  const logSheet = ss.getSheetByName(TABS.LOG);
  if (logSheet) {
    const header = logSheet.getRange(1, 1, 1, logSheet.getLastColumn()).getValues()[0];
    ['Hari', 'Kelas', 'Teacher', 'Course', 'Lesson sekarang', 'Daily', 'Exam'].forEach(col => {
      checkColumnExists_(header, col, `Tab ${TABS.LOG}`, checks, 'error');
    });
    const hasNamaLengkap = findColumnIndex_(header, 'Nama Lengkap') !== -1 || findColumnIndex_(header, 'Student') !== -1;
    addCheck(`Tab ${TABS.LOG}: kolom Nama Lengkap/Student`, hasNamaLengkap ? 'ok' : 'error', hasNamaLengkap ? 'Ada' : 'TIDAK ADA — wajib salah satu (Nama Lengkap atau Student)');
  }

  // 7. Tab hari (Senin-Sabtu)
  HARI_LIST.forEach(hari => {
    const sheet = ss.getSheetByName(hari);
    if (!sheet) {
      addCheck(`Tab hari: ${hari}`, 'warning', 'Belum dibuat — akan auto-dibuat begitu ada murid pertama ditambahkan di hari ini, tapi kalau memang sudah harus ada murid, cek lagi.');
      return;
    }
    const header = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const missing = JADWAL_HEADERS.filter(col => findColumnIndex_(header, col) === -1);
    addCheck(`Tab hari: ${hari}`, missing.length === 0 ? 'ok' : 'error', missing.length === 0 ? 'Header lengkap' : `Kolom hilang: ${missing.join(', ')}`);
  });

  // 8. Spreadsheet Exam Template (Junior/Kids/Teens) — sumber yang dibaca
  // scripts/compile-exam-templates.js (Node, di luar GAS), BUKAN lagi
  // dibaca runtime saat guru pakai fitur "🪄 Ambil Template dari Sistem"
  // (itu sekarang lookup lokal ke js/exam-templates-data.js hasil compile
  // — lihat rencana-10-10-non-security.md bagian 2.2 / Opsi B - Hybrid).
  // Cek ini tetap berguna untuk pastikan Script Property ID-nya masih
  // benar & spreadsheet masih bisa diakses SEBELUM admin lupa dan baru
  // ketahuan saat mau compile ulang, tapi TIDAK ADA LAGI fitur guru yang
  // gagal kalau spreadsheet ini pindah/dihapus di tengah hari — dampaknya
  // sekarang cuma ke proses compile, bukan ke aplikasi yang sedang dipakai.
  const config = getConfig_();
  Object.keys(config.examSheetIds).forEach(criteria => {
    const id = config.examSheetIds[criteria];
    if (!id) return; // sudah ditandai error di Script Properties check
    try {
      const examSs = SpreadsheetApp.openById(id);
      addCheck(`Spreadsheet Exam Template: ${criteria}`, 'ok', `Berhasil dibuka: "${examSs.getName()}" (dipakai scripts/compile-exam-templates.js, bukan runtime aplikasi)`);
    } catch (err) {
      addCheck(`Spreadsheet Exam Template: ${criteria}`, 'warning', 'Gagal dibuka — cek ID benar dan akses. Aplikasi tetap jalan normal (exam template sudah di-compile ke JS), tapi compile ulang berikutnya akan gagal sampai ini diperbaiki.');
    }
  });

  // 8b. Validasi mapping course↔tab spreadsheet exam template (Fase 2 dari
  // rencana-10-10-non-security.md bagian 1.2). Tujuannya: begitu ada course
  // baru ditambah di COURSE_MAP tapi lupa dimapping (atau dimapping ke nama
  // tab yang salah/sudah dihapus/di-rename), langsung merah di sini —
  // bukan ketahuan berbulan-bulan kemudian dari guru yang komplain fitur
  // auto-fetch nggak jalan (ini persis skenario BUG-007 yang sudah pernah
  // terjadi: 3 course Teens tanpa entri COURSE_TAB_MAP walau tab-nya ada).
  //
  // Catatan: sejak migrasi exam template ke Opsi B - Hybrid, "tab" di sini
  // artinya key di dalam js/exam-templates-data.js (EXAM_TEMPLATES), yang
  // di-generate dari nama tab spreadsheet oleh scripts/compile-exam-templates.js
  // — jadi validasi di bawah tetap membaca langsung dari spreadsheet exam
  // template (bukan dari file JS hasil compile), supaya juga menangkap
  // kasus "tab sudah di-rename di spreadsheet setelah compile terakhir,
  // developer lupa compile ulang".
  if (typeof COURSE_TAB_MAP !== 'undefined' && typeof COURSE_MAP !== 'undefined') {
    Object.keys(COURSE_TAB_MAP).forEach(criteria => {
      const sheetId = config.examSheetIds[criteria];
      if (!sheetId) return; // sudah ditandai error di atas
      let examSs;
      try {
        examSs = SpreadsheetApp.openById(sheetId);
      } catch (err) {
        return; // sudah ditandai error di check 8 di atas, jangan dobel
      }
      Object.entries(COURSE_TAB_MAP[criteria]).forEach(([course, tabName]) => {
        if (!tabName) {
          addCheck(`Mapping: ${criteria} / ${course}`, 'warning', 'Belum dimapping (manual mode) — guru isi form manual untuk course ini.');
          return;
        }
        const exists = !!examSs.getSheetByName(tabName);
        addCheck(`Mapping: ${criteria} / ${course} → "${tabName}"`, exists ? 'ok' : 'error',
          exists ? 'Tab ditemukan' : `Tab "${tabName}" TIDAK DITEMUKAN di spreadsheet ${criteria} — mapping salah/tab dihapus/di-rename. Perbaiki COURSE_TAB_MAP lalu compile ulang.`);
      });
    });

    // Course di COURSE_MAP yang sama sekali tidak punya key di COURSE_TAB_MAP
    // (bukan null — memang absen, ini persis BUG-007).
    Object.keys(COURSE_MAP).forEach(criteria => {
      (COURSE_MAP[criteria] || []).forEach(course => {
        if (!(course in (COURSE_TAB_MAP[criteria] || {}))) {
          addCheck(`Mapping: ${criteria} / ${course}`, 'error', 'TIDAK ADA entri di COURSE_TAB_MAP sama sekali (bukan null — memang absen). Tambahkan entrinya (boleh null kalau memang belum ada tab yang cocok).');
        }
      });
    });
  } else {
    addCheck('Mapping course↔tab (COURSE_TAB_MAP/COURSE_MAP)', 'warning', 'Tidak bisa divalidasi — COURSE_TAB_MAP/COURSE_MAP tidak tersedia di scope Apps Script ini (file-file itu ada di js/, sisi frontend, bukan di-load ke GAS). Validasi mapping course↔tab sebenarnya dilakukan otomatis oleh scripts/compile-exam-templates.js tiap kali dijalankan — lihat log compile-nya.');
  }

  // 9. Telegram token valid? (panggil getMe, ringan & tidak mengirim apa pun)
  if (config.telegramToken) {
    try {
      const res = UrlFetchApp.fetch(`https://api.telegram.org/bot${config.telegramToken}/getMe`, { muteHttpExceptions: true });
      const data = JSON.parse(res.getContentText());
      addCheck('Telegram Bot Token', data.ok ? 'ok' : 'error', data.ok ? `Valid, bot: @${data.result.username}` : 'Token tidak valid (Telegram menolak).');
    } catch (err) {
      addCheck('Telegram Bot Token', 'error', 'Gagal menghubungi Telegram API: ' + err.message);
    }
  }

  // 10. Time-driven trigger untuk cron reminder terpasang?
  const triggers = ScriptApp.getProjectTriggers();
  const hasCronTrigger = triggers.some(t => t.getHandlerFunction() === 'cronReminderKelipatan8');
  addCheck('Trigger reminder harian', hasCronTrigger ? 'ok' : 'warning', hasCronTrigger ? `${triggers.filter(t => t.getHandlerFunction() === 'cronReminderKelipatan8').length} trigger terpasang` : 'Belum ada trigger untuk cronReminderKelipatan8 — reminder otomatis tidak akan pernah jalan.');

  return { success: true, checks };
}

function checkTabExists_(ss, name, checks) {
  const exists = !!ss.getSheetByName(name);
  checks.push({ name: `Tab: ${name}`, status: exists ? 'ok' : 'error', message: exists ? 'Ada' : 'TIDAK DITEMUKAN — wajib ada' });
  return exists;
}

function checkColumnExists_(header, colName, context, checks, severityIfMissing, extraNote) {
  const exists = findColumnIndex_(header, colName) !== -1;
  checks.push({
    name: `${context}: kolom "${colName}"`,
    status: exists ? 'ok' : severityIfMissing,
    message: exists ? 'Ada' : `TIDAK ADA${extraNote ? ' — ' + extraNote : ''}`,
  });
}
