<?php
// dies ist die REST API
$ausgabe = Array();
foreach ($user->getFestivals() as $festival) {
    echo $festival->get_name();
    $festivalitem = Array();
    $festivalitem['name'] = $festival->get_name();
    array_push($ausgabe, $festivalitem);

    // besser direkt toJSON in Festival.php entsprechend ergänzen bzw. im USER wo alle Tasks geholt werden
    //array_push($ausgabe, $Festival->toArray());

}
header("Content-type:application/json");
echo json_encode ($ausgabe);