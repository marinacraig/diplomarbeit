<?php

require __DIR__ . '/vendor/autoload.php';

session_start();

?>

<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>php zum weiterverlinken</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">

    <!--für den slider-->
    <link rel='stylesheet prefetch' href='http://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css'>

    <!-- inject:css -->
    <link rel="stylesheet" type="text/css" href="../css/main.css">
    <link rel="stylesheet" type="text/css" href="../css/main.min.css">
    <!-- endinject -->
</head>
<body>

<h1>wäre vielleicht das Dashbord</h1>

<!--Todo: aus Session username holen und hier anzeigen-->

<p>du hast sich erfolgreich eingeloggt</p>
<a href="../content/ticketuebersicht.html">Ticketübersicht</a>

</body>
</html>
