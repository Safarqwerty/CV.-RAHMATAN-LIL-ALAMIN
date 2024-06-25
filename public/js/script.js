// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const otwTop = document.querySelector('#otw-top')

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
        otwTop.classList.remove('hidden')
        otwTop.classList.add('flex')
    } else {
        header.classList.remove('navbar-fixed')
        otwTop.classList.remove('flex')
        otwTop.classList.add('hidden')
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// hilangkan menu mobile
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

//darkmode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme = 'dark'
    }
    else {
        html.classList.remove('dark')
        localStorage.theme = 'light'
    }
})

// pindahkan toogle sesuai mode
// Saat memuat halaman atau saat mengganti tema, sebaiknya tambahkan inline di `head` untuk menghindari FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true
} else {
    darkToggle.checked = false
}