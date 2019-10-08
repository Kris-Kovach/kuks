$(document).ready(function () {
    var indexHeader = $('.page-header--index');
    var indexHeaderBottomPanel = indexHeader.find('.page-header__bottom');
    var promoSlider = $('.promo-slider__item');

    var changeBottomPanelBackground = function () {
        var indexHeaderBottomPanelHeight = indexHeaderBottomPanel.outerHeight();
        var promoSliderHeight = promoSlider.outerHeight();
        var scrollOffset = promoSliderHeight - indexHeaderBottomPanelHeight;

        $(window).on('scroll', function() {
            if($(window).scrollTop() > scrollOffset) {
                indexHeaderBottomPanel.addClass('page-header__bottom--dark');
            } else {
                indexHeaderBottomPanel.removeClass("page-header__bottom--dark");
            }
        });
    };

    if (indexHeader) {
        changeBottomPanelBackground();

        $(window).on('resize', function () {
            changeBottomPanelBackground();
        });
    }
});