console.log('Hello!');

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    $(this).addClass('was-validated');
  });

  $('#confirmPassword').on('keyup', function () {
    if ($(this.val) == $('#password').val()) {
      $(this).setCustomValidity('');
    } else {
      $(this).setCustomValidity("Passwords don't match");
    }
  });
});
