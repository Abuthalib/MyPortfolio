$(document).ready(function () {
  jQuery.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-z ]+$/.test(value);
    },
    "Letters only please"
  );
  jQuery.validator.addMethod(
    "minlength5",
    function (value, element) {
      return this.optional(element) || (value.trim().length >= 5);
    },
    "Minimum 5 characters without space"
  );
  $(".contact-forms").validate({
    rules: {
      name: {
        minlength5: true,
        lettersonly: true,
        required: true,
        minlength: 4,
      },
      email: {
        required: true,
        email: true,
      },
      contact: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      message: {
        minlength5: true,
        required: true,
        minlength: 10,
        maxlength: 200,
      },
    },
    messages: {
      name: {
        minlength: "Please Enter Your Full Name",
      },
      email: {
        email: "Please enter a valid Email id",
      },
      contact: {
        minlength: "Please enter a valid contact number",
        maxlength: "Please enter a valid contact number",
      },
      message: {
        minlength: "Its too short! minimum 10 characters",
        maxlength: "Oh no! it's too large",
      },
    },
    submitHandler: function (form) {
      console.log("True");
      console.log("in function submit");
      submit();
    },
  });
});
function submit() {
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbze8kJOWOhSnq6FPHXiKgOL9zByNIouTd0wn94BI8nmrK7vVfb0P3VjhTgDN9MYqhRU/exec",
    data: $(".contact-forms").serialize(),
    method: "POST",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
    },
    error: function (err) {
      alert("Something Error");
    },
  });
}
