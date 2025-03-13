# Converta - Aplikasi Konversi Unit Modern

![Converta Logo](public/logo.png)

Converta adalah aplikasi konversi unit yang kuat dan intuitif yang bekerja secara offline. Konversi antar berbagai jenis unit dengan mudah dan dapatkan hasil real-time.

## 🌟 Fitur Utama

- **Konversi Real-time**: Lihat hasil konversi secara instan saat Anda mengetik
- **Berbagai Kategori Unit**: Panjang, berat, volume, waktu, suhu, dan banyak lagi
- **Antarmuka Intuitif**: Desain modern dengan UX yang mudah digunakan
- **Konversi Balik**: Beralih antar unit sumber dan target dengan mudah
- **Salin ke Clipboard**: Salin hasil konversi dengan satu klik
- **Ekspor Hasil**: Simpan hasil konversi dalam format CSV
- **Mode Gelap**: Nyaman di mata saat bekerja di malam hari
- **Responsif**: Bekerja dengan baik di perangkat desktop, tablet, dan mobile
- **Offline Support**: Bekerja sebagai Progressive Web App bahkan tanpa koneksi internet


## 🛠️ Teknologi yang Digunakan

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Static type-checking
- [Vite](https://vitejs.dev/) - Build tool dan development server
- [React Router](https://reactrouter.com/) - Routing
- [Framer Motion](https://www.framer.com/motion/) - Animasi
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Komponen UI yang dapat digunakan kembali
- [Lucide React](https://lucide.dev/) - Library Icon

## ⚙️ Instalasi dan Pengaturan

### Prasyarat

- Node.js (versi 16 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. Clone repositori
```bash
git clone https://github.com/username/converta.git
cd converta
```

2. Instal dependensi
```bash
npm install
# atau
yarn install
```

3. Jalankan server pengembangan
```bash
npm run dev
# atau
yarn dev
```

4. Buka browser dan akses `http://localhost:8080`

## 📁 Struktur Proyek

```
converta/
├── public/              # Aset statis (gambar, favicon, dll)
├── src/                 # Kode sumber
│   ├── components/      # Komponen React yang dapat digunakan kembali
│   │   ├── ui/          # Komponen UI dasar (shadcn/ui)
│   ├── context/         # Context Provider React
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilitas dan fungsi pembantu
│   ├── pages/           # Komponen halaman utama
│   ├── App.tsx          # Komponen root aplikasi
│   ├── index.css        # Stylesheet global
│   └── main.tsx         # Entry point aplikasi
├── .gitignore           # File dan direktori yang diabaikan Git
├── index.html           # Template HTML
├── package.json         # Dependensi dan skrip
├── tailwind.config.js   # Konfigurasi Tailwind CSS
├── tsconfig.json        # Konfigurasi TypeScript
└── vite.config.ts       # Konfigurasi Vite
```

## 🌐 Deployment

Untuk men-deploy aplikasi:

1. Buat build produksi
```bash
npm run build
# atau
yarn build
```

2. Output build akan disimpan di direktori `dist/` yang siap untuk di-deploy ke platform hosting apa pun.

### Platform Hosting yang Direkomendasikan

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin berkontribusi:

1. Fork repositori
2. Buat branch fitur (`git checkout -b feature/amazing-feature`)
3. Commit perubahan Anda (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## 📝 Lisensi

Proyek ini dilisensikan di bawah [Lisensi MIT](LICENSE).

## 📧 Kontak

Muhammad Rafa Shaquille Pradana - [@rafapradanaa](https://x.com/rafapradanaa) - rafa.s.pradana@gmail.com

Link Proyek: [https://github.com/username/converta](https://github.com/username/converta)

---

Dibuat dengan ❤️ oleh Muhammad Rafa Shaquille Pradana
