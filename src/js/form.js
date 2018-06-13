$(document).ready(function () {

  var sendForm = function (form) {
    var data = new FormData();

    $(form).find('input, select, textarea').each(function () {
      if ($(this).attr('name')) {
        data.append($(this).attr('name'), $(this).val());
      }
    });

    $.ajax({
      method: 'POST',
      url: '/api/add-subscriber.php',
      data: data,
      dataType: 'json',
      cache: false,
      contentType: false,
      processData: false,
      success: function (response, statusText, code) {
        $(form).trigger('reset');

        $.magnificPopup.open({
          items: {
            src: $('#success-subscribe')
          },
          type: 'inline'
        });
      }
    });
  };

  $('.subscribe__form').validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    errorPlacement: function (error, element) {
      element.attr("placeholder", error.text());
    },
    submitHandler: function (form, evt) {
      evt.preventDefault();
      sendForm(form);
    }
  });
});
