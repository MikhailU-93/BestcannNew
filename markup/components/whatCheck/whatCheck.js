//import $ from 'jquery';
// import Swiper from 'swiper';
// import SwiperCore, {Pagination} from 'swiper/core';

// SwiperCore.use([Pagination]);
import Swiper, { Navigation, Pagination } from 'swiper';

if (window.innerWidth > 480) {
  document.querySelector('.whatCheck_slider').classList.remove('swiper-container');
  document.querySelector('.whatCheck_items').classList.remove('swiper-wrapper');
  // document.querySelectorAll('.whatCheck_item').classList.remove('swiper-slide');
  document.querySelectorAll('.whatCheck_item').forEach(element => {
    element.classList.remove('swiper-slide');
  });
}

const swiperWhatCheck = new Swiper('.whatCheck_slider', {
  modules: [Navigation, Pagination],
  slidesPerGroup: 1,
  spaceBetween: 25,
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet animateEl',
    clickable: true,
  },
});

document.querySelector('.whatCheck_btn.-next').addEventListener('click', function() {
  swiperWhatCheck.slideNext();
});

document.querySelector('.whatCheck_btn.-prev').addEventListener('click', function() {
  swiperWhatCheck.slidePrev();
});

const checkContainer = document.querySelector('.whatCheck_items');

function deleteClass() {
  const activeElem = document.querySelector('.whatCheck_item.-hover');

  if (!activeElem) {
    return;
  }
  activeElem.classList.remove('-hover');
}

if (('ontouchstart' in window) ||
(navigator.maxTouchPoints > 0) ||
(navigator.msMaxTouchPoints > 0)) {
  checkContainer.addEventListener('touchstart', function(event) {
    const elem = event.target.closest('.whatCheck_item');

    if (!elem) {
      return;
    }

    elem.classList.toggle('-hover');
  }, Modernizr.passiveeventlisteners ? {passive: true} : false);
} else {
  checkContainer.addEventListener('mouseover', function(event) {
    const elem = event.target.closest('.whatCheck_item');

    if (!elem) {
      return;
    }

    elem.classList.add('-hover');

    elem.addEventListener('mouseout', function(event) {
      elem.classList.remove('-hover');
    });
  });
}

document.addEventListener('scroll', function() {
  deleteClass();
});

swiperWhatCheck.on('slideChange', function() {
  deleteClass();
});