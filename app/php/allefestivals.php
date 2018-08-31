<?php
ini_set("display_errors", true); // für Fehlerausgabe

require __DIR__ . '/vendor/autoload.php';

include('DB.php');

/*
 * hier alles was mit dem auflisten der Festivals zu tun hat
 * dazu gehören alle funktionen mit neu, ändern, löschen -> diese fkt auslagern z.B. festivalNew.php,
 * festivalUpdate.php, festivalDelete.php
 * evtl. Filter: Datum, Kanton, Musikrichtung
 */


//alle Festivals aus DB holen (hier via export)
/*$festivals = array(
    array('user_id' => NULL, 'name' => 'DB festival1', 'ort' => 'Eggersriet', 'kanton' => 'SG', 'beginn' => '2018-09-30 14:59:43', 'ende' => '2018-10-01 14:59:43', 'musikrichtung' => 'indie', 'id' => '1', 'gemerkt' => '0'),
    array('user_id' => NULL, 'name' => 'DB Festival2', 'ort' => 'Bern', 'kanton' => 'BE', 'beginn' => '2018-10-12 00:00:00', 'ende' => '2018-10-14 00:00:00', 'musikrichtung' => 'jazz', 'id' => '2', 'gemerkt' => '1'),
    array('user_id' => NULL, 'name' => 'DB festival3', 'ort' => 'Oerlikon', 'kanton' => 'ZH', 'beginn' => '2018-10-04 14:59:43', 'ende' => '2018-10-06 14:59:43', 'musikrichtung' => 'hiphop', 'id' => '3', 'gemerkt' => '0'),
    array('user_id' => NULL, 'name' => 'DB Festival4', 'ort' => 'Arbon', 'kanton' => 'TG', 'beginn' => '2018-09-26 00:00:00', 'ende' => '2018-09-27 00:00:00', 'musikrichtung' => 'electronic', 'id' => '4', 'gemerkt' => '1'),
    array('user_id' => NULL, 'name' => 'DB Festival5', 'ort' => 'Romanshorn', 'kanton' => 'TG', 'beginn' => '2018-11-20 00:00:00', 'ende' => '2018-11-22 00:00:00', 'musikrichtung' => 'poprock', 'id' => '5', 'gemerkt' => '1'),
    array('user_id' => NULL, 'name' => 'DB Festival6', 'ort' => 'Bern', 'kanton' => 'BE', 'beginn' => '2018-10-12 00:00:00', 'ende' => '2018-10-14 00:00:00', 'musikrichtung' => 'jazz', 'id' => '6', 'gemerkt' => '1'),
    array('user_id' => NULL, 'name' => 'DB Festival7', 'ort' => 'Bern', 'kanton' => 'BE', 'beginn' => '2018-10-12 00:00:00', 'ende' => '2018-10-14 00:00:00', 'musikrichtung' => 'jazz', 'id' => '7', 'gemerkt' => '1'),
    array('user_id' => NULL, 'name' => 'DB festival8', 'ort' => 'Eggersriet', 'kanton' => 'SG', 'beginn' => '2018-09-30 14:59:43', 'ende' => '2018-10-01 14:59:43', 'musikrichtung' => 'indie', 'id' => '8', 'gemerkt' => '0')
);*/


//Alle Kundendaten selektieren
//Todo: 1. wie hole ich die connection aus DB.php - wird nicht gefunden, vendor allerdings verlinkt...
$statement = PDO::fetch()->prepare('
              SELECT
                *
              FROM
                festival
              ');

print "<pre>";
print_r($statement);
print "</pre>";


//todo: $datum - via API - anpassen, Werte: 1 & 0
$datum = 0;


if ($datum === 0) {

    usort($festivals, 'datum_aufsteigend');

} else if ($datum === 1) {

    usort($festivals, 'datum_absteigend');

} else {
    echo('etwas stimmt nicht mit Datum Filter');
}


function datum_aufsteigend($a, $b)
{
    $t1 = strtotime($a['beginn']);
    $t2 = strtotime($b['beginn']);
    return $t1 - $t2;
}

function datum_absteigend($a, $b)
{
    $t1 = strtotime($a['beginn']);
    $t2 = strtotime($b['beginn']);
    return $t2 - $t1;
}

$alleFestivals = $festivals;


print "<pre>";
print_r($alleFestivals);
print "</pre>";


//Filter nach Kanton -> json schickt sortKanton mit Kantonskürzel
//$kanton = array('AG', 'AR', 'AI', 'BL', 'BS', 'BE', 'FR', 'GE', 'GL', 'GR', 'JU', 'LU', 'NE', 'NW', 'OW', 'SG', 'SH', 'SZ', 'SO', 'TG', 'TI', 'UR', 'VD', 'VS', 'ZG', 'ZH' );
//todo: $kanton anpassen (via API), nur ausführen wenn jemand dies wünscht
$kanton = 'TG';

$alleFestivalsKanton = array_filter($festivals, function ($item) use ($kanton) {
    return ($item['kanton'] == $kanton);
});


/*
 * gibt alle Festivals nach Kanton, bedingung: Kanton steht in $kanton
 */
print "<pre>";
print_r($alleFestivalsKanton);
print "</pre>";


// via API alle Festivals hinaus senden
