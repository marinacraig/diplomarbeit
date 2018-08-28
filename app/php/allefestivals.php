<?php
ini_set("display_errors",true); // für Fehlerausgabe

require __DIR__ . '/vendor/autoload.php';

/*
 * hier alles was mit dem auflisten der Festivals zu tun hat
 * dazu gehören alle funktionen mit neu, ändern, löschen -> diese fkt auslagern z.B. festivalNew.php,
 * festivalUpdate.php, festivalDelete.php
 * evtl. Filter: Datum, Kanton, Musikrichtung
 */

echo('hi');

//alle Festivals aus DB holen = get?
$sql = "SELECT * FROM festival";
foreach ($PDO->query($sql) as $row) {
    echo $row['name']." ".$row['ort']."<br />";
    echo "Style: ".$row['musikrichtung']."<br /><br />";
}


//via API StorageFestivals filter anfragen holen

//Filter nach Kanton -> json schickt sortKanton mit Kantonskürzel

//Filter nach Datum hoch

//Filter nach Datum runter


// via API alle Festivals hinaus senden
