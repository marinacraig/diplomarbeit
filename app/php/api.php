<?php
ini_set("display_errors",true); // für Fehlerausgabe

require __DIR__ . '/vendor/autoload.php';

/*
 * unklar: getFestivals()
 */

/*
// dies ist die REST API
$alleFestivals = Array();
foreach ($PDO->get_festival() as $festival) {
    echo $festival->get_name();

    $festivalitem = Array();
    $festivalitem['name'] = $festival->get_name();
    $festivalitem['ort'] = $festival->get_ort();
    $festivalitem['kanton'] = $festival->get_kanton();
    $festivalitem['beginn'] = $festival->get_beginn();
    $festivalitem['ende'] = $festival->get_ende();
    $festivalitem['musikrichtung'] = $festival->get_musikrichtung();
    $festivalitem['id'] = $festival->get_id();
    $festivalitem['gemerkt'] = $festival->get_gemerkt();

    array_push($alleFestivals, $festivalitem->toArray());

}
header("Content-type:application/json");
echo json_encode ($alleFestivals);


//Todo: erhalten und alle zurück senden via: $kanton und $datum (1 & 0) -> via allefestivals.php verknüpfen

//für nach datum sortiert: $allefestivals
//für nach kanton sortiert: $alleFestivalsKanton (soll nur via user ausgeführt werden)


print "<pre>";
print_r($alleFestivals);
print "</pre>";

*/