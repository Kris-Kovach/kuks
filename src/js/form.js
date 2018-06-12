$(document).ready(function () {
  $('.subscribe__form').validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    errorPlacement: function (error, element) {
      element.attr("placeholder", error.text());
    }
  });
});
