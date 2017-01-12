$(document).ready(function() {
  $('#delegate').validate({
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
      school: {
        minlength: 2,
        required: true
      },
      faculty: {
        minlength: 2,
        required: true
      },
      major: {
        minlength: 2,
        required: true
      },
      year: {
        required: true
      },
      q1: {
        maxlength: 300,
        required: true
      },
      q2: {
        maxlength: 1000,
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