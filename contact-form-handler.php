<?php
    $name = $_POST['cname']
    $visitor_email = $_POST['cemail']
    $message = $_POST['cmessage']

    $email_from = "johnrfrankejr@gmail.com";

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name.\n".
                    "User Email: $visitor_email.\n"
                        "User Message: $message.\n";


    $to = "johnrfrankejr@gmail.com";
    
    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html")

?>