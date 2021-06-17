import $ from 'jquery';

$('body').on('click', '.js-scroll-to', function (e) {
  e.preventDefault();
  $('html, body').stop().animate(
    { scrollTop: $($(this).attr('href')).offset().top +10 },
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

$(document).on('scroll', function() {
  let docScroll = $(document).scrollTop();
  const sections = $('.section');
  let sumOfheights = 0;

  for (let i = 0; i < sections.length; i++) {
    //$('.header_navLink').eq(i).addClass('-active');
    sumOfheights += sections.eq(i).innerHeight();

    if (docScroll <= sumOfheights - 300) {
      $('.header_navLink').removeClass('-active');
      $('.header_navLink').eq(i).addClass('-active');
      break;
    }
  }
});

const headerHeight = $('.header_headLine').innerHeight();
const nav = $('.header_nav');

$(document).on('scroll', function() {
  let docScroll = $(document).scrollTop();
  //console.log(docScroll);

  if (docScroll > headerHeight) {
    nav.addClass('-sticky');
  } else {
    nav.removeClass('-sticky');
  }
});