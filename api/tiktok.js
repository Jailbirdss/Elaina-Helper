export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method !== "POST") {
        return res.status(405).json({ success: false, message: "Method not allowed" });
    }

    const { url } = req.body || {};

    if (!url || typeof url !== "string") {
        return res.status(400).json({ success: false, message: "URL TikTok tidak valid." });
    }

    try {
        // TikWm API - reliable untuk TikTok
        const apiUrl = "https://www.tikwm.com/api/";
        
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                url: url,
                count: 12,
                cursor: 0,
                web: 1,
                hd: 1
            }),
        });

        const data = await response.json();
        
        // Check if video data exists
        if (data.code === 0 && data.data) {
            let downloadUrl = null;
            
            // Try HD first, then SD, then watermark
            if (data.data.hdplay) {
                downloadUrl = data.data.hdplay;
            } else if (data.data.play) {
                downloadUrl = data.data.play;
            } else if (data.data.wmplay) {
                downloadUrl = data.data.wmplay;
            }
            
            if (downloadUrl) {
                return res.status(200).json({
                    success: true,
                    downloadUrl: downloadUrl,
                    message: "Video TikTok berhasil ditemukan!",
                });
            }
        }
        
        throw new Error("TikWm API failed");
        
    } catch (err) {
        console.error("TikTok API failed:", err.message);
        return res.status(500).json({
            success: false,
            message: "Gagal mengambil video TikTok. Pastikan link valid dan video bersifat publik.",
        });
    }
}
