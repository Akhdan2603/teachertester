// ============================================================
// COURSE_DATA slice — criteria: Teens
// ============================================================
// Bagian dari performance split (rencana-10-10-non-security.md bagian 5.1):
// data.js dulunya 1 file monolitik (108K) berisi COURSE_DATA untuk SEMUA
// criteria, selalu dimuat penuh di <head> walau guru cuma pakai 1 criteria
// per sesi kerja. File ini HANYA berisi lesson data untuk course-course di
// bawah criteria 'Teens', dan dimuat secara DINAMIS oleh
// js/lazy-loader.js begitu guru pertama kali memilih criteria 'Teens'
// di dropdown (Auto tab atau Exam tab) — bukan dimuat di <head> sejak awal.
//
// JANGAN declare ulang 'const COURSE_DATA' di sini — js/data.js (file inti,
// selalu dimuat) sudah mendeklarasikannya sebagai objek kosong '{}'. File
// ini cuma menambahkan property ke objek yang sudah ada lewat Object.assign,
// supaya semua kode lain (auto-tab.js, exam.js) yang mengakses COURSE_DATA
// sebagai variabel global tetap bekerja tanpa perlu diubah sama sekali.
// ============================================================

Object.assign(COURSE_DATA, {
  "AI Computer Vision": [
    {
      "num": 1,
      "title": "Lesson 1 - OpenCV Image Manipulation",
      "objectives": [
        "Mengetahui konsep Computer Vision",
        "Menggunakan OpenCV Library",
        "Mengetahui konsep Image Processing",
        "Mengetahui teknik blurring menggunakan OpenCV",
        "Mengetahui Image Manipulation menggunakan OpenCV"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Tensorflow dan CNN",
      "objectives": [
        "Mengetahui konsep dan kebutuhan pembuatan model computer vision",
        "Mengetahui arsitektur model CNN",
        "Mengetahui Tools Tensorflow untuk melatih model",
        "Mengetahui Tools Tensorflow untuk melatih model"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Horse and Human Classification",
      "objectives": [
        "Mengetahui sumber pengumpulan dataset Computer Vision",
        "Mengetahui cara penggunaan Tensorflow dataset",
        "Mengetahui cara melakukan data augmentasi menggunakan Image Data Generator",
        "Membuat project Horse and Human Classification"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Face Detection",
      "objectives": [
        "Menggunakan Pre-trained model dan Machine Learning Framework",
        "Membuat aplikasi face detection di gambar",
        "Membuat aplikasi face detection di video"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - MobileNetSSD Object Detection",
      "objectives": [
        "Mengetahui arsitektur model Single Shot Detector (SSD)",
        "Dapat membuat project Object Detection menggunakan Model SSD",
        "Mengimplementasikan project object Detector baik itu di gambar atau di video"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Object Detection VS Object Tracking",
      "objectives": [
        "Mengetahui konsep Object Tracking dan cara kerjanya",
        "Mengetahui perbedaan Object Detection dan Tracking",
        "Mengetahui konsep Euclidean Distance Tracker",
        "Mengetahui konsep countour detection",
        "Mengetahui konsep image thresholding"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Euclidean Distance Tracker Class",
      "objectives": [
        "Mengaplikasikan penggunaan Euclidean Distance Tracker Class",
        "Menambahkan Unique Identification dari object yang terdeteksi untuk proses tracking",
        "Menambahkan \"marker\" untuk object yang sedang di track"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Review and Middle Exam",
      "objectives": [
        "Review Concepts",
        "Middle Exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Automatic Number Plate Recognation (ANPR)",
      "objectives": [
        "Mengetahui konsep tentang Optical Character Recognition (OCR)",
        "Mengatahui cara manipulasi image processing untuk OCR",
        "Menggunakan library easyocr untuk ANPR",
        "Mendalami konsep image masking dan contours detection"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - OCR Handwriting Recognation",
      "objectives": [
        "Mengetahui implementasi lain OCR / OCR Handwritting",
        "Menggunakan pre-trained model menggunakan keras library",
        "Menggunakan Image Processing untuk OCR Handwritting"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - hand Landmarks Detection",
      "objectives": [
        "Pengenalan Mediapipe Library untuk landmark detection",
        "Menggunakana Mediapipe untuk Holistic Tracking",
        "Mendalami konsep Image Manipulation di Video Frames",
        "Membuat project Virtual Painter"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Find Landmark Position",
      "objectives": [
        "Mencari posisi landmark tangan menggunakan method enumerate()",
        "Mengetahui klasifikasi landmark pada tangan",
        "Menginisialisasi mode pada project Virtual Painter (Selection dan Drawing)",
        "Finishing project dengan teknis Video Frame Masking"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Mediapipe Face Mesh",
      "objectives": [
        "Mengetahui anatomi Face Mesh di Mediapipe",
        "Menggambar landmark menggunakan Face Mesh Landmark model",
        "Membuat project Pig Face Filter menggunakan Mediapipe"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Mediapipe Facial Area",
      "objectives": [
        "Mengetahui implementasi dari Face Mesh Landmark",
        "Mengetahui Facial Area yang ada di dalam Mediapipe",
        "Membuat project Face FIlter Dragon Project",
        "Membuat class Face Mesh untuk mendeteksi Facial Area"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Detect Mouth and Eye",
      "objectives": [
        "Mengidentifikasi apakah mulut terbuka atau tidak",
        "Mengidentifikasi apakah mulut terbuka atau tidak",
        "Melakukan Video masking untuk menempelkan efek filter ke dalam frames"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Summary and Final Exam",
      "objectives": [
        "Review Concepts",
        "Final Exam"
      ]
    }
  ],
  "Python for Data Science": [
    {
      "num": 1,
      "title": "Lesson 1 - Introduction to AI and Python",
      "objectives": [
        "Pengenalan konsep Artificial Intelligence",
        "Pengenalan Python Programming",
        "Melakukan setup installation untuk Python",
        "Mengetahui syntax basic Python",
        "Memahami Variable / Datatype / Operator / Input menggunakan Python"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Python Data Structure",
      "objectives": [
        "Mempelajari Struktur Data dalam Python",
        "Memahami penggunaan Daftar (1D, 2D)",
        "Memahami metode untuk memanipulasi daftar",
        "Memahami penggunaan Tuples",
        "Membuat Proyek Pembuat Kata Sandi"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Dictionary",
      "objectives": [
        "Memahami konsep dictionary",
        "Mengetahui cara membuat dictionary dan metode yang digunakan dalam dictionaries",
        "Menggabungkan beberapa struktur data menjadi satu",
        "Membuat proyek Dictionary Film"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Looping in Python",
      "objectives": [
        "Memahami konsep looping",
        "Memahami contoh penggunaan loops for dalam Python",
        "Memahami contoh penggunaan loops while di Python",
        "Teknik looping satu baris",
        "Looping exercise"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Condition in Python",
      "objectives": [
        "Memahami konsep conditions dalam Python",
        "Memahami konsep conditions disi bersarang di Python",
        "Menggabungkan conditions dengan perulangan",
        "Membuat Proyek Jumbled Word"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Function in Chatbot",
      "objectives": [
        "Memahami functions  dalam Python",
        "functions bawaan dalam Python",
        "functions yang ditentukan pengguna dalam Python",
        "Scope rules di Python",
        "Membuat Chatbot Discord menggunakan Discord.py"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Object Oriented Programming (OOP)",
      "objectives": [
        "Memahami konsep OOP",
        "Membedakan Object, Class, Method, dan Property",
        "Memahami konsep inheritance dalam OOP",
        "Membuat game sederhana menggunakan OOP"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Summary and Middle Exam",
      "objectives": [
        "Review Concepts",
        "Middle Exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Sorting and Searching Algorithm",
      "objectives": [
        "Konsep Sorting",
        "Memahami bagaimana bubble sort dan insertion sort algorithms work",
        "Menerapkan code untuk bubble sort and insertion sort algorithms",
        "Memahami cara kerja algorithm pencarian linear",
        "Menerapkan kode untuk algorithm pencarian linier"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Python Libraries and Numpy",
      "objectives": [
        "Memahami apa itu Python libraries dan contoh-contohnya",
        "Memahami cara memasang Python libraries",
        "Menggunakan Numpy library",
        "Membuat Numpy arrays (1D, 2D, 3D) dan memanipulasinya",
        "Membuat  TicTacToe project menggunakan Numpy"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Pandas data frame",
      "objectives": [
        "Memahami data dan jenis data",
        "Memahami pentingnya data",
        "Memahami mekanisme pengumpulan data",
        "Pengenalan alat bantu pemrosesan data (Google Colab)",
        "Memahami cara memanipulasi dataframe menggunakan pandas"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Analyze the Data",
      "objectives": [
        "Memahami cara mendefinisikan pertanyaan bisnis",
        "Memahami alur analisis data",
        "Membuat proyek analisis data e-commerce",
        "Memahami mekanisme penilaian data",
        "Memahami mekanisme pembersihan data"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Exploratory data analysis",
      "objectives": [
        "Memahami tahapan data analysis eksploratori (EDA) dalam data analysis",
        "Menerapkan teknik pengelompokan data",
        "Memahami konsep data visualization yang efektif",
        "Mengetahui cara mengubah set data",
        "Menjawab pertanyaan bisnis"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Probability",
      "objectives": [
        "Memahami hubungan antara  probability dan artificial intelligence",
        "Memahami konsep dasar probability",
        "Memecahkan masalah probability sederhana seperti koin dan dadu",
        "Memahami konsep distribusi",
        "Memecahkan masalah ulang tahun"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Review materials & Final Exam",
      "objectives": [
        "Review materials",
        "Written Exam",
        "Coding Exam - Part 1"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Finishing the Exam",
      "objectives": [
        "Coding Exam - Part 2",
        "Coding Exam submission"
      ]
    }
  ],
  "AI Machine Learning": [
    {
      "num": 1,
      "title": "Lesson 1 - What is Machine Learning ?",
      "objectives": [
        "Mengetahui hubungan AI, Machine Learning, dan Deep Learning",
        "Mengetahui apa itu Machine Learning dan kategorinya",
        "Mengetahui cara kerja Machine Learning",
        "Using Pandas as a dataframe manipulation library"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Iris Flowers Classification",
      "objectives": [
        "Mengetahui cara kerja Classification",
        "Membedakan data train dan data testing",
        "Mengolah dan Mempersiapkan dataset Iris Flower",
        "Membaca dan Memvisualisasikan dataset menggunakan Seaborn"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Iris Flowers Classification II",
      "objectives": [
        "Mengetahui cara kerja Algoritma KNN Classifier",
        "Melakukan training model menggunakan algoritma KNN",
        "Melakukan model evaluation",
        "Melakukan proses parameter tuning dari model yang sudah dilatih",
        "Melakukan prediksi dari model yang sudah dibuat"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Natural Language Processing (NLP)",
      "objectives": [
        "Pengenalan konsep Natural Language Processing (NLP)",
        "Mengetahui bagaimana cara NLP bekerja",
        "Explorasi NLP menggunakan ChatGPT",
        "Menggunakan NLTK untuk proses NLP di Python"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Sentiment Analysis Vectorization",
      "objectives": [
        "Mengetahui proses yang ada di dalam Sentiment Analysis",
        "Mengetahui konsep Feature Extractin dan Vectorization",
        "Membuat project Spotify Review Sentiment Analysis"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Review Classification",
      "objectives": [
        "Mengetahui bagaimana cara kerja algortima Random Forest Classifier",
        "Mengetahui bagaimana cara kerja Naive bayes Classifier bekerja",
        "Meningkatkan skor akurasi model yang sudah di latih",
        "Membuat prediksi berdasarkan model sentiment analysis yang sudah dibuat"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Fake News Detection",
      "objectives": [
        "Mengimplementasikan penggunaan lain NLP",
        "Membuat project Fake News Detection menggunakan konsep NLP",
        "Membandingkan model Classification dan Regression",
        "Memahami penggunaan algoritma Logistic Regression"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Summary and Middle Exam",
      "objectives": [
        "Review Concepts",
        "Middle Exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Time Series Forecasting",
      "objectives": [
        "Mengetahui konsep Time Series Forecasting",
        "Mengetahui bagaimana konsep fungsi linear",
        "Mengetahui cara kerja algoritma Linear Regression",
        "Membuat project Population Prediction menggunakan model Linear Regression"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Predict Future Sales",
      "objectives": [
        "Mengetahui konsep cara kerja Sales Forecasting",
        "Membuat project Sales Prediction",
        "Menggunakan library Plotly untuk VIsualisasi Data",
        "Memahami konsep Feature Engineering",
        "Membuat Feature data waktu berdasarkan Feature yang lain"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Neural Network",
      "objectives": [
        "Mengetahui konsep Rolling Windows untuk investigasi data",
        "Mengetahui konsep Exponentially Weighted Moving Average",
        "Mengetahui konsep Logarithmic Transformation",
        "Mengetahui Konsep Neural Network",
        "Membuat prediksi menggukan model neural network"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Unsupervised Learning",
      "objectives": [
        "Understanding Concept about Unsupervised learning",
        "Identify type of Unsupervised learning",
        "Understanding concept of Clustering using K Means algorithm",
        "Customer Segmentation project"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Recommendation System",
      "objectives": [
        "Understanding the concept of Recommender System",
        "Indentify the type of Recommender System",
        "Understanding how content based filtering and collaborative filtering works",
        "Implement it to Course Recommendation System"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Anomaly Detection with Isolated Forest",
      "objectives": [
        "Understanding the detail concept of Unsupervised Anomaly Detection",
        "Understanding the method for Anomaly Detection",
        "Understanding how isolated forest algorithm works",
        "Credit card fraud detection"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Review materials & Final Exam",
      "objectives": [
        "Review materials",
        "Written Exam",
        "Coding Exam - Part 1"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Finishing the Exam",
      "objectives": [
        "Coding Exam - Part 2",
        "Coding Exam submission"
      ]
    }
  ],
  "JavaScript Developer": [
    {
      "num": 1,
      "title": "Lesson 1 - Hello, World!",
      "objectives": [
        "Mengetahui apa itu coding beserta cangkupannya.",
        "Mengetahui bahasa pemrograman JavaScript.",
        "Mengetahui apa itu algoritma."
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Hoax and Variable",
      "objectives": [
        "Mengetahui tentang hoax dan mengidentifikasi hoax",
        "Mengetahui konsep variabel dan tipe data."
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Operator and Expression",
      "objectives": [
        "Mengetahui konsep operator dalam coding.",
        "Memperdalam konsep operator aritmatika dan penugasan."
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Storing Multiple Data in Array",
      "objectives": [
        "Mengetahui cara mengatasi Cyberbullying.",
        "Mengetahui konsep array."
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - What If? Conditional Logic",
      "objectives": [
        "Memahami konsep conditional dalam coding.",
        "Menggunakan operator comparison dan logical"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Media & Switch Conditions",
      "objectives": [
        "Membuat kehidupan seimbang",
        "Memahami conditional dengan switch statement dan ternary operator."
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Problem Solving  For Loop",
      "objectives": [
        "Memahami proses penyelesaian masalah",
        "Memahami loop dalam coding"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Review and Middle Test",
      "objectives": [
        "Memahami kembali materi meeting 1-7",
        "Middle test"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Nested and Conditional Loop",
      "objectives": [
        "Memahami nested for loop",
        "Memahami conditional loop"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Create Some Programs!",
      "objectives": [
        "Membuat beberapa program dengan JavaScript"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Real or Fake? Function",
      "objectives": [
        "Memahami manipulasi foto dan video",
        "Memahami function dalam coding"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Function Parameter",
      "objectives": [
        "Mengetahui konsep paramater pada function"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Copyright and Scope",
      "objectives": [
        "Mengetahui tentang hak cipta dan menghargai hak cipta suatu karya",
        "Mengetahui scope dalam JavaScript."
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Breaking News, Return, For Each",
      "objectives": [
        "Mengetahui cara bereaksi terhadap breaking news",
        "Memahami return statement dalam JavaScript",
        "Menggunakan looping dengan  for each"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Summary and Exam",
      "objectives": [
        "Review materi meeting 9-14",
        "Exam"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Exam",
      "objectives": [
        "Exam"
      ]
    }
  ],
  "Web Developer Teens": [
    {
      "num": 1,
      "title": "Lesson 1 - Intro to Website and HTML",
      "objectives": [
        "Pengenalan Website",
        "Pengenalan HTML",
        "Memahami tag Heading, Paragraf, Break, Bold, Italic, Underline dalam HTML"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Intro to CSS and Header",
      "objectives": [
        "Pengenalan CSS (Cascading Style Sheet)",
        "CSS Box Model dan komponennya",
        "Memahami konsep selector pada CSS",
        "Menerapkan CSS untuk membuat dan menata bagian header pada website"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Styling Images",
      "objectives": [
        "Memahami dan menerapkan display flex dalam tata letak website",
        "Mempelajari teknik efektif untuk menata gambar pada website",
        "Menambahkan cards untuk product pada website"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - How About Table in HTML?",
      "objectives": [
        "Memahami struktur tabel dalam HTML.",
        "Memahami atribut Colspan dan Rowspan dalam tabel HTML.",
        "Menambahkan tabel ke website."
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - List and Button on Pricing Table",
      "objectives": [
        "Memahami dan menerapkan List dalam HTML",
        "Mempelajari cara membuat button dalam HTML",
        "Menambahkan pricing table di website"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Link in HTML and About Us Section",
      "objectives": [
        "Memahami konsep link termasuk Hyperlink dan Anchor Link",
        "Memahami perbedaan Absolute dan Relative URL",
        "Menambahkan halaman About Us pada website"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Awesome Footer",
      "objectives": [
        "Mempelajari konsep menambah icon dengan Font Awesome",
        "Menambahkan footer dengan gradient color pada website"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Middle Test and Responsive Website",
      "objectives": [
        "Menerapkan Google Font dalam website",
        "Mempelajari prinsip responsive website",
        "Mengunggah situs web ke internet"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Intro JavaScript dan HTML DOM",
      "objectives": [
        "Pengenalan JavaScript dalam Dokumen HTML",
        "Memahami HTML DOM (Document Object Model)",
        "Bekerja dengan Metode DOM",
        "Membuat Halaman Blog dengan JavaScript dan HTML"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - DOM Events",
      "objectives": [
        "Memahami konsep event pada DOM",
        "Mulai membuat project website Blog"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Add Media and Project Page",
      "objectives": [
        "Menambahkan elemen video dan audio ke  HTML5",
        "Menyematkan konten media eksternal",
        "Melanjutkan pembuatan website"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - HTML Form",
      "objectives": [
        "Mempelajari  HTML Form untuk interaksi pengguna",
        "Form Elements : Form, Input, Label, Text Area, dan Select tag",
        "Form Attributes di HTML",
        "Membuat website formulir"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Input Types and Attribute",
      "objectives": [
        "Menjelajahi Jenis Tag Input",
        "Memahami Atribut Input",
        "Melanjutkan Formulir Halaman Web"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Styling Form",
      "objectives": [
        "Menambahkan CSS pada Form",
        "Kirimkan data formulir ke Email",
        "Melanjutkan Website"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Submit to Email and Create Modal",
      "objectives": [
        "Mengsubmmit  data form ke email",
        "Membuat Modal dengan HTML,CSS, dan JavaScript",
        "Melanjutkan Website"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Image Slider Using For Each",
      "objectives": [
        "Membuat Manual dan Autoplay Image Sliders",
        "Memahami metode forEach",
        "Cek pemahaman 2"
      ]
    },
    {
      "num": 17,
      "title": "Lesson 17 - Exploring Tools and Create About Page",
      "objectives": [
        "Menjelajahi tools untuk membuat Blob, Background, dan Waves",
        "Melanjutkan Website"
      ]
    },
    {
      "num": 18,
      "title": "Lesson 18 - CSS Transition and Animation",
      "objectives": [
        "Mempelajari transisi dan animasi CSS",
        "Mengetahui perbedaan antara transisi dan animasi",
        "Mengimplementasikan reveal on scroll"
      ]
    },
    {
      "num": 19,
      "title": "Lesson 19 - Responsive Website",
      "objectives": [
        "Membuat responsive website"
      ]
    },
    {
      "num": 20,
      "title": "Lesson 20 - Create Your Own Website",
      "objectives": [
        "Mengetahui proses development",
        "Memilih tipe website yang akan dibuat",
        "Membuat design website"
      ]
    },
    {
      "num": 21,
      "title": "Lesson 21 - Create Your Own Website",
      "objectives": [
        "Mempersiapkan Struktur Project",
        "Membuat Header, Footer, dan Home page"
      ]
    },
    {
      "num": 22,
      "title": "Lesson 22 - Create Your Own Website",
      "objectives": [
        "Membuat Halaman Detail dan Halaman about page"
      ]
    },
    {
      "num": 23,
      "title": "Lesson 23 - Create Your Own Website",
      "objectives": [
        "Membuat Halaman Kontak",
        "Membuat Website Lebih Responsif"
      ]
    },
    {
      "num": 24,
      "title": "Lesson 24 - Create Your Own Website",
      "objectives": [
        "Deploy Situs Web ke Netlify",
        "Presentasi"
      ]
    }
  ],
  "Android Developer": [
    {
      "num": 1,
      "title": "Lesson 1 - React Native Framework and Components",
      "objectives": [
        "Pengenalan React Native Framework",
        "View, Text, Button Component",
        "Mengatur Tampilan Component"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Styling Your Layout",
      "objectives": [
        "Mempelajari Layout Style",
        "Memahami Box Model",
        "Mempelajari Text Style",
        "Mempelajari TouchableOpacity Component"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Flex Layout and Add Image",
      "objectives": [
        "Memahami Flex layout dan Flex Direction",
        "Menambahkan Image Component",
        "Mempelajari Image Style",
        "Menambahkan ScrollView Component"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Props and Reusable Component",
      "objectives": [
        "Mempelajari ImageBackground & Text Input Component",
        "Mempelajari Properti Opacity",
        "Mempelajari Props",
        "Mempelajari Reusable Component"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Add Custom Font and Icon into a Popular Layout",
      "objectives": [
        "Menambahkan Custom Font",
        "Menambahkan Icon",
        "Membuat Popular Layout"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - React Native Hooks",
      "objectives": [
        "Mengenal Hooks pada React Native",
        "Mempelajari  Penggunaan useState dan useEffect",
        "Mempelajari setTimeout",
        "Membuat Project Guess the Country Screen"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Stack Navigation and Another Way of using useEffect",
      "objectives": [
        "Mempelajari Stack Navigation",
        "Mempelajari Cara Lain Penggunaan useEffect Hook",
        "Mengenal Properti flexGrow"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Review and Middle Test",
      "objectives": [
        "Review concepts",
        "Middle  exam"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - FlatList and StyleSheet",
      "objectives": [
        "Mengenal FlatList pada React Native",
        "Mempelajari StyleSheet pada React Native",
        "Membuat Home Screen Movie Collection Project"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Learn More About FlatList and Sort The Data",
      "objectives": [
        "Mempelajari Tentang Horizontal FlatList",
        "Menambahkan Component Lain sebelum dan setelah FlatList",
        "Mengurutkan Data Array of Objects"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Ternary Operator and  Combine StyleSheet with Inline Style",
      "objectives": [
        "Mempelajari Mengenai Ternary Operator",
        "Menggabungkan StyleSheet dan Inline Style",
        "Melanjutkan Home Screen Movie Collection Project"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Passing Data Between Screens",
      "objectives": [
        "Mempelajari Cara Mengirim Data ke Screen lainnya",
        "Mempelajari Cara Menerima Data yang Telah Dikirim",
        "Membuat Detail Movie Screen"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Empty FlatList and Column in FlatList",
      "objectives": [
        "Menampilkan 3 Data Teratas",
        "Menampilkan Pesan saat Tidak Ada Data pada FlatList",
        "Mempelajari Cara Menambah Kolom pada FlatList",
        "Membuat Most Viewed Movie Screen"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Change The Header in Stack Navigation",
      "objectives": [
        "Mempelajari Cara Mengubah Header",
        "Membuat Recommended Movie Screen"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Android Apps Development 1 Exam Part 1",
      "objectives": [
        "Android Apps Development 1 Exam Part 1"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Android Apps Development 1 Exam Part 2",
      "objectives": [
        "Android Apps Development 1 Exam Part 2"
      ]
    }
  ],
  "Python for AI": [
    {
      "num": 1,
      "title": "Lesson 1 - Introduction to AI and Machine Learning",
      "objectives": [
        "Mengetahui konsep Artificial Intelligence",
        "Mengetahui penerapan AI di kehidupan sehari-hari",
        "Mengetahui cakupan AI",
        "Mengetahui cara kerja Machine Learning"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - OOP (Object Oriented Programming)",
      "objectives": [
        "Memahami konsep OOP",
        "Membedakan Object, Class, Method, dan Property",
        "Mengetahui konsep inheritence di OOP",
        "Membuat game sederhana menggunakan OOP"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Tic Tac Toe With Numpy",
      "objectives": [
        "Menggunakan Numpy Library",
        "Membuat Numpy Array (1D, 2D, 3D) dan memanipulasinya",
        "Mengetahui Operasi Dasar pengolahan Numpy Array",
        "Membuat project TicTacToe menggunakan Numpy"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - OpenCV Image Manipulation",
      "objectives": [
        "Mengetahui konsep Computer Vision",
        "Menggunakan OpenCV Library",
        "Mengetahui konsep Image Processing",
        "Mengetahui teknik blurring menggunakan OpenCV",
        "Mengetahui Image Manipulation menggunakan OpenCV"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - OpenCV Color Processing and Cartoonizer Image",
      "objectives": [
        "Mengetahui image processing gray scale image di OpenCV",
        "Mengetahui konsep Canny Edge Detector dan Countour Detection",
        "Mengetahui cara mengidentifikasi warna di OpenCV",
        "Membuat project Image Cartoonize"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Face Detection",
      "objectives": [
        "Menggunakan Pre-trained model dan Machine Learning Framework",
        "Membuat aplikasi face detection di gambar",
        "Membuat aplikasi face detection di video"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - MobileNetSSD Object Detection",
      "objectives": [
        "Mengetahui arsitektur model Single Shot Detector (SSD)",
        "Dapat membuat project Object Detection menggunakan Model SSD",
        "Mengimplementasikan project object Detector baik itu di gambar atau di video"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Summary and Exam",
      "objectives": [
        "Review materi meeting 1 - 7",
        "Uji pemahaman Kognitif ( GForm Exam)",
        "Uji pemahaman coding (Coding exam)"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Object Detection VS Object Tracking",
      "objectives": [
        "Mengetahui konsep Object Tracking dan cara kerjanya",
        "Mengetahui perbedaan Object Detection dan Tracking",
        "Mengetahui konsep Euclidean Distance Tracker",
        "Mengetahui konsep countour detection",
        "Mengetahui konsep image thresholding"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Euclidean Distance Tracker Class",
      "objectives": [
        "Mengaplikasikan penggunaan Euclidean Distance Tracker Class",
        "Menambahkan Unique Identification dari object yang terdeteksi untuk proses tracking",
        "Menambahkan \"marker\" untuk object yang sedang di track"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Hand Landmarks Detection",
      "objectives": [
        "Pengenalan Mediapipe Library untuk landmark detection",
        "Menggunakana Mediapipe untuk Holistic Tracking",
        "Mendalami konsep Image Manipulation di Video Frames",
        "Membuat project Virtual Painter"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Find Landmark Position",
      "objectives": [
        "Mencari posisi landmark tangan menggunakan method enumerate()",
        "Mengetahui klasifikasi landmark pada tangan",
        "Menginisialisasi mode pada project Virtual Painter (Selection dan Drawing)",
        "Finishing project dengan teknis Video Frame Masking"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Mediapipe Face Mesh",
      "objectives": [
        "Mengetahui anatomi Face Mesh di Mediapipe",
        "Menggambar landmark menggunakan Face Mesh Landmark model",
        "Membuat project Pig Face Filter menggunakan Mediapipe"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Mediapipe Facial Area",
      "objectives": [
        "Mengetahui implementasi dari Face Mesh Landmark",
        "Mengetahui Facial Area yang ada di dalam Mediapipe",
        "Membuat project Face FIlter Dragon Project",
        "Membuat class Face Mesh untuk mendeteksi Facial Area"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Detect Mouth and Eye",
      "objectives": [
        "Mengidentifikasi apakah mulut terbuka atau tidak",
        "Mengidentifikasi nomor landmark pada facial mesh",
        "Melakukan Video masking untuk menempelkan efek filter ke dalam frames"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Final Exam",
      "objectives": [
        "Review Concept",
        "Uji pemahaman Kognitif ( GForm Exam)",
        "Uji pemahaman coding (Coding exam)"
      ]
    }
  ],
  "Python Game Developer": [
    {
      "num": 1,
      "title": "Lesson 1 - Introduction to Pygame",
      "objectives": [
        "Memperkenalkan konsep terkait Game Development test",
        "Mengetahui bagaimana mendevelop game menggunakan Pygame",
        "Mengetahui bagaimana cara setting environtment di Pygame",
        "Mengetahui bagaimana konsep event controller bekerja",
        "Mengetahui bagaimana cara menambahkan object di dalam Pygame"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Add Another Sprite for Snake Game",
      "objectives": [
        "Mengetahui bagaimana cara inisialisasi FPS di dalam Pygame",
        "Menambahkan object lain ke dalam Pygame canvas",
        "Mengetahui bagaimana cara berpindah layout dalam Pygame",
        "Mengetahui apa fungsi FPS dalam Game Development",
        "Mengetahui list operational dalam Python",
        "Mengetahui cara menambahkan text ke dalam layout Pygame"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Load Image Sprite in Astro Man",
      "objectives": [
        "Mengetahui functional programming style (modular dan reusable)",
        "Membuat screen menggunakan function",
        "Mengetahui management folder di dalam Pygame",
        "Mengetahui bagaimana cara load assets di Pygame",
        "Mengetahui bagaimana cara render gambar di Pygame",
        "Mengetahui cara load dan play sound effect"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Spawn The Pipe",
      "objectives": [
        "Mengetahui Gravity Concept dalam game",
        "Mengetahui perbedaan Velocity dan Acceleration",
        "Dapat menggerakan object secara static",
        "Remove object from the Window"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Create Collide Event",
      "objectives": [
        "Mengetahui bagaimana cara kerja collide sprite lebih complex",
        "Mengetahui kondisi collide dalam game dan dikemas dalam sebuah function",
        "Mengetahui bagaimana cara akses global variabel",
        "Mengetahui bagaimana cara setting high score di dalam Game"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Multiplayer Space Shooter",
      "objectives": [
        "Review ulang materi syntax penting yang biasa digunakan dalam Python Game Development",
        "Mengenal konsep multiplayer game",
        "Mengenal macam-macam fungsi tranform pada Pygame",
        "Memperdalam terkait function scale and rotate dalam pygame"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - Spawn the Bullet and Make the Ship Move",
      "objectives": [
        "Lebih mendalami Behavior pygame.Rect() !",
        "Mendalami konsep velocity untuk membuat object bergerak",
        "Memahami konsep method pygame.key.get_pressed()",
        "Membuat kode menjadi lebih modular dengan memecar program menjadi beberapa function"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Finishing the Space Shooter !",
      "objectives": [
        "Memahami cara membuat custom event or user event di dalam Pygame",
        "Memahami bagaimana menerima broadcast user event atau custom event di dalam Pygame",
        "Memahami cara membuat winning screen game !",
        "Mengetahui cara Convert Pygame menjadi executable file"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Runner Game",
      "objectives": [
        "Memahami konsep dan terminologi animation secara umum",
        "Memahami bagaimana membuat animation sprite di Pygame",
        "Menambahkan font external ke dalam Pygame",
        "Mengetahui function time() lebih lanjut"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Spawn The Enemy",
      "objectives": [
        "Mendalami lebih dalam terkait gravitasi dalam game",
        "Mengimplementasikan animation frame untuk sprite yang lebih banyak",
        "Memahami pengkondisian ketika melakukan spawing object atau enemy",
        "Menambahkan background sound ke dalam game"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Publish your game",
      "objectives": [
        "Explorasi ide untuk project mandiri",
        "Mengumpulkan assets untuk project mandiri",
        "Membuat timeline development game",
        "Mempersiapkan folder environtment untuk project"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - Create your own game",
      "objectives": [
        "Explorasi ide untuk project mandiri",
        "Mengumpulkan assets untuk project mandiri",
        "Membuat timeline development game",
        "Mempersiapkan folder environtment untuk project"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - Create your own game (Explore)",
      "objectives": [
        "Melanjutkan progress development project",
        "Design Screen untuk project mandiri",
        "Review Coordinates System di Pygame",
        "Menambahkan sprite ke dalam game"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - Create Your Own Game (Coding the Logic )",
      "objectives": [
        "Melanjutkan progress development project",
        "Coding Logic untuk Game",
        "Membuat sprite bergerak",
        "Menambahkan enemies untuk game"
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Create Your Own Game (Finishing and Build Your Project)",
      "objectives": [
        "Testing and Debugging",
        "Mendefinisikan Game Over Condition",
        "Presentasi dan Revisi project",
        "Finishing project"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - CreateYour Own Game (Build and Publish your Game)",
      "objectives": [
        "Build game menjadi executable file",
        "Publish the game"
      ]
    }
  ],
  "Python Coder": [
    {
      "num": 1,
      "title": "Lesson 1 - Intro to Python",
      "objectives": [
        "Mengenalkan Python dan aturan penggunaannya bahasanya",
        "Mengenalkan extension untuk mempermudah coding Python",
        "Mengetahui cara menampilkan hasil output dengan perintah print",
        "Mengetahui penulisan operator matematika dalam Python"
      ]
    },
    {
      "num": 2,
      "title": "Lesson 2 - Variable and List in Python",
      "objectives": [
        "Mengenalkan konsep variable dan cara menggunakannya",
        "Mengenalkan perintah input untuk meminta respon dari user",
        "Mengenalkan jenis data types dalam python",
        "Mengenalkan konsep List dan cara menggunakannya",
        "Menggambar bentuk menggunakan Python Turtle"
      ]
    },
    {
      "num": 3,
      "title": "Lesson 3 - Data Structure to Store Multiple Items",
      "objectives": [
        "Mengenalkan konsep data struktur dan tipenya",
        "Mengetahui cara mengolah data pada List, Tuple, dan Dictionary",
        "Mengenalkan konsep List 2 Dimensi dan cara menggunakannya",
        "Mengetahui cara memilih data secara acak dengan Random Module"
      ]
    },
    {
      "num": 4,
      "title": "Lesson 4 - Doing Loops in Python",
      "objectives": [
        "Mengenalkan Loops untuk pembuatan coding",
        "Mengenalkan jenis dan perbedaan Loops (For, While) serta cara menggunakannya",
        "Mengenalkan pentingnya memberikan indentasi dalam penulisan coding",
        "Mengetahui penggunaan loops untuk mempersingkat penulisan coding"
      ]
    },
    {
      "num": 5,
      "title": "Lesson 5 - Conditional and Conditional Loops",
      "objectives": [
        "Mengenalkan Konsep Conditional dan penggunaan if, elif, dan else untuk membuat kondisi",
        "Mengenalkan konsep dan penggunaan operator perbandingan dan logika dalam conditional",
        "Mengenalkan konsep case sensitive dengan lower sebagai solusinya",
        "Mengenalkan konsep conditional loops serta cara penggunaannya dengan While dan If"
      ]
    },
    {
      "num": 6,
      "title": "Lesson 6 - Creating Function",
      "objectives": [
        "Mengenalkan konsep Function dan Jenis nya",
        "Mengetahui cara menggunakan built-in function",
        "Membuat manual function sendiri untuk fungsi tertentu"
      ]
    },
    {
      "num": 7,
      "title": "Lesson 7 - One-Liner, Scope, and Function Parameters",
      "objectives": [
        "Mengenalkan konsep penulisan coding one liner",
        "Mengenalkan konsep penulisan coding one liner",
        "Mengenalkan dan menggunakan function parameters dalam program"
      ]
    },
    {
      "num": 8,
      "title": "Lesson 8 - Python Coder Middle Exam",
      "objectives": [
        "Middle Exam Python Coder - Form",
        "Middle Exam Python Coder - Fill The Blank Codes"
      ]
    },
    {
      "num": 9,
      "title": "Lesson 9 - Object Oriented Programming (OOP)",
      "objectives": [
        "Mengenalkan Object Oriented Programming"
      ]
    },
    {
      "num": 10,
      "title": "Lesson 10 - Intro to Python Module",
      "objectives": [
        "Mengenalkan dan mencoba Artificial Intelligence"
      ]
    },
    {
      "num": 11,
      "title": "Lesson 11 - Intro to Python TKinter",
      "objectives": [
        "Mengenalkan dan menggunakan TKinter module",
        "Mengenalkan dan menggunakan komponen pada TKinter"
      ]
    },
    {
      "num": 12,
      "title": "Lesson 12 - TKinter Message and Input Box  with Label and Button",
      "objectives": [
        "Mengenalkan Message Boxes, Input Boxes, Labels, dan Buttons",
        "Mengetahui cara menggunakan Message Boxes, Input Boxes, Labels, dan Buttons"
      ]
    },
    {
      "num": 13,
      "title": "Lesson 13 - TKinter Canvas Coordinates",
      "objectives": [
        "Mengenalkan dan mempelajari cara menggunakan koordinat pada canvas"
      ]
    },
    {
      "num": 14,
      "title": "Lesson 14 - TKinter Mouse Events",
      "objectives": [
        "Memahami konsep events."
      ]
    },
    {
      "num": 15,
      "title": "Lesson 15 - Final Exam Python Coder Part 1",
      "objectives": [
        "Mengerjakan Google Form Exam"
      ]
    },
    {
      "num": 16,
      "title": "Lesson 16 - Final Exam Python Coder Part 2",
      "objectives": [
        "Melanjutkan Final Exam"
      ]
    }
  ]
});
