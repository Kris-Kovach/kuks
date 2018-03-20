$(document).ready(function () {
  var promoSlider = $('.promo-slider');
  var headerTopBlock = $('#header-top');

  var setHeaderBackground = function (color) {
    headerTopBlock.css('background-color', color);
  };

  var setTransition = function () {
      headerTopBlock.css('transition', 'background-color 1000ms linear');
  };

  promoSlider.owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    animateOut: 'fadeOut',
    dotsSpeed: 1000
  });

  setTransition();

  promoSlider.on('changed.owl.carousel',function(property){
    var currentIndex = property.item.index;
    var color = $(property.target).find('.owl-item').eq(currentIndex).find('.promo-slider__item').data('color');
    setHeaderBackground(color);
  });
});
