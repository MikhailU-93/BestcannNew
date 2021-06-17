import $ from 'jquery';

$('body').on('click', '.js-scroll-to', function (e) {
  e.preventDefault();
  $('html, body').stop().animate(
    { scrollTop: $($(this).attr('href')).offset().top },
    700,
    'swing'
  );
});

// $('.header_menu, .header_close').click(function () {
//   $('.header_mobileNav').toggleClass('-active');
// });

// $(document).scroll(function () {
//   $('.header_mobileNav').removeClass('-active');
// });
const headerHeight = $('.header_headLine').innerHeight();
const nav = $('.header_nav');
console.log(headerHeight);

$(document).on('scroll', function() {
  let docScroll = $(document).scrollTop();
  //console.log(docScroll);

  if (docScroll > headerHeight) {
    nav.addClass('-sticky');
  } else {
    nav.removeClass('-sticky')
  }
});