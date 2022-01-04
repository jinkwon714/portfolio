"use strict";

// Making navbar transparent for fixing on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handling scrolling when tapping the menus
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  } else {
  }
  scrollIntoView(link);
});

// Handling click on "Contact Me"
const homeContactMeBtn = document.querySelector(".home__contact");
homeContactMeBtn.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

// Need to wrap it by using a function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
