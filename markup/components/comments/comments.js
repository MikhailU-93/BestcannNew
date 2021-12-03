//import $ from 'jquery';
// import Swiper from 'swiper';
// import SwiperCore, {Pagination} from 'swiper/core';

// SwiperCore.use([Pagination]);
import Swiper, { Navigation, Pagination } from 'swiper';

const swiperComments = new Swiper('.comments_slider', {
  modules: [ Navigation, Pagination],
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet animateEl',
    clickable: true,
  },
  breakpoints: {
    //when window width is >= 1000px
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 55,
    },
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 55,
    },
    480: {
      centeredSlides: true,
      spaceBetween: 55,
    },
    320: {
      centeredSlides: true,
      spaceBetween: 25,
    }
  }
});

document.querySelector('.comments_btn.-next').addEventListener('click', function() {
  swiperComments.slideNext();
});

document.querySelector('.comments_btn.-next').addEventListener('click', function() {
  swiperComments.slidePrev();
});