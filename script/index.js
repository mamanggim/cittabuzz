// Inisialisasi Ikon Lucide
lucide.createIcons();

// --- Fitur Musik ---
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

musicBtn.onclick = () => {
    if (isPlaying) {
        music.pause();
        musicBtn.innerHTML = '<i data-lucide="music"></i>';
    } else {
        music.play();
        musicBtn.innerHTML = '<i data-lucide="volume-2"></i>';
    }
    isPlaying = !isPlaying;
    lucide.createIcons();
};

// --- Fitur Dark/Light Mode ---
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggle.onclick = () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'light' ? 
        '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
    
    lucide.createIcons();
    // Simpan preferensi ke local storage
    localStorage.setItem('theme', newTheme);
};

// --- Fitur Multi-Bahasa ---
const langToggle = document.getElementById('langToggle');
let currentLang = 'ID';

langToggle.onclick = () => {
    currentLang = currentLang === 'ID' ? 'EN' : 'ID';
    langToggle.innerText = currentLang === 'ID' ? 'EN' : 'ID';

    const idElements = document.querySelectorAll('.lang-id');
    const enElements = document.querySelectorAll('.lang-en');

    if (currentLang === 'EN') {
        idElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));
    } else {
        idElements.forEach(el => el.classList.remove('hidden'));
        enElements.forEach(el => el.classList.add('hidden'));
    }
};

// Load preferensi tema saat halaman dibuka
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = savedTheme === 'light' ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
        lucide.createIcons();
    }
};
