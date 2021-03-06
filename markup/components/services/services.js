//import $ from 'jquery';
// import Swiper from 'swiper';
// import SwiperCore, {Pagination} from 'swiper/core';

// SwiperCore.use([Pagination]);
import Swiper, { Navigation, Pagination } from 'swiper';

const swiperServices = new Swiper('.services_slider', {
  modules: [ Navigation, Pagination],
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    bulletClass: 'swiper-pagination-bullet animateEl',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },
    480: {
      slidesPerView: 'auto',
      centeredSlides: true,
      slidesPerGroup: 1,
      spaceBetween: 25,
    },
    320: {
      slidesPerView: 'auto',
      centeredSlides: true,
      slidesPerGroup: 1,
      spaceBetween: 25,
    }
  }
});

document.querySelector('.services_btn.-next').addEventListener('click', function() {
  swiperServices.slideNext();
});

document.querySelector('.services_btn.-next').addEventListener('click', function() {
  swiperServices.slidePrev();
});
