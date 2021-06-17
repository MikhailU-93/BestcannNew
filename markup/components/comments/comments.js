import $ from 'jquery';
import Swiper from 'swiper';

let swiperComments = new Swiper('.comments_slider', {
  //slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$('.comments_btn.-next').on('click', function() {
  swiperComments.slideNext();
});

$('.comments_btn.-prev').on('click', function() {
  swiperComments.slidePrev();
});