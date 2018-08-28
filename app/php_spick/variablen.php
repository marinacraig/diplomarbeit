<?php
$user = false;

if (isset($_SESSION['user'])) {
    $user = new User($_SESSION['user']);
    //z.B. check gemerkte Festivals

} else {
    header('Location: login.php');
    die();
}