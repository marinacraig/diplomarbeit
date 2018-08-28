<?php
require __DIR__ . '../../vendor/autoload.php';

if (isset($_SESSION)){
    session_destroy();
    header('Location: login.php');
    die();
}