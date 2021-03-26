<?php
// ob_start();
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Test</title>
  <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/auth.css" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="stylesheet" href="css/main.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="./js/auth.js"></script>
  <script type="text/javascript" src="./js/main.js"></script>
  <script type="text/javascript" src="./js/queries.js"></script>
</head>

<body>
  <div class="alert alert-success w-25 float-right ">
    <button type="button" class="close" data-dismiss="alert"></button>
    <strong> Success! </strong><br> <span class="notification">Successfully Created</span>
  </div>
  <div class="alert alert-danger w-25 float-right ">
    <button type="button" class="close" data-dismiss="alert"></button>
    <strong> Failed! </strong><br><span class="notification"> Please fill email field</span>
  </div>
  <div class="container-fluid">
    <?php
    if (empty($_SESSION["user"])) {
      require("./pages/auth/auth.php");
    } else {
      require("./pages/main/dashboard.php");
    }
    ?>
  </div>
</body>

</html>