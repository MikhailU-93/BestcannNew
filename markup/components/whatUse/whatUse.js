import $ from 'jquery';

const swiperWhaUse = new Swiper('.whatUse_slider', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 80,
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    999: {
      spaceBetween: 55,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    }
  }
});

$('.whatUse_btn.-next').on('click', function() {
  swiperWhaUse.slideNext();
});

$('.whatUse_btn.-prev').on('click', function() {
  swiperWhaUse.slidePrev();
});