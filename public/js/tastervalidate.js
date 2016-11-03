$(document).ready(function() {
  $('#taster').validate({
    rules: {
      firstName: {
        minlength: 2,
        required: true
      },
      lastName: {
        minlength: 2,
        required: true
      },
      email: {
        required: true,
        email: true
      },
      faculty: {
        minlength: 2,
        required: true
      },
      year: {
        required: true
      }
    },
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
      element.text('OK!').addClass('valid')
        .closest('.form-group').removeClass('has-error').addClass('has-success');
    }
  });
});