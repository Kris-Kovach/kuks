$(document).ready(function() {
  var selectFields = $('.select-field');

  if (selectFields.length > 0) {
    selectFields.each(function () {
      $(this).select2({
        placeholder: $(this).attr('data-placeholder'),
        minimumResultsForSearch: Infinity,
        width: '100%'
      });
    });
  }
});
