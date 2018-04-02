$(document).ready(function(){

  $("#new-items").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    center: false,
    margin: 25,
    dotsSpeed: 1000,
    responsive : {
      768 : {
        items: 2
      },
      992 : {
        items: 3,
        margin: 25
      },
      1260 : {
        items: 3,
        margin: 45
      }
    }
  });

  $('#default-slider').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    loop: true,
    center: false,
    dotsSpeed: 1000
  });

  $('#product-slider').owlCarousel({
    items: 1,
    dots: true,
    dotsData: true,
    dotsContainer: '.product__thumbs',
    dotClass: 'product__thumb',
    loop: true,
    dotsSpeed: 1000,
    onTranslated: function() {
      $zoom.destroy().magnify();
    }
  });

  var $zoom = $('.product__img img').magnify({
    limitBounds: true
  });

  // Переключение слайда по клику на миниатюру фото на основании индекса элемента

  $('.product__thumb').click(function () {
    $('#product-slider').trigger('to.owl.carousel', [$(this).index(), 1000]);
  });
});
