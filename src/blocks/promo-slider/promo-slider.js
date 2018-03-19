$(document).ready(function () {
  var promoSlider = $('.promo-slider');
  var headerTopBlock = $('#header-top');
  var slide;
  // var color;

  var setHeaderBackground = function (color) {
    headerTopBlock.css('background-color', color);
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

  promoSlider.on('changed.owl.carousel',function(property){
    var currentIndex = property.item.index;
    var color = $(property.target).find('.owl-item').eq(currentIndex).find('.promo-slider__item').data('color');
    setHeaderBackground(color);
  });

  // slide = $('.owl-item.active .promo-slider__item');
  // setHeaderBackground(slide.data('color'));
  //
  // promoSlider.on('translated.owl.carousel', function() {
  //   slide = $('.owl-item.active .promo-slider__item');
  //   setHeaderBackground(slide.data('color'));
  // })
});
