// // import $ from 'jquery';
// import lozad from 'lozad';

const el = document.querySelectorAll('picture');
lozad(el).observe();

$('body').on('click', '.js-scroll-to', function (e) {
  //e.preventDefault();

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

const navLink = $('.header_navLink');
navLink.eq(0).addClass('-active');

function selectNavLink() {
  const docScroll = $(document).scrollTop();
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
}

const headerHeight = $('.header_headLine').innerHeight();
const nav = $('.header_nav');

function stickyNav() {
  const docScroll = $(document).scrollTop();
  
  if (docScroll > headerHeight) {
    nav.addClass('-sticky');
  } else {
    nav.removeClass('-sticky');
  }
}

function activeMobileNav() {
  $('.header_nav').removeClass('-active');
  $('.header_back').removeClass('-active');
  $('.socialsLine_menuIcon').removeClass('-active');
}

if ($(window).width() < 1000) {
  $(document).scroll(function () {
    activeMobileNav();
  });
} else {
  $(document).ready(function() {
    stickyNav();
  });
  $(document).scroll(function () {
    stickyNav();
  });
}

function useAnimation() {
  const animeateEl = $('.animateEl');
  const docScroll = $(document).scrollTop();

  for (let i = 0; i < animeateEl.length; i++) {
    const el = animeateEl.eq(i);
    const windowHeight = $(window).height();
    const elScrollPos = el.offset().top;

    if (docScroll + windowHeight >= elScrollPos) {
      el.addClass('-animate');
    }
  }
}

if ($(window).width() > 767) {
  $(document).ready(function() {
    selectNavLink();
    useAnimation();
  });
  
  $(document).on('scroll', function() {
    selectNavLink();
    useAnimation();
  });
} else {
  $(document).ready(function() {
    selectNavLink();
  });
  
  $(document).on('scroll', function() {
    selectNavLink();
  });
}