<?php
session_start();

include("../common/env.php");
$db_host = getenv("DB_HOST");
$db_username = getenv("DB_USERNAME");
$db_password = getenv("DB_PASSWORD");
$db_name = getenv("DB_NAME");

$conn = new PDO("mysql:host=$db_host;dbname=$db_name", $db_username, $db_password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if ($_POST['type'] == "sign_up") {

  $reg_pass = md5($_POST['reg_pass']);
  $reg_email = $_POST['reg_email'];

  try {
    $stmt = $conn->prepare("SELECT * from `user` where email='$reg_email'");
    $stmt->execute();
    if ($stmt->rowCount() > 0) {
      echo "already";
    } else {
      $query = $conn->prepare("INSERT INTO `user` SET `email`= '$reg_email', `password`='$reg_pass'");
      $query->execute();
      echo "success";
    }
  } catch (PDOException $e) {
    echo "failed" . $e->getMessage();
  }
}

if($_POST["type"] == "sign_in"){
  $login_email = $_POST["login_email"];
  $login_pass = md5($_POST["login_pass"]);
  try{
    $stmt = $conn->prepare("SELECT * from `user` WHERE email = '$login_email' AND password = '$login_pass'");
    $stmt->execute();
    if($stmt->rowCount()>0){
      $_SESSION["user"] = $login_email;
      echo "success";
    }else{
      echo "no_user";
    }
  }catch(PDOException $e){
    echo "failed".$e->getMessage();
  }
}

if ($_POST['type'] == "logout") {
  session_destroy();
  echo "success";
}

$conn = null;
