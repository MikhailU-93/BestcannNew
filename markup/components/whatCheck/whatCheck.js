// import $ from 'jquery';
// import Swiper from 'swiper';
// import SwiperCore, {Pagination} from 'swiper/core';

// SwiperCore.use([Pagination]);

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
      bulletClass: 'swiper-pagination-bullet animateEl',
      clickable: true,
    },
  });
  
  $('.whatCheck_btn.-next').on('click', function() {
    swiperWhatCheck.slideNext();
  });
  
  $('.whatCheck_btn.-prev').on('click', function() {
    swiperWhatCheck.slidePrev();
  });

  swiperWhatCheck.on('slideChange', function() {
    deleteClass();
  })
}

const checkEl = $('.whatCheck_item');

function deleteClass(el = checkEl) {
  el.removeClass('-hover');
}

if (('ontouchstart' in $(window)) ||
(navigator.maxTouchPoints > 0) ||
(navigator.msMaxTouchPoints > 0)) {
  checkEl.on('touchstart', function () {
    $(this).toggleClass('-hover');
  });
} else {
  checkEl.hover(
    function () {
      deleteClass();
      $(this).addClass('-hover');
    },
    function () {
      deleteClass($(this));
    }
  );
}

$(document).on('scroll', function() {
  deleteClass();
});