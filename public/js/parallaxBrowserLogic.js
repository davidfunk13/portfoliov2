//touch device?
if (!$.mobile.support.touch) {
  $(".arrow").hide();
}

//slide functionality for mousewheel events
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

//locks slide to set duration. did this so animations have time to complete and reset.
function slideDurationTimeout(slideDuration) {
  setTimeout(function () {
    ticking = false;
  }, slideDuration);
}

//next slide. handles all animation utilitiy classes.
function nextItem() {
  //slide selectors
  let $previousSlide = slide.eq(currentSlideNumber - 1);
  //specific element selectors
  let $currentHeadingPrimary = headingPrimary.eq(currentSlideNumber);
  let $previousHeadingPrimary = headingPrimary.eq(currentSlideNumber - 1);
  //actions that perform on every slide
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  $currentHeadingPrimary.addClass("moveInBottom");
  $(".arrow").addClass("fadeIn");
  //every slide class reset timeout
  setTimeout(function () {
    $previousHeadingPrimary.removeClass("moveInTop");
    $currentHeadingPrimary.removeClass("moveInBottom moveInTop");
  }, 1300);
  setTimeout(function () {
    $(".arrow").removeClass("fadeIn");
  }, 2000);
  switch (currentSlideNumber) {
    case 0:
      break;
    case 1:
      //slide specific classes
      $("p").addClass("moveInBottom");
      $("#icon-div").addClass("moveInBottom");

      //slide specific icons
      for (var i = 0; i < iconIds.length; i++) {
        $(iconIds[i]).addClass("moveInBottom");
        // $(iconIds[i]).css({
        //   "animation-delay": animationDelayTimesDown[i]
        // });
      }
      //slide specific class reset
      setTimeout(function () {
        $("p").removeClass("moveInBottom");
        $("#icon-div").removeClass("moveInBottom");
        $(".icon").removeClass("moveInBottom");
      }, 1300);
      break;
    case 2:
      //slide specific classes
      $("#2-h2").addClass("moveInBottom");
      $("#2-h3")
        .addClass("moveInBottom")
        .css({
          "animation-delay": "1s"
        });
      $(".srtracker")
        .addClass("moveInBottom")
        .css({
          "animation-delay": "1s"
        });
      $(".hazmat")
        .addClass("moveInBottom")
        .css({
          "animation-delay": "1s"
        });
      $(".reddit")
        .addClass("moveInBottom")
        .css({
          "animation-delay": "1s"
        });
      //slide specific class reset
      setTimeout(function () {
        $("#2-h2").removeClass("moveInBottom");
        $(".srtracker").addClass("moveInBottom");
        $(".hazmat").addClass("moveInBottom");
        $(".reddit").addClass("moveInBottom");
      }, 1300);
      setTimeout(function () {
        $(".srtracker").removeClass("moveInBottom");
        $(".hazmat").removeClass("moveInBottom");
        $(".reddit").removeClass("moveInBottom");
        $("#2-h3").removeClass("moveInBottom");
      }, 2000);
      break;
    case 3:
      //slide specific classes
      $("#3-h2").addClass("moveInBottom");
      $("#3-h3").addClass("moveInBottom");
      //slide specific class reset
      setTimeout(function () {
        $("#3-h2").removeClass("moveInBottom");
        $("#3-h3").removeClass("moveInBottom");
      }, 1300);
      break;
    default:
      console.log("default");
      break;
  }
}

function previousItem() {
  //slide specific selectors
  let $currentSlide = slide.eq(currentSlideNumber);
  //element specific selectors
  let $currentHeadingPrimary = headingPrimary.eq(currentSlideNumber);
  //actions for every slide
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  $currentHeadingPrimary.addClass("moveInTop");
  $(".arrow").addClass("fadeIn");
  //class reset every slide on timeout
  setTimeout(function () {
    $currentHeadingPrimary.removeClass("moveInTop moveInBottom");
  }, 1300);
  setTimeout(function () {
    $(".arrow").removeClass("fadeIn");
  }, 2000);
  //slide specific actions
  switch (currentSlideNumber) {
    case 0:
      //slide specific actions
      $("#0-h2").addClass("moveInTop");
      //slide specific reset
      setTimeout(function () {
        $("#0-h2").removeClass("moveInTop");
      }, 1300);
      break;
    case 1:
      //slide specific actions
      $("p").addClass("moveInTop");
      $("#icon-div").addClass("moveInTop");
      //slide specific icon actions
      for (var i = 0; i < iconIds.length; i++) {
        $(iconIds[i]).addClass("moveInTop");
        // $(iconIds[i]).css({
        //   "animation-delay": animationDelayTimesUp[i]
        // });
      }
      //slide specific class reset
      setTimeout(function () {
        $("p").removeClass("moveInTop");
        $("#icon-div").removeClass("moveInTop");
        $(".icon").removeClass("moveInTop");
      }, 1300);
      break;
    case 2:
      //slide specific actions
      $("#2-h2").addClass("moveInTop");
      $("#2-h3").addClass("moveInTop");
      $(".srtracker").addClass("moveInTop");
      $(".hazmat").addClass("moveInTop");
      //slide specific class reset
      setTimeout(function () {
        $("#2-h2").removeClass("moveInTop");
      }, 1300);
      setTimeout(function () {
        $("#2-h3").removeClass("moveInTop");
        $(".srtracker").removeClass("moveInTop");
        $(".hazmat").removeClass("moveInTop");
      }, 2000);
      break;
    case 3:
      break;
    default:
      console.log("default");
      break;
  }
}
