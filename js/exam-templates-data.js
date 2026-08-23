// ============================================================
// EXAM_TEMPLATES — HASIL COMPILE, JANGAN EDIT MANUAL
// ============================================================
// File ini di-generate otomatis oleh scripts/compile-exam-templates.js
// dari 3 spreadsheet di folder excel/ (JUNIORS/KIDS/TEENS report
// templates). Ini bagian dari "Opsi B — Hybrid" (lihat
// rencana-10-10-non-security.md bagian 2): spreadsheet tetap jadi
// tempat admin/guru edit teks, tapi parsing-nya sudah selesai di sini —
// runtime (js/exam.js) tinggal lookup objek ini, tanpa network call ke
// Google Apps Script / Google Sheets sama sekali.
//
// CARA UPDATE: edit teksnya di spreadsheet excel/ yang bersangkutan,
// lalu jalankan `node scripts/compile-exam-templates.js` dan commit
// hasilnya. Lihat PANDUAN.md bagian "Update Teks Exam Template" untuk
// SOP lengkap. JANGAN edit angka/teks di bawah ini langsung — akan
// tertimpa saat compile berikutnya.
//
// (Sengaja TANPA timestamp "Generated: ..." di sini — kalau ada, file ini
// akan selalu ke-diff di setiap compile run walau isinya sama persis,
// bikin CI gate "hasil compile vs yang di-commit" (lihat .github/workflows/ci.yml)
// jadi false-positive gagal terus. Commit history/git blame sudah cukup
// buat tahu kapan file ini terakhir di-generate.)
//
// Struktur: EXAM_TEMPLATES[criteria][courseTab][blockNumber][category] = string[]
// (array variasi teks MENTAH — placeholder [NAMA_STUDENT] dan
// [opsi_A/opsi_B/opsi_C] belum diisi; itu dikerjakan runtime oleh
// fillExamTemplateText_() di js/exam.js berdasarkan nama murid & grade
// yang dipilih guru saat itu).
// ============================================================

const EXAM_TEMPLATES = {
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
  },
  "Kids": {
    "XPLORER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami konsep pemrograman dengan [sangat baik/ baik/ cukup baik]. Konsep dasar coding yang dipelajari, yaitu algoritma sederhana, repeat (loop) dan conditional. [NAMA_STUDENT] juga mempelajari digital literacy seperti merawat gadget, screen time, mencegeah cyber bullying dan cara komunikasi yang baik. saat exam, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. Latihan tersebut dikerjakan menggunakan berbagai platform seperti Tynker, code.org, cue robot, scratch, pembuatan animasi dan game virtual reality dan augmented reality dan juga menggerakakan drone. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !",
          "Zayyan is very active in class and talks well with the teacher and his classmates. He also often asks questions about things he doesn't fully understand. But Zayyan still gets easily distracted and talks a lot with his friends in class. Because of this, he sometimes doesn't finish his lesson work. It would be good for Zayyan to focus more in class."
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep-konsep coding seperti loop, conditional loop,  dan function melalui berbagai platform seperti Scratch, Tynker, Code.org, dan Cospace. [NAMA_STUDENT] juga mempelajari literasi digital seperti spam, virus komputer, dan hak cipta. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !",
          "🎉 Great job, [STUDENT_NAME]! 🎉 You’ve shown an impressive understanding of coding concepts like loops and functions on platforms like Scratch and Code.org. Plus, you’ve learned about digital literacy, including spam and copyright. With a score of [INSERT_EXAM_SCORE] on the concept exam, your hard work is truly paying off! Keep it up! 🚀",
          "[STUDENT_NAME] understands coding concepts like loops, conditional loops, and functions [very well/well/fairly well] through platforms such as Scratch, Tynker, Code.org, and Cospace. [STUDENT_NAME] has also learned about digital literacy topics like spam, computer viruses, and copyright. In the concept exam, [STUDENT_NAME] scored [ENTER_SCORE]. Great job, [STUDENT_NAME]!"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep-konsep coding yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik]. Ia berlatih algoritma di code.org, berhasil membuat game 2D di Scratch,  animasi 3D dalam Augmented Reality (AR) dan Virtual Reality (VR) di Cospace, dan Microbit (IoT). Saat ujian coding, [NAMA_STUDENT] mampu menyelesaikan dengan [sangat baik/ baik/ cukup baik]. Nice Work [NAMA_STUDENT] !",
          "[STUDENT_NAME] has demonstrated a [very good/good/fairly good] ability to apply the coding concepts learned. They practiced algorithms on Code.org, successfully created a 2D game on Scratch, and developed 3D animations in Augmented Reality (AR) and Virtual Reality (VR) using Cospace, as well as worked with Microbit (IoT). During the coding exam, [STUDENT_NAME] completed the tasks with [very good/good/fairly good] performance. Nice work, [STUDENT_NAME]! Keep it up! 🎉",
          "[STUDENT_NAME] is able to apply the coding concepts they have learned [very well/well/fairly well]. They practiced algorithms on Code.org, successfully created a 2D game on Scratch, developed 3D animations in Augmented Reality (AR) and Virtual Reality (VR) using Cospace, and worked with Microbit (IoT). In the coding exam, [STUDENT_NAME] completed it [very well/well/fairly well]. Great work, [STUDENT_NAME]!"
        ],
        "character": [
          "[NAMA_STUDENT] masih [sangat aktif/ aktif/ cukup aktif] di kelas dan terus berinteraksi baik dengan teman-temannya di kelas dan juga teachernya. Ia juga tetap [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !",
          "[STUDENT_NAME] remains [very active/active/fairly active] in class and consistently interacts well with classmates and teachers. They also continue to ask [very active/active/fairly active] questions about topics they find challenging. [STUDENT_NAME] stays focused while learning, even when the classroom environment is sometimes less than ideal. Keep it up, [STUDENT_NAME]! 🌟 This version maintains the original meaning while enhancing engagement and positivity.",
          "[STUDENT_NAME] is able to apply the coding concepts they have learned [very well/well/fairly well]. They practiced algorithms on Code.org, successfully created a 2D game on Scratch, developed 3D animations in Augmented Reality (AR) and Virtual Reality (VR) using Cospace, and worked with Microbit (IoT). In the coding exam, [STUDENT_NAME] completed it [very well/well/fairly well]. Great work, [STUDENT_NAME]!"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep-konsep coding seperti variabel, operator, list, broadcasting, clone, function, loop dan juga literasi digital seperti perkembangan teknologi, IoT, hoax dan media balance. Hasil ujian konsep adalah [MASUKAN_NILAI UJIAN] menunjukkan pemahaman materi yang [sangat baik/ baik/ cukup baik]. Great Job [NAMA_STUDENT] !",
          "[STUDENT_NAME] has a [very good/good/fairly good] understanding of coding concepts such as variables, operators, lists, broadcasting, cloning, functions, loops, and also digital literacy topics like technological advancements, IoT, hoaxes, and media balance. The exam result for the concepts is [ENTER_EXAM_SCORE], indicating a [very good/good/fairly good] grasp of the material. Great job, [STUDENT_NAME]!",
          "[STUDENT_NAME] demonstrates a [very good/good/fairly good] understanding of coding concepts such as variables, operators, lists, broadcasting, cloning, functions, and loops. Additionally, [he/she/they] has grasped digital literacy topics including technology trends, IoT, hoaxes, and media balance. The concept exam score of [INSERT_EXAM_SCORE] reflects [his/her/their] understanding of the material as [very good/good/fairly good]. Great job, [STUDENT_NAME]! Keep up the excellent work!"
        ],
        "application": [
          "[NAMA_STUDENT] menunjukkan progress yang [sangat mengesankan/ mengesankan/ cukup baik] pada level ini. [NAMA_STUDENT] mampu menerapkan konsep pemrograman tingkat menengah dalam berbagai latihan dan proyek, seperti list, broadcast, dan clone. [NAMA_STUDENT] juga memahami cara membuat program yang lebih kompleks dan mulai dikenalkan dengan Python. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] masih [sangat aktif/ aktif/ cukup aktif] di kelas dan terus berinteraksi baik dengan teman-temannya di kelas dan juga teachernya. Ia juga tetap [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !",
          "[STUDENT_NAME] remains [very active/active/fairly active] in class and continues to interact well with his/her classmates and teachers. He/She also stays [very active/active/fairly active] in asking questions about the material that he/she finds difficult to understand. [STUDENT_NAME] is also focused when learning, even though sometimes the classroom environment is less than ideal. Keep it up, [STUDENT_NAME]!",
          "[STUDENT_NAME] has shown impressive growth this term. [He/She/They] actively participates in discussions and has taken on leadership roles in group projects. [His/Her/Their] empathy and respect for others have improved significantly, along with focus during lessons. Keep up the great work, [STUDENT_NAME]!"
        ]
      },
      "4": {
        "literacy": [
          "[NAMA_STUDENT] bisa menerapkan semua konsep coding yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik]. Ia juga belajar tentang additive design yang ada di game dan social media dan bagaimana mengatur waktu bermain gadget (screen time dan media balance). I can tell you’re working hard—stay with it!",
          "[STUDENT_NAME] can apply all the coding concepts he/she has learned [very well/good/fairly well]. He/She also studies additive design in games and social media, as well as how to manage screen time and media balance. I can tell you’re working hard—keep it up!",
          "Dom understood fundamental mobile app development by practicing in MIT App Inventor. He can apply all the coding concepts he has learned very well. He also studied adaptive design in mobile apps, as well as how to manage screen time and media balance. Dom was also able to create his own mobile app project based on his creativity. I can tell he's working hard—keep it up, Dom!"
        ],
        "application": [
          " [NAMA_STUDENT] berhasil membuat dua game 2D yang cukup kompleks di Scratch dengan [sangat baik/ baik/ cukup baik]. Selain itu, pada level ini outputnya adalah membuat game sendiri. [NAMA_STUDENT] berhasil membuat game tersebut yang ia beri judul [JUDUL GAME]. Game tersebut memiliki design yang [bagus/cukup bagus] dan [menarik/ cukup menarik] untuk dimainkan.  Berikut link game nya: [LINK SCRATCH GAME]. Well done! Stay focused and keep going [NAMA_STUDENT] !",
          "[STUDENT_NAME] successfully created two fairly complex 2D games in Scratch with [very good/good/fairly good] results. Additionally, at this level, the output is to create their own game. [STUDENT_NAME] managed to create a game titled [GAME TITLE]. The game features a [good/fairly good] design and is [engaging/fairly engaging] to play. Here’s the link to the game: [LINK TO SCRATCH GAME]. Well done! Stay focused and keep going, [STUDENT_NAME]!",
          "Dom understood fundamental mobile app making by practicing in App Inventor. \nHe successfully created several functional mobile applications in MIT App Inventor with very good results. Additionally, at this level, the output is to create their own app. Dom managed to create an app based on his chosen theme. The app features a good design and demonstrates his understanding of mobile app development concepts. Well done! Stay focused and keep going, Dom!"
        ],
        "character": [
          "[NAMA_STUDENT] masih [sangat aktif/ aktif/ cukup aktif] di kelas dan terus berinteraksi baik dengan teman-temannya di kelas dan juga teachernya. Ia juga tetap [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !",
          "[STUDENT_NAME] remains [very active/active/fairly active] in class and continues to interact well with his/her classmates and teachers. He/She also stays [very active/active/fairly active] in asking questions about the material that he/she finds difficult to understand. [STUDENT_NAME] is also focused when learning, even though sometimes the classroom environment is less than ideal. Keep it up, [STUDENT_NAME]!",
          "[STUDENT_NAME] has shown impressive growth this term. [He/She/They] actively participates in discussions and has taken on leadership roles in group projects. [His/Her/Their] empathy and respect for others have improved significantly, along with focus during lessons. Keep up the great work, [STUDENT_NAME]!",
          "Dom shows good initiative and creativity in his projects. He demonstrates enthusiasm for learning new concepts and has the ability to apply complex coding principles independently, which shows problem-solving skills. However, Dom can sometimes get distracted by others during class. When he stays focused, he maintains a strong work ethic and completes his tasks well. We encourage Dom to keep his attention on his work to make the most of his learning time. Keep up the effort, Dom!"
        ]
      }
    },
    "WEBDEV": {
      "1": {
        "literacy": [
          "Pada level ini materinya adalah bagaimana cara membuat\nsebuah website dengan menggunakan bahasa HTML dan CSS.\n[NAMA_STUDENT] mempelajari tentang struktur dasar sebuah website, yaitu\nbagaimana membuat judul, paragraf, list, memasukan image,\nmembuat link, styling image, background, mengganti font dan membuat layout web.\n[NAMA_STUDENT] bisa memahaminya dengan [sangat baik/ baik/ cukup baik]. Good Job[NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding yang sudah dipelajari\r\ndengan[sangat baik/ baik/ cukup baik]. Hal ini terlihat dari Javas bisa mengerjakan latihan\r\ndan juga coding challenge dengan [sangat baik/ baik/ cukup baik]. Pada saat ujian coding,\r\n[NAMA_STUDENT] juga berhasil menyelesaikannya dengan [sangat baik/ baik/ cukup baik]. Namun,\r\nmasih ada yang perlu ditingkatan seperti cara penulisan syntax coding.\r\nKeep it up, [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "Pemahaman [NAMA_STUDENT] terkait bahasa HTML dan CSS menunjukkan perkembangan yang [sangat signifikan/ signifikan/ cukup signifikan]. Konsep-Konsep yang\r\ndipelajari pada meeting 2 adalah penggunaan internal style CSS\r\ndan struktur HTML yang lebih lengkap, yaitu header, main, dan\r\nfooter. [NAMA_STUDENT] juga mempelajari cara membuat table di website dan menggunakan google font atau custom font lainnya.  Good Job [NAMA_STUDENT] !\n\n"
        ],
        "application": [
          "[NAMA_STUDENT] bisa meng-aplikasikan konsep-konsep coding yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik]. Semua latihan dikerjakan dengan lancar. Saat ujian\ncoding, yaitu membuat website dengan struktur lebih lengkap,, [NAMA_STUDENT] berhasil menyelesaikan dengan [sangat baik/ baik/ cukup baik].  Akan tetapi,\nmasih perlu latihan lebih banyak untuk debugging (mencari\nbugs/error). Keep it up, [NAMA_STUDENT] !\n\n\n"
        ],
        "character": []
      },
      "3": {
        "literacy": [
          "Di level webdev 3, [NAMA_STUDENT] mempelajari struktur website yang lebih lengkap, yaitu jumbotron, navigation, aside, content dan article. [NAMA_STUDENT] juga belajar membuat UI design sebuah website menggunakan webapps Figma, yang juga digunakan oleh professional. [NAMA_STUDENT] bisa memahaminya dengan [sangat baik/ baik/ cukup baik]. Nice Work,  [NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT]  behasil membuat website yang di dalamnya terdapat  jumbotron, navbar, section aside, content dan article. Ia juga bisa membuat bisa membuat tampilan glow in the dark dengan hover. Ujian coding pada level ini yaitu membuat , [NAMA_STUDENT] mampu menyelesaikan dengan [sangat baik/ baik/ cukup baik].  Selain itu, [NAMA_STUDENT] juga bisa men-deploy website yang sudah dibuat. Nice Work [NAMA_STUDENT] !"
        ],
        "character": []
      },
      "4": {
        "literacy": [
          "Pada level ini, tidak ada konsep baru yang dipelajari. [NAMA_STUDENT] menerapkan semua konsep yang telah dipelajari untuk project akhir yaitu membuat sebuah website yang lengkap.  Tahapannya dimulai dari mencari ide, requirement, design, collecting assets, dan yang terakhir coding. Good job [NAMA_STUDENT]."
        ],
        "application": [
          "[NAMA_STUDENT] berhasil membuat sebuah website dengan struktur yang lengkap.  Design website yang dibuat juga bagus. Namun, masih ada beberapa bagian yang bisa ditingkatkan. Caranya dengan memperbanyak latihan coding. Berikut link website yang sudah dibuat [LINK WEBSITE]. Way to go! [NAMA_STUDENT]! Your effort is really paying off"
        ],
        "character": []
      }
    },
    "PYTHON_CODER": {
      "1": {
        "literacy": [
          " [NAMA_STUDENT] bisa memahami konsep dasar bahasa pemrograman python dengan [sangat baik/ baik/ cukup baik]. Konsep-konsep yang dipelajari yaitu pentingnya indentasi dalam python, algoritma, variabel, struktur data, list, list 2D, tuples, loop, conditional, conditional loop, function, function with parameter, one-liner dan juga scope. Nilai ujian teorinya juga bagus yaitu [NILAI_UJIAN]."
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik]. Semua latihan diselesaikan dengan [sangat baik/ baik/ cukup baik].  Challenge juga dikerjakan dengan [sangat baik/ baik/ cukup baik]. Saat ujian coding, [NAMA_STUDENT] juga berhasil menyelesaikannnya. Sebagai catatan, penulisan sintaks masih bisa ditingkatkan. Keep it up [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] terhadap konsep Python tingkat menengah. [NAMA_STUDENT] mempelajari dasar-dasar OOP, pengenalan module Python, dan pengembangan GUI dengan TKinter. Topik yang dipelajari meliputi prinsip OOP, dasar module, komponen TKinter, message/input box, label, button, canvas coordinates, dan konsep event handling. Keep it up, [NAMA_STUDENT] !",
          "Araya mempelajari topik-topik Python tingkat menengah di Level 2, mulai dari Object Oriented Programming (OOP), penggunaan modul Python, hingga membuat tampilan aplikasi desktop menggunakan TKinter—termasuk tombol, label, kotak input, canvas, dan interaksi mouse. Nilai ujian teorinya 70 dari 100, yang menunjukkan pemahamannya masih bisa terus diasah. Ke depannya, Araya bisa lebih sering mengulang konsep-konsep yang dipelajari agar semakin kuat pemahamannya. Tetap semangat, Araya!",
          "Araya menunjukkan pemahaman yang baik terhadap konsep Python tingkat menengah, khususnya pada materi Dasar-Dasar OOP, pengenalan Python Modules, dan pengembangan GUI menggunakan TKinter. Meskipun hasil ujian tertulisnya (70/100) masih perlu ditingkatkan, Araya secara praktik mampu memahami prinsip OOP, koordinat Canvas, hingga event handling dengan sangat baik."
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep yang dipelajari dengan [sangat baik/ baik/ cukup baik] dan konsisten. Latihan pemrograman diselesaikan dengan baik, menunjukkan progress yang stabil dalam pengembangan GUI. Project challenge dikerjakan dengan penuh determinasi, dan [NAMA_STUDENT] juga berhasil menyelesaikan ujiannya. You're on track, [NAMA_STUDENT] !",
          "Araya berhasil menyelesaikan semua latihan dan challenge dengan cukup baik. Pada ujian coding project, ia berhasil menyelesaikan proyeknya meski masih perlu beberapa kali bertanya—yang merupakan hal yang wajar dan menunjukkan ia mau berusaha sampai selesai. Ke depannya, Araya bisa berlatih mengerjakan proyek secara lebih mandiri agar semakin percaya diri. Good job, Araya!",
          "Araya mampu menerapkan konsep yang dipelajari ke dalam latihan dan proyek GUI dengan konsisten. Proyek challenge dan ujian coding diselesaikan dengan cukup baik, meskipun sesekali masih membutuhkan arahan atau bertanya untuk memastikan logikanya tepat. Fokus selanjutnya adalah memperkuat pemahaman struktur kode agar lebih mandiri di level berikutnya"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di dalam kelas. [NAMA_STUDENT] mengajukan pertanyaan relevan tentang materi saat diperlukan, menunjukkan minat dalam mempelajari konsep pemrograman baru. [NAMA_STUDENT] biasanya tetap fokus selama pelajaran, meski kadang butuh pengingat halus saat materi menjadi menantang. Keep it up, [NAMA_STUDENT] !",
          "Araya sangat aktif di dalam kelas dan selalu menunjukkan antusiasme yang tinggi dalam mempelajari konsep pemrograman baru. Ia tidak ragu untuk mengajukan pertanyaan yang relevan. Araya umumnya mampu menjaga fokus, meskipun terkadang membutuhkan pengingat dari pengajar saat ia merasa terlalu bersemangat atau ketika materi mulai menjadi lebih menantang."
        ]
      }
    },
    "PYTHON_GAMER": {
      "1": {
        "literacy": [],
        "application": [],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [],
        "application": [],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "PYTHON_AI": {
      "1": {
        "literacy": [],
        "application": [],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [],
        "application": [],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "TECH_EXPLORER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami konsep coding dasar dengan [sangat baik/ baik/ cukup baik], yaitu algoritma, event, dan loop. [NAMA_STUDENT] juga mempelajari literasi digital seperti kecanduan game (game loop, login harian, FOMO saat event game online), probabilitas (RNG) dalam permainan, strategi top up game yang bijak, dan bahaya bubble information. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dan desain dengan [sangat baik/ baik/ cukup baik]. Latihan tersebut meliputi membuat project Virtual Reality (VR) yang lebih canggih dan project Augmented Reality (AR) di DelightEx — seperti mendesain Merge Cube, membuat kuis interaktif, mengunggah video, mendesain rumah sederhana dengan konsep warna 3D, serta menambahkan animasi dan teks. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep-konsep coding block pada Scratch, yaitu event, loop, broadcast, looping control (perulangan), dan conditional logic (percabangan). [NAMA_STUDENT] juga mempelajari literasi digital seperti bahaya stranger danger di dunia maya, keamanan digital melalui QR Code, manfaat dan keamanan cloud storage, serta cara kerja search engine. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengoperasikan Scratch dan menerapkan block coding dengan [sangat baik/ baik/ cukup baik], mulai dari block Motion, Looks, Sound, hingga Sensing. [NAMA_STUDENT] berhasil membuat beberapa project seperti animasi sederhana, Beetle Race Game, dan Bug Hunter Game menggunakan konsep conditional. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep coding lanjutan pada Scratch, yaitu operator, variable, list, dan function (My Blocks), serta konsep otomasi dalam kehidupan sehari-hari. [NAMA_STUDENT] juga mempelajari literasi digital seperti membuat password yang kuat, mengenali deepfake, dasar teknologi Generative AI, teknik prompting yang efektif, dan etika/kejujuran dalam berkarya dengan AI. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Great job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan seluruh konsep yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik] untuk menyelesaikan project game final. [NAMA_STUDENT] mengumpulkan asset game (termasuk dari AI), mengintegrasikan AI Buddy ke dalam VR Edu Delightex, menyelesaikan tahap coding project, hingga mempresentasikan hasil project dengan baik. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "GAMEDEV": {
      "1": {
        "literacy": [
          " Pada level Game Development 1, [NAMA_STUDENT] mempelajari penggunaan framework construct3 untuk membuat 2D game. [NAMA_STUDENT]  menggunakannya dengan [sangat baik/ baik/ cukup baik]. Konsep layout, object, behavior, variable dan event sheet termasuk event dan sub-event juga dipahami dengan cukup baik. Nilai ujian konsep [NAMA_STUDENT]  adalah [MASUKAN_NILAI UJIAN]. Keep it up ya [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT]  bisa menambahkan object sprite, background, text, dan behavior seperti Jump-thru, solid, platform, rotate, sine, bullet dan 8Direction. Pada level ini, ada 4 project game. [NAMA_STUDENT]  mengerjakannya dengan [sangat baik/ baik/ cukup baik]. Namun, Saat ujian coding, yaitu membuat sebuah game,  [NAMA_STUDENT]  tidak menyelesaikannya dengan baik. Kedepannya lebih baik lagi dan tingkatkan semangatnya ya [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "\nProgress [NAMA_STUDENT] [sangat signifikan/ signifikan/ cukup signifikan] menggunakan framework construct3 dalam membuat game. Konsep layout game, seperti start, game, gameover dan win layout bisa dipahami [NAMA_STUDENT] dengan [cukup baik/ baik/ sangat baik]. Konsep obstacles, enemies, family features, particles, aim and shoot, change costume and impulse juga bisa dipahami dengan baik. [NAMA_STUDENT] mendapatkan nilai ujian [MASUKAN_NILAI UJIAN]. Pertahankan semangatnya ya [NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] membuat dua game pada level ini. Game yang dibuat semakin kompleks, menggunakan intermediate konsep. [NAMA_STUDENT] berhasil menyelesaikannya dengan [sangat baik/ baik/ cukup baik]. Namun, saat ujian coding, membuat game juga, [NAMA_STUDENT] [cukup/ sedikit] kesulitan untuk menyelesaikannya. Kedepannya lebih banyak latihan codingnya dan tingkatkan semangatnya ya [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] semakin mahir menggunakan framework construct3. [NAMA_STUDENT] bisa membuat layout dengan menggunakan konsep tilemap, konsep behaviour scroll to, anchor, dan jump-thru. Konsep-konsep yang dipelajari pada level ini cukup advance dan dapat dipahami dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] juga bisa men-deploy game yang sudah dibuat ke website. Great Job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] berhasil menyelesaikan game akhir yang lebih kompleks dari yang sebelumnya pernah dibuat dengan [sangat baik/ baik/ cukup baik]. Untuk project akhir yaitu membuat game sendiri, dimulai dari ide, design, coding sampai presentasi dan demo game, [NAMA_STUDENT] mampu menyelesaikan dengan [sangat baik/ baik/ cukup baik]. Game yang dibuat menarik untuk dimainkan."
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "ROBLOX_EXPLORER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] perangkat komputer dasar, pengenalan Roblox Studio (menu, shortcut, interface), serta konsep modeling seperti parent & children dan penggunaan terrain editor. [NAMA_STUDENT] juga mempelajari literasi digital seperti pentingnya menghargai copyright/hak cipta karya orang lain. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan design dengan [sangat baik/ baik/ cukup baik] di Roblox Studio, mulai dari membuat model rumah menggunakan referensi Google Image, menambahkan efek dan toolbox, merancang latar belakang map dengan terrain editor (smooth, flatten, brush tool), hingga mem-publish project ke Roblox. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] mengikuti kelas dan menyelesaikan tugas tepat waktu. [NAMA_STUDENT] berpartisipasi aktif selama sesi dan menunjukkan minat yang tinggi dalam belajar Roblox development. [NAMA_STUDENT] mengikuti instruksi dengan baik dan berusaha menyelesaikan project-nya. [NAMA_STUDENT] juga menunjukkan fokus yang baik selama kelas dan mau mencoba teknik-teknik baru saat membangun game-nya. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep coding dasar di Roblox Studio, yaitu scripting, properties, variable dan jenisnya, Instance.new(), fungsi wait(), loop, serta while loop. [NAMA_STUDENT] juga mempelajari literasi digital seperti rings of responsibility, screen time, dan cara mengatasi cyberbullying. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep scripting dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat game underwater menggunakan solid modeling tool dan memahami gravitasi di Roblox, membuat script untuk part (papan tulisan, suara, atmosphere), serta membuat animasi untuk project Farmland menggunakan while loop untuk menggerakkan object. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep lanjutan di Roblox Studio, yaitu image label, interactive parts, dan penerapan script ke dalam game. [NAMA_STUDENT] juga mempelajari aturan dan etika dalam membuat project. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Great job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep design dan coding dengan [sangat baik/ baik/ cukup baik] untuk project akhir. [NAMA_STUDENT] membuat trap dengan laser beam effect, mengeksplorasi ide dan draft bangunan, melakukan modelling bangunan dengan kombinasi warna dan detail object, menambahkan interactive parts dan scripts, hingga mempresentasikan hasil project Roblox kepada teman-teman sekelas. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "ROBLOX_DESIGNER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep dasar coding di Roblox Studio, yaitu event, conditional statement, dan cara kerja script untuk objek interaktif seperti kunci, pintu, dan lightswitch. [NAMA_STUDENT] juga mengenal tools desain seperti Photopea untuk membuat asset kostum. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan design dan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat map theme park lengkap dengan atmosphere, model interaktif komedi putar, desain baju menggunakan Photopea, storyline dan clue untuk game, modelling kunci dan pintu dengan conditional statement, hingga mem-publish dan memainkan game bersama. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] penggunaan Blender untuk modeling 3D (basic controls, export/import object ke Roblox Studio), serta konsep screen GUI dan tween service untuk animasi tampilan. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep modeling dan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat model botol dan aksesori player di Blender, mengexport-nya ke Roblox Studio, mendesain screen GUI dengan tween service, membuat model low poly untuk object utama Finding Game, hingga membuat coding untuk mengambil objek yang ditemukan. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep lanjutan Roblox Studio, yaitu places dan fungsinya, struktur thumbnail dan game icon, serta script teleport dengan event touch. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Great job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep design dan coding dengan [sangat baik/ baik/ cukup baik] untuk project akhir. [NAMA_STUDENT] menggabungkan beberapa game ke dalam satu lobby, membuat badges, game pass, dan opening GUI, menambahkan tween animation dan kode misi dengan script teleport, hingga mempresentasikan project game yang sudah selesai kepada teman-teman sekelas. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "ROBLOX_CODER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] dasar-dasar coding di Roblox Studio, yaitu variable, properti, reusing code, function, dan conditional statement. [NAMA_STUDENT] juga memahami konsep leaderboard dan cara kerja sell platform pada game. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat obby game, menerapkan terrain editor untuk membuat adventure game, menambahkan tool effect dan leaderboard, serta membuat harvestable item dan sell platform menggunakan conditional statement. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep coding lanjutan di Roblox Studio, yaitu event, module script, remote event, click detector, dan cara membuat animasi. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat custom player character yang bisa digerakkan dan menembak, membuat screen gui yang dinamis dengan remote event, menerapkan animasi ke dalam story game, serta menggunakan click detector untuk menjalankan task dalam game. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] proses pengembangan game secara menyeluruh, mulai dari perencanaan, penulisan kode utama, debugging, hingga memahami sistem monetisasi Robux di Roblox. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Great job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan seluruh konsep yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik] untuk membuat game sendiri. [NAMA_STUDENT] merancang dan membangun model serta lingkungan game, menulis dan menyempurnakan kode utama, memperbaiki bug, menunjukkan progress dan menerima feedback dari teman sekelas, hingga mempresentasikan game yang sudah selesai. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "ROBLOX_ADVANCE CODER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep game development battle royale, yaitu multiplayer game loop, table dan for loop in pairs, teleport system, serta timer module. [NAMA_STUDENT] juga memahami alur sistem match, mulai dari player kalah, mengakhiri match, hingga reset state untuk babak berikutnya. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat lobby system dengan teleport system, coding sword, health potion, dan gun player, membuat screen gui yang dinamis dengan timer module, serta menerapkan sistem kembali ke lobby dan intermission setelah match selesai. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep placement system dan cara kerja game Cleaner Boat Simulator, termasuk sistem collecting trash dan proses upgrade boat menggunakan quiz. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat screen GUI untuk memilih dan menyusun bagian boat, coding untuk launch boat dan collecting trash, menampilkan jumlah sampah di screen gui, serta membuat quiz gui untuk sistem upgrade boat. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep game Math Obby, yaitu menampilkan soal matematika secara dinamis melalui screen GUI dan memeriksa jawaban player, serta memahami fitur Game Pass di Roblox. Saat ujian konsep, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Great job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan seluruh konsep yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik] untuk membuat game sendiri. [NAMA_STUDENT] merancang lingkungan dan model game, menulis kode utama (logika, variabel, dan fungsi penting), melakukan testing dan debugging, menambahkan fitur Game Pass, hingga mempresentasikan game yang telah selesai kepada teman-teman sekelas. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    }
  },
  "Teens": {
    "TEENS_PROGRAMMER24": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] memahami konsep coding, algoritma, event, loop, dan\nconditional dengan [sangat baik/ baik/ cukup baik]. Pemahaman digital literacy seperti\nproblem solving, identifikasi dan menghindari hoax juga [sangat baik/ baik/ cukup baik].\nNilai ujian konsep coding juga bagus, yaitu [MASUKAN_NILAI UJIAN]. Kedepannya tetap\nsemangat ya [NAMA_STUDENT] !",
          "[NAMA_STUDENT] memahami digital litercy dengan [sangat baik/ baik/ cukup baik] dan juga pemahaman coding conceptnya sudah [sangat baik/ baik/ cukup baik]. Namun, akan lebih baik jika [NAMA_STUDENT] mengulang apa yang sudah dipelajari di kelas untuk meningkatkan pemahamannya terhadap konsep coding sehingga bisa mendapatkan hasil yang lebih baik, Good job  [NAMA_STUDENT] !",
          "[NAMA_STUDENT] has shown significant improvement based on his exam results and class performance. However, he occasionally misses some exercises, which leads to gaps in his understanding of certain concepts. Moving forward, it is hoped that [NAMA_STUDENT] can reduce these instances to ensure he fully comprehends all material. Overall, he has been doing very well!",
          "Based on exam results and class performance, [NAMA_STUDENT] is quite quick in understanding the available materials. However, he often forgets the concepts he has learned. It would be beneficial for [NAMA_STUDENT] to regularly review previous materials to avoid forgetting and to master them more thoroughly. But so far his been great, Good Job [NAMA_STUDENT]!",
          "Cheris understands coding concepts, algorithms, events, loops, and conditionals very well. Her digital literacy skills including problem solving and hoax identification are also excellent. She demonstrates strong grasp of fundamental programming principles. Keep up the great work, Cheris!"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. Latihan tersebut dikerjakan menggunakan berbagai platform seperti Tynker, code.org, cue robot, scratch, pembuatan animasi dan game virtual reality dan augmented reality dan juga menggerakakan drone. Good job [NAMA_STUDENT] !\n\n[NAMA_STUDENT] mengerjakan latihan coding dengan sangat baik. Challenge\njuga dikerjakan dengan baik. Antusias untuk coding juga tinggi.\nSyntax Javascript juga sudah mulai dipahami. Pertahankan\nsemangatnya ya [NAMA_STUDENT] !\n",
          "[NAMA_STUDENT]  dapat menyelesaikan coding yang diminta atau diinstruksikan dengan [sangat baik/ baik/ cukup baik]. Namun,  [NAMA_STUDENT]  masih mengalami error ketika ngoding sehingga Nisreen perlu meningkatkan lagi pemahamannya. Semangat  [NAMA_STUDENT] !",
          "[NAMA_STUDENT] is very experimental and likes to explore when it comes to practice. This approach has greatly helped him in improving his skills and understanding. Keep it up, and good job!",
          "With [NAMA_STUDENT]'s understanding of concepts, he rarely has difficulty in practical applications. However,[NAMA_STUDENT]still needs more practice to hone his problem-solving skills in programming. Excellent work, [NAMA_STUDENT]! Keep it up!",
          "Cheris completes coding exercises very well using various platforms like Tynker, Code.org, Scratch, and JavaScript. She shows high enthusiasm for coding challenges and is beginning to understand JavaScript syntax effectively. Her hands-on programming skills are developing excellently. Good Job, Cheris!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas. Tidak ragu dan malu bertanya kepada teacher\njika bingung atau mengalami kesulitan. Ia  juga tetap menjaga\nsopan santun dengan guru. [NAMA_STUDENT] juga fokus/cukup [fokus/ cukup focus] mengerjakan latihan.Namun,  [NAMA_STUDENT]  masih belum mau\nberkomunikasi dengan teman sekelasnya.\nTingkatkan komunikasinya ya Afra! [NAMA_STUDENT]!\n",
          "[NAMA_STUDENT]  [sangat kondusif/ kondusif/ cukup kondusif] saat kelas berlangsung sehingga mendukung susana kelas yang nyaman untuk belajar. Selain itu, [NAMA_STUDENT]  juga [sangat aktif/ aktif/  cukup aktif] bertanya ketika ada yang kurang jelas pada materi yang dipelajari dan juga selalu menjaga sopan santun saat dikelas. Pertahankan [NAMA_STUDENT]!",
          "[NAMA_STUDENT] demonstrates good behavior in class, although he occasionally misses some exercises. He should take his time reading and understanding the material instead of rushing. This will help him gain a deeper understanding and improve his overall performance.",
          "[NAMA_STUDENT] displays a positive and patient attitude during class. He engages actively in learning activities, showing creativity and focus, particularly in his project work.He is willing to try new things, which makes teaching him enjoyable Keep up the great work, [NAMA_STUDENT]!",
          "Cheris is quiet but stays focused in class. She's not afraid to ask questions when she gets stuck, which shows she really wants to learn. She's always polite with teachers and pays attention during lessons. Her calm approach works well for her learning style. Nice job, Cheris!"
        ]
      },
      "2": {
        "literacy": [
          "Pada level ini, [NAMA_STUDENT] mempelajari tentang conditional loop(repeat\nuntil dan repeat while), variable, data types, operator, expression\ndan array. [NAMA_STUDENT]  bisa memahaminya dengan [sangat baik/ baik/ cukup baik]. Walaupun ada\nbeberapa konsep yang masih kurang paham. Untuk writing\nexam, [NAMA_STUDENT]  mendapatkan skor yang [sangat bagus/ bagus/ cukup bagus] yaitu [nilai ujian].\nKedepannya lebih baik lagi ya [NAMA_STUDENT] !\n",
          "[NAMA_STUDENT] bisa memahami konsep pemrograman dasar seperti algoritma, event, variabel, operator, data type, loop, conditional, conditional loop, list dan juga digital literacy seperti cyber bullying dan media balance dengan [sangat baik/ baik/ cukup baik]. Pada saat ujian teori, [NAMA_STUDENT] mendapatkan score [nilai ujian]. keep it up, [NAMA_STUDENT]!",
          "[NAMA_STUDENT] has shown [significant/ quite significant] progress in his understanding of coding concepts. He grasps the main ideas most topics. Occasionally, he overlooks some details, which can lead to small gaps in his knowledge. With a little more focus and attention to detail,[NAMA_STUDENT]can further improve his comprehension of these concepts. Overall, he’s doing a great job!",
          "[NAMA_STUDENT] memiliki pemahaman yang cukup baik mengenai konsep pemrograman dan literasi terkait. Dia belajar dengan cepat, namun terkadang kecepatan tersebut membuatnya melewatkan pemahaman yang mendalam. Perlu diperhatikan agar [NAMA_STUDENT] dapat lebih fokus pada pemahaman yang mendalam untuk memperbaiki hal ini.",
          "At this level, [STUDENT_NAME] is learning about conditional loops (repeat until and repeat while), variables, data types, operators, expressions, and arrays. [STUDENT_NAME] can understand them [very well/ well/ quite well], although there are some concepts that are still not fully understood. For the writing exam, [STUDENT_NAME] received a [very good/ good/ quite good] score of [exam score]. Keep up the good work, [STUDENT_NAME]!"
        ],
        "application": [
          "[NAMA_STUDENT] menunjukkan kemajuan yang [siginifikan/ cukup signifikan] pada level ini. [NAMA_STUDENT]dapat menyelesaikan latihan coding dengan  [sangat baik/ baik/ cukup baik]. Begitu juga dengan challenge yang diberikan, [NAMA_STUDENT] bisa mengerjakannya dengan  [sangat baik/ baik/ cukup baik]. Pemahaman terhadap syntax javascript juga meningkat. [NAMA_STUDENT] mulai mampu menerapkan konsep-konsep yang lebih kompleks. Good Work [NAMA_STUDENT]!",
          "[NAMA_STUDENT] bisa menyelesaikan latihan coding dengan  [sangat baik/ baik/ cukup baik]. Challenge juga dikerjakan dengan  [sangat baik/ baik/ cukup baik]. Pemahaman syntax javascript juga semakin meningkat. Walaupun pada saat latihan ada error (bugs) yang belum bisa diselesaikan, hal ini menunjukan perlu memperbanyak latihan coding. Pada saat ujian coding, [NAMA_STUDENT] menyelesaikannya dengan  [sangat baik/ baik/ cukup baik].",
          "[NAMA_STUDENT] enjoys trying different methods to find solutions, which shows his creativity and willingness to learn. This approach has helped him develop his coding skills, and it’s great to see his progress. However, with a bit more focus on accuracy and refining his solutions, he could take his skills to the next level. Keep up the great work, [NAMA_STUDENT]!",
          "Dalam penerapannya, [NAMA_STUDENT] [sangat baik/baik/ cukup baik]. Dia mengerjakan proyek dan latihan dengan maksimal.  untuk memaksimalkan potensinya, [NAMA_STUDENT] mengulang apa yang sudah dikerjakan di kelas di waktu senggang. Good job, [NAMA_STUDENT]!",
          "[STUDENT_NAME] has shown [significant/ quite significant] progress at this level. [STUDENT_NAME] is able to complete coding exercises [very well/ well/ quite well]. Similarly, for the challenges given, [STUDENT_NAME] can work on them [very well/ well/ quite well]. Understanding of JavaScript syntax has also improved. [STUDENT_NAME] is beginning to apply more complex concepts. Good work, [STUDENT_NAME]!"
        ],
        "character": []
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] mempelajari konsep coding baru seperti broadcast, clone,\nfunction, dan function with parameter. [NAMA_STUDENT] mampu memahami\nkonsep-konsep tersebut dengan  [sangat baik/ baik/ cukup baik]. .Untuk ujian tertulis, [NAMA_STUDENT]\nmendapatkan skor yang  [sangat baik/ baik/ cukup baik]. yaitu [nilai ujian]. Meskipun ada\nbeberapa tantangan dalam mempraktikkan konsep baru, secara\nkeseluruhan, [NAMA_STUDENT]menunjukkan pemahaman yang solid.\n",
          "Renata menunjukkan pemahaman yang baik tentang konsep clone, broadcast, function, dan function dengan parameter. Dia juga memahami topik literasi digital seperti manipulasi gambar, deep fake, dan hoax dengan baik. Meskipun nilai ujian tertulisnya 60, ini menunjukkan dasar yang baik dengan potensi u",
          "[NAMA_STUDENT] has shown an impressive grasp of Level 3 concepts, including broadcasting, cloning, and functions with parameters. His understanding of these topics is strong, and he applies them effectively in his work. His attention to detail and consistency in reviewing material will continue to support his learning. Well done, [NAMA_STUDENT]!",
          "[NAMA_STUDENT]has shown a solid understanding of Level 3 concepts, including broadcasting, cloning, functions, and functions with parameters. He is able to implement them effectively in his projects. He occasionally needs to slow down to review details, but his understanding of core concepts is strong. Excellent progress, [NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] mengerjakan latihan coding dengan  [sangat baik/ baik/ cukup baik]..\nPemahaman [NAMA_STUDENT] terhadap syntax dan cara penerapan konsep\nseperti broadcast, clone, serta fungsi dengan parameter\nsemakin berkembang. Project akhir dibua di platform scratch juga [sangat menarik/ menarik] untuk dimainkan. Berikut link game nya: [link game]. Good Job, [NAMA_STUDENT]!\n",
          "[NAMA_STUDENT] menunjukkan kemajuan dalam coding, terutama dalam pembuatan game di Scratch. Dia berhasil menciptakan game yang menarik dan menyenangkan untuk dimainkan. Game tersebut dapat diakses melalui link ini: [link game]. [NAMA_STUDENT] hanya perlu sedikit lebih fokus agar bisa lebih baik lagi. Good Job, [NAMA_STUDENT] !",
          "[NAMA_STUDENT] approached his final project with creativity, designing a game with title[GAME_TITLE], inspired by the popular thriller 'The Backrooms.' He successfully implemented the basic features. There’s potential to expand on this by adding more advanced features, but his current work shows a solid understanding of coding principles. Excellent work, [NAMA_STUDENT]!",
          "For his final project, [NAMA_STUDENT] created an impressive animation/game in Scratch called [judul game]. The outcome was unexpectedly successful. [NAMA_STUDENT] demonstrated a strong application of concepts like cloning and functions, creating an animation that showcases his creativity and growing coding skills. Wonderful work, [NAMA_STUDENT]!"
        ],
        "character": []
      }
    },
    "TEENS_PROGRAMMER16": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] memahami konsep coding, algoritma, event, loop, dan\nconditional dengan [sangat baik/ baik/ cukup baik]. Pemahaman digital literacy seperti\nproblem solving, identifikasi dan menghindari hoax juga [sangat baik/ baik/ cukup baik].\nNilai ujian konsep coding juga bagus, yaitu [MASUKAN_NILAI UJIAN]. Kedepannya tetap\nsemangat ya [NAMA_STUDENT] !\n\n\n",
          "Firdaus sudah cukup baik pemahamannya terkait digital literasi\nsecara umum dan juga cukup bagus pemahamannya\nmengenai coding concept pada pembelajaran yang telah dilalui,\nnamun masih terdapat beberapa kekeliruan pada coding\nconceptnya jadi perlu lebih teliti dan dipelajari lagi untuk\npenerapannya. Semangat!",
          "Kent learned the fundamentals of coding, including algorithms, JavaScript syntax, variables, data types, operators, arrays, conditionals, and switch cases. Kent also explored important digital literacy topics such as problem-solving, cyberbullying, and recognizing hoaxes. Kent aced the coding concept test with a perfect 100! Keep up the great work, Kent!",
          "Sebastian learned the fundamentals of coding, including algorithms, JavaScript syntax, variables, data types, operators, arrays, conditionals, and switch cases. He also explored important digital literacy topics such as problem-solving, cyberbullying, and recognizing hoaxes. Sebastian demonstrated an excellent understanding of these core concepts, scoring an 88 on the concept test. Keep up the great work, Sebastian!"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] memahami konsep coding dengan membuat beberapa program menggunakan bahasa JavaScript yaitu validasi pembuatan SIM dan simple calculator. Good job [NAMA_STUDENT] !",
          "Coding practice Firdaus sudah cukup bagus karena mampu\nmembuat program sesuai instruksi dengan baik dan juga sudah\nterbiasa dalam membuat program, meskipun begitu alangkah\nlebih baik jika Firdaus meningkatkan lagi berlatih kemampuan\ncoding practicenya agar hasilnya lebih maksimal.",
          "Kent's performance on the coding assignments is satisfactory. He created several simple programs in JavaScript, such as a Driver's License Validation Program and a Simple Calculator. On the exam, Kent was tasked with creating a simple student score averaging program. Though he struggled a bit, he still completed the program. Good job, Kent!",
          "Sebastian's performance on the coding assignments was excellent. He created several simple programs in JavaScript, such as a Driver's License Validation Program and a Simple Calculator. On the exam, Sebastian was tasked with creating a simple student score averaging program, which he completed proficiently and accurately. Excellent job, Sebastian!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas. Tidak ragu dan malu bertanya kepada teacher\njika bingung atau mengalami kesulitan. Ia  juga tetap menjaga\nsopan santun dengan guru. [NAMA_STUDENT] juga fokus/cukup [fokus/ cukup focus] mengerjakan latihan. Namun,  [NAMA_STUDENT]  masih belum mau\nberkomunikasi dengan teman sekelasnya.\nTingkatkan komunikasinya ya [NAMA_STUDENT]!\n\n\n",
          "[STUDENT_NAME] is [extremely engaged/engaged/moderately engaged] in class. They don't hesitate to ask questions when confused or facing difficulties. They also maintain appropriate respect toward their teacher. [STUDENT_NAME] [stays focused/is reasonably focused] when working on assignments. However, [STUDENT_NAME] still needs to improve their communication with classmates. Work on building those communication skills, [STUDENT_NAME]!",
          "\"[STUDENT_NAME] is [extremely enthusiastic/enthusiastic/fairly enthusiastic] in class. [STUDENT_NAME] is also [very active/active/active] in asking questions when feeling confused or facing difficulties. Additionally, they [stay focused/are reasonably focused] when working on coding exercises. [STUDENT_NAME]'s motivation to learn coding remains [high/moderately high]. Keep it up, [STUDENT_NAME]!\"",
          "Kent displays eagerness during lessons. When faced with confusion or difficulties, Kent is consistent about asking questions when concepts aren't clear or challenges arise. He show satisfactory focus while completing coding exercises. Kent's interest in developing coding skills remains impressive. You're on the right track, Kent!",
          "ebastian displays great enthusiasm during lessons. When faced with confusion or difficulties, he is always consistent about asking questions to ensure he understands the concepts. He shows excellent focus while completing coding exercises. Sebastian's high interest in developing his coding skills is impressive. You're on the right track, Sebastian!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] memahami konsep conditional loop, nested conditional,\nscope, function, function with parameter, dan function with return\ndengan [sangat baik/ baik/ cukup baik]. Pemahaman digital literacy seperti identifikasi\nvideo real or fake, menanggapi breaking news dan juga\ncopyrights juga [sangat baik/ baik/ cukup baik]. Ketika exam, [NAMA_STUDENT] mendapatkan nilai [NILAI_UJIAN].\nKeep it up [NAMA_STUDENT]!\n",
          "[STUDENT_NAME] has a solid grasp of concepts like conditional loops, nested conditionals, scope, functions, functions with parameters, and functions with return values, performing at a [very good/good/fairly good] level. Their digital literacy skills, such as identifying real or fake videos, responding to breaking news, and understanding copyrights, are also [very good/good/fairly good]. During the exam, [STUDENT_NAME] scored [EXAM_SCORE]. Keep up the great work, [STUDENT_NAME]!\"",
          "Dinda has a solid grasp of concepts like conditional loops, nested conditionals, scope, functions, functions with parameters, and return values. Her digital literacy skills, such as identifying real or fake videos, reaction to breaking news, and understanding copyrights, are also good. During the exam, She scored 80. Keep up the great work, Dinda!",
          "Sebastian has a very good understanding of Level 2 concepts. This includes loops (like while and for), nested if-statements, variable scope, functions, and return values. His digital literacy skills (like spotting fake videos and understanding copyrights) are also very strong. He scored a 90 on the exam, showing he learned the material well. Keep up the great work, Sebastian!"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep coding yang sudah dipelajari\ndengan [sangat baik/ baik/ cukup baik]. Semua coding practice dikerjakan dengan [sangat baik/ baik/ cukup baik].\nPada saat exam, [NAMA_STUDENT] menyelesaikan programmnya dengan\n[sangat baik/ baik/ cukup baik] Namun, agar kemampuan coding nya terus meningkat,\nsebaiknya latihan codingnya diperbanyak dan penulisan\ncodingnya juga diperhatikan. Good Job [NAMA_STUDENT]!\n",
          "I'm pleased with how Kent implemented the coding concepts we've studied—he performed well. His practice exercises showed good progress. During the examination, Kent finished his program and did a good job with it. To keep building these skills, I suggest he increases his coding practice time and pays closer attention to coding syntax and style. Excellent work, Kent!\"",
          "I'm pleased with how Dinda implemented coding concepts—she performed well. Her exercises showed good progress, including completing a Driver's License Validation Program and Simple Calculator. During the exam, Dinda finished successfully despite initial challenges. To keep building skills, I suggest increasing practice time. Excellent work, Dinda!",
          "I am very pleased with how Sebastian uses the new coding concepts. He did very well on his exercises and showed strong, steady progress. His work was good, including completing a Driver's License Validation Program and a Simple Calcula"
        ],
        "character": [
          "Kent continues to display strong eagerness during lessons, and I've noticed his confidence has grown since last report. He's more proactive asking thoughtful questions when concepts aren't clear, which shows real growth in his learning approach. His focus while completing coding exercises has improved notably. Keep up this excellent progress, Kent!",
          "Dinda still shows a positive attitude and is getting better at learning. She actively asks for help when confused, which shows good study habits. During coding exercises, her focus has improved from earlier sessions. I'm impressed by Dinda's commitment to programming and how she handles challenges. Excellent progress, Dinda!",
          "Sebastian continues to show a great attitude and is very eager to learn. He always asks good, thoughtful questions when he finds something difficult, which shows excellent study habits. During coding practice, his focus is excellent. I am impressed by his strong commitment to programming and how confidently he handles new challenges. Excellent progress, Sebastian!"
        ]
      }
    },
    "ROBLOX CODER": {},
    "PYTHON AI (32Meeting)": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] memahami konsep machine learning dan AI dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] mempelajari cara menggunakan modul dan library Python (Numpy, OpenCV) untuk image manipulation, model training, model prediction, serta object identification and tracking. Saat midtest, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI MIDTEST] dan untuk final exam nilainya [MASUKAN_NILAI FINAL]. Tetap semangat ya [NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat beberapa program seperti manipulasi gambar, prediksi jenis bunga, deteksi wajah dan beberapa objek menggunakan gambar atau video, serta men-tracking benda yang bergerak. Pada saat ujian midtest dan exam, [NAMA_STUDENT] berhasil menyelesaikannya dengan [sangat baik/ baik/ cukup baik]. Good Job [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemangat/ bersemangat/ cukup bersemangat] di dalam kelas. Ia juga [sangat aktif/ aktif/ cukup aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, ia juga [sangat fokus/ fokus/ cukup fokus] saat mengerjakan latihan coding. Motivasinya untuk mempelajari coding juga masih tinggi. Keep it up [NAMA_STUDENT]!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] memahami konsep object tracking dan cara kerjanya dengan [sangat baik/ baik/ cukup baik], termasuk perbedaan object detection dan tracking, Euclidean Distance Tracker, image thresholding, dan contour detection. [NAMA_STUDENT] juga mempelajari penggunaan Mediapipe Library untuk landmark detection, Holistic Tracking, serta anatomi Face Mesh dan Facial Area. Saat ujian, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI UJIAN]. Keep it up [NAMA_STUDENT]!"
        ],
        "application": [
          "[NAMA_STUDENT] mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat project Virtual Painter menggunakan hand landmark detection, project Pig Face Filter dan Face Filter Dragon menggunakan Face Mesh Landmark model dari Mediapipe, serta melakukan video masking untuk mendeteksi kondisi wajah (seperti mulut terbuka) dan menempelkan efek filter ke dalam frame video. Great job [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemangat/ bersemangat/ cukup bersemangat] di dalam kelas. Ia juga [sangat aktif/ aktif/ cukup aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, ia juga [sangat fokus/ fokus/ cukup fokus] saat mengerjakan latihan coding. Motivasinya untuk mempelajari coding juga masih tinggi. Keep it up [NAMA_STUDENT]!"
        ]
      }
    },
    "PYTHON_FOR_DATA_SCIENCE(16)": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami Python dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil bertransisi dengan baik dari JavaScript, memahami syntax dan penggunaan library. [NAMA_STUDENT] mempelajari konsep dasar pemrograman Python, termasuk variable, list, loop, conditional, function, dan Object-Oriented Programming (OOP). Saat ujian tertulis, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI UJIAN]. Good job [NAMA_STUDENT] !",
          "Joveano memahami Bahasa pemrograman Python dengan sangat baik. Transisi dari JavaScript ke Python berjalan lancar, Materi dasar Python yang dipelajari mencakup variable, array, looping, conditional statement, function, serta konsep Object-Oriented Programming (OOP). Hasil ujian tertulis mencapai skor 90. Good Job, Jo!",
          "Gabriel telah mempelajari materi dasar Python yang mencakup variable, data structure, dictionary, looping, conditional statement, function, serta konsep Object-Oriented Programming (OOP). Gabriel masih perlu memperdalam pemahaman terhadap konsep-konsep fundamental ini. Dengan review dan latihan yang lebih konsisten, pemahaman Gabriel akan terus meningkat! Tetep semangat Gabriel!",
          "Abed learned Python programming basics including variables, data structures, dictionaries, looping, conditional statements, functions, and Object-Oriented Programming (OOP). His written exam score was 80/100. Well done, Abed! He should continue to review and practice these concepts regularly to build a stronger understanding"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] menyelesaikan semua tugas dengan baik, dan kemampuan coding serta debugging-nya meningkat signifikan. [NAMA_STUDENT] menerapkan skill Python untuk membuat project seperti Password Maker, Jumbled Word Game, Chat-Bot, dan Game War, menguasai teknik pemrograman dasar maupun lanjutan.",
          "Joveano bisa menyelesaikan semua Latihan coding dengan lancar. Kemampuan coding serta debugging-nya mengalami peningkatan yang signifikan. Beberapa program yang dibuat menggunakan Python seperti Password Maker, Jumbled Word Game, Chat-Bot, dan Game War, membuktikan penguasaan teknik coding dari level basic hingga advanced. Keep it up, Jo!",
          "Gabriel berusaha menyelesaikan latihan coding seperti Password Maker, Jumbled Word Game, Chat-Bot, dan Game War. Dalam prosesnya, Gabriel masih memerlukan bimbingan dari teacher untuk menyelesaikan beberapa bagian. Dengan latihan yang lebih rutin, kemampuan coding Gabriel akan terus berkembang. Keep trying, Gabriel!",
          "Abed worked on coding projects like Password Maker, Jumbled Word Game, Chat-Bot, and Game War. For his coding exam, Abed created a program to check if someone can ride the Roller Coaster. The program worked, but the text output had some formatting problems with missing spaces between words. Abed needs to pay more attention to small details in his code. He should also try to solve problems by himself first using previous lesson materials before asking the teacher"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] berpartisipasi di kelas. [NAMA_STUDENT] bertanya saat diperlukan dan selalu datang tepat waktu, menunjukkan komitmen yang baik. Saat latihan coding, [NAMA_STUDENT] tetap fokus dan berdedikasi pada latihannya. Antusiasme [NAMA_STUDENT] dalam belajar Python dan AI tetap tinggi. Keep it up [NAMA_STUDENT] !",
          "Jojo cukup aktif di dalam kelas. Ia selalu mengajukan pertanyaan jika mengalami kesulitan. Jojo juga selalu focus ketika mengerjakan Latihan coding. Minat belajarnya pada bidang Python dan AI cukup tinggi, memperlihatkan sikap yang positif. Pertahankan semangat belajarnya, Jo!",
          "Gabriel menunjukkan antusiasme dalam belajar Python dan AI. Minat belajarnya terlihat positif. untuk improvement: Gabriel perlu lebih aktif membaca dan mengecek materi sebelum meminta bantuan. Luangkan waktu untuk mencoba menyelesaikan masalah secara mandiri dengan merujuk materi sebelumnya. Pendekatan belajar mandiri ini akan membangun fondasi yang kuat. Terus semangat, Gabriel!",
          "Abed shows good interest in Python and AI. This positive attitude helps his learning. To improve further, Abed should read materials independently and try solving problems on his own before asking questions. This will help him build stronger problem-solving skills. Keep up the good work, Abed!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dasar-dasar data science dengan [sangat baik/ baik/ cukup baik], seperti sorting algorithm, NumPy, dan Pandas, terutama saat konsepnya dijelaskan secara bertahap. [NAMA_STUDENT] bisa mengikuti contoh yang dipandu dengan baik dan memahami ide dasar di balik data frame dan probabilitas. Namun, [NAMA_STUDENT] masih perlu lebih banyak latihan untuk menguasai konsep ini secara mandiri. Keep it up [NAMA_STUDENT] !",
          "JoJo menunjukkan peningkatan signifikan dalam memahami materi lanjutan seperti algoritma sorting & searching, manipulasi data menggunakan NumPy dan Pandas, serta eksplorasi data dan konsep probabilitas. Ia mampu memahami alur analisis data dan logika statistik dengan sangat baik. Nilai akhir 95 mencerminkan pemahaman yang kuat. Good work, Jo!",
          "Jayden menunjukkan kemajuan yang sangat baik dalam menguasai topik lanjutan seperti algoritma pengurutan dan pencarian, pengolahan data dengan NumPy serta Pandas, dan juga pemahaman tentang eksplorasi data serta dasar-dasar probabilitas. Ia berhasil memahami proses analisis data dan logika statistik secara mendalam. Skor akhir 94 menandakan penguasaan materi yang solid. Great job, Jayden!"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menyelesaikan tugas coding dengan [sangat baik/ baik/ cukup baik] ketika diberikan instruksi dan contoh yang jelas. [NAMA_STUDENT] bekerja dengan baik dengan bimbingan terstruktur untuk project analisis data menggunakan Pandas dan NumPy. [NAMA_STUDENT] akan semakin berkembang dengan lebih banyak latihan menerapkan skill ini secara mandiri.",
          "Jojo berhasil menerapkan analisis data, seperti menyaring, mengurutkan, dan membaca pola dari data dengan bantuan library Pythondengan baik. Ia menyelesaikan Latihan dan ujian coding dengan sangat baik. Kemampuan mandirinya makin berkembang, meski tetap perlu latihan untuk eksplorasi tanpa contoh. Keep growing, Jo!",
          "Jayden mampu mengaplikasikan teknik analisis data dengan lancar, termasuk memfilter, mengurutkan, serta mengidentifikasi pola dalam data menggunakan library Python secara efektif. Ia menyelesaikan semua latihan dan ujian coding dengan hasil yang memuaskan. Kemandiriannya terus meningkat, walaupun masih disarankan untuk lebih sering berlatih eksplorasi tanpa mengandalkan contoh langsung. Tetap berkembang ya, Jayden!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ cukup aktif/ perlu didorong] rasa ingin tahunya dan mau belajar, namun masih cenderung bergantung pada bimbingan saat menghadapi tantangan. Membangun rasa percaya diri untuk menyelesaikan masalah secara mandiri akan membantu [NAMA_STUDENT] berkembang lebih jauh.",
          "Richard is a thoughtful student who learns best when he has a clear set of steps to follow. While he can get confused by open-ended challenges, his exam score of 70/100 shows he has grasped much of the core material. To truly build a strong foundation, it will be important for him to trust his own abilities and work through problems from start to finish on his own, even when it's difficult. This will develop his skills as an independent problem-solver.",
          "Jojo tetap aktif, fokus, dan semangat belajar. Ia lebih percaya diri saat menghadapi materi baru dan terbiasa bertanya saat butuh bantuan. Komitmen dan semangat belajarnya sangat baik. Sikapnya konsisten sejak level 1 dan jadi modal kuat untuk terus berkembang. Terus semangat ya, Jo!",
          "Jayden selalu aktif, konsentrasi tinggi, dan memiliki antusiasme belajar yang luar biasa. Ia semakin percaya diri dalam menghadapi materi baru serta sudah terbiasa mengajukan pertanyaan ketika memerlukan klarifikasi. Sikap positif ini konsisten sejak level 1 dan menjadi bekal yang sangat baik untuk selanjutnya. Semangat terus, Jayden!"
        ]
      }
    },
    "PYTHON_FOR_ML(16)": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa mempelajari AI dan machine learning secara bertahap dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] memahami ide dasar tentang bagaimana komputer bisa belajar dan mengambil keputusan, termasuk cara mengajarkan komputer mengenali bunga, memahami teks, dan mendeteksi berita palsu. Saat ujian konsep, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI UJIAN]. Keep it up [NAMA_STUDENT] !",
          "Kenny menunjukkan pemahaman sangat baik terhadap materi Machine Learning, mulai dari klasifikasi data, NLP, hingga analisis sentimen. Ia mampu menjelaskan hubungan antara teori dan praktik dengan jelas, serta cepat memahami konsep Python yang digunakan dalam berbagai model AI sederhana. Saat ujian konsep, Kenny mendapatkan nilai 80/100. Keep it up, Ken!",
          "Jayden has completed all eight lessons covering topics such as classification, natural language processing, and fake news detection. He scored 86 out of 100 on the written exam, showing a good understanding of the material. He would benefit from spending more time on how and why different algorithms are chosen, as this will help him work more independently. He is moving in a good direction and asking questions when unsure will continue to support his learning.",
          "Jayden has done a great job learning about AI and machine learning, including how computers classify data and understand human language. He understands the lessons well, scoring 86 out of 100 on his written concept exam. To keep improving, he should continue to practice understanding more difficult coding logic. We are very proud of Jayden's hard work and clear understanding of these new topics!"
        ],
        "application": [
          "[NAMA_STUDENT] menunjukkan kegigihan dalam mengerjakan coding dengan [sangat baik/ baik/ cukup baik]. Saat latihan ujian, [NAMA_STUDENT] sempat kebingungan pada beberapa soal namun tidak menyerah. [NAMA_STUDENT] berhasil menyelesaikan semua tantangan dan project-nya, menunjukkan daya tahan dan komitmen yang baik dalam belajar.",
          "Kenny menyelesaikan seluruh latihan dan project coding dengan sangat baik. Ia mampu mengimplementasikan logika pemrograman dan algoritma Machine Learning secara mandiri. Ia juga teliti dalam debugging dan memiliki inisiatif tinggi dalam mengembangkan proyeknya lebih lanjut dari instruksi dasar yang diberikan. Good job, Ken!",
          "Jayden successfully finished all coding projects across the eight lessons, meeting the requirements for each task. Developing the habit of writing more organised code and explaining his thinking will be useful as the work becomes more complex. His consistency through the practical sessions is noted and worth building on.",
          "Jayden shows great focus and effort when writing his programs during class. He successfully completed all his practical coding projects, showing that he can apply what he learns to build real working AI models. To grow further, he can practice finding and fixing coding errors on his own before asking for help. Jayden's practical skills are developing nicely, and he should keep up the great effort!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] berpartisipasi dalam pelajaran AI. Meski terkadang kesulitan dengan konsep yang kompleks, [NAMA_STUDENT] mengajukan pertanyaan yang baik saat butuh bantuan. [NAMA_STUDENT] tetap fokus selama latihan coding dan berusaha keras menyelesaikan project-nya. Minat [NAMA_STUDENT] terhadap artificial intelligence tetap kuat. Keep pushing forward, [NAMA_STUDENT] !",
          "Kenny sangat antusias dan aktif selama pembelajaran. Ia selalu hadir tepat waktu, menunjukkan rasa ingin tahu tinggi, serta tidak ragu bertanya ketika menemui kesulitan. Sikapnya yang disiplin, fokus, dan bertanggung jawab dalam menyelesaikan tugas menunjukkan minat belajar yang tinggi. Keep up the great work, Ken!",
          "Jayden participates well in class and shows a cooperative and attentive attitude throughout the course. At times he moves through tasks quickly, and taking a moment to review his work before finishing would help him avoid small errors. He brings a steady and positive presence to the class, which contributes well to the learning environment.",
          "Jayden has very good learning habits and always maintains a positive attitude during our sessions. He listens carefully to instructions, stays focused on his tasks, and participates well in every lesson. To continue his growth, he can try to challenge himself more with advanced questions during class discussions. We love having Jayden in class, and his consistent hard work is highly commendable. Good job, Jayden!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami teori dengan [sangat baik/ baik/ cukup baik], namun perlu konsisten mengulas kembali konsep-konsep lanjutan di level ini. Karena materinya cukup kompleks, pengulangan yang sering akan menjadi kunci untuk membangun fondasi yang lebih kuat. Usaha [NAMA_STUDENT] sangat baik, dan latihan ini akan membantunya mencapai penguasaan penuh.",
          "Kenny menunjukkan pemahaman yang sangat baik tentang konsep-konsep ML tingkat lanjut termasuk time series forecasting, neural networks, supervised, unsupervised dan reinforcement learning. Skor ujiannya  90. Penjelasannya tentang cara kerja recommendation systems dan anomaly detection baik dan menunjukkan pemikiran analitis yang kuat. Good Job, Ken!",
          "Richard menunjukkan pemahaman dasar yang cukup baik tentang konsep ML tingkat lanjut seperti time series forecasting, neural networks, supervised, unsupervised dan reinforcement learning. Dia mampu menjelaskan konsep-konsep utama dengan bantuan referensi seperti GeminiAI. Skor ujiannya 70. Keep it up, Richard!",
          "Jojo menunjukkan progres yang sangat stabil. Jika di Level 1 ia menguasai dasar klasifikasi dan NLP, di Level 2 ia meningkatkan skill Machine Learning dengan fokus pada topik lanjutan seperti time series forecasting, sales prediction, neural networks, unsupervised learning, dan recommender systems. Ia mampu menjelaskan alasan di balik pemilihan algoritma tertentu untuk problem yang diberikan. Keep it up, Jo!",
          "Jayden developed practical skills in Machine Learning, focusing on advanced topics such as time series forecasting, sales prediction, neural networks, unsupervised learning, and recommender systems. He has a good grasp of the practical side, but should consistently review the theory behind these advanced concepts. Because the material is quite complex, frequent repetition of the core ideas will help him build a more solid conceptual foundation. His effort is great, and continued practice will help him achieve full mastery."
        ],
        "application": [
          "[NAMA_STUDENT] unggul dalam semua latihan dengan [sangat baik/ baik/ cukup baik], menunjukkan kemampuan menerapkan konsep dengan baik. Meski sempat kurang percaya diri saat ujian, ini adalah langkah wajar dalam proses belajar. Berlatih dengan lebih banyak studi kasus akan membangun kepercayaan diri dan mengasah kemampuannya lebih lanjut. Keep up the great practice!",
          "Kenny menerapkan teknik Machine Learning lanjutan dalam proyek-proyek seperti Population Prediction, Sales Prediction, Customer Segmentation, dan Course Recommendation, dengan fokus pada forecasting, neural networks, dan recommender systems. Kenny berhasil menyelesaikan semua latihan coding dengan sangat baik  dan kode yang ditulisnya juga rapi ",
          "Richard berhasil menyelesaikan semua tugas coding dan mencapai hasil yang fungsional. Dia menunjukkan kemampuan untuk menemukan solusi dan menyelesaikan project dengan baik. Sebagai langkah pengembangan selanjutnya, Richard dapat fokus pada memahami setiap baris kode yang ditulis dengan lebih detail - bertahap dari konsep dasar. Good Job, Richard!",
          "Penerapan kode Jojo semakin rapi dan efisien. Ia menerapkan teknik Machine Learning lanjutan dalam proyek-proyek seperti Population Prediction, Sales Prediction, Customer Segmentation, dan Course Recommendation, dengan fokus pada forecasting, neural networks, dan recommender systems. Kemampuan debugging-nya juga semakin baik. Good job, Jo!",
          "Jayden applied Machine Learning to real projects like Sales Prediction, Customer Segmentation, and Course Recommendation. He's strong in hands-on practice and can build working models well. His theory is still catching up to his practical skills, so trying more varied exercises will help him build even more confidence."
        ],
        "character": [
          "[NAMA_STUDENT] mempertahankan sikap [sangat proaktif/ proaktif/ cukup proaktif] dan antusias. [NAMA_STUDENT] konsisten mengajukan pertanyaan yang menunjukkan keinginan belajar yang tulus. Kegigihan dan fokusnya, terutama saat menghadapi tantangan project, patut diapresiasi. Semangatnya terhadap AI menjadi pendorong utama keberhasilannya. Outstanding work!",
          "Kenny menunjukkan antusiasme tinggi dan konsistensi dalam pembelajaran. Dia aktif bertanya pertanyaan yang challenging dan mendalam tentang a neural network dan optimisasi model. Dia mengambil inisiatif untuk mengeksplorasi materi tambahan di luar kurikulum, menunjukkan passion yang kuat terhadap AI dan machine learning. Keep it up, Ken!",
          "Richard menunjukkan komitmen yang konsisten dalam mengikuti kelas dan menyelesaikan tugas-tugas yang diberikan. Dia hadir aktif dalam pembelajaran dan berusaha untuk memahami materi. Untuk kedepanya, Richard dapat mencoba menjelaskan konsep dengan bahasa sendiri. Hal ini akan membantu memperdalam pemahaman dan membangun kemampuan berpikir kritis.",
          "Jojo tetap mempertahankan disiplin dan fokusnya. Meskipun cenderung tenang di kelas, ia sangat proaktif dalam mengerjakan tantangan coding. Kemampuannya untuk tetap tenang saat menemui error yang lebih kompleks di Level 2 ini menunjukkan sikap belajar yang semakin mandiri dan terorganisir. Keep up the great work, Jo!",
          "Jayden has a great attitude in class. He's enthusiastic, asks good questions, and stays focused even when the material gets challenging. He doesn't give up easily and keeps trying until he understands. Keep up the great work, Jayden!"
        ]
      }
    },
    "PYTHON_FOR_CV(16)": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami konsep dasar computer vision dengan [sangat baik/ baik/ cukup baik], termasuk image manipulation dengan OpenCV, arsitektur CNN, transfer learning, dan algoritma object detection. [NAMA_STUDENT] memahami konsep kunci seperti MobileNetSSD, Haar Cascades, dan teknik tracking dengan baik. Saat ujian tertulis, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI UJIAN]. Keep up the excellent work, [NAMA_STUDENT] !",
          "Reynold has successfully worked through the first half of the curriculum, showing a clear understanding of how computers process visual data. He completed lessons on OpenCV image manipulation, Tensorflow, and CNN architectures. He also grasped the differences between Object Detection (using MobileNetSSD) and Object Tracking (using Euclidean Distance). His writing exam score of 80/100 confirms he has a good handle on these technical theories",
          "Reynold understands how computers process data through OpenCV, Tensorflow, and CNN. He successfully learned the difference between Object Detection and Tracking using the Euclidean Distance Tracker. His 80/100 on the writing exam shows he knows the theory well. Good job grasping these complex topics!",
          "Jojo understands how computers process and recognize visual data through OpenCV, TensorFlow, and CNN. He successfully learned how to classify images, detect faces, and distinguish between Object Detection and Object Tracking using the Euclidean Distance Tracker. His 90/100 on the theory exam shows a strong grasp of these complex topics. To keep growing, Jojo can explore how these concepts are used in real-world applications. Well done, Jojo!"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menyelesaikan semua tugas coding dengan [sangat baik/ baik/ cukup baik] dan mencapai hasil yang fungsional di semua project. [NAMA_STUDENT] menyelesaikan ujian coding-nya tanpa bug, menunjukkan ketelitian dan kemampuan debugging yang kuat. Sebagai langkah selanjutnya, [NAMA_STUDENT] bisa fokus memahami setiap baris kode secara lebih detail. Great job [NAMA_STUDENT] !",
          "Reynold has been diligent in completing his practical work, including projects on Horse and Human Classification and Face Detection. He successfully finished his middle exam, demonstrating that he can apply these tools to build working programs. To continue improving, he should focus on the specific logic within his scripts to ensure he understands exactly how each line of code contributes to the final result",
          "Reynold finished all projects, including Face Detection and Image Classification. He completed his middle exam smoothly, showing he can build working programs. He should now focus on the \"why\" behind each line of code to deepen his skills. Keep up the great work on your projects!",
          "Jojo completed all his coding exercises and projects, including Horse and Human Classification, Face Detection, and MobileNetSSD Object Detection. He finished his coding project exam successfully, showing he can build working programs on his own. Going forward, Jojo can challenge himself by exploring the \"why\" behind each line of code to deepen his understanding even further. Keep up the great work!"
        ],
        "character": [
          "[NAMA_STUDENT] menunjukkan komitmen [yang baik/ cukup baik/ yang perlu ditingkatkan] dalam menghadiri kelas dan menyelesaikan tugas. Meski kadang mudah teralihkan, ada peningkatan yang cukup terlihat dalam responsivitasnya. Saat diingatkan untuk fokus pada pelajaran, [NAMA_STUDENT] kini mendengarkan dan mengalihkan perhatiannya kembali. Terus membangun kedisiplinan diri akan membantu [NAMA_STUDENT] berkembang lebih jauh.",
          "Reynold is consistent about attending class and finishing his modules. However, he is often tempted to play games or browse other sites during the lesson. While he is respectful and gets back to work when asked, he needs to work on staying focused on the material independently. Developing better self-discipline during class time will help him get the most out of the upcoming advanced lessons",
          "Reynold is consistent about attending class and finishing his modules, but he is often distracted by games during class. While he listens when reminded to focus, he needs to practice staying on task independently. Improving his self-discipline will help him learn even more. Keep working on your focus, Reynold!",
          "Jojo is a focused and hardworking student who consistently stays on task and puts in genuine effort every session. He approaches challenging material with patience and sees tasks through to completion. To continue developing, it would be great to see Jojo ask more questions and share his thinking in class—his curiosity will take him far. His dedication throughout Level 1 has been great to see!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] mempelajari konsep AI Computer Vision tingkat lanjut dengan [sangat baik/ baik/ cukup baik], seperti Automatic Number Plate Recognition (ANPR), Optical Character Recognition (OCR), Hand Landmarks Detection, Face Mesh, serta deteksi area wajah, mata, dan mulut menggunakan MediaPipe. [NAMA_STUDENT] menunjukkan pemahaman yang sangat baik terhadap cara AI mengenali objek, teks, dan bagian tubuh melalui gambar atau video. Good job, [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] berhasil mengembangkan berbagai aplikasi yang memanfaatkan teknik computer vision dan machine learning dengan [sangat baik/ baik/ cukup baik], seperti OCR License Plate Number menggunakan EasyOCR, OCR Handwriting Recognition, Virtual Painter, Face Filter (Pig Nose), dan Face Filter (Dragon). Ke depannya, [NAMA_STUDENT] dapat mengeksplorasi lebih banyak variasi pada setiap proyek. Keep it up, [NAMA_STUDENT] !",
          "Jojo berhasil mengembangkan berbagai aplikasi yang memanfaatkan teknik computer vision dan machine learning, seperti OCR License Plate Number menggunakan EasyOCR, OCR Handwriting Recognition, Virtual Painter, Face Filter (Pig Nose), dan Face Filter (Dragon). Agar pemahamannya semakin berkembang, Jojo dapat mencoba memodifikasi fitur atau menambahkan fungsi baru pada setiap proyek. Secara keseluruhan, Jojo menunjukkan kemampuan yang baik dalam menerapkan konsep AI Computer Vision ke dalam berbagai proyek. Keep it up, Jojo!"
        ],
        "character": [
          "[NAMA_STUDENT] menunjukkan konsistensi yang [sangat baik/ baik/ cukup baik] selama mengikuti kelas dan mengerjakan setiap latihan yang diberikan. [NAMA_STUDENT] mampu mengikuti materi dengan baik dan menyelesaikan tugas sesuai arahan. Ke depannya, [NAMA_STUDENT] dapat mulai mencoba challenge yang lebih menantang. Keep it up, [NAMA_STUDENT] !",
          "Jojo menunjukkan komitmen yang baik selama mengikuti pembelajaran dan selalu berusaha menyelesaikan setiap tugas yang diberikan. Ia mengikuti instruksi dengan baik dan tetap fokus saat mengerjakan latihan coding. Ke depannya, Jojo dapat mencoba mengambil tantangan yang lebih beragam agar semakin terbiasa menyelesaikan soal dengan tingkat kesulitan yang lebih tinggi. Keep it up, Jojo!"
        ]
      }
    },
    "PYTHON_CODER": {
      "1": {
        "literacy": [
          " [NAMA_STUDENT] bisa memahami konsep dasar bahasa pemrograman python dengan [sangat baik/ baik/ cukup baik]. Konsep-konsep yang dipelajari yaitu pentingnya indentasi dalam python, algoritma, variabel, struktur data, list, list 2D, tuples, loop, conditional, conditional loop, function, function with parameter, one-liner dan juga scope. Nilai ujian teorinya juga bagus yaitu [NILAI_UJIAN]."
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik]. Semua latihan diselesaikan dengan [sangat baik/ baik/ cukup baik].  Challenge juga dikerjakan dengan [sangat baik/ baik/ cukup baik]. Saat ujian coding, [NAMA_STUDENT] juga berhasil menyelesaikannnya. Sebagai catatan, penulisan sintaks masih bisa ditingkatkan. Keep it up [NAMA_STUDENT]!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] terhadap konsep Python tingkat menengah. [NAMA_STUDENT] mempelajari dasar-dasar OOP, pengenalan module Python, dan pengembangan GUI dengan TKinter. Topik yang dipelajari meliputi prinsip OOP, dasar module, komponen TKinter, message/input box, label, button, canvas coordinates, dan konsep event handling. Keep it up, [NAMA_STUDENT] !",
          "Araya mempelajari topik-topik Python tingkat menengah di Level 2, mulai dari Object Oriented Programming (OOP), penggunaan modul Python, hingga membuat tampilan aplikasi desktop menggunakan TKinter—termasuk tombol, label, kotak input, canvas, dan interaksi mouse. Nilai ujian teorinya 70 dari 100, yang menunjukkan pemahamannya masih bisa terus diasah. Ke depannya, Araya bisa lebih sering mengulang konsep-konsep yang dipelajari agar semakin kuat pemahamannya. Tetap semangat, Araya!",
          "Araya menunjukkan pemahaman yang baik terhadap konsep Python tingkat menengah, khususnya pada materi Dasar-Dasar OOP, pengenalan Python Modules, dan pengembangan GUI menggunakan TKinter. Meskipun hasil ujian tertulisnya (70/100) masih perlu ditingkatkan, Araya secara praktik mampu memahami prinsip OOP, koordinat Canvas, hingga event handling dengan sangat baik."
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep yang dipelajari dengan [sangat baik/ baik/ cukup baik] dan konsisten. Latihan pemrograman diselesaikan dengan baik, menunjukkan progress yang stabil dalam pengembangan GUI. Project challenge dikerjakan dengan penuh determinasi, dan [NAMA_STUDENT] juga berhasil menyelesaikan ujiannya. You're on track, [NAMA_STUDENT] !",
          "Araya berhasil menyelesaikan semua latihan dan challenge dengan cukup baik. Pada ujian coding project, ia berhasil menyelesaikan proyeknya meski masih perlu beberapa kali bertanya—yang merupakan hal yang wajar dan menunjukkan ia mau berusaha sampai selesai. Ke depannya, Araya bisa berlatih mengerjakan proyek secara lebih mandiri agar semakin percaya diri. Good job, Araya!",
          "Araya mampu menerapkan konsep yang dipelajari ke dalam latihan dan proyek GUI dengan konsisten. Proyek challenge dan ujian coding diselesaikan dengan cukup baik, meskipun sesekali masih membutuhkan arahan atau bertanya untuk memastikan logikanya tepat. Fokus selanjutnya adalah memperkuat pemahaman struktur kode agar lebih mandiri di level berikutnya"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di dalam kelas. [NAMA_STUDENT] mengajukan pertanyaan relevan tentang materi saat diperlukan, menunjukkan minat dalam mempelajari konsep pemrograman baru. [NAMA_STUDENT] biasanya tetap fokus selama pelajaran, meski kadang butuh pengingat halus saat materi menjadi menantang. Keep it up, [NAMA_STUDENT] !",
          "Araya sangat aktif di dalam kelas dan selalu menunjukkan antusiasme yang tinggi dalam mempelajari konsep pemrograman baru. Ia tidak ragu untuk mengajukan pertanyaan yang relevan. Araya umumnya mampu menjaga fokus, meskipun terkadang membutuhkan pengingat dari pengajar saat ia merasa terlalu bersemangat atau ketika materi mulai menjadi lebih menantang."
        ]
      }
    },
    "JAVASCRIPT_DEVELOPER": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] dasar-dasar bahasa pemrograman JavaScript, yaitu algoritma, variabel dan tipe data, operator (aritmatika, penugasan, comparison, dan logical), array, conditional (if/else, switch statement, ternary operator), dan loop. [NAMA_STUDENT] juga mempelajari literasi digital seperti cara mengidentifikasi hoax, mengatasi cyberbullying, dan menjaga keseimbangan hidup (media balance). Saat ujian JavaScript Developer, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan dasar-dasar JavaScript dengan [sangat baik/ baik/ cukup baik] melalui latihan coding menggunakan variabel, array, operator, dan struktur conditional (if/else, switch, ternary). [NAMA_STUDENT] juga sudah bisa memecahkan masalah sederhana menggunakan logika program dan loop. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep JavaScript lanjutan, yaitu nested for loop, conditional loop, function beserta parameter dan return statement, scope, dan for each looping. [NAMA_STUDENT] juga mempelajari literasi digital seperti dampak manipulasi foto dan video, pentingnya menghargai hak cipta suatu karya, dan cara bereaksi yang tepat terhadap breaking news. Saat ujian JavaScript Developer, [NAMA_STUDENT] mendapatkan score [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep JavaScript lanjutan dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] berhasil membuat beberapa program JavaScript untuk mempraktikkan konsep yang sudah dipelajari, termasuk menggunakan function dengan parameter, return statement, dan for each looping. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "PYTHON_GAME_DEV": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami konsep dasar Game Development menggunakan Pygame dengan [sangat baik/ baik/ cukup baik]. Konsep-konsep yang dipelajari yaitu event controller, custom/user event, FPS (Frames Per Second), functional programming (modular & reusable), konsep Gravity (velocity vs acceleration), collision detection, global variable, transform function (scale & rotate), dan cara meng-convert game menjadi executable file. Nilai ujian teorinya juga bagus yaitu [MASUKAN_NILAI UJIAN]. Well done [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep Pygame yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik]. Semua latihan diselesaikan dengan baik, mulai dari setup environment dan penambahan object, load assets & sound effect, penerapan gravity dan pergerakan object, collision handling dan high score system, eksplorasi multiplayer game dan transform function, hingga membuat custom event, winning screen, dan meng-convert game menjadi executable file. Keep it up [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami dengan [sangat baik/ baik/ cukup baik] konsep animasi dan game development lanjutan pada Pygame, yaitu animation sprite, animation frame, kondisi spawning object/enemy, dan Game Over condition. Nilai ujian teorinya juga bagus yaitu [MASUKAN_NILAI UJIAN]. Awesome [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menerapkan konsep yang sudah dipelajari dengan [sangat baik/ baik/ cukup baik] untuk menyelesaikan project game mandiri. [NAMA_STUDENT] mengeksplorasi ide dan mengumpulkan asset, membuat timeline development, mendesain screen dan menambahkan sprite, coding logic permainan beserta enemies, hingga build game menjadi executable file dan mem-publish game tersebut. Nice work [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat aktif/ aktif/ cukup aktif] di kelas dan berinteraksi baik dengan teacher dan teman-temannya di kelas. Ia juga  [sangat aktif/ aktif/ cukup aktif] bertanya tentang materi yang kurang dipahami. [NAMA_STUDENT] juga fokus/cukup fokus ketika belajar walaupun kadang-kadang suasana kelas kurang kondusif. Keep it up [NAMA_STUDENT] !"
        ]
      }
    },
    "WEB_DEV": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami Bahasa HTML dan CSS dengan [sangat baik/ baik/ cukup baik]. Beberapa tags yang dipelajari yaitu heading, paragraph, image, hyperlink, list, table, span, div, dan section. Untuk properti CSS yaitu color, font-family, font-size, background-color, margin, padding, border, dan display. Saat exam, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI UJIAN]. Tingkatkan dan pertahankan semangatnya ya [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. Challenge juga dikerjakan dengan baik. [NAMA_STUDENT] bisa menerapkan konsep HTML dan CSS yang sudah dipelajari saat latihan membuat website. Hal ini terlihat saat exam, [NAMA_STUDENT] mendapatkan nilai yang bagus, yaitu [MASUKAN_NILAI UJIAN]. Pertahankan semangatnya ya [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemangat/ bersemangat/ cukup bersemangat] di dalam kelas. [NAMA_STUDENT] juga [sangat aktif/ aktif/ cukup aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, ia juga [fokus/ cukup fokus] saat mengerjakan latihan coding. Motivasi [NAMA_STUDENT] untuk mempelajari coding juga masih [tinggi/ cukup tinggi]. Keep it up [NAMA_STUDENT]!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] bisa mempelajari pengembangan web tingkat lanjut dengan [sangat baik/ baik/ cukup baik], termasuk pemanfaatan HTML DOM untuk interaksi dinamis, penambahan media, dan pembuatan formulir interaktif. Topik yang dikuasai mencakup JavaScript, DOM Events, media, HTML Forms (termasuk input, styling, submit), dan slider. Saat ujian, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI UJIAN]. Tingkatkan terus semangatnya [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. Challenge juga dikerjakan dengan baik. [NAMA_STUDENT] bisa menerapkan konsep lanjutan yang sudah dipelajari saat latihan membuat Interactive Blog Website. Hal ini terlihat dari penggunaan HTML DOM untuk interaksi dinamis, penambahan media, pembuatan form interaktif, hingga membuat image slider. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemangat/ bersemangat/ cukup bersemangat] di dalam kelas. [NAMA_STUDENT] juga [sangat aktif/ aktif/ cukup aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, ia juga [fokus/ cukup fokus] saat mengerjakan latihan coding. Motivasi [NAMA_STUDENT] untuk mempelajari coding juga masih [tinggi/ cukup tinggi]. Keep it up [NAMA_STUDENT]!"
        ]
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] bisa memahami konsep pembuatan website yang terdiri dari HTML, CSS, dan JavaScript dengan [sangat baik/ baik/ cukup baik]. Beberapa tags HTML dan CSS tambahan yang dipelajari yaitu form, input type and attribute, slider, dan submit to email, serta css transition, animation, dan modal. Namun, konsep responsive website masih perlu banyak latihan lagi. Saat ujian, [NAMA_STUDENT] mendapatkan nilai [MASUKAN_NILAI UJIAN]. Keep it up [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menyelesaikan website dengan tema Blog dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] mengaplikasikan konsep HTML forms, animasi CSS, transisi, desain responsif, image-slider, dan JavaScript DOM. Untuk desain responsif, [NAMA_STUDENT] perlu lebih banyak latihan coding. [NAMA_STUDENT] juga berhasil menyelesaikan dan mendeploy project website-nya. Good job [NAMA_STUDENT] !"
        ],
        "character": [
          "[NAMA_STUDENT] [tenang/ cukup tenang/ perlu bimbingan lebih] dan tetap fokus selama kelas. Ketika menghadapi kesulitan, [NAMA_STUDENT] mau bertanya sampai memahami solusinya. Seiring bertambahnya rasa percaya diri, [NAMA_STUDENT] bisa lebih aktif berpartisipasi dalam diskusi kelas agar belajar semakin maksimal. Keep up the positive attitude, [NAMA_STUDENT] !"
        ]
      }
    },
    "APP_DEV": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa membuat template project react-native dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] juga bisa memahami konsep react-native framework seperti component, layout, style, props, reusable component, hooks dan navigation dan juga menambahkan image, font, dan icon dengan [sangat baik/ baik/ cukup baik]. Nilai ujian Midtest [NAMA_STUDENT] [MASUKAN_NILAI MIDTEST] dan Examnya [MASUKAN_NILAI EXAM]. Good Job [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] mengerjakan latihan coding menggunakan react-native framework dengan [sangat baik/ baik/ cukup baik]. Pada saat midtest maupun exam, [NAMA_STUDENT] bisa menyelesaikan ujiannya dengan [baik/ cukup baik]. Latihan codingnya ditambah ya [NAMA_STUDENT]."
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemangat/ bersemangat/ cukup bersemangat] di dalam kelas. [NAMA_STUDENT] juga [sangat aktif/ aktif/ cukup aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, ia juga [fokus/ cukup fokus] saat mengerjakan latihan coding. Motivasi [NAMA_STUDENT] untuk mempelajari coding juga masih [tinggi/ cukup tinggi]. Keep it up [NAMA_STUDENT]!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT]  semakin memahami konsep react-native framework dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] belajar membuat design layout menggunakan Figma. Untuk Konsep react-native nya yaitu global state with redux, regular expression, navigation, modal, map method, position dan basic database realm(CRUD). Pada saat midtest, [NAMA_STUDENT]  mendapatkan nilai [MASUKAN_NILAI MIDTEST] dan untuk nilai examnya [MASUKAN_NILAI EXAM]."
        ],
        "application": [
          "[NAMA_STUDENT]  mengerjakan latihan coding dan challenge dengan  [sangat baik/ baik/ cukup baik]. Saat midtest hanya ada ujian teori tapi [NAMA_STUDENT]  tetap berhasil menyelesaikan ujian dengan  [sangat baik/ baik/ cukup baik]. Saat final test, [NAMA_STUDENT] menyelesaikan ujiannya sesuai dengan output yang diminta. Berdasarkan hasil ujian tersebut, debugging skill-nya perlu ditingkatkan. Caranya dengan memperbanyak latihan coding."
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemangat/ bersemangat/ cukup bersemangat] di dalam kelas. [NAMA_STUDENT] juga [sangat aktif/ aktif/ cukup aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, ia juga [fokus/ cukup fokus] saat mengerjakan latihan coding. Motivasi [NAMA_STUDENT] untuk mempelajari coding juga masih [tinggi/ cukup tinggi]. Keep it up [NAMA_STUDENT]!"
        ]
      },
      "3": {
        "literacy": [
          "Pada level Android Apps Development 3 ini, [NAMA_STUDENT] belajar beberapa konsep baru, yaitu drawer navigation, image slider, image picker, dropdown menu, link to another application, image zooming, responsive layout, dan splash screen. Penggunaan database mongoDB realm seperti membuat, membaca, menambah dan menghapus (CRUD) database juga semakin [baik/ cukup baik]."
        ],
        "application": [
          "[NAMA_STUDENT] selalu mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik]. Pada level ini, [NAMA_STUDENT] berhasil membuat aplikasi sendiri. Aplikasi yang dibuat diberi nama [JUDUL_APPS]. Aplikasi ini bertujuan untuk [TUJUAN APPS]. Sedikit catatan yaitu tingkatkan debugging skill dengan banyak latihan coding dan banyak membaca coding orang lain. Tetap semangat ya [NAMA_STUDENT]."
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemangat/ bersemangat/ cukup bersemangat] di dalam kelas. [NAMA_STUDENT] juga [sangat aktif/ aktif/ cukup aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, ia juga [fokus/ cukup fokus] saat mengerjakan latihan coding. Motivasi [NAMA_STUDENT] untuk mempelajari coding juga masih [tinggi/ cukup tinggi]. Keep it up [NAMA_STUDENT]!"
        ]
      }
    }
  }
};
