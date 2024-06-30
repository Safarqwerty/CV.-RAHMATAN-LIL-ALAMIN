// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Hilangkan menu mobile saat klik di luar
window.addEventListener('click', function (e) {
    if (e.target !== hamburger && !hamburger.contains(e.target) && e.target !== navMenu && !navMenu.contains(e.target)) {
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

//pojek 
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = [
        './public/img/proyek1.jpg',
        './public/img/proyek2.jpg',
        './public/img/proyek3.jpg',
    ];

    const imgElement = document.getElementById('projectImage');
    const nextButton = document.getElementById('nextButton');

    function updateImage(index) {
        imgElement.src = images[index];
    }

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage(currentIndex);
    });

    // Initialize with the first image
    updateImage(currentIndex);
});

