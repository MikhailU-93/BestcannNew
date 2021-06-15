import $ from 'jquery';
import Swiper from 'swiper';

const swiperWhaUse = new Swiper('.whatUse_slider', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 80,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$('.whatUse_btn.-next').on('click', function() {
  swiperWhaUse.slideNext();
});

$('.whatUse_btn.-prev').on('click', function() {
  swiperWhaUse.slidePrev();
});