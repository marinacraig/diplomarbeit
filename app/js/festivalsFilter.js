/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

let festivaluebersicht = document.getElementById('festivaluebersicht');
if (festivaluebersicht !== null) {

    /*
    Für die Filterfunktionen
     */
    let filterDatum = document.querySelector('.filter__datum')

//für die Filterfunktion nach Kanton
    let ktAG = document.querySelector('#AG')
    let ktAR = document.querySelector('#AR')
    let ktAI = document.querySelector('#AI')
    let ktBL = document.querySelector('#BL')
    let ktBS = document.querySelector('#BS')
    let ktBE = document.querySelector('#BE')
    let ktFR = document.querySelector('#FR')
    let ktGE = document.querySelector('#GE')
    let ktGL = document.querySelector('#GL')
    let ktGR = document.querySelector('#GR')
    let ktJU = document.querySelector('#JU')
    let ktLU = document.querySelector('#LU')
    let ktNE = document.querySelector('#NE')
    let ktNW = document.querySelector('#NW')
    let ktOW = document.querySelector('#OW')
    let ktSG = document.querySelector('#SG')
    let ktSH = document.querySelector('#SH')
    let ktSZ = document.querySelector('#SZ')
    let ktSO = document.querySelector('#SO')
    let ktTG = document.querySelector('#TG')
    let ktTI = document.querySelector('#TI')
    let ktUR = document.querySelector('#UR')
    let ktVD = document.querySelector('#VD')
    let ktVS = document.querySelector('#VS')
    let ktZG = document.querySelector('#ZG')
    let ktZH = document.querySelector('#ZH')


    let alleKantone = [ktAG, ktAR, ktAI, ktBL, ktBS, ktBE, ktFR, ktGE, ktGL, ktGR, ktJU, ktLU, ktNE, ktNW, ktOW, ktSG, ktSH, ktSZ, ktSO, ktTG, ktTI, ktUR, ktVD, ktVS, ktZG, ktZH]





    //Sortieren nach Datum: soll eigentlich über DB laufen, daher hier nicht relevant
    //Todo: mit click verbinden (sortDatum bzw datumFilter)

        //aktuellstes zuletzt:
        alleFestivals.sort(function (a, b) {
            a = new Date(a.beginn);
            b = new Date(b.beginn);
            return a > b ? -1 : a < b ? 1 : 0;

        });

        //neustes zuerst
        alleFestivals.sort(function (a, b) {
            a = new Date(a.beginn);
            b = new Date(b.beginn);
            return a < b ? -1 : a > b ? 1 : 0;
        });



    alleFestivals.filter(kanton => {
        return kanton.kanton
    })

//Todo sowas für filter Musikrichung, style anhand allFMS
    /* let showFMS = alleFestivals.filter(style => {
         return style.musikrichtung
     })*/

    /*
    Eventlistener für Filterfunktionen via DB (fkt in storageFestivasl:
     */
    filterDatum.addEventListener('click', sortDatum)

    for (let i = 0; i < alleKantone.length; ++i) {
        if (alleKantone[i] != null) {
            alleKantone[i].addEventListener('click', sortKantone)
        }
    }

}