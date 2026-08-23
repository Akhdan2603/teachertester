// ============================================================
// COURSE_DATA slice — criteria: Kids
// ============================================================
// Bagian dari performance split (rencana-10-10-non-security.md bagian 5.1):
// data.js dulunya 1 file monolitik (108K) berisi COURSE_DATA untuk SEMUA
// criteria, selalu dimuat penuh di <head> walau guru cuma pakai 1 criteria
// per sesi kerja. File ini HANYA berisi lesson data untuk course-course di
// bawah criteria 'Kids', dan dimuat secara DINAMIS oleh
// js/lazy-loader.js begitu guru pertama kali memilih criteria 'Kids'
// di dropdown (Auto tab atau Exam tab) — bukan dimuat di <head> sejak awal.
//
// JANGAN declare ulang 'const COURSE_DATA' di sini — js/data.js (file inti,
// selalu dimuat) sudah mendeklarasikannya sebagai objek kosong '{}'. File
// ini cuma menambahkan property ke objek yang sudah ada lewat Object.assign,
// supaya semua kode lain (auto-tab.js, exam.js) yang mengakses COURSE_DATA
// sebagai variabel global tetap bekerja tanpa perlu diubah sama sekali.
// ============================================================

Object.assign(COURSE_DATA, {
  "Coding Explorer": [
    {
      "num": 1,
      "title": "Lesson 1 - Coding Language and Algorithm",
      "objectives": [
        "Mengenal Coding sebagai Bahasa Komputer",
        "Menyusun Coding sesuai Algoritma yang Benar"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Screen Time in Event and Loop",
      "objectives": [
        "Memahami pengaruh Screen Time dan Gadget Addiction",
        "Menggunakan Event dan Loop dalam Coding"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Making Friends in Scratch",
      "objectives": [
        "Mencegah dan mengatasi Cyber Bullying",
        "Menggunakan Scratch untuk membuat game sederhana"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Gadget Protection in Various Condition",
      "objectives": [
        "Mengetahui cara Penggunaan dan Perawatan Gadget dengan benar",
        "Mengenal konsep Conditional dan penerapannya dalam Coding"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Digital Footprints in Virtual World",
      "objectives": [
        "Mengenal Virtual Reality"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Message in The Sky",
      "objectives": [
        "Mengetahui apa itu Mindfull Message",
        "Mengenal dan mengendalikan Drone secara virtual"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Gliding Bug",
      "objectives": [
        "Memahami arti Bug pada program",
        "Mengenal Glide pada Scratch dan penerapan pada game"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Overview and Exam 1",
      "objectives": [
        "Overview Meeting 1-7",
        "Exam Level Xplorer 1"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Never Give Up in Conditional Loop",
      "objectives": [
        "Pentingnya Tetap Berusaha dan Pantang Menyerah",
        "Mengenal Conditional Loop dalam Coding",
        "Micro:bit Truth or Dare Game"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Spamming Forever",
      "objectives": [
        "Mengenal Spam dan Cara Menghindarinya",
        "Algoritma dalam Memecahkan Masalah",
        "Menggunakan Kode Forever dalam Coding"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Computer Virus and Undersea AR",
      "objectives": [
        "Mengenal virus komputer dan cara mengatasinya",
        "Membuat aquarium dengan AR Cube"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Flying in Scratch",
      "objectives": [
        "Membuat Flying game dalam Scratch"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Variable in Technology Development",
      "objectives": [
        "Perkembangan teknologi dalam kehidupan manusia",
        "Mengenal Variable dalam Coding"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Function in VR",
      "objectives": [
        "Menggunakan Function dalam VR"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - AI in Python",
      "objectives": [
        "Mengenal Artificial Intelligence",
        "Mengenal Text Coding dan Bahasa Pemrograman Python"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Overview and Exam 2",
      "objectives": [
        "Overview Meeting 1-7",
        "Exam Level Xplorer 2"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Media Balance for Broadcasting a Clone",
      "objectives": [
        "Mengenal media balance",
        "Membuat game dengan konsep broadcast dan clone"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - List of IoT",
      "objectives": [
        "Internet of Things untuk membantu kehidupan",
        "Mengenal List dalam Coding"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Soccer Game",
      "objectives": [
        "Menggunakan Scratch untuk membuat Soccer Game"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Additive Design In The World",
      "objectives": [
        "Mengenal konsep Additive design",
        "Membuat game Create Own World - Part 1"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Game Creation - Part 1",
      "objectives": [
        "Membuat Game Sendiri",
        "Menentukan Ide dan Mengumpulkan Aset Game"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Game Creation - Part 2",
      "objectives": [
        "Membuat Game Sendiri",
        "Menyusun Game Layout, Coding Start Layout, dan Coding Main Game"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Game Creation - Part 3",
      "objectives": [
        "Membuat Game Sendiri",
        "Menambahkan life, score, next level, dan game over pada game"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Game Creation - Part 4",
      "objectives": [
        "Membuat Game Sendiri",
        "Presentasi Game, Feedback, Debugging dan Share Game"
      ]
    },
    {
      "num": 25,
      "title": "Lesson 25 - Intro to Mobile Apps and APP Inventor",
      "objectives": [
        "Pengenalan tentang Mobile Apps",
        "Pengenalan tentang MIT App Inventor"
      ]
    },
    {
      "num": 26,
      "title": "Lesson 26 - For Loop in Time",
      "objectives": [
        "Membuat Clicker App",
        "Membuat Timer App"
      ]
    },
    {
      "num": 27,
      "title": "Lesson 27 - Translator and Spinner in Dictionary Apps",
      "objectives": [
        "Pengenalan Tentang Translator APP",
        "Menggunakan Spinner dan Speech Recognizer dalam Translator App"
      ]
    },
    {
      "num": 28,
      "title": "Lesson 28 - Calculator for Distance Apps",
      "objectives": [
        "Membuat aplikasi kalkulator",
        "Membuat My Walk App dengan pedometer"
      ]
    },
    {
      "num": 29,
      "title": "Lesson 29 - Drawing for game",
      "objectives": [
        "Membuat aplikasi menggambar",
        "Membuat game Tic tac Toe"
      ]
    },
    {
      "num": 30,
      "title": "Lesson 30 - App exploration and assets preparation",
      "objectives": [
        "Explorasi ide aplikasi buatanmu",
        "Menyiapkan assets"
      ]
    },
    {
      "num": 31,
      "title": "Lesson 31 - Layouting and Coding",
      "objectives": [
        "Membuat app sesuai dengan tema yang dipilih"
      ]
    },
    {
      "num": 32,
      "title": "Lesson 32 - Launching and Presentation",
      "objectives": [
        "Launching dan presentasi  App buatan sendiri"
      ]
    }
  ],
  "Tech Explorer": [
    {
      "num": 1,
      "title": "Lesson 1 - Introduction to Coding and Algorithms",
      "objectives": [
        "Memahami Kecanduan Game Loop",
        "Memahami Coding sebagai Bahasa Komputer",
        "Menyusun Kode dengan Algoritma yang Tepat"
      ],
      "objectives_en": [
        "Understanding Game Loop Addiction",
        "Understanding Coding as a Computer Language",
        "Arrange Coding According to the Correct Algorithm"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Introduction to the Cue/Dash Robot",
      "objectives": [
        "Memahami Konsep Probabilitas (RNG) dalam Permainan",
        "Memahami Konsep Event sebagai Pemicu dalam Coding",
        "Membuat Blok Code Berdasarkan Event dan Tindakan"
      ],
      "objectives_en": [
        "Understanding the Concept of Probability (RNG) in Games",
        "Understanding the Concept of Events as Triggers in Coding",
        "Building Code Blocks Based on Events and Actions"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Introducing Virtual Reality",
      "objectives": [
        "Memahami Strategi Top Up Game yang Tepat",
        "Memahami Virtual Reality"
      ],
      "objectives_en": [
        "Understanding the Right Game Top Up Strategies",
        "Understanding Virtual Reality"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Introduction to the World of Augmented Reality",
      "objectives": [
        "Memahami konsep scrolling tanpa batas dan cara mengatasinya",
        "Mampu mendesain bagian Merge Cube dalam AR",
        "Mampu membuat kuis untuk objek di DelightEx edu",
        "Mampu mengunggah video dan menampilkannya di Merge Cube"
      ],
      "objectives_en": [
        "Understanding the concept of infinite scrolling and how to address it",
        "Capable of designing the Merge Cube section of AR",
        "Capable of coding quizzes for objects in DelightEx edu",
        "Capable of uploading videos and displaying them in Merge Cube"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - What is Loop?",
      "objectives": [
        " Memahami Bahaya Buble Information",
        "Mempelajari Konsep Loop dalam Osmo Coding"
      ],
      "objectives_en": [
        "Understanding the Dangers of Buble Information",
        "Learning the Concept of Loops in Osmo Coding"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Explore Design VR Lebih Advance",
      "objectives": [
        "Mencegah FOMO Selama Event Game Online",
        "Membuat Proyek VR yang Lebih Canggih"
      ],
      "objectives_en": [
        "Preventing FOMO During Online Gaming Events",
        "Creating More Advanced VR Projects"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Explore Design AR Lebih Advance",
      "objectives": [
        "Mampu memahami konsep login harian dalam permainan video serta cara menghindari kecanduan permainan video",
        "Memahami konsep desain rumah sederhana",
        "Memahami Konsep Warna dalam Desain 3D",
        "Menambahkan animasi dan teks ke Delightex Edu"
      ],
      "objectives_en": [
        "Be able to understand the concept of daily logins in video games and how to avoid video game addiction",
        "Understanding the concept of simple home design",
        "Understanding Color Concepts in 3D Design",
        "Adding animations and text to Delightex Edu"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Exam",
      "objectives": [
        "Overview Meeting 1-7",
        "Exam Level Xplorer 1"
      ],
      "objectives_en": [
        "Overview Meeting 1-7",
        "Exam Level Xplorer 1"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Learning Online Safety Using Scratch",
      "objectives": [
        "Mengidentifikasi Bahaya \"Stranger Danger\" di Dunia Maya",
        "Mengoperasikan Antarmuka Dasar Scratch",
        "Mengimplementasikan Kode Event dan Loop pada Animasi"
      ],
      "objectives_en": [
        "Identifying the “Stranger Danger” Threat in the Digital World",
        "Using the Basic Scratch Interface",
        "Implementing Event Handlers and Loops in Animations"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Motion in Scratch",
      "objectives": [
        "Memahami Definisi dari Block Coding Motion pada Scratch",
        "Mengidentifikasi Block Coding Motion yang Tersedia di Scratch",
        "Mengidentifikasi Kapan Harus Menggunakan Block Coding Motion pada Scratch",
        "Membuat Project pada Scratch Menggunakan Block Coding Motion"
      ],
      "objectives_en": [
        "Understanding the Definition of Motion Block Coding in Scratch",
        "Identifying the Motion Blocks Available in Scratch",
        "Identifying When to Use Motion Block Coding in Scratch",
        "Creating a Project in Scratch Using Motion Blocks"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Understanding AI Using Looks Coding",
      "objectives": [
        "Mengenal Block Coding yang Ada pada Tab Looks pada Scratch",
        "Mengidentifikasi Kegunaan Setiap Block Coding pada Tab Looks",
        "Mengidentifikasi Kondisi Kapan Block Coding pada Tab Looks Digunakan",
        "Menerapkan Block Coding pada Tab Looks dalam Contoh Proyek Sederhana"
      ],
      "objectives_en": [
        "Getting to Know Block Coding in the “Looks” Tab in Scratch",
        "Identifying the Purpose of Each Block of Code in the “Looks” Tab",
        "Identifying When to Use Block Coding in the “Looks” Tab",
        "Implementing Block Coding in the “Looks” Tab in a Simple Project"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Sounds in Scratch",
      "objectives": [
        "Memahami Apa Definisi Dari Block Coding Sound pada Scratch",
        "Dapat Mengidentifikasi Block Coding Sound yang Tersedia di Scratch",
        "Dapat Mengidentifikasi Kapan Harus Menggunakan Block Coding Sound pada Scratch",
        "Mampu Membuat Project pada Scratch Menggunakan Block Coding Motion",
        "Mampu Melakukan Editing Sound pada Scratch"
      ],
      "objectives_en": [
        "Understanding the Definition of Block Coding Sounds in Scratch",
        "Be Able to Identify the Sound Blocks Available in Scratch",
        "Be able to identify when to use sound blocks in Scratch",
        "Be able to create a project in Scratch using block coding motion",
        "Be Able to Edit Sound in Scratch"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Events in Scratch",
      "objectives": [
        "Menganalisis Keamanan Digital Melalui QR Code",
        "Memahami Struktur Blok Event pada Scratch",
        "Menguasai Logika Komunikasi Antar-Karakter (Broadcast)"
      ],
      "objectives_en": [
        "Analyzing Digital Security Through QR Codes",
        "Understanding Event Block Structures in Scratch",
        "Mastering the Logic of Inter-Character Communication (Broadcast)"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Control in Scratch",
      "objectives": [
        "Memahami Manfaat dan Keamanan Cloud Storage",
        "Menguasai Logika Perulangan (Looping Control)",
        "Menerapkan Percabangan Kondisional (Conditional Logic)"
      ],
      "objectives_en": [
        "Understanding the Benefits and Security of Cloud Storage",
        "Mastering Loop Control",
        "Implementing Conditional Logic"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Sensing in Scratch",
      "objectives": [
        "Memahami Konsep dari Search Engine",
        "Memahami Apa Definisi Dari Block Coding Sensing pada Scratch",
        "Dapat Mengidentifikasi Block Coding Sensing yang Tersedia di Scratch",
        "Dapat Mengidentifikasi Kapan Harus Menggunakan Block Coding Sensing pada Scratch",
        "Mampu Membuat Project pada Scratch Menggunakan Block Coding Sensing"
      ],
      "objectives_en": [
        "Understanding the Concept of Search Engines",
        "Understanding the Definition of Block Coding and Sensing in Scratch",
        "Be Able to Identify the Sensing Blocks Available in Scratch",
        "Be Able to Identify When to Use Block Coding and Sensing in Scratch",
        "Be Able to Create Projects in Scratch Using Block Coding and Sensors"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Exam 2",
      "objectives": [
        "Memahami Manfaat dan Keamanan Cloud Storage",
        "Overview Meeting 9-15",
        "Written Exam",
        "Coding Exam"
      ],
      "objectives_en": [
        "Understanding the Benefits and Security of Cloud Storage",
        "Overview Meeting 9-15",
        "Written Exam",
        "Coding Exam"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Operator in Scratch",
      "objectives": [
        "Mampu Membuat Password yang Kuat",
        "Memahami Apa Definisi dari Block Coding Operator pada Scratch",
        "Dapat Mengidentifikasi Block Coding Operator yang Tersedia di Scratch",
        "Dapat Mengidentifikasi Kapan Harus Menggunakan Block Coding Operator pada Scratch",
        "Mampu Membuat Project pada Scratch Menggunakan Block Coding Operator"
      ],
      "objectives_en": [
        "Ability to Create Strong Passwords",
        "Understanding the Definition of the Block Coding Operator in Scratch",
        "Be able to identify the block coding operators available in Scratch",
        "Be able to identify when to use block coding operators in Scratch",
        "Be able to create projects in Scratch using block coding"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Variable in Scratch",
      "objectives": [
        "Memahami Konsep Deepfake",
        "Memahami Apa Definisi dari Block Coding Variable pada Scratch",
        "Dapat Mengidentifikasi Block Coding Variable yang Tersedia di Scratch",
        "Dapat Mengidentifikasi Kapan Harus Menggunakan Block Coding Variable pada Scratch",
        "Mampu Membuat Project pada Scratch Menggunakan Block Coding Variable",
        "Pengenalan Variable dan List"
      ],
      "objectives_en": [
        "Understanding the Concept of Deepfakes",
        "Understanding the Definition of Block Coding Variables in Scratch",
        "Be Able to Identify the Block Coding Variables Available in Scratch",
        "Be Able to Identify When to Use Variable Blocks in Scratch",
        "Be Able to Create Projects in Scratch Using Block Coding and Variables",
        "Introduction to Variables and Lists"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - My Blocks in Scratch",
      "objectives": [
        "Memahami Konsep Otomasi dalam Kehidupan Sehari-hari",
        "Mengenal Konsep Function dalam Coding",
        "Mengenal Block Coding My Blocks Pada Scratch"
      ],
      "objectives_en": [
        "Understanding the Concept of Automation in Everyday Life",
        "Understanding the Concept of Functions in Coding",
        "Getting to Know Block Coding with My Blocks in Scratch"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - AI Edu Delightex",
      "objectives": [
        "Memahami Dasar Teknologi Generative AI",
        "Menguasai Teknik Prompting yang Efektif",
        "Menerapkan Etika dan Kejujuran dalam Karya AI",
        "Mengintegrasikan AI Buddy ke dalam Lingkungan VR Edu Delightex"
      ],
      "objectives_en": [
        "Understanding the Basics of Generative AI Technology",
        "Mastering Effective Prompting Techniques",
        "Applying Ethics and Integrity in AI Work",
        "Integrating AI Buddy into the Delightex Educational VR Environment"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Collecting Game Assets with AI Tools",
      "objectives": [
        "Memahami Apa Fungsi Slide Presentasi",
        "Memahami Cara Mendapatkan Ide Project Game",
        "Mengumpulkan Asset Project Game Baik dari Internet Maupun AI"
      ],
      "objectives_en": [
        "Understanding the Purpose of Presentation Slides",
        "Understanding How to Come Up with Game Project Ideas",
        "Collecting Game Project Assets from Both the Internet and AI"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - AI Voice Maker",
      "objectives": [
        "Memahami Teknologi di Balik AI Voice",
        "Mengintegrasikan Aset Audio ke dalam Desain Proyek Digital",
        "Melanjutkan Proses Desain dari Asset Game yang Telah Dikumpulkan"
      ],
      "objectives_en": [
        "Understanding the Technology Behind AI Voice",
        "Integrating Audio Assets into Digital Project Design",
        "Continuing the Design Process with Collected Game Assets"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - AI Ethics",
      "objectives": [
        "Menanggapi Konsep Kepemilikian pada Seni AI",
        "Menyelesaikan Tahap Coding pada Project Final ",
        "Mengerti Apa Saja yang Harus Dilakukan Saat Coding Project Final"
      ],
      "objectives_en": [
        "Addressing the Concept of Ownership in AI Art",
        "Completing the Coding Phase of the Final Project",
        "Understanding What Needs to Be Done When Coding the Final Project"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Presenting Digital Projects",
      "objectives": [
        "Memahami Poin Penting Apa Saja yang Ada pada Presentasi",
        "Mengerjakan Written Exam dengan Seksama ",
        "Mempresentasikan Project dengan Baik"
      ],
      "objectives_en": [
        "Understanding the Key Points in a Presentation",
        "Taking the Written Exam Carefully ",
        "Presenting a Project Effectively"
      ]
    }
  ],
  "Game Developer": [
    {
      "num": 1,
      "title": "Lesson 1 - Pengenalan Construct dan Jumping Platform",
      "objectives": [
        "Mengenal website Construct 3",
        "Menggunakan behavior untuk menggerakkan sprite"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Navigate Through the Map",
      "objectives": [
        "Menyusun Maze",
        "Menggunakan Event Sheet"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Animate Inside Layout",
      "objectives": [
        "Mengenal Animation Frame",
        "Menggunakan behavior 8 Direction dan Bound to Layout"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Enemy, Score, and Next Level",
      "objectives": [
        "Menambahkan enemy dan score",
        "Membuat next level pada game"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Aim and Shoot",
      "objectives": [
        "Mengarahkan sprite mengikuti mouse pointer",
        "Mempelajari behaviour physics"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Particles and Next Stage",
      "objectives": [
        "Menambahkan Particles Effect",
        "Menambahkan Level 2 pada game"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Overview and Exam",
      "objectives": [
        "Overview Meeting 1-6",
        "Exam Game Dev 1"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Exam",
      "objectives": [
        "Exam Game Dev 1"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Bouncing Ball and Floating Block",
      "objectives": [
        "Menggerakkan paddle dan memantulkan bola",
        "Menyusun blocks & menambahkan instance variable"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Life and Next Level",
      "objectives": [
        "Menambahkan Variable dan Respawn Ball",
        "Menambahkan level pada game"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Layout and Button",
      "objectives": [
        "Menambahkan Start, Win, dan Game Over Layout",
        "Menambahkan Start and Replay Button"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Select Player and Shoot Random Meteor",
      "objectives": [
        "Membuat srolling background dan menggerakkan player",
        "Memilih player yang akan dimainkan dan rancom costume obstacles"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Life, Score, and Family Feature",
      "objectives": [
        "Menggunakan Sprite font untuk Score dan Life",
        "Menggunakan Family Features pada Construct"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Instance Variable and Game Over",
      "objectives": [
        "Menambahkan enemy dengan instance variable",
        "Menambahkan efek Stardust dengan Particles"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Overview and Exam",
      "objectives": [
        "Overview Meeting 1-6"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Exam",
      "objectives": [
        "Exam Game Dev 2"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Tilemap and Touch",
      "objectives": [
        "Membuat desain layout dengan Tilemap",
        "Menggerakkan player pada game platformer"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Obstacles and Items",
      "objectives": [
        "Menambahkan obstacles dan enemy pada Game",
        "Menambahkan item pada Game"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Shoot To The Next Level",
      "objectives": [
        "Menambahkan Next Level",
        "Membuat Item Menempel Pada Player"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - AI Enemy and Upload",
      "objectives": [
        "Menambahkan AI Enemy",
        "Mengupload Game ke Website"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Game Creation -Part 1",
      "objectives": [
        "Explorasi ide game",
        "Mengumpulkan asset"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Game Creation -Part 2",
      "objectives": [
        "Menyusun Layout"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Game Creation -Part 3",
      "objectives": [
        "Finishing and Debugging",
        "Prepare Launch"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Game Creation -Part 4",
      "objectives": [
        "Launch Game",
        "Presentation"
      ]
    }
  ],
  "Code and Design with Roblox": [
    {
      "num": 1,
      "title": "Lesson 1 - Getting To Know Computer & Roblox",
      "objectives": [
        "Memahami perangkat yang digunakan untuk komputer",
        "Pengenalan tentang roblox",
        "Literasi game",
        "Mempersiapkan roblox studio"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Creating Your First Model",
      "objectives": [
        "Memahami menu dan shortcut di roblox studio",
        "Pengenalan tentang modeling",
        "Membuat sebuah model rumah"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Imitate Google Images into 3D Models",
      "objectives": [
        "Memahami tools modelling",
        "Membuat sebuah model menggunakan referensi google image",
        "Memahami tentang anchor",
        "Memahami save to roblox dan collaborate"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Using Toolbox & Effects",
      "objectives": [
        "Memahami konsep parent & children",
        "Memahami kegunaan toolbox",
        "Membuat sebuah efek",
        "Menyelesaikan project rumah"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Introduction to Terrain",
      "objectives": [
        "Merancang latar belakang map",
        "Memahami tool terrain editor",
        "Membuat project baru"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - More Tools in Editor",
      "objectives": [
        "Memahami smooth dan flatten",
        "Menggunakan plugin brush tool"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Publish to Roblox",
      "objectives": [
        "Memahami copyright",
        "Memahami cara Publish project"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Exam",
      "objectives": [
        "Review",
        "Exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Advanced Terrain Editor Tools",
      "objectives": [
        "Memahami rings of responsibility",
        "Memahami generate tool di terrain editor",
        "Membuat game underwater"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Solid Modeling",
      "objectives": [
        "Memahami tool solid modeling",
        "Membuat rumah underwater",
        "Memahami gravitasi di roblox"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Script on Object",
      "objectives": [
        "Memahami tentang screen time",
        "Memahami tentang scripting",
        "Memahami properties",
        "Membuat script untuk part"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Adding Text & Sound",
      "objectives": [
        "Menambahkan papan yang berisi tulisan",
        "Menambahkan suara",
        "Mengubah atmosphere"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Variable in Coding",
      "objectives": [
        "Memahami cyber bullying",
        "Memahami konsep variable dan jenisnya",
        "Memahami konsep Instance.new()",
        "Memahami kode wait()"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - While Loop",
      "objectives": [
        "Memahami konsep loop dan while loop",
        "Menggunakan while loop",
        "Menambahkan script untuk menggerakan object"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Animation in Roblox",
      "objectives": [
        "Mengenal animasi",
        "Memahami tools untuk membuat Animasi",
        "Membuat sebuah animasi untuk Farmland"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Review & Exam Test",
      "objectives": [
        "Review materi meeting 9 - 15",
        "Roblox explorer 2 exam"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Image Label on Parts",
      "objectives": [
        "Memahami fungsi dari image label",
        "Menggunakan image label pada part",
        "Membuat nama meja"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Setting a Trap For Forbidden Area",
      "objectives": [
        "Memahami fungsi dari trap",
        "Membuat laser dengan beam effect untuk trap",
        "Membuat trap pada pintu menuju kitchen"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Create Your Own: Exploring Ideas",
      "objectives": [
        "Mengeksplorasi bangunan dan model",
        "Memahami aturan dan etika membuat project",
        "Membuat draft ide bangunan",
        "Memulai modeling bangunan"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Create Your Own: Continue Modelling",
      "objectives": [
        "Memahami kombinasi warna",
        "Tips untuk modelling",
        "Melanjutkan modelling bangunan"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Create Your Own: Finish Modelling",
      "objectives": [
        "Menambahkan detail pada object",
        "Menyelesaikan modelling bangunan"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Create Your Own: Adding Interactive Models",
      "objectives": [
        "Memahami Interactive parts",
        "Menambahkan scripts kedalam game"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Create Your Own: Prepare for Presentation",
      "objectives": [
        "Membuat presentasi tentang project"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Presentation",
      "objectives": [
        "Mempresentasikan hasil project"
      ]
    }
  ],
  "Interactive Mechanics on Roblox": [
    {
      "num": 1,
      "title": "Lesson 1 - Creating a Theme Park",
      "objectives": [
        "Membuat desain map",
        "Review terrain tools",
        "Membuat lingkungan theme park",
        "Mengubah atmosphere map theme park"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Event on Interactive Model",
      "objectives": [
        "Membuat model interaktif",
        "Memahami event dalam coding",
        "Membuat script untuk komedi putar"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - How to Design a Shirt",
      "objectives": [
        "Pengenalan photopea",
        "Membuat desain baju sederhana",
        "Mengimport desain ke asset manager",
        "Coding untuk menggunakan baju pada game"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Escape Building Game",
      "objectives": [
        "Membuat storyline",
        "Mempersiapkan clue pada game",
        "Modelling bangunan"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Conditional Statement in Matching Door",
      "objectives": [
        "Modelling kunci",
        "Memahami konsep conditional statement",
        "Coding kunci dan pintu"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Find the Clue!",
      "objectives": [
        "Modelling clue",
        "Coding show text label",
        "Menambahkan lightswitch"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Final Touch and Publish",
      "objectives": [
        "Configuring atmosphere",
        "Modeling headlamp",
        "Publish and play together"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Review & Exam",
      "objectives": [
        "Review meeting 1-7",
        "Exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Intro to Blender",
      "objectives": [
        "Introduction to blender",
        "Learning basic controls of blender",
        "Create your first model"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Modelling in Blender",
      "objectives": [
        "Membuat model botol",
        "Modeling aksesori player",
        "Export object ke roblox studio"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Object Showcase",
      "objectives": [
        "Import object pada project",
        "Mengenal tentang screen gui",
        "Mendesign screen gui",
        "Menggunakan tween service"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Finding Object Game",
      "objectives": [
        "Merencanakan game",
        "Modeling map dan bangunan",
        "Menambahkan lukisan dengan image label"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Completing Map & Clues",
      "objectives": [
        "Melanjutkan modeling bangunan dan interior.",
        "Menentukan lokasi objek yang akan disembunyikan",
        "Menambahkan screen gui untuk clue"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Designing Object in Blender",
      "objectives": [
        "Membuat model low poly: barrel",
        "Membuat model untuk object utama Finding Game"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Coding Collect System",
      "objectives": [
        "Exporting dan importing banyak parts dari blender",
        "Membuat gui yang muncul saat menemukan objek",
        "Menambahkan coding untuk mengambil objek"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Review & Exam",
      "objectives": [
        "Review meeting 9-16",
        "Exam"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Game Promotion",
      "objectives": [
        "Memahami places dan fungsinya",
        "Menggabungkan game sebelumnya ke lobby",
        "Membuat gambar untuk badges dan game pass"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Monetization in Game",
      "objectives": [
        "Memahami struktur thumbnail dan game icon",
        "Membuat tombol return",
        "Membuat opening GUI"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Create Your Own",
      "objectives": [
        "Merencanakan game yang akan dibuat",
        "Menambahkan place baru kedalam project lobby",
        "Memulai modelling game"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Create Your Own",
      "objectives": [
        "Melanjutkan modelling",
        "Menggunakan blender untuk modelling"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Create Your Own",
      "objectives": [
        "Menambahkan GUI",
        "Menambahkan tween animation"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Create Your Own",
      "objectives": [
        "Menambahkan kode untuk misi",
        "Menambahkan script teleport dengan event touch"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Create Your Own",
      "objectives": [
        "Membuat presentasi project",
        "Membuat thumbnail"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Create Your Own",
      "objectives": [
        "Presentasi project"
      ]
    }
  ],
  "Full Stack Programming on Roblox": [
    {
      "num": 1,
      "title": "Lesson 1 - Intro to Roblox Studio and Obby Game",
      "objectives": [
        "Mengenal roblox game",
        "Mengenal interface pada roblox studio",
        "Memahami proses modelling",
        "Membuat obby game"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Variables & Properties",
      "objectives": [
        "Memahami pengertian coding",
        "Mempelajari konsep variable",
        "Mempelajari konsep properti",
        "Mempelajari konsep reusing code"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Model in Roblox Studio",
      "objectives": [
        "Mempelajari proses modeling",
        "Mempelajari tool effect"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Intro to Terrain on Mini Adventure Game",
      "objectives": [
        "Mengenal adventure game",
        "Mengenal terrain editor dan penerapannya",
        "Membuat terrain dan model sell platform"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Leaderboard & Function",
      "objectives": [
        "Mempelajari leaderboard",
        "Mempelajari konsep function"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Conditional Statement on Harvestable Item",
      "objectives": [
        "Mengetahui cara kerja harvestable item",
        "Memahami konsep conditional statement"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Sell Item & Add Obstacle",
      "objectives": [
        "Mengetahui cara kerja sell platform"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Review & Exam",
      "objectives": [
        "Review",
        "Exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Custom Player Character",
      "objectives": [
        "Mampu membuat karakter player sendiri",
        "Memahami cara menggerakkan custom player"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Event & Create Bullet",
      "objectives": [
        "Mempelajari konsep event",
        "Membuat model bullet"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Script For Bullet",
      "objectives": [
        "Mampu membuat coding untuk spawn bullet"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Remote Event on GUI",
      "objectives": [
        "Memahami alur story game",
        "Memahami dan menerapkan screen gui",
        "Memahami dan menerapkan remote event"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - How The Story Starts",
      "objectives": [
        "Memahami pengertian module script",
        "Mempelajari pembuatan screen gui yang dinamis"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Animation in Roblox",
      "objectives": [
        "Mengenal pengertian animasi",
        "Mengetahui cara membuat animasi di roblox",
        "Menerapkan animasi pada story game"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Task 2 and Ending The Story",
      "objectives": [
        "Mempelajari click detector",
        "Memahami alur task 2",
        "Menerapkan efect di task 3"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Review & Exam",
      "objectives": [
        "Review",
        "Exam"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Roblox Game Exploration",
      "objectives": [
        "Mengeksplorasi ide game",
        "Membuat rencana game yang akan dibuat",
        "Mulai membuat desain model dan lingkungan game"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Continue Modelling",
      "objectives": [
        "Menyelesaikan model game"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Start to Code",
      "objectives": [
        "Mulai membuat kode-kode yang dibutuhkan"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Continue Coding",
      "objectives": [
        "Melanjutkan proses coding"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Coding for Ending",
      "objectives": [
        "Menyelesaikan proses coding"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Feedback & Revise",
      "objectives": [
        "Menunjukkan progress game ke teman sekelas",
        "Memberi dan menerima feedbacks dari teman sekelas dan guru"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - How to Earn Robux",
      "objectives": [
        "Memahami cara mendapatkan robux dalam game yang dibuat"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Play a Test With Friends",
      "objectives": [
        "Mempresentasikan hasil game"
      ]
    }
  ],
  "Advanced Lua Programming on Roblox": [
    {
      "num": 1,
      "title": "Lesson 1 - Intro to Battle Royale",
      "objectives": [
        "Memahami game development pada battle royale game",
        "Mempersiapkan map",
        "Mempelajari multiplayer game loop",
        "Menambahkan chest yang bisa terbuka"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Teleport to Arena",
      "objectives": [
        "Mempelajari lobby system",
        "Mempelajari konsep table & for loop in pairs",
        "Membuat teleport system"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Match: Equip Sword in the Chest",
      "objectives": [
        "Membuat model sword",
        "Membuat coding untuk sword"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Match: Health Potion",
      "objectives": [
        "Menambahkan health potion",
        "Menambahkan gun player"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Match: Set Timer & GUI",
      "objectives": [
        "Menerapkan timer module",
        "Membuat screen gui yang dinamis"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Match: Ending Match",
      "objectives": [
        "Memahami proses pengembalian player kalah ke lobby",
        "Memahami cara mengakhiri match"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Match: Cleanup & Reset",
      "objectives": [
        "Memahami proses kembali ke intermission"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Exam",
      "objectives": [
        "Review",
        "Exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Cleaner Boat Simulator",
      "objectives": [
        "Mengetahui alur game cleaner boat simulator",
        "Memahami proses persiapan materials"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Placement System: Creating GUI",
      "objectives": [
        "Memahami proses membuat screen gui untuk membangun boat"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Placement System: Coding the System",
      "objectives": [
        "Memahami cara kerja placement system"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Launch Boat & Remove Material",
      "objectives": [
        "Coding untuk launch boat",
        "Coding untuk remove material boat"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Get Coins by Collecting Trash",
      "objectives": [
        "Mempelajari cara kerja collecting trash dengan boat",
        "Mampu menampilkan jumlah sampah di screen gui"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Upgrade Boat: Prepare The Quiz",
      "objectives": [
        "Mempelajari cara menonaktifkan materials dari screen gui",
        "Mampu membuat desain quiz gui"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Upgrade Boat: Manage Quiz",
      "objectives": [
        "Mampu membuat quiz untuk upgrade boat",
        "Memahami proses upgrade boat"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Exam",
      "objectives": [
        "Review",
        "Exam"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Math Obby: Generate Questions",
      "objectives": [
        "Memahami cara menampilkan soal"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Math Obby: Generate Answer",
      "objectives": [
        "Memahami cara menampilkan pilihan jawaban",
        "Memahami cara memeriksa jawaban player"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Roblox Game Exploration",
      "objectives": [
        "Mengeksplorasi ide game",
        "Membuat rencana game yang akan dibuat",
        "Mulai membuat lingkungan dan model"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Modelling Game",
      "objectives": [
        "Menyelesaikan model game"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Start to Code",
      "objectives": [
        "Membuat kode-kode yang diperlukan"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Continue Coding",
      "objectives": [
        "Melanjutkan proses coding"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Add Game Pass",
      "objectives": [
        "Menambahkan game pass dalam game"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Present Your Game",
      "objectives": [
        "Mempresentasikan hasil game"
      ]
    }
  ]
});
