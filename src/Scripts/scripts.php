<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate and sanitize data (implement your validation logic here)

    $to = "Luqmaan78600@gmail.com"; // Replace with your email address
    $subject = "New contact form submission from $name";
    $headers = "From: $email";

    // Attempt to send the email
    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email. Please try again later.";
    }
    exit;
}
?>
