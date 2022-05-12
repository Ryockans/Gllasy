//Управление слайдерами
let slideIndex = 1;
let slideButtons = document.querySelectorAll(".slider__controls-button");
let slides = document.querySelectorAll(".slider__item");
let indexBody = document.querySelector(".page__body.-index");

function showSlides(n) {
    if (n !== slideIndex){
        slideButtons[slideIndex - 1].classList.remove("-current");
        slideButtons[n - 1].classList.add("-current");
        slides[slideIndex - 1].classList.remove("-current");
        slides[n - 1].classList.add("-current");
        indexBody.classList.replace("site-wrapper-"+ slideIndex, "site-wrapper-"+ n );
        slideIndex = n; 
    }
}

