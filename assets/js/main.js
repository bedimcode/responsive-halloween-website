/* ==================== Dark Mode ==================== */
let themeBtn = document.querySelector('#theme-btn')

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun')

    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

/* ==================== CHANGE BACKGROUND HEADER ==================== */
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ==================== ScrollIndicator ==================== */
window.onscroll = () => {
    // navToggle.classList.remove('nav-menu')
    // navMenu.classList.remove('show-menu')

    let maxHeight = window.document.body.scrollHeight - window.innerHeight
    let percentage = (window.scrollY / maxHeight) * 100
    document.querySelector('.l-header .scroll-indicator').style.width =
        percentage + '%'
}

/* ==================== SHOW MENU ==================== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* ========== MENU SHOW ========== */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} else navClose
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})

/* ========== MENU HIDDEN ========== */
/* Validate if constant exists */
// if (navClose) {
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }

/* ==================== REMOVE MENU MOBILE ==================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.add('active-link')
        } else {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* =============== SHOW SCROLL UP =============== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 460) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ==================== HOME SWIPER ==================== */
let homeSwiper = new Swiper('.home-swiper', {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/*=============== NEW SWIPER ===============*/
// let newSwiper = new Swiper('.new-swiper', {
//     centeredSlides: true,
//     slidesPerView: 'auto',
//      loop: 'true',
//     spaceBetween: 16
// })

/* ==================== Slider swiper ==================== */
const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    autoplay: {
        delay: 1500
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    mousewheel: true,
    keyboard: true,
    grabCursor: true
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
    // reset: true
})

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`)
sr.reveal(`.category__data, .trick__content, .footer__content`, {
    interval: 100
})
sr.reveal(`.about__data, .discount__img`, { origin: 'left' })
sr.reveal(`.about__img, .discount__data`, { origin: 'right' })
