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
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test($("input[type=email]").val())) {
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
              // window.location.href = "index.php";
              $(".tab").removeClass("tab-active");
              $(".user-info").addClass("tab-active");
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
    }else{
      $(".alert-danger .notification").html("Unformatted email address.");
      $(".alert-danger").addClass("alert-active");
      setTimeout(function () {
        $(".alert-danger").removeClass("alert-active");
      }, 2500);
    }
  });

  $("#submit").on("click", function () {
    var flag = true;
    for (var i = 0; i < $(".user-info input").length; i++) {
      if ($(".user-info input").eq(i).val() == "") {
        $(".user-info input").eq(i).css("border-color", "red");
        flag = false;
      }
    }
    if (flag) {
      $.ajax({
        url: "model/auth_model.php",
        type: "POST",
        data: {
          type: "user_info",
          fullName: $("#full_name").val(),
          gender: $("[name=gender]").val(),
          place: $("#place").val(),
          birthday: $("#birthday").val(),
          phone: $("#phone").val(),
          address: $("#address").val()
        },
        success: function (res) {
          if(res == "success"){
            window.location.href = "index.php";
          }
        }
      });
    }
  });

  $(".user-info input").on("keyup", function () {
    if ($(this).val() != "") {
      $(this).css("border-color", "gray");
    }
  });

  $(".user-info input[type=date]").on("change", function () {
    if ($(this).val() != "") {
      $(this).css("border-color", "gray");
    }
  });

})