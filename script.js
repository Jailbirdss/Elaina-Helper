// Platform detection
function detectPlatform(url) {
    const urlLower = url.toLowerCase();
    
    if (urlLower.includes('facebook.com') || urlLower.includes('fb.watch') || urlLower.includes('fb.com') || urlLower.includes('/share/v/')) {
        return 'facebook';
    } else if (urlLower.includes('tiktok.com') || urlLower.includes('vt.tiktok.com')) {
        return 'tiktok';
    } else if (urlLower.includes('instagram.com')) {
        return 'instagram';
    }
    
    return null;
}

// DOM elements
const form = document.getElementById('download-form');
const input = document.getElementById('videoUrl');
const statusEl = document.getElementById('status');
const resultEl = document.getElementById('result');
const videoEl = document.getElementById('preview');
const downloadLink = document.getElementById('download-link');
const button = document.getElementById('downloadBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');

// Form submit handler
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = input.value.trim();
    
    if (!url) {
        showStatus('Silakan masukkan link video!', 'error');
        return;
    }
    
    const platform = detectPlatform(url);
    
    if (!platform) {
        showStatus('Platform tidak didukung! Gunakan link Facebook, TikTok, atau Instagram.', 'error');
        return;
    }
    
    // Reset & show loading
    resultEl.style.display = 'none';
    showLoading(true);
    showStatus(`Casting spell for ${platform}...`, 'loading');
    
    try {
        // Determine API endpoint
        let endpoint = '/api/facebook';
        if (platform === 'tiktok') {
            endpoint = '/api/tiktok';
        } else if (platform === 'instagram') {
            endpoint = '/api/instagram';
        }
        
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        
        if (!response.ok) {
            throw new Error('Gagal menghubungi server.');
        }
        
        const data = await response.json();
        
        if (!data.success) {
            throw new Error(data.message || 'Gagal memproses link.');
        }
        
        // Display result
        const videoUrl = data.downloadUrl;
        videoEl.src = videoUrl;
        downloadLink.href = videoUrl;
        
        resultEl.style.display = 'block';
        showStatus('', 'success');
        
    } catch (error) {
        console.error(error);
        showStatus(error.message || 'Terjadi error. Pastikan link valid dan video bersifat publik.', 'error');
    } finally {
        showLoading(false);
    }
});

// Helper functions
function showLoading(isLoading) {
    button.disabled = isLoading;
    btnText.style.display = isLoading ? 'none' : 'inline';
    btnLoader.style.display = isLoading ? 'inline-block' : 'none';
}

function showStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = 'status-message';
    
    if (type === 'error') {
        statusEl.classList.add('error');
    } else if (type === 'loading') {
        statusEl.classList.add('loading');
    }
}
