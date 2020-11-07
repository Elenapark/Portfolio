'use strict';

// navbar가 최상단에 있을 때 투명하게 설정,  navbar 높이만큼 스크롤 시 색상 부여
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
})
// navbar 메뉴 클릭 시 스크롤 이동
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
    const target = e.target;
    const link = target.dataset.link;
    console.log(link);
    if (link === null) {
        return;
    }
    scrollIntoView(link);
})

// contact버튼 클릭 시 스크롤을 contact로 이동
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
    // const contact = document.querySelector("#contact");
    // const contactHeight = contact.offsetTop;
    // window.scrollTo({top:contactHeight, behavior:"smooth"});
    scrollIntoView("#contact");
})


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}