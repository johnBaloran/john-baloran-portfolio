// Variables
const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const navLink = document.querySelectorAll(".nav__link");
// Open Menu
navToggle.addEventListener("click", () => {
  navMenu.classList.add("open-menu");
});
// Close Menu

const closeMenu = () => {
  navMenu.classList.remove("open-menu");
};
navClose.addEventListener("click", closeMenu);
navLink.forEach((link) => link.addEventListener("click", closeMenu));
