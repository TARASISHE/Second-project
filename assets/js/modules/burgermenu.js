const linkCompany = document.querySelector('.company');
const linkService = document.querySelector('.service');
const linkReputation = document.querySelector('.reputation');
const linkLanguage = document.querySelector('.language');
const burgerBtn = document.querySelector('.header__icon');
const mobileMenu = document.querySelector('.header__mobile');
const container = document.querySelector('.header__container');
const closeBtn = document.querySelector(".mobile__close");
/*-------------- Open Sub-Menu----------------*/

linkCompany.addEventListener("mouseenter", (e) => {
    const menuLink = e.target.closest(".menu__link");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.add("_open");
})

linkCompany.addEventListener("mouseleave", (e) => {
    const menuLink = e.target.closest(".menu__link");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.remove("_open");
})


linkService.addEventListener("mouseenter", (e) => {
    const menuLink = e.target.closest(".menu__link");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.add("_open");
})

linkService.addEventListener("mouseleave", (e) => {
    const menuLink = e.target.closest(".menu__link");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.remove("_open");
})



linkReputation.addEventListener("mouseenter", (e) => {
    const menuLink = e.target.closest(".menu__link");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.add("_open");
})

linkReputation.addEventListener("mouseleave", (e) => {
    const menuLink = e.target.closest(".menu__link");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.remove("_open");
})



linkLanguage.addEventListener("mouseenter", (e) => {
    const menuLink = e.target.closest(".menu__linkmob");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.add("_open");
})

linkLanguage.addEventListener("mouseleave", (e) => {
    const menuLink = e.target.closest(".menu__linkmob");
    const subMenu = menuLink.querySelector("ul");
    subMenu.classList.remove("_open");
})


/*-------------- Open Sub-Menu----------------*/

/*-------------- Open Mob-Menu----------------*/
const body = document.querySelector('body');
burgerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.add('_open');
    body.classList.add('_lock')
});

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.remove('_open');
    body.classList.remove('_lock');
});
/*-------------- Open Mob-Menu----------------*/

/*-------------- Open Mob-Sub-Menu----------------*/
const btnCompany = document.querySelector('.mobile__btncompany');
const mobSubComp = document.querySelector('.mobcompany');
const btnService = document.querySelector('.mobile__btnservice')
const mobSubServ = document.querySelector('.mobservice')
const btnReputation = document.querySelector('.mobile__btnrep');
const mobSubRep = document.querySelector('.mobrep');
const btnLang = document.querySelector('.mobile__btnlang');
const mobSubLang = document.querySelector('.moblang');

btnCompany.addEventListener("click", (e) => {
    mobSubComp.classList.toggle('_open');
    btnCompany.classList.toggle('_rotate');
})

btnService.addEventListener("click", (e) => {
    mobSubServ.classList.toggle('_open');
    btnService.classList.toggle('_rotate');
})

btnReputation.addEventListener("click", (e) => {
    mobSubRep.classList.toggle('_open');
    btnReputation.classList.toggle('_rotate');
})

btnLang.addEventListener("click", (e) => {
    mobSubLang.classList.toggle('_open');
    btnLang.classList.toggle('_rotate');
})
/*-------------- Open Mob-Sub-Menu----------------*/