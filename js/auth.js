$(function () {

  $("#sign_up").on("click", function () {
    if ($("#reg_pass").val() != $("#repeat_pass").val() || $("#reg_pass").val() == "") {
      $(".alert-danger .notification").html("please input correct password.");
      $(".alert-danger").addClass("alert-active");
      setTimeout(function () {
        $(".alert-danger").removeClass("alert-active");
      }, 2500);
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($("#reg_email").val())) {
      var reg_pass = $("#reg_pass").val();
      var reg_email = $("#reg_email").val();
      $.ajax({
        url: "model/auth_model.php",
        type: "POST",
        data: {
          type: "sign_up",
          reg_pass: reg_pass,
          reg_email: reg_email
        },
        success: function (res) {
          if (res == "already") {
            $(".alert-danger .notification").html("This user did already exist.");
            $(".alert-danger").addClass("alert-active");
            setTimeout(function () {
              $(".alert-danger").removeClass("alert-active");
            }, 2500);
          }
          if (res == "success") {
            window.location.href = "index.php";
          }
        }
      });
    } else {
      $(".alert-danger .notification").html("invalid Email.");
      $(".alert-danger").addClass("alert-active");
      setTimeout(function () {
        $(".alert-danger").removeClass("alert-active");
      }, 2500);
    }
  });

  $("#sign_in").on("click", function () {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($("#login_email").val())) {
      $.ajax({
        url: "model/auth_model.php",
        type: "POST",
        data: {
          type: "sign_in",
          login_email: $("#login_email").val(),
          login_pass: $("#login_pass").val()
        },
        success: function (res) {
          if (res == "success") {
            $(".alert-success .notification").html("Successfully signed in.");
            $(".alert-success").addClass("alert-active");
            setTimeout(function () {
              $(".alert-success").removeClass("alert-active");
              window.location.href = "index.php";
            }, 1500);
          } else {
            $(".alert-danger .notification").html("Unsigned up user.");
            $(".alert-danger").addClass("alert-active");
            setTimeout(function () {
              $(".alert-danger").removeClass("alert-active");
            }, 2500);
          }
        }
      })
    }
  });

})