document.addEventListener('DOMContentLoaded', function () {
    // Navbar Fixed
    window.onscroll = function () {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;
        const otwTop = document.querySelector('#otw-top');

        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
            otwTop.classList.remove('hidden');
            otwTop.classList.add('flex');
        } else {
            header.classList.remove('navbar-fixed');
            otwTop.classList.remove('flex');
            otwTop.classList.add('hidden');
        }
    };

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

    document.getElementById('next').addEventListener('click', () => {
        const slider = document.getElementById('slider');
        const slides = slider.children.length;
        currentIndex = (currentIndex + 1) % slides;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });

    document.getElementById('prev').addEventListener('click', () => {
        const slider = document.getElementById('slider');
        const slides = slider.children.length;
        currentIndex = (currentIndex - 1 + slides) % slides;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
});
