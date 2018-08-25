<?php

require __DIR__ . '/vendor/autoload.php';

if (isset($_SESSION['user'])) {
    header('Location: ../content/ticketuebersicht.html');
    die();
}

$error = false;

if (isset($_POST['username']) && isset($_POST['password'])) {
    $user = new User($_POST['username']);

    if (password_verify($_POST['password'], $user->getPasssword())) {
        session_start();
        $_SESSION['user'] = $user->getName();
        header('Location: ../content/ticketuebersicht.html');
        die();
    } else {
        $error = 'Benutzer oder Passwort stimmt nicht…';
    }
}