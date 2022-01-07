//import $ from 'jquery';
// import lozad from 'lozad';

// $ = document.querySelectorAll;

// Вставляем видео на разрешениях выше планшета
if (window.innerWidth > 999) {
  document.querySelector('.video_wrap').insertAdjacentHTML("afterbegin", "<video src='https://bestcarnn.ru/wp-content/themes/bestcarnn/Финал.webm' autoplay='autoplay' loop='loop' muted='muted'></video>");
}

// Переменные
const pictures = document.querySelectorAll('picture');
const header = document.querySelector('.header');
const nav = document.querySelector('.header_nav');
const headerBack = document.querySelector('.header_back');
const menuIcon = document.querySelector('.socialsLine_menuIcon');
const headerHeight = document.querySelector('.header_headLine').offsetHeight;
const sections = document.querySelectorAll('.section');
const sectionsPosInfo = [];
const navLink = document.querySelectorAll('.header_navLink');
const animatedSections = document.querySelectorAll('.animateSection');
const windowHeight = window.innerHeight;

// Вешаем ланивую загрузку на тэги Picture
lozad(pictures).observe();

// Переключение "активности" меню на мобилке
function toggleMobileNav() {
  nav.classList.toggle('-active');
  headerBack.classList.toggle('-active');
  menuIcon.classList.toggle('-active');
}

// Отключение "активности" меню (на всех платформах)
function activeMobileNav() {
  nav.classList.remove('-active');
  headerBack.classList.remove('-active');
  menuIcon.classList.remove('-active');
}

header.addEventListener('click', function(event) {
  let toggleElemMenu = event.target.closest('.toggle-menu-elem');

  if (!toggleElemMenu) {
    return;
  }

  toggleMobileNav();
});

nav.addEventListener('click', function(event) {
  let navLink = event.target.closest('.js-scroll-to');

  if (!navLink) {
    return;
  }

  event.preventDefault();
  activeMobileNav();

  let margin = (window.innerWidth > 999) ? 0 : 30;
  const docScroll = window.pageYOffset;
  const href = navLink.getAttribute('href').substr(1);
  //console.log(href);
  const section = document.querySelector(`[id="${href}"]`);
  const sectionPos = section.getBoundingClientRect().top + docScroll - margin;
  //console.log(section);
  scrollTo(document.documentElement, sectionPos, 500);
  //document.documentElement.scrollTop = 0;
});

// Функция анимирования скролла
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


// Липкое меню
function stickyNav() {
  const docScroll = window.pageYOffset;
  
  if (docScroll > headerHeight && nav.classList.contains('-sticky')) {
    return;
  } else if (docScroll < headerHeight) {
    nav.classList.remove('-sticky');
  } else {
    nav.classList.add('-sticky');
  }
}

// Добавляем 1му элементу меню выделение
navLink[0].classList.add('-active');

// Заполняем массив координатами секций из меню
for (let i = 0; i < sections.length; i++) {
  sectionsPosInfo.push(sections[i].getBoundingClientRect().top + window.pageYOffset);
}
sectionsPosInfo.push(sections[sections.length - 1].getBoundingClientRect().top + window.pageYOffset + 1000);

// Выбор элемента навигации, соответствующего секции на экране
function selectNavLink() {
  const docScroll = window.pageYOffset;

  for (let i = 0; i < sectionsPosInfo.length; i++) {
    //console.log(docScroll, sectionsPosInfo[i] - 200);
    if (docScroll <= sectionsPosInfo[i + 1] - 200) {
      const activeNavLink = document.querySelector('.header_navLink.-active');

      activeNavLink.classList.remove('-active');
      navLink[i].classList.add('-active');
      break;
    }
  }
}

// Анимирование элементов, до которых доскролил пользователь
function useAnimation() {
  //console.time();
  for (let i = 0; i < animatedSections.length; i++) {
    const section = animatedSections[i];
    const sectionPos = section.getBoundingClientRect().top;
    
    if (windowHeight >= sectionPos) {
      const animatedElems = section.querySelectorAll('.animateEl');

      for (let j = 0; j < animatedElems.length; j++) {
        const element = animatedElems[j];
        const elemPos = element.getBoundingClientRect().top;
        
        if (windowHeight >= elemPos) {
          element.classList.add('-animate');
          continue;
        }
        break;
      }
      continue;
    }
    break;
  }
}

// Троттл-функция - обертка, тормозящая действие функций
function throttle(func, ms) {
  let isCooldown = false;
  let lastFunc = func;

  return function() {
    if (isCooldown) {
      return;
    }

    func();
    isCooldown = true;

    setTimeout(function() {
      isCooldown = false;

      if (lastFunc) {
        func();
      }
    }, ms);
  };
}

// Оборачиваем функции в тормозящую обертку
let f1 = throttle(selectNavLink, 200);
let f2 = throttle(useAnimation, 200);
let f3 = throttle(stickyNav, 200);

if (window.innerWidth > 767) {
  document.addEventListener('DOMContentLoaded', function() {
    f1();
    f2();
    f3();
  });
  
  document.addEventListener('scroll', function() {
    f1();
    f2();
    f3();
  });
} else {
  document.addEventListener('DOMContentLoaded', function() {
    f1();
    f3();
  });
  
  document.addEventListener('scroll', function() {
    f1();
    f3();
  });
}