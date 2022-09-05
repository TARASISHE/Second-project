const footerService = document.querySelector('.fotservices__title');
const footerServiceText = document.querySelector('.fotservices__row');

footerService.addEventListener("click", (e) => {
    footerServiceText.classList.toggle("_open");
    footerService.classList.toggle("open");
})

const footerAbout = document.querySelector('.fotabout__title');
const footerAboutText = document.querySelector('.fotabout__column');

footerAbout.addEventListener("click", (e) => {
    footerAboutText.classList.toggle("_open");
    footerAbout.classList.toggle("open");
})

const footerReputation = document.querySelector('.fotreputation__title');
const footerReputationText = document.querySelector('.fotreputation__column');

footerReputation.addEventListener("click", (e) => {
    footerReputationText.classList.toggle("_open");
    footerReputation.classList.toggle("open");
})