<?php
// Import PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load PHPMailer files
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/PHPMailer/src/SMTP.php';

// Enable debugging
$mail = new PHPMailer(true);

try {
    // Debug SMTP connection
    $mail->SMTPDebug = 2;

    // Enable SMTP
    $mail->isSMTP();

    // Enable SMTP Authentication
    $mail->SMTPAuth = true;

    // Server hostname
    $mail->Host = 'http://localhost';

    // Server username
    $mail->Username = 'root';

    // Server password
    $mail->Password = '';

    // Server Port
    $mail->Port = 587;

    // Enable encryption
    $mail->SMTPSecure = 'tls';


    // If connecting to a mail host with TLS/SSL
    // that doesn't have a proper certificate setup.
    /*
    $mail->smtpConnect([
    'ssl' => [
    'verify_peer' => false,
    'verify_peer_name' => false,
    'allow_self_signed' => true
    //]
    //]);
    */

    // Sender address
    $mail->setFrom('user@example.com');

    // Recipient address
    $mail->addAddress('user@example.com');

    // Enable HTML
    $mail->isHTML(true);

    // Message subject
    $mail->Subject = 'Test Message';

    // Message body (HTML)
    $mail->Body    = 'This is just a test. <b>Please disregard!</b>';

    // Message body (Plaintext)
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    // Send the message
    $mail->send();
    echo 'Message was sent successfully!';

} catch (Exception $e) {
    // Display error
    echo 'Message could not be sent. Mailer error: ', $mail->ErrorInfo;
}