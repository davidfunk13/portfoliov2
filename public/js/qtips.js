
iconIds.map((iconId, i) => {
    $('#icon-div').append("<div class='icon-tooltip'><p id='" + iconId.replace('#', '') + "--tooltiptext'" + "class='tooltiptext'>" + tooltipTexts[i] + "</p></div>")
});

iconIds.map(iconId => {
    return $(iconId).qtip({
        show: "click",
        hide: "unfocus click",
        content: {
            text: $(iconId + '--tooltiptext').html()
        },
        style: {
            height: "auto",
            classes: "qtip-bootstrap qtip-shadow"
        },
        position: {
            my: "bottom center",
            at: "top center",
            target: $(iconId)
        }
    })
});
//portfolio items
$(".srtracker").qtip({
    show: "click",
    hide: "unfocus click",
    content: {
        text: $(".srtracker__tooltip").html()
    },
    style: {
        height: "auto",
        classes: "qtip-bootstrap qtip-shadow"
    },
    position: {
        my: "bottom center",
        at: "top center",
        target: $(".srtracker")
    }
});
$(".responsive-design-sample").qtip({
    show: "click",
    hide: "unfocus click",
    content: {
        text: $(".responsive-design-sample__tooltip").html()
    },
    style: {
        height: "auto",
        classes: "qtip-bootstrap qtip-shadow"
    },
    position: {
        my: "bottom center",
        at: "bottom center",
        target: $(".responsive-design-sample")
    }
});

$(".srtracker-hooks").qtip({
    show: "click",
    hide: "unfocus click",
    content: {
        text: $(".srtracker-hooks__tooltip").html()
    },
    style: {
        height: "auto",
        classes: "qtip-bootstrap qtip-shadow"
    },
    position: {
        my: "top center",
        at: "top center",
        target: $(".srtracker-hooks")
    }
});

$(".vanilla-reddit").qtip({
    show: "click",
    hide: "unfocus click",
    content: {
        text: $(".vanilla-reddit__tooltip").html()
    },
    style: {
        height: "auto",
        classes: "qtip-bootstrap qtip-shadow"
    },
    position: {
        my: "top center",
        at: "top center",
        target: $(".vanilla-reddit")
    }
});

$(".hazmat").qtip({
    show: "click",
    hide: "unfocus click",
    content: {
        text: $(".hazmat__tooltip").html()
    },
    style: {
        height: "auto",
        classes: "qtip-bootstrap qtip-shadow"
    },
    position: {
        my: "bottom center",
        at: "top center",
        target: $(".hazmat")
    }
});
$(".reddit").qtip({
    show: "click",
    hide: "unfocus click",
    content: {
        text: $(".reddit__tooltip").html()
    },
    style: {
        height: "auto",
        classes: "qtip-bootstrap qtip-shadow"
    },
    position: {
        my: "bottom center",
        at: "top center",
        target: $(".reddit")
    }
});
