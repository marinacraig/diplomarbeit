<?php

require __DIR__ . '/vendor/autoload.php';

session_start();

if ($_POST['logout']) {
    unset($_SESSION['user']);
}

if (isset($_SESSION['user'])) {
    header('Location: weiter.php');
    die();
}

$error = false;

if (isset($_POST['email']) && isset($_POST['password'])) {
    $user = new User($_POST['email']);


    if (password_verify($_POST['password'], $user->getPassword())) {
        session_start();
        $_SESSION['user'] = $user->getName();
        header('Location: weiter.php');
        die();
    } else {
      $error = 'Benutzer oder Passwort stimmt nicht…';
   }
}

?>

<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

    <!--für den slider-->
    <link rel='stylesheet prefetch' href='http://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css'>

    <!-- inject:css -->
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link rel="stylesheet" type="text/css" href="../css/main.min.css">
    <!-- endinject -->

</head>
<body>
<header>
    <!--nav links anpassen, ggf nochmals hineinkopieren-->
    <!--overlay aus index rüber kopieren, aufpassen mit links-->
    <!--suche und icon zuerst richtig-->
    <!--login overlay-->
    <!--ticket overlay-->
    <!--original aus index rüber kopieren, aufpassen mit links-->

    <nav>

        <!--Inhalt des Overlays gelöscht-->


        <!--Nav-Teil - immer sichtbar -  id, menu & entsprechendes icon anders -->


        <ul class="nav container nav__top nav__top--original">
            <li  class="nav nav__menu item">
                <a href="../index.html" id="zurueckFMS">
                    <p class="container">
                        <svg class="icon icon__nav icon__nav--menu" width="24px" height="24px" viewBox="0 0 24 24"
                             version="1.1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                            <title>navigation_zurück</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g class="icon__nav--menu" id="navigation_zurück"
                                   transform="translate(-12.000000, -12.000000)">
                                    <g transform="translate(24.000000, 24.000000) rotate(-90.000000) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"
                                       id="Shape">
                                        <path d="M23.7521515,11.4010327 L12.5989673,0.247848537 C12.454389,0.103270224 12.2271945,0 12,0 C11.7728055,0 11.545611,0.103270224 11.4010327,0.247848537 L0.247848537,11.4010327 C-0.082616179,11.7314974 -0.082616179,12.2685026 0.247848537,12.5989673 C0.413080895,12.7641997 0.619621343,12.8468158 0.846815835,12.8468158 C1.07401033,12.8468158 1.28055077,12.7641997 1.44578313,12.5989673 L11.1531842,2.89156627 L11.1531842,23.1531842 C11.1531842,23.6282272 11.524957,24 12,24 C12.475043,24 12.8468158,23.6282272 12.8468158,23.1531842 L12.8468158,2.89156627 L22.5542169,12.5989673 C22.8846816,12.929432 23.4216867,12.929432 23.7521515,12.5989673 C24.0826162,12.2685026 24.0619621,11.7314974 23.7521515,11.4010327 L23.7521515,11.4010327 Z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span class="nav__display nav__display--phone">ZURÜCK</span>
                    </p>
                </a>
            </li>

            <li class="nav nav__festivallovers item">
                <a href="../index.html" class="container">
                    <span class="nav__display nav__display--tablet item__hidden nav__festivallovers--1">Festival</span>
                    <svg class="icon icon__nav icon__nav--herz" width="24px" height="23px" viewBox="0 0 24 23"
                         version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                        <title>detail_like_filled</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g class="icon__nav--herz"
                               transform="translate(-12.000000, -12.000000)">
                                <g transform="translate(12.000000, 12.000000)">
                                    <path d="M23.9589231,7.03476923 C23.6086154,3.17907692 20.8795385,0.381692308 17.4641538,0.381692308 C15.1887692,0.381692308 13.1053846,1.60615385 11.9330769,3.56861538 C10.7713846,1.58076923 8.77338462,0.381230769 6.53446154,0.381230769 C3.11953846,0.381230769 0.39,3.17861538 0.0401538462,7.03430769 C0.0124615385,7.20461538 -0.101076923,8.10092308 0.244153846,9.56261538 C0.741692308,11.6709231 1.89092308,13.5886154 3.56676923,15.1070769 L11.9275385,22.6943077 L20.4318462,15.1075385 C22.1076923,13.5886154 23.2569231,11.6713846 23.7544615,9.56261538 C24.0996923,8.10138462 23.9861538,7.20507692 23.9589231,7.03476923 L23.9589231,7.03476923 Z"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <span class="nav__display nav__display--tablet item__hidden nav__festivallovers--2">Lovers</span>
                </a>
            </li>

            <!--login, tickets-->
            <li>
                <ul class="container">
                    <li class="nav nav__login item nav__dropdown">
                        <p class="container">
                            <svg class="icon icon__nav icon__nav--login" width="24px" height="24px" viewBox="0 0 24 24"
                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                                <title>navigation_login</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g class="icon__nav--login"
                                       transform="translate(-12.000000, -12.000000)">
                                        <g transform="translate(12.000000, 12.000000)">
                                            <path d="M11.99968,0 C5.37256,0 8e-05,5.37264 8e-05,11.99976 C8e-05,18.62672 5.37256,23.99976 11.99968,23.99976 C18.6268,23.99976 23.99968,18.62672 23.99968,11.99976 C23.99968,5.37248 18.6268,0 11.99968,0 L11.99968,0 Z M12.03624,17.66104 L12.03624,17.66088 L11.96296,17.66088 L6.8372,17.66088 C6.8372,13.9124 10.12936,13.91328 10.85992,12.93312 L10.94352,12.48616 C9.91712,11.966 9.19256,10.71192 9.19256,9.2452 C9.19256,7.31288 10.44952,5.74616 11.99968,5.74616 C13.54984,5.74616 14.8068,7.31288 14.8068,9.2452 C14.8068,10.69944 14.09512,11.94568 13.0824,12.47408 L13.1776,12.982 C13.97912,13.91464 17.16176,13.97544 17.16176,17.66104 L12.03624,17.66104 L12.03624,17.66104 Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="nav__display nav__display--desktop item__hidden nav__login">LOGIN</span>
                        </p>


                        <!-- Login Maske - Dropdown -->
                        <ul class="nav__dropdown--content">

                            <li>
                                <p class="pfeil-oben login"></p>
                            </li>

                            <li>

                                <form action="../php/login.php" method="post">
                                    <input type="email" placeholder="E-Mail Adresse" name="email"
                                           autocomplete="section-blue shipping">

                                    <input type="password" placeholder="Passwort" name="password"
                                           autocomplete="section-blue shipping">

                                    <button type="submit" class="button btnweiss">anmelden</button>
                                </form>

                                <p><a href="#">Passwort</a> vergessen?</p>
                            </li>

                            <li class="horizontal-line"></li>

                            <li>
                                <p>Neu bei FestivalLovers?</p>
                                <p>Jetzt <a href="register.html">registrieren.</a></p>


                            </li>

                        </ul>

                    </li>

                    <!-- Ticket bestellen-->

                    <li class="nav nav__ticket item">
                        <a href="ticketuebersicht.html" class="container">

                            <svg class="icon icon__nav icon__nav--ticket" width="24px" height="22px" viewBox="0 0 24 22"
                                 version="1.1" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink">
                                <!-- Generator: Sketch 39.1 (31720) - http://www.bohemiancoding.com/sketch -->
                                <title>navigation_ticketkauf</title>
                                <desc>Created with Sketch.</desc>
                                <defs></defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g class="icon__nav--ticket"
                                       transform="translate(-12.000000, -13.000000)">
                                        <g transform="translate(12.000000, 13.000000)">
                                            <path d="M23.8414118,8.42552941 L22.688549,6.77960784 C22.681451,6.78458824 22.6747451,6.79007843 22.6677255,6.79494118 C21.3627451,7.70937255 19.5636471,7.39219608 18.649451,6.08709804 C17.7352549,4.78223529 18.0522745,2.98301961 19.3574118,2.06890196 C19.3645098,2.06392157 19.3717647,2.05956863 19.3788627,2.05470588 L18.2260392,0.409019608 C17.9483922,0.0125098039 17.4016471,-0.0837254902 17.005098,0.193921569 L12.4452941,3.38803922 L13.4432941,4.81286275 L12.3613333,5.57015686 L11.3636471,4.14568627 L0.373960784,11.8439608 C-0.0227843137,12.1213725 -0.119137255,12.6681569 0.158862745,13.0646667 L5.77423529,21.0811765 C6.05188235,21.4776863 6.59866667,21.5739216 6.99490196,21.2960392 L17.9845098,13.5981961 L16.9989804,12.191098 L18.0808627,11.4333725 L19.0662353,12.8405882 L23.6263137,9.64635294 C24.0224706,9.36843137 24.1190588,8.82188235 23.8414118,8.42552941 L23.8414118,8.42552941 Z M13.1307451,6.61670588 L14.2125882,5.85909804 L15.5077255,7.70760784 L14.4253725,8.46545098 L13.1307451,6.61670588 L13.1307451,6.61670588 Z M16.300902,11.1944314 L15.1063529,9.48937255 L16.1882353,8.73176471 L17.3826275,10.4368235 L16.300902,11.1944314 L16.300902,11.1944314 Z"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p class="nav__display nav__display--desktop item__hidden nav__ticket">TICKETS KAUFEN</p>
                        </a>

                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</header>


<main class="kaufen registrieren" id="pagetop">
    <p></p>
    <p></p>
    <h1>Login</h1>
<form method="post">
    <input type="email" placeholder="E-Mail Adresse" name="email"
           autocomplete="section-blue shipping">

    <input type="password" placeholder="Passwort" name="password"
           autocomplete="section-blue shipping">

    <br>

    <button type="submit" class="button btnweiss">anmelden</button>
<br>
    <?php
    if ($error) {
        echo $error;
    }
    ?>
    <br>
    <!--Todo: logout funktion machen - in weiter integrieren macht wenig sinn, da dies eine Art Bestätigungsseite ist-->
    <button type="submit" name="logout" class="button btnschwarz" id="logout">logout</button>
</form>
    <br>
    <a href="register.php">registrieren</a>
    <br>
    <a href="login.php">login</a>

</main>

</body>
</html>