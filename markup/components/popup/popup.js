//import $ from 'jquery';

const popupLinks = document.querySelectorAll(".popup-link");
const popupCloseElems = document.querySelectorAll(".popup-close");
const popup = document.querySelector('.popup');
let unlock = true;

function popupOpen (curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup-item.-show");
    if (popupActive) {
      popupClose(popupActive);
    }

    popup.classList.add("-show");
    curentPopup.classList.add("-show");
  }
}

function popupClose(popupActive) {
  if (unlock) {
    popup.classList.remove("-show");
    popupActive.classList.remove("-show");
  }
}

popupLinks.forEach(element => {
  element.addEventListener('click', function(event) {
    const popupName = this.getAttribute('href').substr(1);
    const curentPopup = document.querySelector(`[id=${popupName}]`);
    //console.log(curentPopup);
    popupOpen(curentPopup);
    event.preventDefault();
  });
});

popupCloseElems.forEach(element => {
  element.addEventListener('click', function(event) {
    //console.log(this.closest('.popup'));
    popupClose(this.closest('.popup'));
    event.preventDefault();
  });
});

