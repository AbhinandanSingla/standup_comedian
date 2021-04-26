const navbar = document.querySelector('#navbar .max-width')
const ytSel = document.querySelector('.video-item');
const youtube = document.querySelector('.youtube').attributes;
const home = document.querySelector('.home');

function scrollNavbar() {
    if (document.body.scrollTop > 24 || document.documentElement.scrollTop > 24) {
        // console.log(document.documentElement.scrollTop)
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

console.log(youtube['src'])

window.onscroll = () => scrollNavbar();
let backgroundlist = [
    "../assets/samay.jpg",
    "../assets/Samay-Raina-YouTuber-4.jpg",
]


setInterval(background, 10000)
let i = 0

function background() {
    if (i === backgroundlist.length) {
        i = 0;
    } else {
        home.style.background = `url(${backgroundlist[i]})`;
        i++;
    }
}

const navs = document.querySelector('.navs');
const nav_btn = document.querySelector('.moblie-nav-btn');
nav_btn.addEventListener('click', () => {
    navs.classList.toggle('hidden')
    navbar.classList.toggle('nav-background')
});



