import $ from 'jquery';


function deleteClass(params) {
  $('.whatCheck_item').removeClass('-hover');
}

$('.whatCheck_item').hover(
  function () {
    deleteClass();
    $(this).addClass('-hover');
  },
  function () {
    $(this).removeClass('-hover');
  }
);

$('.whatCheck_item').on('touchstart', function () {
  $(this).toggleClass('-hover');
});

$(document).on('scroll', function() {
  deleteClass();
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
    deleteClass();
  });
  
  $('.whatCheck_btn.-prev').on('click', function() {
    swiperWhatCheck.slidePrev();
    deleteClass();
  });
}