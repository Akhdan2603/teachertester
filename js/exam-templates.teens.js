// ============================================================
// EXAM_TEMPLATES slice — criteria: Teens
// ============================================================
// Bagian dari performance split (audit QA/QC BUG-1, lihat CHANGELOG.md):
// exam-templates-data.js dulunya 1 file monolitik (132KB) berisi
// EXAM_TEMPLATES untuk SEMUA criteria, selalu dimuat penuh di <head>
// walau guru cuma pakai 1 criteria per sesi kerja. File ini HANYA
// berisi exam template untuk criteria 'Teens', dan dimuat secara
// DINAMIS oleh js/lazy-loader.js begitu guru pertama kali memilih
// criteria 'Teens' di dropdown (Auto tab atau Exam tab) — bukan
// dimuat di <head> sejak awal.
//
// Di-generate otomatis oleh scripts/compile-exam-templates.js dari
// excel/Salinan dari TEENS report templates.xlsx. JANGAN edit manual — akan tertimpa saat
// compile berikutnya. Lihat PANDUAN.md bagian "Update Teks Exam
// Template" untuk SOP update.
//
// JANGAN declare ulang 'const EXAM_TEMPLATES' di sini — js/exam-templates-data.js
// (file inti, selalu dimuat) sudah mendeklarasikannya sebagai objek
// kosong '{}'. File ini cuma menambahkan property lewat Object.assign,
// supaya js/exam.js yang mengakses EXAM_TEMPLATES sebagai variabel
// global tetap bekerja tanpa perlu diubah sama sekali.
//
// Struktur: EXAM_TEMPLATES.Teens[courseTab][blockNumber][category] = string[]
// (array varian teks MENTAH — placeholder [NAMA_STUDENT] dan
// [opsi_A/opsi_B/opsi_C] belum diisi; itu dikerjakan runtime oleh
// fillExamTemplateText_() di js/exam.js).
// ============================================================

Object.assign(EXAM_TEMPLATES, {
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
});
