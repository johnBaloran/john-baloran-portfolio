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

// Reveal Elements On Scroll

const revealElement = () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealElement);

const windowHeight = window.innerHeight;

// Testimonial Carousel

const buttons = document.querySelectorAll(".testimonial__button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const offset = e.target.value === "next" ? 1 : -1;
    const slides = document.querySelectorAll(".testimonial__content");
    const activeSlide = document.querySelector(".activeTestimonial");
    let newIndex = [...slides].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    console.log(newIndex);

    activeSlide.classList.remove("activeTestimonial");
    slides[newIndex].classList.add("activeTestimonial");
  });
});

// Show scroll top

const showScrollTop = () => {
  const scrollTop = document.getElementById("scroll-up");
  if (scrollY >= 750) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", showScrollTop);
