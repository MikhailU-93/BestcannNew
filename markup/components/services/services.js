import $ from 'jquery';

const swiperServices = new Swiper('.services_slider', {
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
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

$('.services_btn.-next').on('click', function() {
  swiperServices.slideNext();
});

$('.services_btn.-prev').on('click', function() {
  swiperServices.slidePrev();
});
