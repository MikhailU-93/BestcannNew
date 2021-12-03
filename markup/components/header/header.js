//import $ from 'jquery';
// import lozad from 'lozad';

// $ = document.querySelectorAll;

const pictures = document.querySelectorAll('picture');
lozad(pictures).observe();

document.querySelectorAll('.js-scroll-to').forEach(element => {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    const docScroll = window.pageYOffset;
    const href = this.getAttribute('href').substr(1);
    //console.log(href);
    const section = document.querySelector(`[id="${href}"]`);
    const sectionPos = section.getBoundingClientRect().top;
    //console.log(section);
    scrollTo(document.documentElement, sectionPos + docScroll, 500);
    //document.documentElement.scrollTop = 0;
  });
});

// document.querySelectorAll('.js-scroll-to')[1].addEventListener('click', function (event) {
//   event.preventDefault();
//   scrollTo(document.documentElement, 0, 700);
//   //document.documentElement.scrollTop = 0;
// })

function scrollTo(element, to, duration) {
  const start = element.scrollTop;
  let change = to - start;
  let  currentTime = 0;
  const increment = 20;

  const animateScroll = function(){        
    currentTime += increment;

    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    //console.log(val);
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

// document.querySelectorAll('.js-scroll-to').forEach(element => {
//   element.addEventListener('click', function(event) {
//     event.preventDefault();

//     document.animate({
//       scrollTop: 500
//     }, 500);
//   })
// });

//document.documentElement.scrollTop = 500;

// $('body').on('click', '.js-scroll-to', function (e) {
//   e.preventDefault();

//   let margin;

//   if ($(window).width() > 999) {
//     margin = 0;
//   } else {
//     margin = 30;
//   }

//   $('html, body').stop().animate(
//     { scrollTop: $($(this).attr('href')).offset().top - margin },
//     700,
//     'swing'
//   );
// });

const navLink = document.querySelectorAll('.header_navLink');
navLink[0].classList.add('-active');

function selectNavLink() {
  //console.log(1);
  const docScroll = window.pageYOffset;
  const sections = document.querySelectorAll('.section');
  const activeNavLink = document.querySelector('.header_navLink.-active')
  let sumOfheights = 0;

  for (let i = 0; i < sections.length; i++) {
    sumOfheights += sections[i].offsetHeight;

    if (docScroll <= sumOfheights - 200) {
      activeNavLink.classList.remove('-active');
      navLink[i].classList.add('-active');
      break;
    }
  }
}

const headerHeight = document.querySelector('.header_headLine').offsetHeight;
const nav = document.querySelector('.header_nav');
//console.log(headerHeight);

function stickyNav() {
  const docScroll = window.pageYOffset;
  
  if (docScroll > headerHeight) {
    nav.classList.add('-sticky');
  } else {
    nav.classList.remove('-sticky');
  }
}

function activeMobileNav() {
  document.querySelector('.header_nav').classList.remove('-active');
  document.querySelector('.header_back').classList.remove('-active');
  document.querySelector('.socialsLine_menuIcon').classList.remove('-active');
}

document.querySelectorAll('.toggle-menu-elem').forEach(element => {
  element.addEventListener('click', function() {
    document.querySelector('.header_nav').classList.toggle('-active');

    document.querySelector('.header_back').classList.toggle('-active');
    document.querySelector('.socialsLine_menuIcon').classList.toggle('-active');
  });
});

// document.querySelector('.toggle-menu-elem').addEventListener('click', function () {
//   document.querySelector('.header_nav').classList.toggle('-active');

//   document.querySelector('.header_back').classList.toggle('-active');
//   document.querySelector('.socialsLine_menuIcon').classList.toggle('-active');
// });

if (window.innerWidth < 1000) {
  document.addEventListener('scroll', function () {
    activeMobileNav();
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    stickyNav();
  });
  document.addEventListener('scroll', function () {
    stickyNav();
  });
}

function useAnimation() {
  const animatedElems = document.querySelectorAll('.animateEl');
  const docScroll = window.pageYOffset;
  // console.log(animatedElems.length);
  // console.log(window.innerHeight);
  // console.log(animatedElems[52].getBoundingClientRect().top);

  for (let i = 0; i < animatedElems.length; i++) {
    const elem = animatedElems[i];
    //console.log(el);
    const windowHeight = window.innerHeight;
    const elScrollPos = elem.getBoundingClientRect().top;
    // console.log(elScrollPos[25]);
    // console.log(elScrollPos[50]);
    // console.log(elScrollPos);

    if (windowHeight >= elScrollPos) {
      elem.classList.add('-animate');
    }
  }
}

if (window.innerWidth > 767) {
  document.addEventListener('DOMContentLoaded', function() {
    selectNavLink();
    useAnimation();
  });
  
  document.addEventListener('scroll', function() {
    selectNavLink();
    useAnimation();
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    selectNavLink();
  });
  
  document.addEventListener('scroll', function() {
    selectNavLink();
  });
}