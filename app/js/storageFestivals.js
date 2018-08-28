/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let festivaluebersicht = document.getElementById('festivaluebersicht');
if (festivaluebersicht !== null) {
    //hier alles zum in JSON umwandeln bzw. übergeben HTML <-> DB

    //hier sollen alle Festivals rein (unsortiert und sortiert
    let alleFestivals = []

    //Für Filter Datum
    let datumFilter = 0;


    /*
 Filterfunktionen
  */


    function sortDatum() {
        /*
        Idee: irgendwie an DB übergeben und nach Datum sortiertes holen
         */

        datumFilter += 1
        datumFilter = (datumFilter % 2)
        console.log(datumFilter) //Ausgaben: 1 und 0

        localStorage.setItem('sortDate', JSON.stringify(datumFilter));

        //Todo: alle ungeraden aufsteigend ; alle geraden absteigend - oder umgekehrt
        //alleFestivals =   JSON.parse(localStorage.getItem('sortDate'));
    }


    function sortKantone() {
        /*
        Idee: irgendwie an DB übergeben und nach Kanton sortiertes holen
        muss etwas mit this sein
         */

        localStorage.setItem('sortKanton', JSON.stringify(this.id));

        //Todo: sobald die funktion in php vorhanden
        // alleFestivals = JSON.parse(localStorage.getItem('sortKanton'));


    }
}