import $ from 'jquery';

let swiperServices = new Swiper('.services_slider', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 20,
  loop: true,
  speed: 500,
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
