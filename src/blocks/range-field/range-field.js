$(document).ready(function () {
  var rangeFields = $('.range-field');

  if (rangeFields.length > 0) {
    rangeFields.each(function () {
      $(this).ionRangeSlider({
        type: "double",
        min: $(this).attr('data-min'),
        max: $(this).attr('data-max'),
        from: $(this).attr('data-from') ? $(this).attr('data-from') : $(this).attr('data-min'),
        to: $(this).attr('data-to') ? $(this).attr('data-to') : $(this).attr('data-max'),
        postfix: '<span class="b-rub"> Ь</span>',
        hide_min_max: true,
        force_edges: true
      });
    });
  }
});
