// header-search
let searchBtn = document.querySelector(".search");
let modalEl = document.querySelector(".modal__search");

searchBtn.addEventListener("click", () => {
    modalEl.classList.remove("hidden");
    document.body.classList.add("disable-scroll");
});

modalEl.addEventListener("click", event => {
    if (!event.target.closest(".modal__search-box")) {
        modalEl.classList.add("hidden");
        document.body.classList.remove("disable-scroll");
    }
});
    // =============

// show header menu-nav
const menuBtn = document.querySelector(".header__menu-btn");
const inputBtn = document.querySelector("#menu-btn");
const menuNavEl = document.querySelector(".header__nav");

const cloneMenuNav = menuNavEl.cloneNode(true);
document.querySelector(".header__menu-label").insertAdjacentElement("beforeend", cloneMenuNav);
    // =============

// show arrow-up
const btnTopEl = document.querySelector(".btn-to-top");

window.addEventListener("scroll", event => {
    if (window.scrollY > 600) {
        btnTopEl.classList.remove("hidden");
    } else {
        btnTopEl.classList.add("hidden");
    }
});
    // =============