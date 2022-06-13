'use strict';
const nav = document.querySelector('.navigation');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

//////// show navigation when scrollTop

let lastScrollTop = 0;

// window.addEventListener(
//   'scroll',
//   function () {
//     const st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > lastScrollTop) {
//       console.log(window.pageYOffset);
//       console.log(document.documentElement.scrollTop);
//       nav.classList.add('nav-hide');
//       nav.classList.remove('sticky');
//       // console.log('down');
//     } else if (document.documentElement.scrollTop <= 70) {
//       // console.log('top');
//       nav.classList.add('nav-back');
//     } else {
//       nav.classList.remove('nav-hide', 'nav-back', 'sticky');
//       nav.classList.add('sticky');
//       //   console.log('up');
//     }
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   },
//   false
// );

window.addEventListener(
  'scroll',
  function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      // console.log(window.pageYOffset);
      // console.log(document.documentElement.scrollTop);
      nav.classList.add('sticky');
      nav.classList.remove('nav-back');
      // console.log('down');
    } else if (document.documentElement.scrollTop <= 60) {
      // console.log('top');
      nav.classList.add('nav-back');
      nav.classList.remove('sticky');
    } else {
      nav.classList.remove('nav-back');
      //   console.log('up');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

////////Reveal Sections
const revaelSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return; //return fo avoiding bags
  entry.target.classList.remove('section--hidden');
  //stop observer
  observer.unobserve(entry.target);
};

const allSections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver(revaelSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// hide nav when it's clicked

const btn = document.querySelectorAll('.navigation__item');
const checkbox = document.querySelector('.navigation__checkbox');

btn.forEach((btn) => {
  btn.addEventListener('click', function () {
    checkbox.checked = checkbox.checked ? false : true;
  });
});
