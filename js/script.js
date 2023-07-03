"use strict";
const header = document.querySelector(".header");
/*accordian tabs*/
document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".item");
  
  tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      let clicked = e.currentTarget;
      tabs.forEach((tab) => {
        if (tab !== clicked) {
          tab.classList.remove("active");
          tab
            .querySelector(".icon_accordian")
            .classList.remove("icon_accordian-active");
        }
      });

      clicked.classList.toggle("active");

      clicked
        .querySelector(".icon_accordian")
        .classList.toggle("icon_accordian-active");
    });
  });
});

/*********************Sticky Nav**************************/
let sectionHeroEl = document.querySelector(".section__hero");

let obs = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];
    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    //In Viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav__link"))
      header.classList.toggle("nav-open");
  });
});


/*mobile-nav*/
/*btn event listener*/

let btn = document.querySelector(".btn-mobile-nav");
btn.addEventListener("click", () => header.classList.toggle("nav-open"));