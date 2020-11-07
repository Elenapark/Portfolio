'use strict';

// navbar가 최상단에 있을 때 투명하게 설정,  navbar 높이만큼 스크롤 시 색상 부여
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
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


// scroll시 기존 내용 fadeout작업
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
})

// scroll시 arrowup버튼 생성.

const arrowUpBtn = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
    // homeheight을 반정도 내려왔을 때
    if (window.scrollY > homeHeight / 2) {
        arrowUpBtn.classList.add("visible");
    } else {
        arrowUpBtn.classList.remove("visible");
    }
})

// arrowup버튼 클릭시 최상단으로 이동
arrowUpBtn.addEventListener("click", () => {
    scrollIntoView("#home");
})

// work project filtering

const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project"); // 배열이 할당됨

workBtnContainer.addEventListener("click", (e) => {
    // span 클릭 시 undefined 반환을 대비하여 해당 span이 속한 부모태그의 filter속성값을 넣도록 함
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter === undefined) {
        return;
    }
    // 이전에 클릭된 요소의 class를 없애고 새로 클릭된 요소에 class부여하기
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');

    console.log(e.target.nodeName);

    // e.target의 nodename이 button이면 click한 target 그대로 쓰고,
    // button이 아니면(즉, span일경우) click된 요소의 parentNode(span의 부모태그인 button)를 target으로 쓰기
    // 즉 target에는 BUTTON만 할당이 되도록!

    const target =
        e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    //animation 먼저 추가
    projectsContainer.classList.add("anim-out");
    // 0.3초 이후 필터링을 함과 동시에 animation 제거 (animation이 어색하지 않게 작용하기위함)
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === "*" || filter === project.dataset.type) {
                project.classList.remove("invisible");
            } else {
                project.classList.add("invisible");
            }
        });
        projectsContainer.classList.remove("anim-out");
    }, 300)


    // 아래는 foreach외 사용가능한 문법
    // for(let project of projects) {
    //     console.log(project);
    // }
    //
    // let project;
    // for (let i = 0; i < projects.length; i++) {
    //     project = projects[i];
    //     console.log(project);
    //
    // }

});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
