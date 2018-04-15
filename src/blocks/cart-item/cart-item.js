$(document).ready(function () {

  $.widget( "ui.countspinner", $.ui.spinner, {
    _format: function(value) { return value + ' шт'; },

    _parse: function(value) { return parseFloat(value); }
  });

  $('.cart-item__spinner-input').countspinner();

});
