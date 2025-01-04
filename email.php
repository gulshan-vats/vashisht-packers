<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $fullName = $_POST['full-name'];
    $phoneNumber = $_POST['phone-number'];
    $movingDate = $_POST['moving-date'];
    $movingFrom = $_POST['moving-from'];
    $movingTo = $_POST['moving-to'];
    $subject = $_POST['subject'];

    // Set recipient email address
    $to = "vashishtpackersmovers@gmail.com";
    $emailSubject = "Contact Form Submission: $subject";
    $emailBody = "You have received a new message from the contact form.\n\n".
                 "Full Name: $fullName\n".
                 "Phone Number: $phoneNumber\n".
                 "Moving Date: $movingDate\n".
                 "Moving From: $movingFrom\n".
                 "Moving To: $movingTo\n".
                 "Subject: $subject";

    // Send email
    if(mail($to, $emailSubject, $emailBody)) {
        echo "Thank you for contacting us. We will get back to you shortly.";
    } else {
        echo "There was a problem sending your message. Please try again later.";
    }
} else {
    header('Location: contact.php');
}
?>
