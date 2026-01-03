lucide.createIcons();

// --- Spinner 3 Detik ---
window.addEventListener('load', () => {
    const overlay = document.getElementById('global-loading-overlay');
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.display = 'none', 500);
    }, 3000);
});

// --- Musik ---
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

musicBtn.onclick = () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<i data-lucide="music"></i>';
    } else {
        music.play().catch(() => {});
        musicBtn.innerHTML = '<i data-lucide="volume-2"></i>';
    }
    isPlaying = !isPlaying;
    lucide.createIcons();
};

// --- Tema ---
const themeBtn = document.getElementById('themeToggle');
themeBtn.onclick = () => {
    const html = document.documentElement;
    const isLight = html.getAttribute('data-theme') === 'light';
    html.setAttribute('data-theme', isLight ? 'dark' : 'light');
    themeBtn.innerHTML = isLight ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    lucide.createIcons();
};

// --- Bahasa ---
const langBtn = document.getElementById('langToggle');
langBtn.onclick = () => {
    const isID = langBtn.innerText === 'EN';
    langBtn.innerText = isID ? 'ID' : 'EN';
    document.querySelectorAll('.lang-id').forEach(el => el.classList.toggle('hidden', isID));
    document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('hidden', !isID));
};
