// ============================================================
// COURSE_DATA slice — criteria: Junior
// ============================================================
// Bagian dari performance split (rencana-10-10-non-security.md bagian 5.1):
// data.js dulunya 1 file monolitik (108K) berisi COURSE_DATA untuk SEMUA
// criteria, selalu dimuat penuh di <head> walau guru cuma pakai 1 criteria
// per sesi kerja. File ini HANYA berisi lesson data untuk course-course di
// bawah criteria 'Junior', dan dimuat secara DINAMIS oleh
// js/lazy-loader.js begitu guru pertama kali memilih criteria 'Junior'
// di dropdown (Auto tab atau Exam tab) — bukan dimuat di <head> sejak awal.
//
// JANGAN declare ulang 'const COURSE_DATA' di sini — js/data.js (file inti,
// selalu dimuat) sudah mendeklarasikannya sebagai objek kosong '{}'. File
// ini cuma menambahkan property ke objek yang sudah ada lewat Object.assign,
// supaya semua kode lain (auto-tab.js, exam.js) yang mengakses COURSE_DATA
// sebagai variabel global tetap bekerja tanpa perlu diubah sama sekali.
// ============================================================

Object.assign(COURSE_DATA, {
  "3D ANIMATOR": [
    {
      "num": 1,
      "title": "Lesson 1 - What is Computer?",
      "objectives": [
        "Pengenalan apa itu komputer dan bagian-bagiannya",
        "Mengetahui cara menjaga Gadget agar tidak rusak"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Play with Alphabet",
      "objectives": [
        "Latihan mengetik di komputer",
        "Mengetahui pentingnya Media Balance"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Coding is a Language",
      "objectives": [
        "Pengenalan Coding sebagai bahasa komputer",
        "Pentingnya mengurangi screen time"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Introduction to Robot",
      "objectives": [
        "Berkenalan dengan Robot",
        "Menggerakkan Robot dengan coding"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - What is Event?",
      "objectives": [
        "Pengenalan dan penerapan event dalam coding",
        "Menggerakkan Robot dengan coding"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Looping with Scrat",
      "objectives": [
        "Pengenalan konsep Loop dalam Coding",
        "Mengimplementasikan konsep Loop pada game"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Coding Animation in ScratchJr",
      "objectives": [
        "Mengenal aplikasi ScratchJr",
        "Belajar membuat animasi dengan coding"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Overview & Challenge 1",
      "objectives": [
        "Review Lesson 1-7",
        "Coding Challenge 1"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Rocket to the Moon",
      "objectives": [
        "Menggunakan mode grid untuk melihat posisi karakter di ScratchJr",
        "Membuat animasi roket terbang ke bulan"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Send The Message in ScratchJr",
      "objectives": [
        "Mengetahui fungsi kode Message di ScratchJr",
        "Membuat game animasi Animal Race"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Bugs On The Internet",
      "objectives": [
        "Mengetahui apa itu Internet dan manfaatnya",
        "Mengetahui cara melakukan Debugging"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Play with Shapes",
      "objectives": [
        "Belajar sambil bermain dengan shapes",
        "Mengetahui apa saja yang boleh dibagikan ke internet"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Moving Shapes!",
      "objectives": [
        "Mengingat kembali tombol pada Robot",
        "Menggerakkan Robot dengan coding"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Basketball Animation",
      "objectives": [
        "Berlatih membuat animasi di ScratchJr",
        "Membuat animasi Basketball"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Animation Project in ScratchJr",
      "objectives": [
        "Membuat proyek akhir di ScratchJr"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Overview & Challenge 2",
      "objectives": [
        "Review Lesson 9-15",
        "Coding Challenge 2"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - My Own 3D World",
      "objectives": [
        "Mengetahui apa itu game tiga dimensi (3D Game)",
        "Belajar membuat 3D Game dengan Kodu"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Underwater 3D Game",
      "objectives": [
        "Berlatih membuat 3D Game",
        "Membuat dunia bawah air di Kodu"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Condition for Robot's Censor",
      "objectives": [
        "Mengenal konsep Conditional dalam coding",
        "Membuat coding pada sensor Robot"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Cycle Race in Kodu",
      "objectives": [
        "Berlatih membuat 3D Game",
        "Membuat Racing Game di Kodu"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - The Ground is Lava",
      "objectives": [
        "Berlatih membuat 3D Game",
        "Melengkapi coding pada project yang disediakan"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Clap Censor in Robot",
      "objectives": [
        "Perkenalan dengan sensor baru pada Robot",
        "Belajar memrogram sensor tepuk tangan dan suara"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - 3D World Project",
      "objectives": [
        "Membuat design plan untuk project akhir 3D Game",
        "Membuat proyek akhir 3D Game dengan Kodu"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Overview & Challenge 3",
      "objectives": [
        "Review Lesson 17-23",
        "Coding Challenge 3"
      ]
    }
  ],
  "Website Designer": [
    {
      "num": 1,
      "title": "Lesson 1 - What is Conditional Loop?",
      "objectives": [
        "Belajar konsep Conditional Loop dalam coding",
        "Menggerakkan robot dengan coding"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Introduction To Virtual Reality",
      "objectives": [
        "Mengetahui apa itu Virtual Reality (VR)",
        "Belajar membuat VR dengan Delightex"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - My Virtual City in Delightex",
      "objectives": [
        "Berlatih membuat Virtual Reality",
        "Membuat kota virtual di Delightex"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Function in Robot",
      "objectives": [
        "Belajar konsep Function dalam coding",
        "Menggerakkan robot dengan konsep Function"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - What is AR?",
      "objectives": [
        "Mengetahui apa itu Augmented Reality (AR)",
        "Belajar mendesain AR dengan Delightex"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - My Virtual House",
      "objectives": [
        "Latihan membuat Virtual Reality",
        "Membuat rumah virtual di Delightex"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Final Virtual Reality Project",
      "objectives": [
        "Membuat project akhir Virtual Reality dengan Delightex"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Overview & Challenge",
      "objectives": [
        "Review materi Lesson 1-7",
        "Coding Challenge 1"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Design the Aquarium in AR",
      "objectives": [
        "Berlatih membuat desain & coding AR",
        "Membuat AR aquarium dengan Delightex"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - My Cube Profile Project 1",
      "objectives": [
        "Memulai project akhir AR",
        "Mendesain project \"All about me\" di Delightex"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - My Cube Profile Project 2",
      "objectives": [
        "Menyelesaikan project akhir AR"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - How to make a Website?",
      "objectives": [
        "Mengenal apa itu Website",
        "Belajar membuat Website sederhana"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - My Final Website Project",
      "objectives": [
        "Mulai mengerjakan project akhir Website",
        "Menambahkan layout biodata & project"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Continue My Final Website Project",
      "objectives": [
        "Melanjutkan project akhir Website",
        "Menambahkan halaman ke dalam Website"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Buttons on My Website",
      "objectives": [
        "Melanjutkan project Website",
        "Menambahkan button pada Website"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Prepare The Presentation!",
      "objectives": [
        "Menyelesaikan dan menerbitkan website",
        "Membuat presentasi project"
      ]
    }
  ],
  "Virtual World Maker": [
    {
      "num": 1,
      "title": "Lesson 1 - Recall Algorithm in Coding",
      "objectives": [
        "Mengingat kembali Coding sebagai bahasa komputer",
        "Berlatih membuat coding sesuai algoritma yang benar"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Event While Screen Time",
      "objectives": [
        "Memahami pengaruh Screen Time dan Gadget Addiction",
        "Mengingat kembali apa itu Event dalam Coding"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Cyber Bullying & Loop",
      "objectives": [
        "Mencegah dan mengatasi Cyber Bullying",
        "Mengingat kembali apa itu Loop dalam coding"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Introduction to Another Scratch",
      "objectives": [
        "Belajar membuat animasi di Scratch",
        "Mengeksplor bagian-bagian di Scratch"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Conditions When with Astronaut",
      "objectives": [
        "Mengingat kembali konsep Conditional dalam Coding",
        "Berlatih menggerakkan karakter dengan code If"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Media Balance with Robot",
      "objectives": [
        "Belajar pentingnya Media Balance",
        "Memprogram robot dengan platform baru"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Message In The Sky",
      "objectives": [
        "Mengetahui perbedaan komunikasi langsung dengan online",
        "Mengenal dan mengendalikan Drone secara virtual"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Exam & Coding Test 1",
      "objectives": [
        "Written Exam",
        "Coding Test"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Hunting Bug",
      "objectives": [
        "Mengetahui Bug pada suatu program",
        "Membuat Bug Hunter game menggunakan konsep Conditional"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Gliding Beetle",
      "objectives": [
        "Menggunakan \"Glide\" untuk menggerakkan sprite",
        "Membuat Beetle Race Game di Scratch"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Function of Copyright",
      "objectives": [
        "Mengingat kembali tentang Copyright",
        "Mengaplikasikan kode Function di coding game"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Function in Robot",
      "objectives": [
        "Mengingat kembali apa itu Function dalam coding",
        "Mengimplementasikan konsep Function pada Robot"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Never Give Up On Conditional Loop",
      "objectives": [
        "Pentingnya tetap berusaha & pantang menyerah",
        "Mengenal Conditional Loop dalam coding"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Spamming Forever",
      "objectives": [
        "Mengenal Spam dan cara menghindarinya",
        "Menggunakan kode Forever dalam coding"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Program The Micro:bit",
      "objectives": [
        "Mengetahui apa itu Micro:bit",
        "Belajar memprogram Micro:bit dengan kode Forever"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Exam & Coding Test 2",
      "objectives": [
        "Written Exam",
        "Coding Test"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Virtual Animal Exhibition",
      "objectives": [
        "Mengingat kembali apa itu Virtual Reality (VR)",
        "Membuat pameran hewan dengan VR"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Function in Virtual Reality",
      "objectives": [
        "Menggunakan function dalam VR",
        "Membuat VR \"Finding Animal\""
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Variable in Technology Development",
      "objectives": [
        "Perkembangan teknologi dalam kehidupan manusia",
        "Mengenal Variable dalam coding"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Travelling with Technology",
      "objectives": [
        "Mengenal aplikasi untuk membantu dalam perjalanan",
        "Membuat VR City Tour"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Math Operator in Coding",
      "objectives": [
        "Mengenal Operator dalam coding",
        "Mengaplikasikan kode Operator ke dalam Math Game"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Hoax in Multiple Diorama part 1",
      "objectives": [
        "Mengenal Hoax dan cara menghindarinya",
        "Membuat multiple diorama dalam VR"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Multiple Diorama Part 2",
      "objectives": [
        "Melanjutkan project multiple diorama sebelumnya",
        "Mempresentasikan Solar System VR"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Exam & Coding Test 3",
      "objectives": [
        "Written Exam",
        "Coding Test"
      ]
    }
  ],
  "Little Programmer": [
    {
      "num": 1,
      "title": "Lesson 1 - Variable in Truth or Dare",
      "objectives": [
        "Mengenal Cloud Storage",
        "Mengaplikasikan konsep Variable pada Micro:Bit"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - List of IOT",
      "objectives": [
        "Internet of Things untuk membantu kehidupan",
        "Mengenal List dalam coding"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Broadcast The Greeting Card",
      "objectives": [
        "Mengenal apa itu Broadcast dalam Coding",
        "Membuat animasi Greeting Card dengan kode Broadcast"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Digital Footprint in Line",
      "objectives": [
        "Memahami pengertian dari Jejak Digital",
        "Mengkombinasikan robot Maqueen dengan Micro:bit"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Community in Space",
      "objectives": [
        "Memahami komunitas dan perkembangannya",
        "Membuat animasi Lost in Space di Scratch"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Flying Game",
      "objectives": [
        "Berlatih membuat animasi di Scratch",
        "Membuat Flying Game dengan coding"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Virus in Item",
      "objectives": [
        "Mengenal Virus pada komputer dan cara mengatasinya",
        "Membuat game animasi menggunakan List"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Exam & Coding Test 1",
      "objectives": [
        "Written exam",
        "Coding Test"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Undersea Quiz in AR",
      "objectives": [
        "Mengingat kembali cara membuat AR",
        "Membuat quiz di dalam AR"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Wireless Operating System",
      "objectives": [
        "Mengenal apa itu Operating System",
        "Membuat coding Wireless Controller pada Micro:bit dan Maqueen"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Clone War Animation",
      "objectives": [
        "Belajar menggunakan Clone di Scratch",
        "Membuat animasi Clone War"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - World's Landmarks in AR",
      "objectives": [
        "Membuat AR tentang bangunan bersejarah di berbagai negara",
        "Mengetahui bangunan bersejarah di dunia"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Finishing My World's Landmarks",
      "objectives": [
        "Melanjutkan AR tentang bangunan bersejarah di berbagai negara",
        "Memberikan coding kepada karakter yang ada"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Addictive Design in The World",
      "objectives": [
        "Mengenal konsep Addictive Design",
        "Membuat game Create Your Own World - Part 1"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Continue making \"Create Your Own World\"",
      "objectives": [
        "Membuat game Create Your Own World - Part 2"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Exam & Coding Test 2",
      "objectives": [
        "Written exam",
        "Coding Test"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - AI in Python",
      "objectives": [
        "Mengenal apa itu kecerdasan buatan",
        "Mempelajari text coding dan bahasa Python"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - Self Learning with Robot",
      "objectives": [
        "Internet sebagai sumber informasi dan tempat belajar",
        "Mengaplikasikan Operator & Variable pada Robot"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Soccer Game Part 1",
      "objectives": [
        "Menggunakan Scratch untuk membuat Soccer Game Part 1"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Soccer Game Part 2",
      "objectives": [
        "Melanjutkan membuat Soccer Game dengan Scratch",
        "Memainkan game yang telah dibuat"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Game Creation Part 1",
      "objectives": [
        "Menentukan ide untuk membuat game sendiri",
        "Mengumpulkan asset game"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Game Creation Part 2",
      "objectives": [
        "Membuat game sendiri",
        "Menyusun layout game dan coding start layout"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Game Creation Part 3",
      "objectives": [
        "Membuat game sendiri",
        "Menambahkan coding, life, score dan next level"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Game Creation Part 4",
      "objectives": [
        "Launch game",
        "Persiapan presentasi untuk pertemuan berikutnya"
      ]
    }
  ]
});
