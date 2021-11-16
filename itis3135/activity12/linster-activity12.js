$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20,
        moveSlides: 1,
        randomStart: true,
        captions: true,
        autoDelay: 3000,
        pager: true,
        pageSelector: "#id_pager",
        pagerType: 'short',
        shrinkItems: true
    });
});