let mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), {
    passive: true
});

$(document).on("click", ".arrow__down", () => {
    event.preventDefault()
    console.log("down");
    if (ticking != true) {
        ticking = true;
        if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
        }
        slideDurationTimeout(slideDurationSetting);
    }
});

$(document).on("click", ".arrow__up", () => {
    event.preventDefault()
    if (ticking != true) {
        ticking = true;
        if (currentSlideNumber !== 0) {
            currentSlideNumber--;
            previousItem();
        }
        slideDurationTimeout(slideDurationSetting);
    }
});