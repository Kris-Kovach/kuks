$(document).ready(function () {
  var filter = $('.filter');
  var filterClose = $('.filter__close');
  var filterLabel = $('.filter__label');
  var catalogContent = $('.catalog__content');
  var catalogContainer = $('.catalog__inner');
  var FILTER_WIDTH = 355;
  var PADDING = 34;

  var setCatalogMargin = function () {
    if ($(window).width() >= 1024) {
      var value = FILTER_WIDTH - catalogContainer.offset().left + PADDING;
      catalogContent.css('margin-left', value);
    } else {
      catalogContent.css('margin-left', '0');
    }
  };

  var setFilterState = function () {
    if ($(window).width() > 1024) {
      filter.removeClass('filter--hidden');
    }
  };

  setCatalogMargin();
  setFilterState();

  $(window).resize(function () {
    setCatalogMargin();
    setFilterState();
    catalogContent.removeClass('catalog__content--fullwidth');
  });

  filterClose.on('click', function (evt) {
    evt.preventDefault();

    filter.addClass('filter--hidden');
    catalogContent.addClass('catalog__content--fullwidth');
  });

  filterLabel.on('click', function (evt) {
    evt.preventDefault();

    filter.removeClass('filter--hidden');
    catalogContent.removeClass('catalog__content--fullwidth');
  });
});
