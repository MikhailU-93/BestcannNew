import $ from 'jquery';

const swiperComments = new Swiper('.comments_slider', {
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
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

$('.comments_btn.-next').on('click', function() {
  swiperComments.slideNext();
});

$('.comments_btn.-prev').on('click', function() {
  swiperComments.slidePrev();
});