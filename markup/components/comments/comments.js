import $ from 'jquery';

let swiperComments = new Swiper('.comments_slider', {
  loop: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    //when window width is >= 640px
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
      spaceBetween: 45,
    }
  }
});

$('.comments_btn.-next').on('click', function() {
  swiperServices.slideNext();
});

$('.comments_btn.-prev').on('click', function() {
  swiperServices.slidePrev();
});


// $('.comments_item').each(function (i, item) {
//   $(item).find('.comments_preview').eq(0).addClass('-active');
//   $(item).find('.comments_photo').eq(0).addClass('-active');
// });

// $('.comments_preview').on('click', function() {
//   let previewIndex = $(this).index();
//   const slide = $(this).closest('.comments_item');

//   slide.find('.comments_preview').removeClass('-active');
//   $(this).addClass('-active');

//   slide.find('.comments_photo').removeClass('-active');
//   slide.find('.comments_photo').eq(previewIndex).addClass('-active');
// });