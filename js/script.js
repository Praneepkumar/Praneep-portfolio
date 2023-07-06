'use strict';
const header = document.querySelector('.header');
/*accordian tabs*/
document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.item');

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      let clicked = e.currentTarget;
      tabs.forEach(tab => {
        if (tab !== clicked) {
          tab.classList.remove('active');
          tab
            .querySelector('.icon_accordian')
            .classList.remove('icon_accordian-active');
        }
      });

      clicked.classList.toggle('active');

      clicked
        .querySelector('.icon_accordian')
        .classList.toggle('icon_accordian-active');
    });
  });
});

/*********************Sticky Nav**************************/
let sectionHeroEl = document.querySelector('.section__hero');

let obs = new IntersectionObserver(
  function (entries) {
    let ent = entries[0];
    if (ent.isIntersecting === false) document.body.classList.add('sticky');
    if (ent.isIntersecting === true) document.body.classList.remove('sticky');
  },
  {
    //In Viewport
    root: null,
    threshold: 0,
    rootMargin: '-100px',
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) e.preventDefault();
    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('nav__link'))
      header.classList.toggle('nav-open');
  });
});

/*mobile-nav*/
/*btn event listener*/

let btn = document.querySelector('.btn-mobile-nav');
btn.addEventListener('click', () => header.classList.toggle('nav-open'));

//reavealing sections
let allSections = document.querySelectorAll('.section');
function revealSection(entries, observer) {
  let [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
let sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
allSections.forEach(section => {
  /* if (!section.classList.contains('section__about')) { */
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

/*tabs implementation*/

let tabsContainer = document.querySelector('.tabs-container');
let tabs = document.querySelectorAll('.tabs-container__tab');
let tabsContent = document.querySelectorAll('.tab__content');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  let clicked = e.target.closest('.tabs-container__tab');
  if (!clicked) return;
  //console.log(clicked);

  //removing all active classes from tabs & tabs-content
  tabs.forEach(tab => tab.classList.remove('tabs-container__tab--active'));
  tabsContent.forEach(tab => tab.classList.remove('tab__content--active'));

  //adding active classe to clicked tab and respective tab content
  clicked.classList.add('tabs-container__tab--active');
  document
    .querySelector(`.tab__content--${clicked.dataset.tab}`)
    .classList.add('tab__content--active');
});

const navLinks = document.querySelectorAll('.nav__link');
const maxCharacters = 15;

navLinks.forEach(link => {
  const text = link.textContent;
  if (text.length > maxCharacters) {
    link.textContent = text.slice(0, maxCharacters) + '...';
  }
});
