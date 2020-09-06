<?php


    $name = $_GET['name'];
    $subject = $_GET['subject'];
    $mail = $_GET['mail'];
    $message = $_GET['message'];
    
    $mailTo = "kalczur@gmail.com";
    $headers = "From: ".$mail;
    $txt = "You have recived an e-mail from".$name.".\n\n".$message;

    echo $name;

    mail($mailTo, $subject, $txt, $headers);

?>