
<?php
// Requires SMTP on server to function
// Take all the POST form values and store them into variables
    $name=$_POST["name"];
    $email=$_POST["email"];
    $phone=$_POST["phone"];
    $message=$_POST["body"];

// Compile the body of the email
    $mailBody="Name: $name\nEmail: $email\nPhone Number: $phone\n\n$message";
// Send email and redirect
    mail("jroshthen1@gmail.com","Emmanna Website Contact Email","$mailBody");
    header('Location:  https://test.tatraja.art/classified/thank_you.html');
?>