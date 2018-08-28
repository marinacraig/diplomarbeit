<?php
ini_set("display_errors",true); // für Fehlerausgabe

require __DIR__ . '../../vendor/autoload.php';

session_start();

if ($_POST['logout']) {
    unset($_SESSION['user']);
}


$user = false;

if (isset($_SESSION['user'])) {
    $user = new User($_SESSION['user']);
    // für check $task = new Task(1);
} else {
    header('404 Unauthorized'); // hier anderen Link einfügen
    die();
}

//da Idee Festivals direkt auf DB erfassen:
if($_SERVER['REQUEST_METHOD'] == "GET"){
        include_once 'api.php';
    }


// hierhin die Weiche = dependencies injection
/*if($_SERVER['REQUEST_METHOD'] == "DELETE"){
    parse_str(file_get_contents("php://input", "r"), $_DELETE);
    include_once 'taskLoeschen.php';
}

if($_SERVER['REQUEST_METHOD'] == "PUT"){
    parse_str(file_get_contents("php://input", "r"), $_PUT);
    include_once 'taskAktualisieren.php';
}

if($_SERVER['REQUEST_METHOD'] == "POST"){
    include_once 'taskErstellen.php';
}

if($_SERVER['REQUEST_METHOD'] == "GET"){
    if(defined($_REQUEST['task'])){
        include_once 'einzelnerTask.php';
    }else{
        include_once 'alleTasks.php';
    }
}
switch($_SERVER['REQUEST_METHOD']){
    case 'DELETE':
        parse_str(file_get_contents("php://input", "r"), $_DELETE);
        include_once 'taskLoeschen.php';
        break;

    case 'PUT':
        parse_str(file_get_contents("php://input", "r"), $_PUT);
        // hier fehlt etwas mit
        if(isset($_PUT['task'])){
            include_once 'taskAktualisieren.php';
        }else{
            // fehlermeldung anzeigen
        }
        break;

    case 'POST':
        include_once 'taskErstellen.php';
        break;

    case 'GET':
        if(defined($_REQUEST['task'])){
            include_once 'einzelnerTask.php';
        }else{
            include_once 'alleTasks.php';
        }
        break;
}
*/
// dann hier den echo $antwort; statt echo json_encode ($ausgabe); in alleTasks.php bzw. tasklist.php wäre dann gut geschützt


