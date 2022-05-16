'use strict';
const nav = document.querySelector('.navigation');

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

//////// show navigation when scrollTop

let lastScrollTop = 0;

window.addEventListener(
  'scroll',
  function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      console.log(window.pageYOffset);
      nav.classList.add('nav-hide');
      nav.classList.remove('shadow');
      //   console.log('down');
      // }
      // if (window.pageYOffset <= 0) {
      //   nav.classList.remove('sticky', 'shadow');
    } else {
      nav.classList.remove('nav-hide');
      nav.classList.add('sticky', 'shadow');
      //   console.log('up');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);
