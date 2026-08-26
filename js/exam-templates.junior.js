// ============================================================
// EXAM_TEMPLATES slice — criteria: Junior
// ============================================================
// Bagian dari performance split (audit QA/QC BUG-1, lihat CHANGELOG.md):
// exam-templates-data.js dulunya 1 file monolitik (132KB) berisi
// EXAM_TEMPLATES untuk SEMUA criteria, selalu dimuat penuh di <head>
// walau guru cuma pakai 1 criteria per sesi kerja. File ini HANYA
// berisi exam template untuk criteria 'Junior', dan dimuat secara
// DINAMIS oleh js/lazy-loader.js begitu guru pertama kali memilih
// criteria 'Junior' di dropdown (Auto tab atau Exam tab) — bukan
// dimuat di <head> sejak awal.
//
// Di-generate otomatis oleh scripts/compile-exam-templates.js dari
// excel/JUNIORS report templates.xlsx. JANGAN edit manual — akan tertimpa saat
// compile berikutnya. Lihat PANDUAN.md bagian "Update Teks Exam
// Template" untuk SOP update.
//
// JANGAN declare ulang 'const EXAM_TEMPLATES' di sini — js/exam-templates-data.js
// (file inti, selalu dimuat) sudah mendeklarasikannya sebagai objek
// kosong '{}'. File ini cuma menambahkan property lewat Object.assign,
// supaya js/exam.js yang mengakses EXAM_TEMPLATES sebagai variabel
// global tetap bekerja tanpa perlu diubah sama sekali.
//
// Struktur: EXAM_TEMPLATES.Junior[courseTab][blockNumber][category] = string[]
// (array varian teks MENTAH — placeholder [NAMA_STUDENT] dan
// [opsi_A/opsi_B/opsi_C] belum diisi; itu dikerjakan runtime oleh
// fillExamTemplateText_() di js/exam.js).
// ============================================================

Object.assign(EXAM_TEMPLATES, {
  "Junior": {
    "VIRTUAL_WORLD_MAKER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa mengingat dan memahami kembali konsep dasar coding dengan [sangat baik/ baik/ cukup baik], yaitu algoritma, event, loop, dan conditional (code If). [NAMA_STUDENT] juga mempelajari literasi digital seperti pengaruh screen time & gadget addiction, cara mencegah cyber bullying, media balance, dan perbedaan komunikasi langsung dengan online. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik], mulai dari membuat animasi dan menggerakkan karakter dengan code If di Scratch, memprogram robot dengan platform baru, hingga mengenal dan mengendalikan Drone secara virtual. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa mengingat kembali dan memahami konsep coding dengan [sangat baik/ baik/ cukup baik], yaitu conditional (bug & debugging), function, conditional loop, dan forever loop. [NAMA_STUDENT] juga mempelajari literasi digital seperti pentingnya menghargai copyright, cara mengenali dan menghindari spam, serta pentingnya tetap berusaha dan pantang menyerah. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat Bug Hunter Game dan Beetle Race Game di Scratch menggunakan kode Glide, mengaplikasikan function pada coding game dan robot, serta memprogram Micro:bit dengan kode Forever. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep coding lanjutan, yaitu function, variable, dan operator. [NAMA_STUDENT] juga mempelajari literasi digital seperti perkembangan teknologi dalam kehidupan manusia serta cara mengenali dan menghindari hoax. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Great job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding pada project Virtual Reality dengan [sangat baik/ baik/ cukup baik], mulai dari membuat VR pameran hewan dan VR \"Finding Animal\" menggunakan function, VR City Tour, Math Game dengan operator, hingga multiple diorama VR dan project akhir Solar System VR yang dipresentasikan dengan baik. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "LITTLE_PROGRAMMER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami konsep coding dasar dengan [sangat baik/ baik/ cukup baik], yaitu variable, list, dan broadcast. [NAMA_STUDENT] juga mempelajari literasi digital seperti Cloud Storage, Internet of Things (IoT) untuk membantu kehidupan sehari-hari, jejak digital, komunitas online dan perkembangannya, serta virus komputer dan cara mengatasinya. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik], mulai dari mengaplikasikan variable pada Micro:bit, membuat animasi Greeting Card dengan kode Broadcast, mengkombinasikan robot Maqueen dengan Micro:bit, membuat animasi Lost in Space dan Flying Game di Scratch, hingga membuat game animasi menggunakan konsep List. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa mengingat kembali dan memahami konsep coding dengan [sangat baik/ baik/ cukup baik], yaitu clone dan wireless controller (koneksi antar device). [NAMA_STUDENT] juga mempelajari literasi digital seperti apa itu Operating System dan konsep Addictive Design pada game maupun aplikasi. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding dan desain dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat quiz interaktif dan Augmented Reality (AR) tentang bangunan bersejarah di berbagai negara, coding Wireless Controller pada Micro:bit dan Maqueen, animasi Clone War di Scratch, serta mengerjakan project game \"Create Your Own World\" dari awal hingga bagian kedua. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep coding lanjutan, yaitu text coding dengan bahasa Python serta penerapan operator dan variable pada robot. [NAMA_STUDENT] juga mempelajari literasi digital seperti pengenalan kecerdasan buatan (AI) dan internet sebagai sumber informasi dan tempat belajar. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Great job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik] untuk membuat project game sendiri. [NAMA_STUDENT] membuat Soccer Game di Scratch, menentukan ide dan mengumpulkan asset, menyusun layout, coding logic permainan (life, score, dan next level), hingga launch game dan mempersiapkan presentasi. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "3D_ANIMATOR": {
      "1": {
        "literacy": [
          "\n[NAMA_STUDENT]  menunjukkan kemajuan yang [sangat baik/ baik/ cukup baik]. dalam belajar Coding\r\nuntuk pertama kalinya. [NAMA_STUDENT]  mulai memahami konsep dasar\r\nkomputer seperti mouse, keyboard dan layar dan\r\nmenggunakannya secara sederhana untuk navigasi dan input.\r\n[NAMA_STUDENT]  juga memahami literasi digital dengan [sangat baik/ baik/ cukup baik]. seperti\r\npentingnya media balance dan mencegah cyber bullying. Good\r\nJob [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa memahami konsep dasar seperti algoritma dan blok\nkode, dan mampu membuat animasi dasar dengan ScratchJr.\nSelain itu, [NAMA_STUDENT] mulai terbiasa menggunakan aplikasi Wonder\nuntuk mendukung proses belajarnya. Ini menunjukkan\nkemampuannya berkembang dalam memanfaatkan teknologi\ndigital untuk memperluas pengetahuannya. Good Job [NAMA_STUDENT]!\n"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusias] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu yang [tinggi/ cukup tinggi] sehingga [mudah/ kadang] terdistraksi dengan hal yang lain. Walaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal yang tidak diketahui dan juga menyampaikan pendapat di dalam kelas. Tetap semangat ya [NAMA_STUDENT]!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] terhadap\nliterasi digital, dasar penggunaan komputer seperti keyboard\ndan mouse.[NAMA_STUDENT] juga cukup memahami coding konsep seperti\nconditional, debugging, dan animasi sederhana. Tetap\nsemangat ya [NAMA_STUDENT]!\n"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menyusun blok coding dengan [sangat baik/ baik/ cukup baik] di Scratch\nJunior, memberi instruksi pada Cue robot dan membuat animasi\nsederhana di scratch dan animasi\n3D di Kodu. Namun, [NAMA_STUDENT] masih membutuhkan perhatian khusus\nagar bisa fokus mengerjakan latihan coding.\nKeep it up [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusias] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu yang [tinggi/ cukup tinggi] sehingga [mudah/ kadang] terdistraksi dengan hal yang lain. Walaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal yang tidak diketahui dan juga menyampaikan pendapat di dalam kelas. Tetap semangat ya [NAMA_STUDENT]!"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] telah menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] dalam\nmengenali gambar atau video palsu. [NAMA_STUDENT] masih\nmembutuhkan bimbingan dalam memahami cara yang benar\nuntuk mendownload dan mengupload konten dengan hak cipta.\n[NAMA_STUDENT] juga semakin mahir dalam menggunakan dasar-dasar\nkomputer seperti keyboard dan mouse. Tetap semangat, [NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] masih membutuhkan bimbingan dalam menggunakan platform Kodu untuk membuat game 3D seperti underwater game dan cycle race. Selain itu, [NAMA_STUDENT] juga belum sepenuhnya memahami konsep conditional loop. Namun jika dibimbing teacher, [NAMA_STUDENT] bisa lebih fokus dan menunjukkan kemampuan coding yang semakin berkembang. Keep it up, [NAMA_STUDENT]! You're doing great."
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusias] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu yang [tinggi/ cukup tinggi] sehingga [mudah/ kadang] terdistraksi dengan hal yang lain. Walaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal yang tidak diketahui dan juga menyampaikan pendapat di dalam kelas. Tetap semangat ya [NAMA_STUDENT]!"
        ]
      }
    },
    "WEBSITE_DESIGNER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] meningkatkan keterampilan motorik halusnya dengan [sangat baik/ baik/ cukup baik], berlatih mengoperasikan komputer termasuk mengetik, mengklik, dan drag mouse menggunakan berbagai platform coding. [NAMA_STUDENT] menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] di bidang konsep komputer dan literasi digital serta mampu menguasai materi dengan cepat. Ke depannya, [NAMA_STUDENT] bisa meningkatkan fokus pada detail untuk memperkuat kemampuan analisisnya. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mempelajari dan menerapkan konsep coding seperti conditional loop dan function dengan [sangat baik/ baik/ cukup baik] melalui game coding sederhana. [NAMA_STUDENT] juga mengeksplorasi cara menggunakan konsep-konsep tersebut untuk membuat animasi sederhana menggunakan teknologi VR dan AR. [NAMA_STUDENT] sangat antusias belajar, namun perlu terus berlatih menyusun kode yang lebih kompleks agar lebih percaya diri. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusias] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu yang [tinggi/ cukup tinggi] sehingga [mudah/ kadang] terdistraksi dengan hal yang lain. Walaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal yang tidak diketahui dan juga menyampaikan pendapat di dalam kelas. Tetap semangat ya [NAMA_STUDENT]!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] terhadap\nliterasi digital, dasar penggunaan komputer seperti keyboard\ndan mouse.[NAMA_STUDENT] juga cukup memahami coding konsep seperti\nconditional, debugging, dan animasi sederhana. Tetap\nsemangat ya [NAMA_STUDENT]!\n"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menyusun blok coding dengan [sangat baik/ baik/ cukup baik] di Scratch\nJunior, memberi instruksi pada Cue robot dan membuat animasi\nsederhana di scratch dan animasi\n3D di Kodu. Namun, [NAMA_STUDENT] masih membutuhkan perhatian khusus\nagar bisa fokus mengerjakan latihan coding.\nKeep it up [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusias] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu yang [tinggi/ cukup tinggi] sehingga [mudah/ kadang] terdistraksi dengan hal yang lain. Walaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal yang tidak diketahui dan juga menyampaikan pendapat di dalam kelas. Tetap semangat ya [NAMA_STUDENT]!"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] telah menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] dalam\nmengenali gambar atau video palsu. [NAMA_STUDENT] masih\nmembutuhkan bimbingan dalam memahami cara yang benar\nuntuk mendownload dan mengupload konten dengan hak cipta.\n[NAMA_STUDENT] juga semakin mahir dalam menggunakan dasar-dasar\nkomputer seperti keyboard dan mouse. Tetap semangat, [NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] masih membutuhkan bimbingan dalam menggunakan platform Kodu untuk membuat game 3D seperti underwater game dan cycle race. Selain itu, [NAMA_STUDENT] juga belum sepenuhnya memahami konsep conditional loop. Namun jika dibimbing teacher, [NAMA_STUDENT] bisa lebih fokus dan menunjukkan kemampuan coding yang semakin berkembang. Keep it up, [NAMA_STUDENT]! You're doing great."
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusias] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu yang [tinggi/ cukup tinggi] sehingga [mudah/ kadang] terdistraksi dengan hal yang lain. Walaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal yang tidak diketahui dan juga menyampaikan pendapat di dalam kelas. Tetap semangat ya [NAMA_STUDENT]!"
        ]
      }
    }
  }
});
