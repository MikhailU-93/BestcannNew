import $ from 'jquery';

$('.whatCheck_item').on('touchstart', function () {
  $(this).toggleClass('-hover');
});

$(document).on('scroll', function() {
  if ($('.whatCheck_item.-hover')) {
    $('.whatCheck_item').removeClass('-hover');
  }
});

if ($(window).width() < 480) {
  $('.whatCheck_slider').addClass('swiper-container');
  $('.whatCheck_items').addClass('swiper-wrapper');
  $('.whatCheck_item').addClass('swiper-slide');

  const swiperWhatCheck = new Swiper('.whatCheck_slider', {
    slidesPerGroup: 1,
    spaceBetween: 25,
    loop: true,
    speed: 500,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  
  $('.whatCheck_btn.-next').on('click', function() {
    swiperWhatCheck.slideNext();
  });
  
  $('.whatCheck_btn.-prev').on('click', function() {
    swiperWhatCheck.slidePrev();
  });

  swiperWhatCheck.on('slideChange', function () {
    $('.whatCheck_item').removeClass('-hover');
  });
}