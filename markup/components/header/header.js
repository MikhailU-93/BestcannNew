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

$(window).on('scroll', function() {
  console.log()
  if ($(window).scrollTop() > 120) {
    $('.header').addClass('-darkTheme');
  } else {
    $('.header').removeClass('-darkTheme')
  }
});