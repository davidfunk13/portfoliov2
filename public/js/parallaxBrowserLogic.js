let ticking = false;
let isFirefox = (/Firefox/i.test(navigator.userAgent));
let isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
let scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
let slideDurationSetting = 1500; //Amount of time for which slide is "locked"
let currentSlideNumber = 0;
let totalSlideNumber = $(".background").length;


function parallaxScroll(evt) {
  if (isFirefox) {
    delta = evt.detail * (-120);
  } else if (isIe) {
    delta = -evt.deltaY;
  } else {
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
        previousItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

function slideDurationTimeout(slideDuration) {
  setTimeout(function () {
    ticking = false;
  }, slideDuration);
}

let mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), { passive: true });


function nextItem() {
  let $previousSlide = $(".background").eq(currentSlideNumber - 1);
  let $currentHeading = $(".heading-primary").eq(currentSlideNumber);
  let $previousHeading = $(".heading-primary").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  $currentHeading.addClass('moveInBottom').removeClass('moveInTop');
  setTimeout(function(){
    $previousHeading.removeClass('moveInTop')
    $currentHeading.removeClass('moveInBottom')
    $currentHeading.removeClass('moveInTop')
  }, 1300)
}

function previousItem() {
  let $currentHeading = $(".heading-primary").eq(currentSlideNumber);
  let $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll")
  $currentHeading.addClass('moveInTop')
  setTimeout(function(){
    $currentHeading.removeClass('moveInTop');
    $currentHeading.removeClass('moveInBottom')

  },1300)
}