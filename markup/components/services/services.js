import $ from 'jquery';
import Swiper from 'swiper';

let swiperServices = new Swiper('.services_slider', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  //loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$('.services_btn.-next').on('click', function() {
  swiperServices.slideNext();
});

$('.services_btn.-prev').on('click', function() {
  swiperServices.slidePrev();
});
