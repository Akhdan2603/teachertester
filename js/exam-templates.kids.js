// ============================================================
// EXAM_TEMPLATES slice — criteria: Kids
// ============================================================
// Bagian dari performance split (audit QA/QC BUG-1, lihat CHANGELOG.md):
// exam-templates-data.js dulunya 1 file monolitik (132KB) berisi
// EXAM_TEMPLATES untuk SEMUA criteria, selalu dimuat penuh di <head>
// walau guru cuma pakai 1 criteria per sesi kerja. File ini HANYA
// berisi exam template untuk criteria 'Kids', dan dimuat secara
// DINAMIS oleh js/lazy-loader.js begitu guru pertama kali memilih
// criteria 'Kids' di dropdown (Auto tab atau Exam tab) — bukan
// dimuat di <head> sejak awal.
//
// Di-generate otomatis oleh scripts/compile-exam-templates.js dari
// excel/KIDS report templates.xlsx. JANGAN edit manual — akan tertimpa saat
// compile berikutnya. Lihat PANDUAN.md bagian "Update Teks Exam
// Template" untuk SOP update.
//
// JANGAN declare ulang 'const EXAM_TEMPLATES' di sini — js/exam-templates-data.js
// (file inti, selalu dimuat) sudah mendeklarasikannya sebagai objek
// kosong '{}'. File ini cuma menambahkan property lewat Object.assign,
// supaya js/exam.js yang mengakses EXAM_TEMPLATES sebagai variabel
// global tetap bekerja tanpa perlu diubah sama sekali.
//
// Struktur: EXAM_TEMPLATES.Kids[courseTab][blockNumber][category] = string[]
// (array varian teks MENTAH — placeholder [NAMA_STUDENT] dan
// [opsi_A/opsi_B/opsi_C] belum diisi; itu dikerjakan runtime oleh
// fillExamTemplateText_() di js/exam.js).
// ============================================================

Object.assign(EXAM_TEMPLATES, {
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
  }
});
