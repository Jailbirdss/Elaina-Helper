# ✨ Elaina's Video Downloader

> Aplikasi berbasis web untuk mendownload video dari Facebook dan TikTok dengan desain terinspirasi dari _"Wandering Witch: The Journey of Elaina"_.

---

## Fitur

- Download video **Facebook** (Reel, Share link, Video post, fb.watch)
- Download video **TikTok** (HD/SD, dengan/tanpa watermark)
- Download audio MP3 dari TikTok
- Auto-detect platform dari URL
- Preview thumbnail untuk TikTok
- Responsive design untuk mobile & desktop

---

## 📖 Cara Menggunakan

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
2. Klik tombol **"Cast Download Spell"**
3. Tunggu proses fetching (15-20 detik)
4. Pilih kualitas yang diinginkan
5. Video akan otomatis terdownload

---

## ⚠️ Catatan Penting

### Facebook

- Video harus **publik**
- Format baru (`/share/v/`, `/reel/`) didukung via backend API
- Tidak ada preview thumbnail
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

## 🔧 Troubleshooting

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

## 💫 Credits

Inspired by _"Wandering Witch: The Journey of Elaina"_

> _"A journey of a thousand videos begins with a single download"_  
> — The Wandering Witch
