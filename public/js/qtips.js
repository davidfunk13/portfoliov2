
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
        text: $(".srtracker_tooltip").html()
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
