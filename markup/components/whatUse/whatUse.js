//import $ from 'jquery';
// import Swiper from 'swiper';
// import SwiperCore, {Pagination} from 'swiper/core';

// SwiperCore.use([Pagination]);

const swiperWhatUse = new Swiper('.whatUse_slider', {
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet animateEl',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 999px
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 55,
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    480: {
      slidesPerView: 'auto',
      centeredSlides: true,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    320: {
      slidesPerGroup: 1,
      spaceBetween: 25,
    }
  }
});

document.querySelector('.whatUse_btn.-next').addEventListener('click', function() {
  swiperWhatUse.slideNext();
});

document.querySelector('.whatUse_btn.-prev').addEventListener('click', function() {
  swiperWhatUse.slidePrev();
});