$(document).ready(function () {
  $('.cart-item__hidden-input').spinner({
    min: 0,
    spin: function () {
      $(this).siblings('.cart-item__spinner-input').val($(this).val() + ' шт');
    },
    stop: function () {
      $(this).siblings('.cart-item__spinner-input').val($(this).val() + ' шт');
    }
  }).parent().append('<input class="cart-item__spinner-input">');

  $('.cart-item__spinner-input').each(parseValue);

  $('.cart-item__spinner-input').change(function () {
    $(this).siblings('.spinner').val(parseInt($(this).val()));
  });

  $('.cart-item__spinner-input').blur(parseValue);

  function parseValue() {
    $(this).val($(this).siblings('.cart-item__hidden-input').val() + ' шт');
  }
});
