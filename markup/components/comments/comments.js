import $ from 'jquery';

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