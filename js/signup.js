$(function () {
  $("#register-link").click(function () {
    $("#login-box").hide();
    $("#register-box").show();
  });
  $("#login-link").click(function () {
    $("#login-box").show();
    $("#register-box").hide();
  });
  $("#forgot-link").click(function () {
    $("#login-box").hide();
    $("#forgot-box").show();
  });
  $("#back-link").click(function () {
    $("#login-box").show();
    $("#forgot-box").hide();
  });
});

// $("#login-form").validate();

// $("#register-form").validate();

$().ready(function () {
  // validate the signup form
  $("#register-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 5,
      },
      rpassword: {
        required: true,
        minlength: 5,
      },
      cpassword: {
        required: true,
        minlength: 5,
        equalTo: "#rpassword",
      },
      remail: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Enter your name",
        minlength: "Your name must consist of at least 5 characters",
      },
      rpassword: {
        required: "please provide a password",
        minlength: "Your password must be at least 5 characters",
      },
      cpassword: {
        required: "please provide a password",
        minlength: "Your password must be at least 5 characters",
        equalTo: "please enter a matching password",
      },
      remail: {
        required: "Enter your email",
        email: "Enter a valid email",
      },
    },
  });
  //   save in local storage on submit
  $("#register-form").submit(function (e) {
    var $inputs = $("#register-form :input");
    var values = {};
    $inputs.each(function () {
      values[$(this).attr("name")] = $(this).val();
    });
    localStorage.setItem("linkedInForm", JSON.stringify(values));
  });

  // validate the logIn form
  $("#login-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      email: {
        required: "Enter your email",
        email: "Enter a valid email",
        equalTo: "please sign UP first",
      },
      password: {
        required: "please provide a password",
        minlength: "Your password must be at least 5 characters",
        equalTo: "forgot your password ?",
      },
    },
  });
  //   get the values from local storage on submit

  $("#login-form").submit(function (e) {
    if (localStorage.getItem("linkedInForm")) {
      let user = JSON.parse(localStorage.getItem("linkedInForm"));
      let userPassword = user["password"];
      let userEmail = user["email"];
      console.log($("#email").val() === userEmail);
      console.log($("#password").val() === userPassword);
      if (
        $("#email").val() === userEmail &&
        $("#password").val() === userPassword
      ) {
        return window.open("../main.html");
      } else if (
        $("#email").val() !== userEmail ||
        $("#password").val() !== userPassword
      ) {
        $("#login-box").hide();
        $("#register-box").show();
      }
    } else if (!localStorage.getItem("linkedInForm")) {
      $("#login-box").hide();
      $("#register-box").show();
    }
  });
});
