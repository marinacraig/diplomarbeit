/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let festivaluebersicht = document.getElementById('festivaluebersicht');
if (festivaluebersicht !== null) {
    //hier alles zum in JSON umwandeln bzw. übergeben HTML <-> DB

    //da html-page und nicht php für Sesssion -> Cookie
    let mySession = 'etwas';

    //hier sollen alle Festivals rein (unsortiert und sortiert
    let alleFestivals = []

    //Für Test dh.solle eigentlich von DB kommen:
    alleFestivals = [
        {name:'jsFestival1', ort: 'Eggersriet', kanton:'SG',
            beginn: '30. Sep', ende: '1. Okt 2018',
            musikrichtung: 'indie', id: '1', gemerkt: true},
        {name:'jsFestival2', ort: 'Lausanne', kanton:'VD',
            beginn: '13. Nov', ende: '14. Nov 2018',
            musikrichtung: 'jazz', id: '2', gemerkt: true},
        {name:'jsFestival3', ort: 'Bern', kanton:'BE',
            beginn: '02. Okt', ende: '05. Okt 2018',
            musikrichtung: 'hiphop', id: '3', gemerkt: false},
        {name:'jsFestival4', ort: 'Solothurn', kanton:'SO',
            beginn: '13. Okt', ende: '14. Okt 2018',
            musikrichtung: 'poprock', id: '4', gemerkt: true},
        {name:'jsFestival5', ort: 'St. Gallen', kanton:'SG',
            beginn: '13. Nov', ende: '14. Nov 2018',
            musikrichtung: 'electronic', id: '5', gemerkt: true},
        {name:'jsFestival6', ort: 'Arbon', kanton:'TG',
            beginn: '02. Okt', ende: '05. Okt 2018',
            musikrichtung: 'indie', id: '6', gemerkt: false}
    ]


    //Für Filter Datum
    let datumFilter = 0;



    /*
    für irgendwie dem Server die Session übergeben -
    der muss wissen wer ich bin
    (Soll mit schliessen des Browsers gelöscht werden ->
    ein Cookie genererieren)
     */

    sessionStorage['mySession'] = JSON.stringify(mySession);
    mySession = JSON.parse(sessionStorage['mySession']);

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
