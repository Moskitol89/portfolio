<?php
$mailName = $_POST["mail-name"];
$mailEmail = $_POST["mail-email"];
$mailText = $_POST["mail-text"];

$mailName = htmlspecialchars($mailName);
$mailEmail = htmlspecialchars($mailEmail);
$mailText = htmlspecialchars($mailText);

$mailName = urldecode($mailName);
$mailEmail = urldecode($mailEmail);
$mailText = urldecode($mailText);

$mailName = trim($mailName);
$mailEmail = trim($mailEmail);
$mailText = trim($mailText);

mail("abdula.myausovich@mail.ru", "Portfolio form", "Name: ".$mailName."\r\nE-mail: ".$mailEmail."\r\nText: ".$mailText);
?>