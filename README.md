
# SweetSense

SweetSense adalah aplikasi mobile yang dirancang untuk membantu pengguna menemukan dan membuat berbagai jenis dessert dengan cara yang mudah, praktis, dan menyenangkan. Aplikasi ini menghadirkan lebih dari 50 resep penutup dari lima kategori rasa utama—manis, asam, asin, pahit, dan gurih—dilengkapi dengan foto hasil akhir, daftar bahan yang sederhana, serta langkah pembuatan yang jelas dan mudah diikuti. Dengan tampilan antarmuka yang menarik dan ramah pengguna, SweetSense cocok untuk siapa saja, baik pemula 


## Features

1. Halaman Home

Ketika pengguna pertama kali membuka aplikasi Sweetsense, sistem akan menampilkan halaman Home. Pada halama ini terdapat lima kategori utama rasa dessert, yaitu Asin, Manis, Gurih, Pahit dan Asam. Setiap kategori ditampilkan dalam bentuk Card Bootstrap yang memuat ikon ilustratif serta nama kategori. Tata letak menggunakan struktur grid sehingga tampilan tetap responsif pada berbagai ukuran layar. Halaman Home juga terdapat Horizontal Icon List yang berfungsi untuk memilih kategori rasa. Ketika pengguna memilih salah satu kategori (misalnya Asin), sistem akan mengarahkan pengguna ke halaman daftar resep yang sesuai dengan kategori tersebut. Halaman Home juga terdapat fitur utama Bottom Navigation Bar, yaitu Home dan Favorit.

2. Halaman Daftar Resep per kategori

Halaman daftar resep menampilkan 10 menu dessert yang sesuai dengan kategori rasa yang dipilih. Setiap resep ditampilkan dalam bentuk Card yang berisis:


- Gambar atau foto hidangan dessert
- Nama Dessert
- Ikon love di sisi kanan atas Card. Ikon love tersebut berfungsi sebagai tombol interaksi untuk menandai resep favorit. Ketikan ikon tersebut ditekan, tampilannya akan berbuah heart-fill, menandakan bahwa resep tersebut telah ditambahkan ke daftar favorit. Data resep yang disukai (love) pengguna akan tersimpan meskipun aplikasi ditutup. Selain itu, setiap Csrd resep juga memiliki fungsi klik pada area gambar atau teks judul resep. Jika di klik, pengguna akan diarahkan ke halaman detail resep.   

3. Halaman Detail Resep

Halaman detail resep menampilkan informasi lengkap mengenai suatu dessert yang dipilih oleh pengguna. Elemen-elemen utama pada halaman ini meliputi:
- Foto utama hidangan dalam ukuran lebih besar.
- Nama resep dan deskripsi singkat
- Daftar bahan-bahan yang dibutuhkan
- Langkah-langkah pembuatan secara berurutan dan detail.
- Tombol “Tambahkan ke Favorit” yang berfungsi  untuk menambahkan atau menghapus resep dari daftar favorit.
Desain halam ini menggunakan komponen Card Bootstrap dengan tata letak vertikal dan jarak antar elemen yang proposional. 

4. Halaman Favorit
Halaman Favorit dapat diakses melalui ikon ❤️ pada Bottom Navigation Bar. Halaman ini menampilkan kumpulan resep yang telah disukai oleh pengguna sebelumnya. Setiap resep favorit ditampilkan dalam bentuk Card dengan bentuk yang sama seperti halaman daftar resep, yaitu berisi foto, nama dessert, dan ikon love penuh berwarna merah. Pengguna dapat menekan kembali ikon love pada Card tersebut untuk menghapus dari daftar favorit. Setelah dihapus, data pada halaman favorit akan diperbarui secara otomatis.

5. Navigasi dan Interaksi Pengguna
Navigasi utama aplikasi berada pada bagian bawah layar menggunakan elemen Bootstrap NavBar dengan properti fixed-bottom. NavBar ini memiliki dua ikon utama:
🏠 Home untuk mengarahkan pengguna ke halaman kategori rasa (Asin, Manis, Gurih, Asam, dan Pahit)
❤️ Favorit untuk mengarahkan pengguna ke halaman resep yang telah disukai
Pengguna dapat berpindah antar halaman dengan cepat tanpa melakukan refresh halaman. Seluruh alur aplikasi di desain agar intuitif, interaktif, dan efisien dengan memanfaatkan komponen Bootstrap seperti container, card, gird, button, dan icon (Bootstrap icons)

6. Alur Navigasi Secara Umum
Secara garis besar, alur penggunaan aplikasi SweetSense dapat dijelaskan sebagai berikut:
- Pengguna membuka aplikasi dan berada pada halam Home
- Pengguna memilih salah satu kategori rasa (Asin, Manis, Gurih, Pahit, dan Asam)
- Sistem menampilkan daftar resep sesuai kategori yang dipilih
- Pengguna dapat menekan ikon love untuk menambahkan resep terfavorit, dan menekan foto atau nama resep untuk melihat setail resep 
- Pengguna dapat berpindah ke halaman Favorit untuk melihat semua resep yang telah disukai pengguna
- Pengguna dapat menghapus resep dari daftar favorit dengan menekan ikon love kembali





## Jobdesk 

1. Ketua 
- Mengatur alur kerja dan timeline proyek.
- Membagi tugas sesuai kemampuan anggota tim.
- Memastikan komunikasi antar anggota berjalan lancar.
- Melakukan monitoring progres harian/mingguan.
- Mengambil keputusan penting terkait fitur, desain, dan prioritas.
- Menjadi penghubung antara tim dengan dosen pembimbing/klien (jika ada).
- Mengkoordinasikan testing dan finalisasi aplikasi sebelum presentasi.

2. Frontend
- Mendesain tampilan aplikasi (layout, warna, icon, navigasi).
- Mengimplementasikan desain ke dalam kode (misalnya menggunakan Flutter, React Native, atau Android Studio).
- Menjamin tampilan responsif dan user-friendly di berbagai perangkat.
- Berkolaborasi dengan backend untuk menghubungkan API ke tampilan.
- Melakukan uji coba tampilan (UI testing) agar sesuai dengan alur pengguna.

3. Backend
- Mendesain dan mengembangkan struktur database (misalnya Firebase, MySQL, PostgreSQL).
- Mengembangkan API (Application Programming Interface) untuk komunikasi antara frontend dan server.
- Menangani autentikasi user, penyimpanan data, serta proses logika utama aplikasi.
- Menjamin keamanan dan efisiensi data.
- Melakukan debugging serta maintenance pada sisi server/backend.

4. Asset
- Mendesain dan menyiapkan semua aset visual seperti ikon, ilustrasi, logo, gambar, animasi, dan font.
- Menyesuaikan gaya visual agar konsisten dengan tema aplikasi.
- Bekerja sama dengan frontend agar desain diterapkan sesuai proporsi.
- Mengelola penyimpanan dan dokumentasi aset agar mudah diakses seluruh tim.

5. Reminder
- Membuat jadwal kerja, deadline, dan pengingat tugas tim.
- Memastikan tiap anggota menyelesaikan tugas tepat waktu.
- Mengarsipkan hasil kerja dan laporan progres (harian/mingguan).
- Menyusun laporan aktivitas tim untuk keperluan evaluasi atau presentasi.
- Mengingatkan leader bila ada kendala dari anggota lain agar segera ditindak.


## Hai, kami anggota SweetSense 👋

Saya Bryan. Saat ini saya sedang menempuh pendidikan S-1 Bisnis Digital di Univeristas Sugeng Hartono.

Saya Laela. Saat ini saya sedang menempuh pendidikan S-1 Bisnis Digital di Univeristas Sugeng Hartono.

Saya Latifah. Saat ini saya sedang menempuh pendidikan S-1 Bisnis Digital di Univeristas Sugeng Hartono.

Saya Shella. Saat ini saya sedang menempuh pendidikan S-1 Bisnis Digital di Univeristas Sugeng Hartono.

Saya Annisa. Saat ini saya sedang menempuh pendidikan S-1 Bisnis Digital di Univeristas Sugeng Hartono
## 🔗 Links
1. https://github.com/moshabryan
2. https://github.com/Laela047
3. https://github.com/tifaahh
4. https://github.com/Shellardt
5. https://github.com/anissa33 

