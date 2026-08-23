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
    "3D_ANIMATOR": {
      "1": {
        "literacy": [
          "\n[NAMA_STUDENT]  menunjukkan kemajuan yang [sangat baik/ baik/ cukup baik]. dalam belajar Coding\r\nuntuk pertama kalinya. [NAMA_STUDENT]  mulai memahami konsep dasar\r\nkomputer seperti mouse, keyboard dan layar dan\r\nmenggunakannya secara sederhana untuk navigasi dan input.\r\n[NAMA_STUDENT]  juga memahami literasi digital dengan [sangat baik/ baik/ cukup baik]. seperti\r\npentingnya media balance dan mencegah cyber bullying. Good\r\nJob [NAMA_STUDENT] !"
        ],
        "application": [
          "[NAMA_STUDENT] bisa memahami konsep dasar seperti algoritma dan blok\nkode, dan mampu membuat animasi dasar dengan ScratchJr.\nSelain itu, [NAMA_STUDENT] mulai terbiasa menggunakan aplikasi Wonder\nuntuk mendukung proses belajarnya. Ini menunjukkan\nkemampuannya berkembang dalam memanfaatkan teknologi\ndigital untuk memperluas pengetahuannya. Good Job [NAMA_STUDENT]!\n"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusia] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu\nyang [tinggi/ cukup tinggi] sehingga [mudah/kadang] terdistraksi dengan hal yang lain.\nWalaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal\nyang tidak diketahui dan juga menyampaikan pendapat di\ndalam kelas. Tetap semangat ya [NAMA_STUDENT]!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] terhadap\nliterasi digital, dasar penggunaan komputer seperti keyboard\ndan mouse.[NAMA_STUDENT] juga cukup memahami coding konsep seperti\nconditional, debugging, dan animasi sederhana. Tetap\nsemangat ya [NAMA_STUDENT]!\n"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menyusun blok coding dengan [sangat baik/ baik/ cukup baik] di Scratch\nJunior, memberi instruksi pada Cue robot dan membuat animasi\nsederhana di scratch dan animasi\n3D di Kodu. Namun, [NAMA_STUDENT] masih membutuhkan perhatian khusus\nagar bisa fokus mengerjakan latihan coding.\nKeep it up [NAMA_STUDENT]!"
        ],
        "character": []
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] telah menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] dalam\nmengenali gambar atau video palsu. [NAMA_STUDENT], Arka masih\nmembutuhkan bimbingan dalam memahami cara yang benar\nuntuk mendownload dan mengupload konten dengan hak cipta.\n[NAMA_STUDENT] juga semakin mahir dalam menggunakan dasar-dasar\nkomputer seperti keyboard dan mouse. Tetap semangat, [NAMA_STUDENT]!"
        ],
        "application": [
          "Arka masih membutuhkan bimbingan dalam menggunakan\r\nplatform Kodu untuk membuat game 3D seperti underwater\r\ngame dan cycle race. Selain itu, Arka juga belum sepenuhnya\r\nmemahami konsep conditional loop. Tapi jika dibimbing teacher,\r\nArka dapat lebih fokus dan menunjukkan kemampuan coding\r\nyang semakin berkembang. Keep it up, Arka! You're doing great."
        ],
        "character": []
      }
    },
    "WEBSITE_DESIGNER": {
      "1": {
        "literacy": [
          "Gavin meningkatkan keterampilan motorik halusnya dengan berlatih mengoperasikan komputer, termasuk mengetik, mengklik, dan drag mouse dengan menggunakan berbagai platform coding. Dia menunjukkan pemahaman yang sangat baik di bidang konsep komputer dan literasi digital. Ia juga mampu menguasai materi dengan cepat . Ke depannya, Gavin bisa meningkatkan fokus pada detail untuk memperkuat kemampuan analisisnya."
        ],
        "application": [
          "Gavin telah mempelajari dan menerapkan konsep coding seperti conditional loop dan function melalui game coding sederhana. Dia  juga telah mengeksplor cara menggunakan konsep-konsep tersebut untuk membuat animasi sederhana menggunakan telknologi  VR dan AR. Gavin sangat antusias belajar, namun perlu terus berlatih menyusun kode yang lebih kompleks agar lebih percaya diri."
        ],
        "character": [
          "[NAMA_STUDENT] [sangat antusias/ antusias/ cukup antusia] setiap di kelas. [NAMA_STUDENT] mempunyai rasa ingin tahu\nyang [tinggi/ cukup tinggi] sehingga [mudah/kadang] terdistraksi dengan hal yang lain.\nWalaupun begitu, [NAMA_STUDENT] tidak ragu-ragu bertanya tentang hal-hal\nyang tidak diketahui dan juga menyampaikan pendapat di\ndalam kelas. Tetap semangat ya [NAMA_STUDENT]!",
          "Gavin sangat antusias setiap di kelas. Dia juga sangat fokus ketika mengerjakan latihan. Ketika ada yang bingung, Gavin selalu bertanya. Keep itu Gavin!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT] menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] terhadap\nliterasi digital, dasar penggunaan komputer seperti keyboard\ndan mouse.[NAMA_STUDENT] juga cukup memahami coding konsep seperti\nconditional, debugging, dan animasi sederhana. Tetap\nsemangat ya [NAMA_STUDENT]!\n"
        ],
        "application": [
          "[NAMA_STUDENT] bisa menyusun blok coding dengan [sangat baik/ baik/ cukup baik] di Scratch\nJunior, memberi instruksi pada Cue robot dan membuat animasi\nsederhana di scratch dan animasi\n3D di Kodu. Namun, [NAMA_STUDENT] masih membutuhkan perhatian khusus\nagar bisa fokus mengerjakan latihan coding.\nKeep it up [NAMA_STUDENT]!"
        ],
        "character": []
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] telah menunjukkan pemahaman yang [sangat baik/ baik/ cukup baik] dalam\nmengenali gambar atau video palsu. [NAMA_STUDENT], Arka masih\nmembutuhkan bimbingan dalam memahami cara yang benar\nuntuk mendownload dan mengupload konten dengan hak cipta.\n[NAMA_STUDENT] juga semakin mahir dalam menggunakan dasar-dasar\nkomputer seperti keyboard dan mouse. Tetap semangat, [NAMA_STUDENT]!"
        ],
        "application": [
          "Arka masih membutuhkan bimbingan dalam menggunakan\r\nplatform Kodu untuk membuat game 3D seperti underwater\r\ngame dan cycle race. Selain itu, Arka juga belum sepenuhnya\r\nmemahami konsep conditional loop. Tapi jika dibimbing teacher,\r\nArka dapat lebih fokus dan menunjukkan kemampuan coding\r\nyang semakin berkembang. Keep it up, Arka! You're doing great."
        ],
        "character": []
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
          "Khadijah has shown impressive progress this term. She was able to implement intermediate programming concepts in various exercises and projects such as list, broadcast and clone. Khadijah also understand how to create more complex programs and get introduced to Python. Great job!"
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
    "GAMEDEV": {
      "1": {
        "literacy": [
          " Pada level Game Development 1, [NAMA_STUDENT] mempelajari penggunaan framework construct3 untuk membuat 2D game. [NAMA_STUDENT]  menggunakannya dengan [sangat baik/ baik/ cukup baik]. Konsep layout, object, behavior, variable dan event sheet termasuk event dan sub-event juga dipahami dengan cukup baik. Nilai ujian konsep [NAMA_STUDENT]  adalah [MASUKAN_NILAI UJIAN]. Keep it up ya [NAMA_STUDENT] !",
          "In Game Development 1, Zayyan has been learning the Construct 3 framework for 2D game creation. Zayyan has utilized it well. The concepts of layouts, objects, behaviors, variables, and event sheets, including events and sub-events, are also understood well enough. Zayyan's concept exam score is 100 out of 100. Keep it up, Zayyan!"
        ],
        "application": [
          "[NAMA_STUDENT]  bisa menambahkan object sprite, background, text, dan behavior seperti Jump-thru, solid, platform, rotate, sine, bullet dan 8Direction. Pada level ini, ada 4 project game. [NAMA_STUDENT]  mengerjakannya dengan [sangat baik/ baik/ cukup baik]. Namun, Saat ujian coding, yaitu membuat sebuah game,  [NAMA_STUDENT]  tidak menyelesaikannya dengan baik. Kedepannya lebih baik lagi dan tingkatkan semangatnya ya [NAMA_STUDENT]!",
          "Zayyan is able to add sprite objects, backgrounds, text, and behaviors such as Jump-thru, solid, platform, rotate, sine, bullet, and 8Direction. In this level, there were 4 game projects. Zayyan completed them very well. Furthermore, during the coding exam, Zayyan also finish creating the game. Moving forward, keep that enthusiasm high, Zayyan!"
        ],
        "character": []
      },
      "2": {
        "literacy": [
          "\nProgress [NAMA_STUDENT][sangat signifikan/ signifikan/ cukup signifikan] menggunakan framework construct3 dalam membuat game. Konsep layout game, seperti start, game, gameover dan win layout bisa dipahami [NAMA_STUDENT] dengan [cukup baik/ baik/ sangat baik]. Konsep obstacles, enemies, family features, particles, aim and shoot, change costume and impulse juga bisa dipahami dengan baik. [NAMA_STUDENT] mendapatkan nilai ujian [MASUKAN_NILAI UJIAN]. Pertahankan semangatnya ya [NAMA_STUDENT]!",
          "In Game Development 2, Khadijah continued to develop her understanding of Construct 3 by learning more advanced concepts such as instance variables, random mechanics, player selection, life and score systems, and Game Over logic. Compared to Level 1, she showed a stronger grasp of how these systems connect together in a full game. On her written concept exam, Khadijah scored 80 out of 100, which reflects a good understanding of the material. Well done, Khadijah!"
        ],
        "application": [
          "[NAMA_STUDENT] membuat dua game pada level ini. Game yang dibuat semakin kompleks, menggunakan intermediate konsep. [NAMA_STUDENT] berhasil menyelesaikannya dengan [sangat baik/ baik/ cukup baik]. Namun, saat ujian coding, membuat game juga, [NAMA_STUDENT] [cukup/sedikit kesulitan/ tidak ada kesulitan] untuk menyelesaikannya. James menyelesaikannya dalam [JUMLAH PERTEMUAN] pertemuan. Kedepannya lebih banyak latihan codingnya dan tingkatkan semangatnya ya[NAMA_STUDENT] !\n",
          "Khadijah built a more complex and complete game this level, applying advanced features like bouncing ball mechanics, floating blocks, layout and button design, life counter, score tracker, family feature, and instance variables — going beyond what she created in Level 1. For her coding exam, she successfully completed the project and met all the required criteria. Notably, when her project file was lost mid-course, she redid the entire game from scratch and completed it well. Keep up the good work, Khadijah!"
        ],
        "character": []
      },
      "3": {
        "literacy": [
          "[NAMA_STUDENT] semakin mahir menggunakan menggunakan framework construct3. [NAMA_STUDENT] bisa membuat layout dengan menggunakan konsep tilemap, konsep behaviour scroll to, anchor, dan jump-thru. Konsep-konsep yang dipelajari pada level ini cukup advance dan dapat dipahami dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] juga bisa men-deploy game yang sudah dibuat ke website. Great Job [NAMA_STUDENT] !\n\r\n"
        ],
        "application": [
          "Pada level ini game yang dbuat hanya 1 tapi game ini lebih kompleks dari yang sebelumnya pernah dibuat.  [NAMA_STUDENT] berhasil menyelesaikannya dengan [sangat baik/ baik/ cukup baik].Untuk project akhir yaitu membuat game sendiri, dimulai dari ide, design, coding sampai presentasi dan demo game, [NAMA_STUDENT] mampu menyelesaikan dengan [sangat baik/ baik/ cukup baik]. Game yang dibuat menarik untuk dimainkan. Berikut link gamenya: [LINK_GAME]\n"
        ],
        "character": []
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
          "El show good understanding of intermediate Python concepts in practice. He has learned OOP fundamentals, Python modules introduction, and TKinter GUI development. Key topics covered include OOP principles, module basics, TKinter components, message/input boxes, labels, buttons, canvas coordinates, and event handling concepts. While his theoretical exam needs improvement, his practical application shows strong conceptual grasp. Keep it up, El!",
          "Araya mempelajari topik-topik Python tingkat menengah di Level 2, mulai dari Object Oriented Programming (OOP), penggunaan modul Python, hingga membuat tampilan aplikasi desktop menggunakan TKinter—termasuk tombol, label, kotak input, canvas, dan interaksi mouse. Nilai ujian teorinya 70 dari 100, yang menunjukkan pemahamannya masih bisa terus diasah. Ke depannya, Araya bisa lebih sering mengulang konsep-konsep yang dipelajari agar semakin kuat pemahamannya. Tetap semangat, Araya!",
          "Araya menunjukkan pemahaman yang baik terhadap konsep Python tingkat menengah, khususnya pada materi Dasar-Dasar OOP, pengenalan Python Modules, dan pengembangan GUI menggunakan TKinter. Meskipun hasil ujian tertulisnya (70/100) masih perlu ditingkatkan, Araya secara praktik mampu memahami prinsip OOP, koordinat Canvas, hingga event handling dengan sangat baik."
        ],
        "application": [
          "El applies learned concepts with good consistency. The programming exercises were completed successfully, showing steady progress in GUI development. Challenge projects were approached with determination. He also successfully finished the exam. Next focus is on improving code understanding for the next level. You're on track, El!",
          "Araya berhasil menyelesaikan semua latihan dan challenge dengan cukup baik. Pada ujian coding project, ia berhasil menyelesaikan proyeknya meski masih perlu beberapa kali bertanya—yang merupakan hal yang wajar dan menunjukkan ia mau berusaha sampai selesai. Ke depannya, Araya bisa berlatih mengerjakan proyek secara lebih mandiri agar semakin percaya diri. Good job, Araya!",
          "Araya mampu menerapkan konsep yang dipelajari ke dalam latihan dan proyek GUI dengan konsisten. Proyek challenge dan ujian coding diselesaikan dengan cukup baik, meskipun sesekali masih membutuhkan arahan atau bertanya untuk memastikan logikanya tepat. Fokus selanjutnya adalah memperkuat pemahaman struktur kode agar lebih mandiri di level berikutnya"
        ],
        "character": [
          "El is very active in class. He asks relevant questions about material when needed, showing interest in learning new programming concepts. El usually stays focused during lessons, though occasionally needs gentle reminders when topics become challenging, when he gets overly energetic, or on days when he's feeling tired. Keep it up, El!",
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
    "ROBLOX_EXPLORER": {
      "1": {
        "literacy": [],
        "application": [],
        "character": []
      }
    },
    "ROBLOX_DESIGNER": {
      "1": {
        "literacy": [],
        "application": [],
        "character": []
      },
      "2": {
        "literacy": [],
        "application": [],
        "character": []
      },
      "3": {
        "literacy": [],
        "application": [],
        "character": []
      }
    },
    "ROBLOX_CODER": {
      "1": {
        "literacy": [],
        "application": [],
        "character": []
      },
      "2": {
        "literacy": [],
        "application": [],
        "character": []
      },
      "3": {
        "literacy": [],
        "application": [],
        "character": []
      }
    },
    "ROBLOX_ADVANCE CODER": {
      "1": {
        "literacy": [],
        "application": [],
        "character": []
      },
      "2": {
        "literacy": [],
        "application": [],
        "character": []
      },
      "3": {
        "literacy": [],
        "application": [],
        "character": []
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
          "Kent  bisa mengerjakan latihan coding dengan [sangat baik/ baik/ cukup baik].   Kent memahami konsep coding dengan membuat beberapa program menggunakan bahasa javascript yaitu validasi pembuatan sim dan simpel calculator. Good job [NAMA_STUDENT] !\n",
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
    "WEB_DEV": {
      "1": {
        "literacy": [
          "Insan memahami Bahasa HTML dan CSS dengan baik. Beberapa tags yang dipelajari yaitu heading, paragraph, image, hyperlink, list, table, span, div dan section. Untuk CSS properti yaitu color, font-family, font-size, background-color, margin, padding, border, display. Saat exam, Insan mendapatkan nilai 80. Tingkatkan dan Pertahankan semangatnya ya.",
          "Daru demonstrates a good understanding of HTML and CSS. He has learned tags like headings, paragraphs, images, hyperlinks, lists, tables, <span>, <div>, and <section>. CSS properties covered include color, font-family, font-size, background-color, margin, padding, border, and display. On the recent exam, Daru scored 50. Keep up the great work Daru!",
          "Dinda understands HTML and CSS well. She has learned essential tags including headings, paragraphs, images, hyperlinks, lists, tables, <span>, <div>, and <section>. CSS properties covered include color, font-family, font-size, background-color, margin, padding, border, and display. Dinda has also gained knowledge in creating responsive websites, which is an important skill in modern web development. In the latest test, Dinda achieved a score of 90. Keep up the great work, Dinda!",
          "Sebastian understands HTML and CSS well. He has learned important tags including headings, paragraphs, images, links, lists, tables, and sections. CSS properties covered include colors, fonts, backgrounds, spacing, borders, and layouts. Sebastian also learned about responsive websites that work on different screen sizes. In his latest test, Sebastian achieved a score of 100. Excellent work, Sebastian!"
        ],
        "application": [
          "Insan mengerjakan latihan coding dengan baik. Challenge juga dikerjakan dengan baik. Ia bisa menerapkan konsep HTML dan CSS yang sudah dipelajari saat latihan membuat website. Hal ini terlihat saat exam, Insan mendapatkan nilai yang bagus, yaitu 80. Pertahankan semangatnya ya.",
          "Daru performs well in his coding exercises and completed some challenges, showing a strong ability to apply HTML and CSS concepts in practice. However, his recent exam score of 50 suggests an area for growth in theoretical understanding. We encourage him to balance his excellent practical skills with deeper conceptual review to further improve.",
          "Dinda performs well in her coding exercises and completed the challenges given to her. She shows a good ability to apply HTML and CSS concepts in practice, from building headers and styling images to creating pricing tables, navigation links, footers, and responsive layouts. Her test result of 90 reflects a solid understanding of both practical and theoretical aspects of web development. Well done, Dinda!",
          "Sebastian does well in his coding exercises and completed all challenges given to him. He can apply HTML and CSS concepts in practice, from building headers and styling images to creating pricing tables, navigation links, footers, and responsive layouts. His test result of 100 shows he understands both the practical and theoretical parts of web development. Great job, Sebastian!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemanga/ bersemangat/ cukup bersemangat ] di dalam kelas. [NAMA_STUDENT] juga [sangat aktif/ aktif/aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, Ia juga [fokus/cukup fokus] saat mengerjakan latihan coding. Motivasi [NAMA_STUDENT] untuk mempelajari coding juga masih [tinggi/cukup tinggi]. Keep it up [NAMA_STUDENT]!",
          "Daru engages well in class. Though not overly active in discussions, he does actively ask questions when he encounters confusion or difficulties, showing a willingness to seek clarification. He remains focused on coding exercises and mostly completes the lessons. Daru's motivation to learn coding appears to be at a good level. Keep it up, Daru!",
          "Dinda engages well in class and shows enthusiasm for learning. She is focused during coding exercises and completes her lessons on time. Sometimes, she even finishes 2 lessons in one meeting, which shows her strong focus and quick learning. Dinda demonstrates a positive attitude towards challenges and is willing to put in the effort to understand new concepts. Her motivation to learn coding is at a good level. Keep it up, Dinda!",
          "Sebastian focuses well during class and completes his lessons on time. He often finishes 2 lessons in one meeting, showing his ability to learn at a faster pace. Sebastian follows instructions and puts in effort to understand new concepts. To continue improving, Sebastian can practice explaining what he coded in his own words, which will help deepen his understanding further."
        ]
      },
      "2": {
        "literacy": [
          "Afra mempelajari pengembangan web tingkat lanjut, termasuk pemanfaatan HTML DOM untuk interaksi dinamis, penambahan media, dan pembuatan formulir interaktif. Topik yang dikuasai mencakup JavaScript, DOM Events, media, HTML Forms (termasuk input, styling, submit), dan slider. Saat ujian, Afra mendapat nilai 70. Tingkatkan terus semangatnya Afra!",
          "Sebastian covered more advanced web topics in Level 2 — including JavaScript, responding to user actions on a webpage, adding media, building forms, and creating an image slider. He understood the material well and scored 70 out of 80 in the final exam. Nice job, Sebastian!\r\n\r\nTo strengthen his understanding further, it would be helpful for Sebastian to review the concepts he found challenging and practice applying them outside of class.\r\n\r\nHe showed consistent progress throughout Level 2 and is well-prepared to take on the next level. Keep it up!",
          "Daru learned advanced web development topics, including HTML DOM, JavaScript events, adding media, creating interactive forms, and building an image slider. He showed a good understanding of these concepts and was able to apply them during class activities. To improve further, Daru can continue practicing how different JavaScript concepts work together when building interactive web pages. Overall, he has shown good progress in this level."
        ],
        "application": [
          "Afra mengerjakan latihan coding dengan baik. Challenge juga dikerjakan dengan baik. Ia bisa menerapkan konsep lanjutan yang sudah dipelajari saat latihan membuat Interactive Blog Website. Hal ini terlihat dari penggunaan HTML DOM untuk interaksi dinamis, penambahan media, pembuatan form interaktif, hingga membuat image slider. Good Job Afra!",
          "Sebastian completed all his coding exercises and challenges well. In his interactive blog website project, he successfully applied what he learned—including multimedia content, a working contact form, and an image slider. Good job, Sebastian!\r\nAs a next step, Sebastian can challenge himself to add his own creative touches to his projects rather than following only the given instructions.\r\nHis ability to complete the project from start to finish reflects a solid work ethic—keep it up!",
          "Daru completed the coding exercises and challenges well throughout this level. He was able to apply HTML DOM, JavaScript events, forms, media elements, and image sliders while developing his Interactive Blog Website. To continue improving, Daru can focus on writing cleaner and more organized code as his projects become more complex. Keep up the good work, Daru!"
        ],
        "character": []
      },
      "3": {
        "literacy": [
          "Dave memahami konsep pembuatan website yang terdiri dari HTML, CSS, dan Javascript dengan cukup baik. Beberapa tags HTML dan CSS tambahan yang dipelajari yaitu form, input type and attribute, slider, dan submit to email, css transition, animation, dan modal dapat digunakan dengan baik. Namun, konsep responsive website nya perlu banyak latihan lagi.",
          "Afra sudah menyelesaikan materi CSS tingkat lanjut seperti transitions, animations, dan responsive design. Sejauh ini, Afra sudah memahami cara membuat elemen website lebih hidup dan menyesuaikan tampilan di layar yang berbeda. Kedepannya, Afra bisa lebih memperdalam lagi pemahaman tentang detail media queries agar pengaturan responsifnya semakin rapi. Secara keseluruhan, pemahaman Afra di modul ini sudah cukup baik. Good job, Afra!"
        ],
        "application": [
          "Dave berhasil menyelesaikan website dengan tema Blog. Dave mengaplikasikan konsep HTML forms, animasi CSS, transisi, desain responsif, dan image-slider dan javascript DOM. Untuk desain responsif, Dave perlu lebih banyak latihan coding. Dave juga berhasil menyelesaikan project website dan mendeploy-nya: https://ipea-store.netlify.app/. Good Job Dave!",
          "Untuk bagian praktik, Afra berhasil menyelesaikan proyek \"Create Your Own Website\" mulai dari pembuatan halaman About sampai selesai. Afra sudah bisa menerapkan elemen interaktif dan desain responsif ke dalam proyeknya sendiri sesuai instruksi. Hal yang perlu ditingkatkan adalah kerapihan susunan kode CSS-nya supaya lebih mudah dibaca. Progres yang bagus dalam menyelesaikan project website ini. Keep it up, Afra!"
        ],
        "character": [
          "Daru is a quiet student who stays focused during class. When he faces difficulties, he is willing to ask questions until he understands the solution. As he becomes more confident, participating more actively in class discussions will help him learn even more. Keep up the positive attitude, Daru!",
          "Selama di kelas, Afra terlihat bersemangat dan cukup aktif saat sesi belajar. Kalau ada kode yang error atau sulit, Afra juga tidak ragu untuk bertanya sampai ketemu solusinya. Selain itu, Afra bisa tetap fokus saat sedang mengerjakan tugas coding mandiri. Semoga semangat dan ketelitiannya ini terus terjaga untuk materi-materi selanjutnya. Great work, Afra!",
          "Daru is calm, focused, and responsible during class. Although he is usually quiet, he asks questions whenever he needs clarification and continues working until he understands the material. As he gains more confidence, sharing his ideas more often during class will help him continue to grow. Well done, Daru!"
        ]
      }
    },
    "APP_DEV": {
      "1": {
        "literacy": [
          "[NAMA_STUDENT] bisa membuat template project react-native dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] juga bisa memahami konsep react-native framework seperti component, layout, style, props, reusable component, hooks dan navigation dan juga menambahkan image, font, dan icon dengan [sangat baik/ baik/ cukup baik]. Nilai ujian Midtest [NAMA_STUDENT]  [NILAI_UJIAN] dan Examnya [NILAI_UJIAN], nilai yang [sangat bagus/ bagus/ cukup bagus]. Good Job [NAMA_STUDENT] !",
          "Raymond has a foundational understanding of React Native. He can manage basic concepts such as creating a project template and working with components, layout, style, props, and reusable components. However, he still finds more advanced topics like Hooks and Navigation to be challenging and requires further review and practice in these specific areas.",
          "Raymond bisa membuat template project react-native dengan cukup baik. Konsep component, layout, style, props sudah dipahami, tapi hooks dan navigation masih perlu bantuan. Midtest masih butuh bimbingan karena topik masih baru. Good Job Raymond!",
          "Richard menunjukkan pemahaman yang baik terhadap konsep React Native seperti Component, Layout, Styling, dan Props. Untuk materi advanced seperti Hooks, Navigation, dan FlatList manipulation perlu pengulangan agar lebih mantap. Nilai Midtest 50 menunjukkan masih ada gap pemahaman yang perlu diperkuat. Keep learning, Richard!"
        ],
        "application": [
          "Saat awal mulai latihan coding menggunakan react-native framework, [NAMA_STUDENT] sedikit kewalahan. Codingnya cukup banyak, error message-nya kurang jelas bahkan kadang tidak ada. Namun, semakin sering latihan, hal tersebut bisa diatasi. Pada saat midtest maupun exam, [NAMA_STUDENT] bisa menyelesaikan ujiannya dengan [baik/ cukup baik]. Latihan codingnya ditambah ya [NAMA_STUDENT].",
          "During coding exercises, Raymond frequently encounters errors, which is understandable as many of these topics are new to him. It is important to note that he required significant assistance to complete his mid-test. Consistent, focused practice will be key to building his confidence and developing his ability to problem-solve independently.",
          "Saat awal latihan coding react-native, Raymond kewalahan karena banyak error. Karena topik masih baru, wajar mengalami kesulitan. Midtest masih perlu bantuan guru. Latihan coding ditambah ya Raymond, terutama hooks dan navigation. Keep it up, Raymond!",
          "Kemampuan coding Richard cukup bagus untuk task straightforward seperti styling dan component structure. Untuk logic kompleks seperti data manipulation dan state management masih perlu latihan lebih banyak. Konsep dari pertemuan sebelumnya kadang perlu di-refresh kembali. Practice makes perfect, Richard!"
        ],
        "character": [
          "[NAMA_STUDENT] [sangat bersemanga/ bersemangat/ cukup bersemangat ] di dalam kelas. [NAMA_STUDENT] juga [sangat aktif/ aktif/aktif] mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, Ia juga [fokus/cukup fokus] saat mengerjakan latihan coding. Motivasi [NAMA_STUDENT] untuk mempelajari coding juga masih [tinggi/cukup tinggi]. Keep it up [NAMA_STUDENT]!",
          "Raymond is a very quiet student in class who tends to keep to himself. He requires close attention as he rarely asks for help, even when he is struggling with a concept. Encouraging him to voice his questions and share his difficulties would be highly beneficial for his progress.",
          "Raymond kurang aktif di kelas dan jarang bertanya meski kesulitan. Perlu perhatian khusus dari guru. Namun Raymond fokus saat coding dan motivasi belajar cukup tinggi. Keep it up Raymond! Jangan ragu bertanya ya!",
          "Richard punya potensi dan antusias belajar coding. Yang perlu ditingkatkan adalah fokus selama pembelajaran—kadang perhatian terbagi dengan browsing atau mengatur playlist. Pada exam, Richard sempat memilih jalan pintas dengan melihat kunci jawaban. Yuk Richard, percaya pada kemampuan sendiri dan belajar dengan jujur. Konsistensi fokus dan integritas akan bawa skill coding makin tajam!",
          "Jojo tetap aktif di dalam kelas. Ia juga fokus Ketika mengerjakan latihan coding. Kadang-kadang satu pertemuan bisa menyelesaikan dua lesson. Namun, ketika menghadapi kesulitan, Ia masih konsisten bertanya. Setelah menyelesaikan materi mobile app development, Keinginan jojo untuk belajar bahasa lain muncul. Keep up the great work, Jojo!"
        ]
      },
      "2": {
        "literacy": [
          "[NAMA_STUDENT]  semakin memahami konsep react-native framework dengan [sangat baik/ baik/ cukup baik]. [NAMA_STUDENT] belajar membuat design layout menggunakan Figma. Untuk Konsep react-native nya yaitu global state with redux, regular expression, navigation, modal, map method, position dan basic database realm(CRUD). Pada saat midtest, [NAMA_STUDENT]  mendapatkan nilai [NILAI_UJIAN] dan untuk nilai examnya [NILAI_UJIAN].",
          "Jayden telah mempelajari konsep lanjutan seperti manajemen state global dengan Redux, penggunaan Regex, navigasi tab, login system, serta pengelolaan data dengan database firebase. Ia mulai memahami bagaimana menyimpan, mengedit, dan menghapus data secara lokal di aplikasi Android. Jayden menyelesaikan ujian akhir dengan nilai 90. Good effort!"
        ],
        "application": [
          "[NAMA_STUDENT]  mengerjakan latihan coding dan challenge dengan  [sangat baik/ baik/ cukup baik]. Saat midtest hanya ada ujian teori tapi [NAMA_STUDENT]  tetap berhasil menyelesaikan ujian dengan  [sangat baik/ baik/ cukup baik]. Saat final test, [NAMA_STUDENT]  [berhasil/ belum berhasil] menyelesaikan ujiannya sesuai dengan output yang diminta. Berdasarkan hasil ujian tersebut, debugging skill-nya perlu ditingkatkan. Caranya dengan memperbanyak latihan coding.",
          "Ketika membuat aplikasi notes dan contact list, Jayden mampu mengikuti langkah-langkah coding dengan cukup baik, mulai dari membuat floating button, menyimpan dan mengurutkan catatan, hingga menambahkan fitur pencarian dan hapus data. Meskipun terkadang butuh waktu memahami alur logika sendiri, ia bisa menyelesaikan project dan ujian dengan baik."
        ],
        "character": [
          "Jayden menunjukkan motivasi yang tinggi untuk menguasai coding, terlihat dari fokusnya saat mengerjakan latihan dan kemampuannya menyelesaikan ujian dengan baik. Ia juga aktif bertanya saat mengalami kesulitan. Sikapnya yang gigih dan rasa ingin tahunya akan sangat membantunya untuk menjadi developer yang handal. Keep it up, Jayden!",
          "Gabriel secara konsisten menunjukkan motivasi belajar yang tinggi dan proaktif dalam mencari pemahaman dengan bertanya. Namun, perhatiannya cenderung menurun saat sesi latihan praktik, yang sedikit memengaruhi hasilnya. Peningkatan fokus saat latihan akan sangat membantu memaksimalkan potensi belajarnya"
        ]
      },
      "3": {
        "literacy": [
          "Pada level Android Apps Development 3 ini, [NAMA_STUDENT] belajar beberapa konsep baru, yaitu drawer navigation, image slider, image picker, dropdown menu, link to another application, image zooming, responsive layout, dan splash screen. Penggunaan database mongoDB realm seperti membuat, membaca, menambah dan menghapus (CRUD) database juga semakin [baik/ cukup baik].",
          "Pada level Android Apps Development 3 ini, Jojo belajar beberapa konsep baru, yaitu drawer navigation, image slider, image picker, dropdown menu, link to another application, image zooming, responsive layout,dan splash screen. Penggunaan database firebase seperti membuat, membaca, menambah dan menghapus (CRUD) database juga semakin baik. Good Job!"
        ],
        "application": [
          "[NAMA_STUDENT] selalu mengerjakan latihan coding dengan sangat baik. Pada level ini, [NAMA_STUDENT] berhasil membuat aplikasi sendiri. Aplikasi yang dibuat diberi nama [JUDUL_APPS]. Aplikasi ini bertujuan untuk [TUJUAN APPS]. Sedikit catatan yaitu tingkatkan debugging skill dengan banyak latihan coding dan banyak membaca coding orang lain. Tetap semangat ya [NAMA_STUDENT].",
          "Jojo selalu mengerjakan latihan coding dengan sangat baik. Pada level ini, Ia berhasil membuat aplikasi e-commerce. Aplikasi yang dibuat berjudul Daily Fashion. Aplikasi ini bertujuan untuk menjual pakaian dan aksesoris secara online.  Catatan untuk Jojo yaitu perbanyak latihan coding dan membaca coding orang lain. Keep it up, Jo!"
        ],
        "character": []
      }
    },
    "PYTHON AI (32Meeting)": {
      "1": {
        "literacy": [
          "Rashad memahami konsep machine learning dan AI dengan sangat baik. Rashad mempelajari cara menggunakan modul dan library python. Rashad juga bisa melakukan image manipulation, model training, model prediction, object identification and tracking. Saat midtest, Rashad mendapatkan nilai 80 dan untuk final exam nilainya 70. Tetap semangat ya Rashad!"
        ],
        "application": [
          "Rashad mengerjakan latihan coding dengan sangat baik. Rashad berhasil membuat beberapa program seperti manipulasi gambar, prediksi jenis bunga, deteksi wajah dan beberapa objek menggunakan gambar atau video dan men-tracking benda yang bergerak. Pada saat ujian midtest dan exam, Rashad berhasil menyelesaikannya dengan sangat baik. Good Job Rashad!"
        ],
        "character": [
          "Rashad cukup bersemangat di dalam kelas. Ia juga cukup aktif mengajukan pertanyaan saat merasa kebingungan atau menghadapi kesulitan. Selain itu, Ia juga sangat fokus saat mengerjakan latihan coding. Motivasinya untuk mempelajari coding juga masih tinggi. Keep it up Rashad!"
        ]
      },
      "2": {
        "literacy": [],
        "application": [],
        "character": []
      }
    },
    "PYTHON_FOR_DATA_SCIENCE(16)": {
      "1": {
        "literacy": [
          "Reynold demonstrates strong Python knowledge. He transitioned well from JavaScript, understanding syntax and using libraries. He learned fundamental Python programming concepts, including variables, lists, loops, conditionals, functions, and Object-Oriented Programming (OOP).  He got 90 points for the writing test. Good Job Reynold!",
          "Joveano memahami Bahasa pemrograman Python dengan sangat baik. Transisi dari JavaScript ke Python berjalan lancar, Materi dasar Python yang dipelajari mencakup variable, array, looping, conditional statement, function, serta konsep Object-Oriented Programming (OOP). Hasil ujian tertulis mencapai skor 90. Good Job, Jo!",
          "Gabriel telah mempelajari materi dasar Python yang mencakup variable, data structure, dictionary, looping, conditional statement, function, serta konsep Object-Oriented Programming (OOP). Gabriel masih perlu memperdalam pemahaman terhadap konsep-konsep fundamental ini. Dengan review dan latihan yang lebih konsisten, pemahaman Gabriel akan terus meningkat! Tetep semangat Gabriel!",
          "Abed learned Python programming basics including variables, data structures, dictionaries, looping, conditional statements, functions, and Object-Oriented Programming (OOP). His written exam score was 80/100. Well done, Abed! He should continue to review and practice these concepts regularly to build a stronger understanding"
        ],
        "application": [
          "Reynold's coding skills are excellent. He completes all assignments successfully, and his coding and debugging abilities have improved significantly. He applied Python skills to create projects such as Password Maker, Jumbled Word Game, Chat-Bot, and Game War, mastering both basic and advanced programming techniques.",
          "Joveano bisa menyelesaikan semua Latihan coding dengan lancar. Kemampuan coding serta debugging-nya mengalami peningkatan yang signifikan. Beberapa program yang dibuat menggunakan Python seperti Password Maker, Jumbled Word Game, Chat-Bot, dan Game War, membuktikan penguasaan teknik coding dari level basic hingga advanced. Keep it up, Jo!",
          "Gabriel berusaha menyelesaikan latihan coding seperti Password Maker, Jumbled Word Game, Chat-Bot, dan Game War. Dalam prosesnya, Gabriel masih memerlukan bimbingan dari teacher untuk menyelesaikan beberapa bagian. Dengan latihan yang lebih rutin, kemampuan coding Gabriel akan terus berkembang. Keep trying, Gabriel!",
          "Abed worked on coding projects like Password Maker, Jumbled Word Game, Chat-Bot, and Game War. For his coding exam, Abed created a program to check if someone can ride the Roller Coaster. The program worked, but the text output had some formatting problems with missing spaces between words. Abed needs to pay more attention to small details in his code. He should also try to solve problems by himself first using previous lesson materials before asking the teacher"
        ],
        "character": [
          "Reynold is an engaged student who actively participates in class. He asks questions when needed and arrives on time, demonstrating strong commitment. During coding exercises, Reynold maintains focus and dedicates himself to the practice. His enthusiasm for learning Python and AI remains high, indicating a positive attitude towards the subject matter. Keep it up Reynold!",
          "Jojo cukup aktif di dalam kelas. Ia selalu mengajukan pertanyaan jika mengalami kesulitan. Jojo juga selalu focus ketika mengerjakan Latihan coding. Minat belajarnya pada bidang Python dan AI cukup tinggi, memperlihatkan sikap yang positif. Pertahankan semangat belajarnya, Jo!",
          "Gabriel menunjukkan antusiasme dalam belajar Python dan AI. Minat belajarnya terlihat positif. untuk improvement: Gabriel perlu lebih aktif membaca dan mengecek materi sebelum meminta bantuan. Luangkan waktu untuk mencoba menyelesaikan masalah secara mandiri dengan merujuk materi sebelumnya. Pendekatan belajar mandiri ini akan membangun fondasi yang kuat. Terus semangat, Gabriel!",
          "Abed shows good interest in Python and AI. This positive attitude helps his learning. To improve further, Abed should read materials independently and try solving problems on his own before asking questions. This will help him build stronger problem-solving skills. Keep up the good work, Abed!"
        ]
      },
      "2": {
        "literacy": [
          "Richard understands data science fundamentals like sorting algorithms, NumPy, and Pandas when concepts are explained step-by-step. He can follow guided examples well and grasps the basic ideas behind data frames and probability. However, he still needs more practice to fully internalize these concepts for independent use. Keep it up Richard!",
          "JoJo menunjukkan peningkatan signifikan dalam memahami materi lanjutan seperti algoritma sorting & searching, manipulasi data menggunakan NumPy dan Pandas, serta eksplorasi data dan konsep probabilitas. Ia mampu memahami alur analisis data dan logika statistik dengan sangat baik. Nilai akhir 95 mencerminkan pemahaman yang kuat. Good work, Jo!",
          "Jayden menunjukkan kemajuan yang sangat baik dalam menguasai topik lanjutan seperti algoritma pengurutan dan pencarian, pengolahan data dengan NumPy serta Pandas, dan juga pemahaman tentang eksplorasi data serta dasar-dasar probabilitas. Ia berhasil memahami proses analisis data dan logika statistik secara mendalam. Skor akhir 94 menandakan penguasaan materi yang solid. Great job, Jayden!"
        ],
        "application": [
          "Richard can successfully complete coding tasks when given clear instructions and examples to follow. He works well with structured guidance for data analysis projects using Pandas and NumPy. He would benefit from more practice applying these skills independently and developing his own problem-solving strategies rather than relying on external help.",
          "Jojo berhasil menerapkan analisis data, seperti menyaring, mengurutkan, dan membaca pola dari data dengan bantuan library Pythondengan baik. Ia menyelesaikan Latihan dan ujian coding dengan sangat baik. Kemampuan mandirinya makin berkembang, meski tetap perlu latihan untuk eksplorasi tanpa contoh. Keep growing, Jo!",
          "Jayden mampu mengaplikasikan teknik analisis data dengan lancar, termasuk memfilter, mengurutkan, serta mengidentifikasi pola dalam data menggunakan library Python secara efektif. Ia menyelesaikan semua latihan dan ujian coding dengan hasil yang memuaskan. Kemandiriannya terus meningkat, walaupun masih disarankan untuk lebih sering berlatih eksplorasi tanpa mengandalkan contoh langsung. Tetap berkembang ya, Jayden!"
        ],
        "character": [
          "Richard remains curious and willing to learn, but tends to depend on guidance when facing challenges. Building confidence to work through problems independently will help him grow. With more practice and encouragement to think through solutions on his own, he can develop stronger analytical thinking skills.",
          "Richard is a thoughtful student who learns best when he has a clear set of steps to follow. While he can get confused by open-ended challenges, his exam score of 70/100 shows he has grasped much of the core material. To truly build a strong foundation, it will be important for him to trust his own abilities and work through problems from start to finish on his own, even when it's difficult. This will develop his skills as an independent problem-solver.",
          "Jojo tetap aktif, fokus, dan semangat belajar. Ia lebih percaya diri saat menghadapi materi baru dan terbiasa bertanya saat butuh bantuan. Komitmen dan semangat belajarnya sangat baik. Sikapnya konsisten sejak level 1 dan jadi modal kuat untuk terus berkembang. Terus semangat ya, Jo!",
          "Jayden selalu aktif, konsentrasi tinggi, dan memiliki antusiasme belajar yang luar biasa. Ia semakin percaya diri dalam menghadapi materi baru serta sudah terbiasa mengajukan pertanyaan ketika memerlukan klarifikasi. Sikap positif ini konsisten sejak level 1 dan menjadi bekal yang sangat baik untuk selanjutnya. Semangat terus, Jayden!"
        ]
      }
    },
    "PYTHON_FOR_ML(16)": {
      "1": {
        "literacy": [
          "Reynold is learning AI and machine learning step by step. He understands basic ideas about how computers can learn and make decisions. He learned about teaching computers to recognize flowers, understand text, and spot fake news. For his concept exam, he scored 50 out of 100, showing room for growth and improvement. Keep it up Reynold!",
          "Kenny menunjukkan pemahaman sangat baik terhadap materi Machine Learning, mulai dari klasifikasi data, NLP, hingga analisis sentimen. Ia mampu menjelaskan hubungan antara teori dan praktik dengan jelas, serta cepat memahami konsep Python yang digunakan dalam berbagai model AI sederhana. Saat ujian konsep, Kenny mendapatkan nilai 80/100. Keep it up, Ken!",
          "Jayden has completed all eight lessons covering topics such as classification, natural language processing, and fake news detection. He scored 86 out of 100 on the written exam, showing a good understanding of the material. He would benefit from spending more time on how and why different algorithms are chosen, as this will help him work more independently. He is moving in a good direction and asking questions when unsure will continue to support his learning.",
          "Jayden has done a great job learning about AI and machine learning, including how computers classify data and understand human language. He understands the lessons well, scoring 86 out of 100 on his written concept exam. To keep improving, he should continue to practice understanding more difficult coding logic. We are very proud of Jayden's hard work and clear understanding of these new topics!"
        ],
        "application": [
          "Reynold shows determination in his coding work. During his practice exam, he felt confused about some problems but didn't give up. He worked through the challenges and successfully completed all his projects. His persistence and problem-solving attitude helped him finish everything, showing great resilience and commitment to learning.",
          "Kenny menyelesaikan seluruh latihan dan project coding dengan sangat baik. Ia mampu mengimplementasikan logika pemrograman dan algoritma Machine Learning secara mandiri. Ia juga teliti dalam debugging dan memiliki inisiatif tinggi dalam mengembangkan proyeknya lebih lanjut dari instruksi dasar yang diberikan. Good job, Ken!",
          "Jayden successfully finished all coding projects across the eight lessons, meeting the requirements for each task. Developing the habit of writing more organised code and explaining his thinking will be useful as the work becomes more complex. His consistency through the practical sessions is noted and worth building on.",
          "Jayden shows great focus and effort when writing his programs during class. He successfully completed all his practical coding projects, showing that he can apply what he learns to build real working AI models. To grow further, he can practice finding and fixing coding errors on his own before asking for help. Jayden's practical skills are developing nicely, and he should keep up the great effort!"
        ],
        "character": [
          "Reynold participates well in AI lessons. While he sometimes struggles with complex concepts, he asks thoughtful questions when he needs help, showing good learning habits. He stays focused during coding practice and works hard to finish his projects. Reynold's interest in artificial intelligence remains strong despite challenges. Keep pushing forward, Reynold!",
          "Kenny sangat antusias dan aktif selama pembelajaran. Ia selalu hadir tepat waktu, menunjukkan rasa ingin tahu tinggi, serta tidak ragu bertanya ketika menemui kesulitan. Sikapnya yang disiplin, fokus, dan bertanggung jawab dalam menyelesaikan tugas menunjukkan minat belajar yang tinggi. Keep up the great work, Ken!",
          "Jayden participates well in class and shows a cooperative and attentive attitude throughout the course. At times he moves through tasks quickly, and taking a moment to review his work before finishing would help him avoid small errors. He brings a steady and positive presence to the class, which contributes well to the learning environment.",
          "Jayden has very good learning habits and always maintains a positive attitude during our sessions. He listens carefully to instructions, stays focused on his tasks, and participates well in every lesson. To continue his growth, he can try to challenge himself more with advanced questions during class discussions. We love having Jayden in class, and his consistent hard work is highly commendable. Good job, Jayden!"
        ]
      },
      "2": {
        "literacy": [
          "Reynold has a good grasp of the theory but should consistently review the advanced concepts from this level. Because the material is quite complex, frequent repetition will be key to building a more solid foundation. His effort is great, and this practice will help him achieve mastery.",
          "Kenny menunjukkan pemahaman yang sangat baik tentang konsep-konsep ML tingkat lanjut termasuk time series forecasting, neural networks, supervised, unsupervised dan reinforcement learning. Skor ujiannya  90. Penjelasannya tentang cara kerja recommendation systems dan anomaly detection baik dan menunjukkan pemikiran analitis yang kuat. Good Job, Ken!",
          "Richard menunjukkan pemahaman dasar yang cukup baik tentang konsep ML tingkat lanjut seperti time series forecasting, neural networks, supervised, unsupervised dan reinforcement learning. Dia mampu menjelaskan konsep-konsep utama dengan bantuan referensi seperti GeminiAI. Skor ujiannya 70. Keep it up, Richard!",
          "Jojo menunjukkan progres yang sangat stabil. Jika di Level 1 ia menguasai dasar klasifikasi dan NLP, di Level 2 ia meningkatkan skill Machine Learning dengan fokus pada topik lanjutan seperti time series forecasting, sales prediction, neural networks, unsupervised learning, dan recommender systems. Ia mampu menjelaskan alasan di balik pemilihan algoritma tertentu untuk problem yang diberikan. Keep it up, Jo!",
          "Jayden developed practical skills in Machine Learning, focusing on advanced topics such as time series forecasting, sales prediction, neural networks, unsupervised learning, and recommender systems. He has a good grasp of the practical side, but should consistently review the theory behind these advanced concepts. Because the material is quite complex, frequent repetition of the core ideas will help him build a more solid conceptual foundation. His effort is great, and continued practice will help him achieve full mastery."
        ],
        "application": [
          "Reynold excels in all the practice exercises, showing he can apply the concepts well. While he felt a bit uncertain during the exam, this is a natural step in the learning process. Practicing with more diverse case studies will build his confidence and further sharpen his skills. Keep up the great practice!",
          "Kenny menerapkan teknik Machine Learning lanjutan dalam proyek-proyek seperti Population Prediction, Sales Prediction, Customer Segmentation, dan Course Recommendation, dengan fokus pada forecasting, neural networks, dan recommender systems. Kenny berhasil menyelesaikan semua latihan coding dengan sangat baik  dan kode yang ditulisnya juga rapi ",
          "Richard berhasil menyelesaikan semua tugas coding dan mencapai hasil yang fungsional. Dia menunjukkan kemampuan untuk menemukan solusi dan menyelesaikan project dengan baik. Sebagai langkah pengembangan selanjutnya, Richard dapat fokus pada memahami setiap baris kode yang ditulis dengan lebih detail - bertahap dari konsep dasar. Good Job, Richard!",
          "Penerapan kode Jojo semakin rapi dan efisien. Ia menerapkan teknik Machine Learning lanjutan dalam proyek-proyek seperti Population Prediction, Sales Prediction, Customer Segmentation, dan Course Recommendation, dengan fokus pada forecasting, neural networks, dan recommender systems. Kemampuan debugging-nya juga semakin baik. Good job, Jo!",
          "Jayden applied Machine Learning to real projects like Sales Prediction, Customer Segmentation, and Course Recommendation. He's strong in hands-on practice and can build working models well. His theory is still catching up to his practical skills, so trying more varied exercises will help him build even more confidence."
        ],
        "character": [
          "Reynold maintains a wonderfully proactive and enthusiastic attitude. He consistently asks thoughtful questions that show a true desire to learn. His persistence and focus, especially when facing project challenges, are commendable. His passion for AI is a clear driver of his success. Outstanding work!",
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
          "Richard demonstrates a good understanding of fundamental computer vision concepts including OpenCV image manipulation, CNN architectures, transfer learning, and object detection algorithms. He grasped key concepts like MobileNetSSD, Haar Cascades, and tracking techniques effectively. His writing exam score of 100 shows excellent comprehension. Keep up the excellent work, Richard!",
          "Reynold has successfully worked through the first half of the curriculum, showing a clear understanding of how computers process visual data. He completed lessons on OpenCV image manipulation, Tensorflow, and CNN architectures. He also grasped the differences between Object Detection (using MobileNetSSD) and Object Tracking (using Euclidean Distance). His writing exam score of 80/100 confirms he has a good handle on these technical theories",
          "Reynold understands how computers process data through OpenCV, Tensorflow, and CNN. He successfully learned the difference between Object Detection and Tracking using the Euclidean Distance Tracker. His 80/100 on the writing exam shows he knows the theory well. Good job grasping these complex topics!",
          "Jojo understands how computers process and recognize visual data through OpenCV, TensorFlow, and CNN. He successfully learned how to classify images, detect faces, and distinguish between Object Detection and Object Tracking using the Euclidean Distance Tracker. His 90/100 on the theory exam shows a strong grasp of these complex topics. To keep growing, Jojo can explore how these concepts are used in real-world applications. Well done, Jojo!"
        ],
        "application": [
          "Richard successfully completed all coding assignments and achieved functional results across all projects. He completed his coding exam with no bugs, demonstrating excellent attention to detail and strong debugging skills. As a next step, Richard can focus on understanding each line of code in greater detail, building from basic concepts gradually. Great job, Richard!",
          "Reynold has been diligent in completing his practical work, including projects on Horse and Human Classification and Face Detection. He successfully finished his middle exam, demonstrating that he can apply these tools to build working programs. To continue improving, he should focus on the specific logic within his scripts to ensure he understands exactly how each line of code contributes to the final result",
          "Reynold finished all projects, including Face Detection and Image Classification. He completed his middle exam smoothly, showing he can build working programs. He should now focus on the \"why\" behind each line of code to deepen his skills. Keep up the great work on your projects!",
          "Jojo completed all his coding exercises and projects, including Horse and Human Classification, Face Detection, and MobileNetSSD Object Detection. He finished his coding project exam successfully, showing he can build working programs on his own. Going forward, Jojo can challenge himself by exploring the \"why\" behind each line of code to deepen his understanding even further. Keep up the great work!"
        ],
        "character": [
          "Richard shows commitment to attending classes and completing assignments. While he can be easily distracted and sometimes opens unrelated websites, there's notable improvement in his responsiveness. When reminded to close distractions and focus on the lesson, he now listens and redirects his attention, which is progress from before. Continuing to build self-discipline will help Richard further.",
          "Reynold is consistent about attending class and finishing his modules. However, he is often tempted to play games or browse other sites during the lesson. While he is respectful and gets back to work when asked, he needs to work on staying focused on the material independently. Developing better self-discipline during class time will help him get the most out of the upcoming advanced lessons",
          "Reynold is consistent about attending class and finishing his modules, but he is often distracted by games during class. While he listens when reminded to focus, he needs to practice staying on task independently. Improving his self-discipline will help him learn even more. Keep working on your focus, Reynold!",
          "Jojo is a focused and hardworking student who consistently stays on task and puts in genuine effort every session. He approaches challenging material with patience and sees tasks through to completion. To continue developing, it would be great to see Jojo ask more questions and share his thinking in class—his curiosity will take him far. His dedication throughout Level 1 has been great to see!"
        ]
      },
      "2": {
        "literacy": [
          "Jojo mempelajari konsep AI Computer Vision tingkat lanjut, seperti Automatic Number Plate Recognition (ANPR), Optical Character Recognition (OCR), Hand Landmarks Detection, Face Mesh, serta deteksi area wajah, mata, dan mulut menggunakan MediaPipe. Jojo menunjukkan pemahaman yang sangat baik terhadap cara AI mengenali objek, teks, dan bagian tubuh melalui gambar atau video. Untuk terus meningkatkan kemampuannya, Jojo dapat lebih mendalami bagaimana setiap model AI bekerja dan memahami alasan pemilihan metode yang digunakan pada setiap studi kasus. Secara keseluruhan, Jojo telah menunjukkan perkembangan yang sangat baik pada level ini. Good job, Jojo!"
        ],
        "application": [
          "Jojo berhasil mengembangkan berbagai aplikasi yang memanfaatkan teknik computer vision dan machine learning, seperti OCR License Plate Number menggunakan EasyOCR, OCR Handwriting Recognition, Virtual Painter, Face Filter (Pig Nose), dan Face Filter (Dragon). Melalui proyek-proyek tersebut, Jojo mampu menerapkan konsep yang telah dipelajari ke dalam aplikasi yang dapat berjalan dengan baik.\r\n\r\nKe depannya, Jojo dapat mencoba mengeksplorasi lebih banyak variasi pada setiap proyek, misalnya dengan memodifikasi fitur atau menambahkan fungsi baru. Hal ini akan membantu memperluas pemahamannya dalam mengembangkan aplikasi berbasis AI.\r\n\r\nSecara keseluruhan, Jojo menunjukkan kemampuan yang baik dalam menerapkan konsep AI Computer Vision ke dalam berbagai proyek. Keep it up, Jojo!",
          "Jojo berhasil mengembangkan berbagai aplikasi yang memanfaatkan teknik computer vision dan machine learning, seperti OCR License Plate Number menggunakan EasyOCR, OCR Handwriting Recognition, Virtual Painter, Face Filter (Pig Nose), dan Face Filter (Dragon). Agar pemahamannya semakin berkembang, Jojo dapat mencoba memodifikasi fitur atau menambahkan fungsi baru pada setiap proyek. Secara keseluruhan, Jojo menunjukkan kemampuan yang baik dalam menerapkan konsep AI Computer Vision ke dalam berbagai proyek. Keep it up, Jojo!"
        ],
        "character": [
          "Jojo menunjukkan konsistensi yang baik selama mengikuti kelas dan mengerjakan setiap latihan yang diberikan. Ia mampu mengikuti materi dengan baik dan menyelesaikan tugas sesuai arahan. Ke depannya, Jojo dapat mulai mencoba challenge yang lebih menantang untuk semakin mengembangkan kemampuan coding dan problem solving yang dimilikinya. Keep it up, Jojo!",
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
          "El show good understanding of intermediate Python concepts in practice. He has learned OOP fundamentals, Python modules introduction, and TKinter GUI development. Key topics covered include OOP principles, module basics, TKinter components, message/input boxes, labels, buttons, canvas coordinates, and event handling concepts. While his theoretical exam needs improvement, his practical application shows strong conceptual grasp. Keep it up, El!",
          "Araya mempelajari topik-topik Python tingkat menengah di Level 2, mulai dari Object Oriented Programming (OOP), penggunaan modul Python, hingga membuat tampilan aplikasi desktop menggunakan TKinter—termasuk tombol, label, kotak input, canvas, dan interaksi mouse. Nilai ujian teorinya 70 dari 100, yang menunjukkan pemahamannya masih bisa terus diasah. Ke depannya, Araya bisa lebih sering mengulang konsep-konsep yang dipelajari agar semakin kuat pemahamannya. Tetap semangat, Araya!",
          "Araya menunjukkan pemahaman yang baik terhadap konsep Python tingkat menengah, khususnya pada materi Dasar-Dasar OOP, pengenalan Python Modules, dan pengembangan GUI menggunakan TKinter. Meskipun hasil ujian tertulisnya (70/100) masih perlu ditingkatkan, Araya secara praktik mampu memahami prinsip OOP, koordinat Canvas, hingga event handling dengan sangat baik."
        ],
        "application": [
          "El applies learned concepts with good consistency. The programming exercises were completed successfully, showing steady progress in GUI development. Challenge projects were approached with determination. He also successfully finished the exam. Next focus is on improving code understanding for the next level. You're on track, El!",
          "Araya berhasil menyelesaikan semua latihan dan challenge dengan cukup baik. Pada ujian coding project, ia berhasil menyelesaikan proyeknya meski masih perlu beberapa kali bertanya—yang merupakan hal yang wajar dan menunjukkan ia mau berusaha sampai selesai. Ke depannya, Araya bisa berlatih mengerjakan proyek secara lebih mandiri agar semakin percaya diri. Good job, Araya!",
          "Araya mampu menerapkan konsep yang dipelajari ke dalam latihan dan proyek GUI dengan konsisten. Proyek challenge dan ujian coding diselesaikan dengan cukup baik, meskipun sesekali masih membutuhkan arahan atau bertanya untuk memastikan logikanya tepat. Fokus selanjutnya adalah memperkuat pemahaman struktur kode agar lebih mandiri di level berikutnya"
        ],
        "character": [
          "El is very active in class. He asks relevant questions about material when needed, showing interest in learning new programming concepts. El usually stays focused during lessons, though occasionally needs gentle reminders when topics become challenging, when he gets overly energetic, or on days when he's feeling tired. Keep it up, El!",
          "Araya sangat aktif di dalam kelas dan selalu menunjukkan antusiasme yang tinggi dalam mempelajari konsep pemrograman baru. Ia tidak ragu untuk mengajukan pertanyaan yang relevan. Araya umumnya mampu menjaga fokus, meskipun terkadang membutuhkan pengingat dari pengajar saat ia merasa terlalu bersemangat atau ketika materi mulai menjadi lebih menantang."
        ]
      }
    }
  }
};
