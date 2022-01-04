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
    console.log(event.target.dataset.link);
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Handling click on "Contact Me"
const homeContactMeBtn = document.querySelector(".home__contact");
homeContactMeBtn.addEventListener("click", (event) => {
  const scrollTo = document.querySelector("#contact");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Need to wrap it by using a function
