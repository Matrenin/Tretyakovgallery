let slideIndex = 1;
let slides = document.querySelectorAll(".slider__item");
let a = document.querySelector(".slider-allCount");
a.textContent = slides.length;

showSlides(slideIndex);

function countSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "flex") {
            document.querySelector(".slider-count").textContent = i + 1;
        }
    }
}

function leftSlider() {
    showSlides(slideIndex -= 1);
    countSlides(slideIndex);
}

function rightSlider() {
    showSlides(slideIndex += 1);
    countSlides(slideIndex);
}

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}