'use strict';

// navbar가 최상단에 있을 때 투명하게 설정,  navbar 높이만큼 스크롤 시 색상 부여
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
      if(window.scrollY > navbarHeight){
        navbar.classList.add("navbar--dark");
    }else {
        navbar.classList.remove("navbar--dark");
    }
})