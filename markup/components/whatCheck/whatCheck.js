//import $ from 'jquery';
// import Swiper from 'swiper';
// import SwiperCore, {Pagination} from 'swiper/core';

// SwiperCore.use([Pagination]);

if (window.innerWidth > 480) {
  document.querySelector('.whatCheck_slider').classList.remove('swiper-container');
  document.querySelector('.whatCheck_items').classList.remove('swiper-wrapper');
  document.querySelector('.whatCheck_item').classList.remove('swiper-slide');
}

const swiperWhatCheck = new Swiper('.whatCheck_slider', {
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

const checkElems = document.querySelectorAll('.whatCheck_item');

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
  // checkEl.on('touchstart', function () {
  //   $(this).toggleClass('-hover');
  // });
  checkElems.forEach(element => {
    element.addEventListener('touchstart', function() {
      this.classList.toggle('-hover');
    });
  });
} else {
  checkElems.forEach(element => {
    element.addEventListener('mouseover', function() {
      this.classList.add('-hover');
    });
  
    element.addEventListener('mouseout', function() {
      this.classList.remove('-hover');
    });
  });
}

document.addEventListener('scroll', function() {
  deleteClass();
});

swiperWhatCheck.on('slideChange', function() {
  deleteClass();
});