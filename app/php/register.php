<?php
/*
 * Idee: prüfen ob schon eingeloggt
 * wenn nein
 * prüfen ob login schon vorhanden
 * -> falls ja: Fehlermeldung? oder zurück?
 * -> unbedingt password hashen
 * falls registrieren ok:
 * 1. überprüfen ob im localStorage Daten von FMS (=Favorite Music Style) vorhanden
 *      falls ja, ebenfalls speichern
 * 2. geklappt: laut styleguide ins dashboard,
 * da dies nicht vorhanden -> ticketuebersicht.html (kann dann "merken")
 */

require __DIR__ . '/vendor/autoload.php';

//falls Session vorhanden: weiter zur Ticketübersicht (da kein Dashboard)
if (isset($_SESSION['username'])) {
    header('Location: ../content/ticketuebersicht.html');
    die();
}

if (isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password'])){
    $user = new User($_POST['username']);

    if($user->getName()){
        $error = 'Benutzer existiert bereits';
    }else{
        $user->setName($_POST['username']);
        $user->setPasssword(password_hash($_POST['password'], PASSWORD_DEFAULT));
        $user->setEmail($_POST['email']);
        $user->create();


        $_SESSION['user'] = $user->getName();
        header('Location: ../content/ticketuebersicht.html');
        die();
    }

}