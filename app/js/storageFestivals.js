/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let festivaluebersicht = document.getElementById('festivaluebersicht');
if (festivaluebersicht !== null) {
    //hier alles zum in JSON umwandeln bzw. übergeben HTML <-> DB

    //da html-page und nicht php für Sesssion -> Cookie
    let mySession = 'etwas';
    let datumFilter = 0;


    sessionStorage['mySession'] = JSON.stringify(mySession);
    mySession = JSON.parse(sessionStorage['mySession']);


    //hier sollen alle Festivals rein (unsortiert und sortiert
    // let alleFestivals = []

    //Für Test dh.solle eigentlich von DB kommen:
    let alleFestivals = [
        {
            name: 'jsFestival1', ort: 'Eggersriet', kanton: 'SG',
            beginn: '2018-09-30 09:56:07', ende: '2018-10-01 09:56:07',
            musikrichtung: 'indie', id: '1', gemerkt: true
        },
        {
            name: 'jsFestival2', ort: 'Lausanne', kanton: 'VD',
            beginn: '2018-11-13 09:56:07', ende: '2018-11-14 09:56:07',
            musikrichtung: 'jazz', id: '2', gemerkt: true
        },
        {
            name: 'jsFestival3', ort: 'Bern', kanton: 'BE',
            beginn: '2018-10-12 09:56:07', ende: '2018-10-13 09:56:07',
            musikrichtung: 'hiphop', id: '3', gemerkt: false
        },
        {
            name: 'jsFestival4', ort: 'Solothurn', kanton: 'SO',
            beginn: '2018-10-03 09:56:07', ende: '2018-10-04 09:56:07',
            musikrichtung: 'poprock', id: '4', gemerkt: true
        },
        {
            name: 'jsFestival5', ort: 'St. Gallen', kanton: 'SG',
            beginn: '2018-11-29 09:56:07', ende: '2018-11-30 09:56:07',
            musikrichtung: 'electronic', id: '5', gemerkt: true
        },
        {
            name: 'jsFestival6', ort: 'Arbon', kanton: 'TG',
            beginn: '2018-11-13 10:56:08', ende: '2018-11-14 09:56:07',
            musikrichtung: 'indie', id: '6', gemerkt: false
        }
    ]


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


        sessionStorage.setItem('sortDate', JSON.stringify(datumFilter));


        //Todo: alle ungeraden aufsteigend ; alle geraden absteigend - oder umgekehrt
       // alleFestivals = JSON.parse(sessionStorage.getItem('sortDate'));

        if(datumFilter === 0){
            //aktuellstes zuerst
            alleFestivals.sort(function (a, b) {
                a = new Date(a.beginn);
                b = new Date(b.beginn);
                return a < b ? -1 : a > b ? 1 : 0;
            });

        }else{
            //aktuellstes zuletzt:
            alleFestivals.sort(function (a, b) {
                a = new Date(a.beginn);
                b = new Date(b.beginn);
                return a > b ? -1 : a < b ? 1 : 0;

            });
        }
       //Todo: irgendwie alleFestivals.forEach(function (Festival) aufrufen
       console.log(alleFestivals)



    }


    function sortKantone() {
        /*
        Idee: irgendwie an DB übergeben und nach Kanton sortiertes holen
        muss etwas mit this sein
         */

        sessionStorage.setItem('sortKanton', JSON.stringify(this.id));

        //Todo: sobald die funktion in php vorhanden
        // alleFestivals = JSON.parse(sessionStorage.getItem('sortKanton'));


    }
}
