import $ from 'jquery';

const popupLink = $(".popup-link");
const popupCloseEl = $(".popup-close");
const popup = $('.popup')
let unlock = true;

popupLink.on("click", function(e) {
  const popupName = $(this).attr("href").replace("#", "");
  const curentPopup = $(`#${popupName}`);
  popupOpen(curentPopup);
  e.preventDefault();
});

popupCloseEl.on("click", function(e) {
  popupClose($(this).closest(".popup"));
  e.preventDefault();
});

function popupOpen (curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = $(".popup-item.-show");
    if (popupActive) {
      popupClose(popupActive);
    }

    popup.addClass("-show");
    curentPopup.addClass("-show");
  }
}

function popupClose(popupActive) {
  if (unlock) {
    popup.removeClass("-show");
    popupActive.removeClass("-show");
  }
}


