let ticking = false;
let isFirefox = /Firefox/i.test(navigator.userAgent);
let isIe = /MSIE/i.test(navigator.userAgent) || /Trident.*rv\:11\./i.test(navigator.userAgent);
let scrollSensitivitySetting = 100; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
let slideDurationSetting = 1500; //Amount of time for which slide is "locked"
let currentSlideNumber = 0;
let totalSlideNumber = $(".background").length;
let headingPrimary = $(".heading-primary");
let headingSecondary = $(".heading-secondary");
let headingTertiary = $(".heading-tertiary");
let slide = $(".background");
let iconIds = [
  '#1-icon-css',
  '#1-icon-express',
  '#1-icon-git',
  '#1-icon-heroku',
  '#1-icon-html',
  '#1-icon-illustrator',
  '#1-icon-javascript',
  '#1-icon-jquery',
  '#1-icon-mongodb',
  '#1-icon-nodejs',
  '#1-icon-photoshop',
  '#1-icon-react',
  '#1-icon-sass',
  '#1-icon-sequelize',
  '#1-icon-bootstrap'
];
//15 classes
let animationDelayTimesDown = [
  '.1s',
  '.2s',
  '.3s',
  '.3s',
  '.3s',
  '.3s',
  '.3s',
  '.2s',
  '.1s',
  '.1s',
  '.2s',
  '.3s',
  '.3s',
  '.2s',
  '.1s'
]
let animationDelayTimesUp = [
  '.3s',
  '.25s',
  '.2s',
  '.15s',
  '.1s',
  '.15s',
  '.2s',
  '.25s',
  '.3s',
  '.3s',
  '.2s',
  '.1s',
  '.1s',
  '.2s',
  '.3s'
]

function parallaxScroll(evt) {
  if (isFirefox) {
    delta = evt.detail * -120;
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

//tooltips
$('.srtracker').qtip({
  show: 'click',
  hide: 'unfocus click',
  content: {
    text: $('#srtracker_tooltip').html()
  },
  style: {
    height: 'auto',
    classes: 'qtip-bootstrap qtip-shadow'
},
position: {
  my: 'bottom center',  // Position my top left...
  at: 'top center', // at the bottom right of...
  target: $('.srtracker') // my target
}
})

function nextItem() {
  //slide selectors
  let $previousSlide = slide.eq(currentSlideNumber - 1);
  // //element selectors
  let $currentHeadingPrimary = headingPrimary.eq(currentSlideNumber);
  let $previousHeadingPrimary = headingPrimary.eq(currentSlideNumber - 1);
  // //actions
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  $currentHeadingPrimary.addClass("moveInBottom");
  // //class reset
  setTimeout(function () {
    $previousHeadingPrimary.removeClass("moveInTop");
    $currentHeadingPrimary.removeClass("moveInBottom moveInTop");
  }, 1300);
  switch (currentSlideNumber) {
    case 0:
      break;
    case 1:
      //classs added
      $("#1-h3").addClass("moveInBottom");
      $('#icon-div').addClass('moveInBottom')
      //icons
      for (var i = 0; i < iconIds.length; i++) {
        $(iconIds[i]).addClass('moveInBottom');
        $(iconIds[i]).css({
          "animation-delay": animationDelayTimesDown[i]
        });
      }
      // //class reset
      setTimeout(function () {
        $("#1-h3").removeClass("moveInBottom");
        $('#icon-div').removeClass('moveInBottom');
        $('.icon').removeClass('moveInBottom')
      }, 1300);
      break;
    case 2:
      $("#2-h2").addClass("moveInBottom");
      $("#2-h3").addClass("moveInBottom").css({'animation-delay': '1s'});
      $(".srtracker").addClass("moveInBottom").css({'animation-delay': '1s'});
      // //class reset
      setTimeout(function () {
        $("#2-h2").removeClass("moveInBottom");
        $(".srtracker").addClass("moveInBottom")      }, 1300);
      setTimeout(function () {
        $(".srtracker").removeClass("moveInBottom");
        $("#2-h3").removeClass("moveInBottom");
      }, 2000);
      break;
    case 3:
      $("#3-h2").addClass("moveInBottom");
      $("#3-h3").addClass("moveInBottom");
      // //class reset
      setTimeout(function () {
        $("#3-h2").removeClass("moveInBottom");
        $("#3-h3").removeClass("moveInBottom");
      }, 1300);
      break;
    default:
      console.log("shitballz");
      break;
  }
}

function previousItem() {
  // //slide selectors
  let $currentSlide = slide.eq(currentSlideNumber);
  // //element selectors
  let $currentHeadingPrimary = headingPrimary.eq(currentSlideNumber);
  //actions for every slide
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  $currentHeadingPrimary.addClass("moveInTop");
  setTimeout(function () {
    $currentHeadingPrimary.removeClass("moveInTop moveInBottom");
  }, 1300);
  switch (currentSlideNumber) {
    case 0:
      $("#0-h2").addClass("moveInTop");
      // //class reset
      setTimeout(function () {
        $("#0-h2").removeClass("moveInTop");
      }, 1300);
      break;
    case 1:
      $("#1-h3").addClass("moveInTop");
      ///large icon animation would be here//
      $('#icon-div').addClass('moveInTop');
      //icons
      for (var i = 0; i < iconIds.length; i++) {
        $(iconIds[i]).addClass('moveInTop');
        $(iconIds[i]).css({
          "animation-delay": animationDelayTimesUp[i]
        });
      }
      // //class reset
      setTimeout(function () {
        $("#1-h3").removeClass("moveInTop");
        $('#icon-div').removeClass('moveInTop')
        $('.icon').removeClass('moveInTop');
      }, 1300);
      break;
    case 2:
      $("#2-h2").addClass("moveInTop");
      $("#2-h3").addClass("moveInTop");
      $(".srtracker").addClass("moveInTop");
      // //class reset
      setTimeout(function () {
        $("#2-h2").removeClass("moveInTop");
      }, 1300);
      setTimeout(function () {
        $("#2-h3").removeClass("moveInTop");
        $(".srtracker").removeClass("moveInTop");
      }, 2000);
      break;
    case 3:
      break;
    default:
      console.log("shitballz");
      break;
  }
}