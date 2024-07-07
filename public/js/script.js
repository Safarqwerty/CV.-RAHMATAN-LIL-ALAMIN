// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Hilangkan menu mobile saat klik di luar
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Slider section hero
let currentIndex = 0;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slider = document.getElementById('slider');
const slides = slider.children.length;

function updateButtons() {
    prevButton.classList.toggle('hidden', currentIndex === 0);
    nextButton.classList.toggle('hidden', currentIndex === slides - 1);
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides) % slides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
});

updateButtons();

//projek 
document.addEventListener('DOMContentLoaded', function () {
    const slide = document.getElementById('slide');
    const nextButton = document.getElementById('maju');
    const backButton = document.getElementById('back');
    let currentIndex = 0;
    let slideWidth;

    const updateSlideWidth = () => {
        slideWidth = slide.children[0].offsetWidth;
    };

    window.addEventListener('resize', updateSlideWidth);
    updateSlideWidth();

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slide.children.length;
        slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });

    backButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slide.children.length) % slide.children.length;
        slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    });
});

// otwtop
document.addEventListener('DOMContentLoaded', function () {
    const otwTopButton = document.getElementById('otw-top');

    // Menampilkan tombol ketika scroll mencapai jarak tertentu
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // Ubah angka 300 sesuai dengan kebutuhan jarak scroll
            otwTopButton.classList.add('block');
            otwTopButton.classList.remove('hidden');
        } else {
            otwTopButton.classList.add('hidden');
            otwTopButton.classList.remove('block');
        }
    });

    // Mengatur aksi scroll ke atas saat tombol diklik
    otwTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Untuk smooth scroll, jika tidak diperlukan, ganti menjadi 'auto'
        });
    });
});

//pilih kami
document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.transform');
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('scale-105');
        }
    });
});