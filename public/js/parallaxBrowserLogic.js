let ticking = false;
let isFirefox = (/Firefox/i.test(navigator.userAgent));
let isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
let scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
let slideDurationSetting = 1500; //Amount of time for which slide is "locked"
let currentSlideNumber = 0;
let totalSlideNumber = $(".background").length;
let headingPrimary = $('.heading-primary');
let headingSecondary = $('.heading-secondary');
let headingTertiary = $('.heading-tertiary');
let slide = $('.background');

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
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), {
  passive: true
});

function nextItem() {
  // console.log(currentSlideNumber)
  //slide selectors
  let $previousSlide = slide.eq(currentSlideNumber - 1);
  // //element selectors
  let $currentHeadingPrimary = headingPrimary.eq(currentSlideNumber)
  let $previousHeadingPrimary = headingPrimary.eq(currentSlideNumber - 1);
  // //actions

  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  $currentHeadingPrimary.addClass('moveInBottom');

  // $currentHeadingPrimary.addClass('moveInBottom').removeClass('moveInTop');
  // //class reset
  setTimeout(function () {
    $previousHeadingPrimary.removeClass('moveInTop');
    $currentHeadingPrimary.removeClass('moveInBottom moveInTop');
  }, 1300)
  // switch (currentSlideNumber) {
  //   case 0:

  //     break;
  //   case 1:

  //     break;
  //   case 2:

  //     break;
  //   case 3:

  //     break;
  //   default:
  //     console.log('shitballz');
  //     break;
  // }
}

function previousItem() {
  // //slide selectors
  let $currentSlide = slide.eq(currentSlideNumber);
  // //element selectors
  let $currentHeadingPrimary = headingPrimary.eq(currentSlideNumber);
  //actions for every slide

  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  $currentHeadingPrimary.addClass('moveInTop');
  setTimeout(function () {
    $currentHeadingPrimary.removeClass('moveInTop moveInBottom');
  }, 1300)

  // switch (currentSlideNumber) {
  //   case 0:
  // /
  //     break;
  //   case 1:
  //     break;
  //   case 2:

  //     break;
  //   case 3:
  //     break;
  //   default:
  //     console.log('shitballz')
  //     break;
  // }
}