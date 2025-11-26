# ✨ Elaina's Video Downloader

Web application untuk mendownload video dari Facebook dan TikTok dengan tema elegant terinspirasi dari **"Wandering Witch: The Journey of Elaina"**.

---

## 🌟 Fitur

- ✅ Download video **Facebook** (Reel, Share link, Video post, fb.watch)
- ✅ Download video **TikTok** (HD/SD, dengan/tanpa watermark)
- ✅ Download audio MP3 dari TikTok
- ✅ Auto-detect platform dari URL
- ✅ Preview thumbnail untuk TikTok
- ✅ Backend API untuk Facebook (Vercel Serverless Function)
- ✅ Theme elegant lavender & purple (Elaina inspired)
- ✅ Responsive design untuk mobile & desktop

---

## 📋 Cara Menggunakan

### 1. Buka Website

Akses website di: **https://elaina-helper.vercel.app**

### 2. Copy Link Video

**Facebook:**
- Klik Share → Copy Link
- Atau copy dari address bar
- Format yang didukung: `/reel/`, `/share/v/`, `/videos/`, `fb.watch`

**TikTok:**
- Klik Share → Copy Link
- Format: `tiktok.com/@username/video/id` atau `vt.tiktok.com`

### 3. Paste & Download

1. Paste link video di kolom input
2. Klik tombol **"✦ Cast Download Spell ✦"**
3. Tunggu proses fetching (15-20 detik)
4. Pilih kualitas yang diinginkan
5. Video akan otomatis terdownload

---

## 🏗️ Teknologi

### Frontend
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts: Cinzel & Cormorant Garamond
- Tema warna: Lavender (#9370DB), Purple (#8B7AB8), Silver (#D3CCE3)

### Backend
- **Vercel Serverless Functions** (Node.js)
- API Endpoint: `/api/facebook`

### APIs
- **Cobalt API** - Universal downloader (primary)
- **Facebook API** - Custom backend (fdown.isuru.eu.org)
- **TikWm API** - TikTok fallback

---

## 📁 Struktur Project

```
project/
├── index.html          # Main UI
├── style.css           # Styling (Elaina theme)
├── script.js           # Download logic
├── elaina.png          # Character image
├── api/
│   └── facebook.js     # Serverless function untuk Facebook
└── README.md
```

---

## 🚀 Deploy ke Vercel

### Prerequisites
- Akun GitHub
- Akun Vercel (gratis)

### Steps
1. Push project ke GitHub repository
2. Login ke [Vercel](https://vercel.com)
3. Import repository dari GitHub
4. Vercel otomatis detect:
   - Static files (HTML/CSS/JS)
   - API folder untuk serverless functions
5. Deploy!

**Note:** Vercel otomatis handle serverless functions di folder `api/`

---

## ⚠️ Catatan Penting

### Facebook
- Video harus **publik**
- Format baru (`/share/v/`, `/reel/`) didukung via backend API
- Tidak ada preview thumbnail (API limitation)
- Processing time: 15-20 detik

### TikTok
- Video harus **publik**
- Ada preview thumbnail
- Multiple quality options (HD, SD, Watermark, Audio)
- Processing time: 5-10 detik

### Download Issues
- Jika auto-download gagal (CORS), video dibuka di tab baru
- Cara manual: Klik kanan → "Save video as..."
- Beberapa video akan redirect karena API restrictions

---

## 🎨 Customization

### Ubah Warna Theme
Edit `style.css`:
```css
/* Primary colors */
--primary: #9370DB;    /* Lavender */
--secondary: #8B7AB8;  /* Purple */
--accent: #D3CCE3;     /* Silver */
```

### Ubah Character Image
Ganti file `elaina.png` dengan gambar PNG transparan

### Tambah Platform
1. Edit `script.js` → `detectPlatform()`
2. Buat function `fetchPlatformVideo()`
3. Tambah case di `fetchVideoData()`

---

## 🐛 Troubleshooting

**Q: Facebook video tidak bisa didownload?**
- Pastikan video publik
- Coba format link berbeda (fb.watch atau direct link)
- Wait 15-20 detik untuk processing

**Q: TikTok video gagal?**
- Pastikan video tidak private/age-restricted
- Coba link langsung (bukan shortened)

**Q: API timeout?**
- Refresh page dan coba lagi
- Check koneksi internet
- API mungkin sedang rate-limited (tunggu 1-2 menit)

---

## 💫 Credits

**Design Inspiration**: Wandering Witch: The Journey of Elaina  
**APIs**: Cobalt Tools, TikWm, FDown  
**Fonts**: Google Fonts (Cinzel, Cormorant Garamond)

Made with magic ✦

---

*"A journey of a thousand videos begins with a single download"*  
— The Wandering Witch
