## **ThriftEase - Aplikasi E-commerce untuk Thrift**  

Selamat datang di repositori **ThriftEase**! Ini adalah proyek aplikasi e-commerce berbasis web yang dikembangkan menggunakan stack modern seperti **React, Remix, TypeScript**, dan **MySQL**. ThriftEase memungkinkan pengguna untuk membeli dan menjual produk thrift dengan mudah dan nyaman.  

### **Fitur Utama**  
- **Autentikasi Pengguna:** Login dan registrasi pengguna.  
- **Manajemen Produk:** Tambah, edit, dan hapus produk.  
- **Keranjang Belanja:** Pengguna dapat menambahkan barang ke keranjang dan melanjutkan ke pembayaran.  
- **Kupon Diskon:** Mendukung kode kupon untuk promosi.  
- **Dashboard Admin:** Mengelola pengguna dan pesanan dari backend.  
- **Sistem Pembayaran:** Integrasi dengan gateway pembayaran.  

---

## **Tech Stack**  
- **Frontend:**  
  - React + Remix  
  - Vite  
  - Tailwind CSS + PostCSS  
  - TypeScript  

- **Backend:**  
  - Node.js + Remix  
  - MySQL dengan Prisma ORM  

- **Tools dan Konfigurasi:**  
  - **pnpm** untuk manajemen paket  
  - **ESLint** dan **Prettier** untuk menjaga konsistensi kode  
  - **Prisma** untuk migrasi dan akses basis data  

---

## **Instalasi dan Konfigurasi**  

### **Prasyarat**  
- Node.js (versi terbaru)  
- MySQL server  
- pnpm (manajer paket)  

### **Cara Menjalankan Proyek**  
1. **Clone repositori ini**  
   ```bash
   git clone https://github.com/nama-user/thriftease.git
   cd thriftease
   ```

2. **Instal PNPM (opsional)**
   ```bash
   npm install -g pnpm
   ```

3. **Instal dependensi**  
   ```bash
   pnpm install
   ```

4. **Konfigurasi Basis Data**  
   - Buat database MySQL dan sesuaikan pengaturan di file `.env`.  
   - Contoh konfigurasi `.env`:  
     ```dotenv
     DATABASE_URL="mysql://user:password@localhost:3306/nama_database"
     ```

4. **Migrate database dengan Prisma**  
   ```bash
   pnpm prisma migrate dev --name init
   ```

5. **Jalankan aplikasi dalam mode pengembangan**  
   ```bash
   pnpm dev
   ```

6. **Akses Aplikasi**  
   Aplikasi akan berjalan di `http://localhost:3000`.

---

## **Struktur Proyek**  
```plaintext
thriftease/
│
├── prisma/            # Skema Prisma untuk database MySQL
├── public/            # File statis (gambar, dll.)
├── src/               
│   ├── components/    # Komponen UI
│   ├── routes/        # Rute Remix
│   ├── styles/        # Konfigurasi Tailwind dan PostCSS
│   ├── utils/         # Fungsi utilitas
│   └── index.tsx      # Entry point aplikasi
├── .eslintrc.cjs      # Konfigurasi ESLint
├── .prettierrc        # Konfigurasi Prettier
├── postcss.config.js  # Konfigurasi PostCSS
├── tailwind.config.js # Konfigurasi Tailwind CSS
└── vite.config.ts     # Konfigurasi Vite
```

---

## **Script Penting**  
- **Menjalankan Aplikasi:**  
  ```bash
  pnpm dev
  ```

- **Membangun untuk Produksi:**  
  ```bash
  pnpm build
  ```

- **Menjalankan Prisma Studio (GUI database):**  
  ```bash
  pnpm prisma studio
  ```

- **Linting Kode:**  
  ```bash
  pnpm lint
  ```

---

## **Kontribusi**  
Kami terbuka untuk kontribusi! Silakan fork repositori ini dan ajukan pull request dengan perubahan atau perbaikan yang Anda buat. Pastikan kode Anda konsisten dengan standar yang ditetapkan oleh ESLint dan Prettier.

---

## **Lisensi**  
ThriftEase, dikembangkan sebagai bagian dari proyek akademik di [Universitas Negeri Malang]. Proyek ini dilindungi oleh Hak Kekayaan Intelektual (HKI) yang dikelola oleh universitas dan tunduk pada ketentuan serta peraturan yang berlaku.(LICENSE)

---

## **Kontak**  
Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk menghubungi kami melalui [4315thriftease@gmail.com](mailto:4315thriftease@gmail.com).  

---
