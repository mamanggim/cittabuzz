// Inisialisasi Ikon
lucide.createIcons();

// --- Fitur Spinner (3 Detik) ---
window.addEventListener('load', () => {
    const overlay = document.getElementById('global-loading-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 500);
    }, 3000); // 3000ms = 3 Detik
});

// --- Fitur Musik ---
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

musicBtn.onclick = () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<i data-lucide="music"></i>';
    } else {
        music.play().catch(() => alert("Klik di mana saja pada halaman terlebih dahulu untuk mengizinkan musik."));
        musicBtn.innerHTML = '<i data-lucide="volume-2"></i>';
    }
    isPlaying = !isPlaying;
    lucide.createIcons();
};

// --- Dark/Light Mode ---
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.onclick = () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = isLight ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    localStorage.setItem('theme', newTheme);
    lucide.createIcons();
};

// --- Multi-Bahasa ---
const langToggle = document.getElementById('langToggle');
langToggle.onclick = () => {
    const isID = langToggle.innerText === 'EN';
    langToggle.innerText = isID ? 'ID' : 'EN';
    document.querySelectorAll('.lang-id').forEach(el => el.classList.toggle('hidden', isID));
    document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden', !isID));
};

// Load Saved Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) html.setAttribute('data-theme', savedTheme);
