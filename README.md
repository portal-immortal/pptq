# 🕌 PPTQ Nurul Iman — Website Resmi

Website resmi **Pondok Pesantren Tahfidzil Qur'an (PPTQ) Nurul Iman**  
Kp. Cipayung, Desa Sukaharja, Kec. Ciomas, Kab. Bogor, Jawa Barat 16610

---

## 🛠️ Tech Stack

| Teknologi | Keterangan |
|-----------|------------|
| [Astro](https://astro.build) v4 | Static site generator |
| [TailwindCSS](https://tailwindcss.com) v3 | Utility-first CSS |
| GitHub Pages | Hosting gratis |
| GitHub Actions | Auto-deploy CI/CD |

---

## 🚀 Menjalankan Lokal

```bash
npm install
npm run dev
# Buka: http://localhost:4321/
```

## 🌐 Deploy ke GitHub Pages

1. Edit `astro.config.mjs` — ganti `YOUR_USERNAME` dengan username GitHub Anda
2. Push ke branch `main`
3. Settings → Pages → Source: **GitHub Actions**
4. Website live di: `https://YOUR_USERNAME.github.io/`

---

## 📁 Halaman

| URL | Halaman |
|-----|---------|
| `/` | Beranda |
| `/profil` | Profil & Visi Misi |
| `/sejarah` | Sejarah sejak 2006 |
| `/program-pendidikan` | Program Tahfidz |
| `/kegiatan-santri` | Kegiatan Harian |
| `/galeri` | Galeri Foto |
| `/berita` | Berita & Info |
| `/pendaftaran` | Form Pendaftaran |
| `/kontak` | Kontak & Maps |

---

## 📞 Data Kontak Pesantren

- **Pengasuh Putri:** Umi Hj. Eli HS, SQ — 0858-8751-6141
- **Pengasuh Putra:** KH. Ubaidilah — 0813-1703-0272
- **Email:** pptqnurulimancipayung@gmail.com
- **Instagram:** @pptqnuruliman_official
- **Maps:** https://maps.app.goo.gl/os3twwASvpf2DxaZ6

---

## ✏️ Cara Update Konten

**Tambah Berita Baru:** Buat file di `src/content/berita/nama.md`:
```markdown
---
title: "Judul Berita"
date: 2025-04-01
image: "/pptq/images/latest-news/foto.jpg"
excerpt: "Ringkasan berita..."
author: "Admin PPTQ"
tags: ["tag"]
---
Isi berita di sini...
```

**Update Google Maps:** Di `src/pages/kontak.astro`, ganti `src` di `<iframe>` dengan embed URL dari Google Maps pesantren.

---

*اللّٰهُمَّ اجْعَلْنَا مِنْ أَهْلِ الْقُرْآنِ*
