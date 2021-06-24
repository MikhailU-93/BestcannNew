import $ from 'jquery';

$('body').on('click', '.js-scroll-to', function (e) {
  e.preventDefault();

  let margin;

  if ($(window).width() > 999) {
    margin = 0;
  } else {
    margin = 30;
  }

  $('html, body').stop().animate(
    { scrollTop: $($(this).attr('href')).offset().top - margin },
    700,
    'swing'
  );
});

$('.socialsLine_menuIcon, .header_close, .header_back').click(function () {
  $('.header_nav').toggleClass('-active');

  $('.header_back').toggleClass('-active');
  $('.socialsLine_menuIcon').toggleClass('-active');
});

$(document).scroll(function () {
  if ($(window).width() < 1000) {
    $('.header_nav').removeClass('-active');

    $('.header_back').removeClass('-active');
    $('.socialsLine_menuIcon').removeClass('-active');
  }
});

const navLink = $('.header_navLink');
navLink.eq(0).addClass('-active');

$(document).on('scroll', function() {
  let docScroll = $(document).scrollTop();
  const sections = $('.section');
  let sumOfheights = 0;

  for (let i = 0; i < sections.length; i++) {
    sumOfheights += sections.eq(i).innerHeight();

    if (docScroll <= sumOfheights - 200) {
      navLink.removeClass('-active');
      navLink.eq(i).addClass('-active');
      break;
    }
  }
});

const headerHeight = $('.header_headLine').innerHeight();
const nav = $('.header_nav');

$(document).on('scroll', function() {
  let docScroll = $(document).scrollTop();
  //console.log(docScroll);
  console.log($(window).width());

  if ($(window).width() > 999 ) {
    if (docScroll > headerHeight) {
      nav.addClass('-sticky');
    } else {
      nav.removeClass('-sticky');
    }
  }
});