$(document).ready(function () {
  var promoSlider = $('.promo-slider');
  var headerTopBlock = $('#header-top');
  var userIcon = $('.user-block__icon');

  var setHeaderBackground = function (color) {
    headerTopBlock.css('background-color', color);
  };

  var setHeaderFontColor = function (color) {
    headerTopBlock.css('color', color);
  };

  var setIconColor = function (color) {
    userIcon.css('stroke', color);
  };

  var setTransition = function () {
      headerTopBlock.css('transition', 'background-color 1000ms linear');
  };

  promoSlider.owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    animateOut: 'fadeOut',
    navSpeed: 1000
  });

  setTransition();

  promoSlider.on('changed.owl.carousel',function(property){
    var currentIndex = property.item.index;
    var backgroundColor = $(property.target).find('.owl-item').eq(currentIndex).find('.promo-slider__item').data('background');
    var fontColor = $(property.target).find('.owl-item').eq(currentIndex).find('.promo-slider__item').data('color');
    setHeaderBackground(backgroundColor);
    setHeaderFontColor(fontColor);
    setIconColor(fontColor);
  });
});
