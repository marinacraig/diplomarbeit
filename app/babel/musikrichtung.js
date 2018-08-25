'use strict';

var favoriteMusicStyle = document.getElementById('musikrichtung');
if (favoriteMusicStyle !== null) {
    /*
    Wurde auf die Checkbox geklickt? -> fkt checked
     */

    var toggleSelection = function toggleSelection() {
        // HTML-String der ID:console.log(this)
        //Ausgabe: true bzw. false console.log(this.toggleSelection)

        //enthält alle inkl. toggleSelection: true or false allFMS

        localstorageSetFMS(allFMS);
    };

    var resetToggleSelection = function resetToggleSelection() {
        /*
        statt alle einzeln & Probleme auf Seiten ohne
        jazzFMS.checked = false etc. folgend ersetzt
         */

        for (i = 0; i < allFMS.length; ++i) {
            if (allFMS[i] != null) {
                allFMS[i].checked = false;

                //Antwort alle ohne true: console.log (allFMS[i])
            }
        }
        localstorageSetFMS(allFMS);

        //todo: idee: this.checked bwz. true false in localstorage, dann dort holen und injecten
    };

    var backFMS = function backFMS() {
        console.log('link in zurueckFMS setzen');
        //sowas oder so:
        zurueckFMS.setAttribute("href", "https://bencollier.net/2011/05/quickly-creating-an-html-link-in-javascript/");
    };

    /*
    Eventlistener für alle checkboxes
    statt alle einzeln & Fehlermeldung
    (Bsp.:soulFMS.addEventListener('click', checked))
     */

    /*
    Idee:
    merke von welcher Seite jemand kommt
    ist filter angeglickt?
    welcher? (-> localstorage)
    geändert?
    neu?
    speichern im Profil falls eingeloggt
    speichern als Cookie und entsprechend abrufen
     Seiten:
        1. index.html
        2. festivaluebersicht.html
        (3. dashboard)
        [4. musikrichtung.html]
          falls jemand auf filter zurücksetzen klickt -> alle "löschen"
     */

    /*
    hole aus HTML favoriteMusicStyle
    da je Musikrichtung favoriteMusicStyle = FMS
    wenn alle einzeln, Problem mit Eventlistener z.B. für soul und mit fkt resetToggleSelection
    -> array allFMS
      */

    var jazzFMS = document.querySelector('#jazz');
    var hiphopFMS = document.querySelector('#hiphop');
    var indieFMS = document.querySelector('#indie');
    var poprockFMS = document.querySelector('#poprock');
    var electronicFMS = document.querySelector('#electronic');
    var countryFMS = document.querySelector('#country');
    var soulFMS = document.querySelector('#soul');

    /*
    alle in Array
     */

    var allFMS = [jazzFMS, hiphopFMS, indieFMS, poprockFMS, electronicFMS, countryFMS, soulFMS];

    // laden von eventuell bereits gesetzten elementen aus localstorage: muss als erstes gemacht werden
    getFMSSelection().forEach(function (e, i) {
        allFMS[i].checked = e; // musikrichtung.html hat mehr Elemente als die anderen -> Fehler bei e
    });

    //zeigt nicht vorhandene mit null: console.log (allFMS) -> bei Eventlistener berücksichtigt

    /*
    alle Filter zurücksetzen
     */
    var resetFMS = document.querySelector('#resetFMS');

    /*
    Damit man ans richtige Ort zurück kommt Link in nav auf passende Seite setzen
     wissen woher man kommt: class="indexHTML" und festivaluebersichtHTML
    (click mobile & grösser = anders, daher nicht id)
    Anmerkung: querySelector = null, querySelectorAll = NodeList
     nötig: ort zum link für "zurück" setzen = id="zurueckFMS"
     */
    var indexHTML = document.querySelector('.indexHTML');
    var festUebHTML = document.querySelector('.festivaluebersichtHTML');

    var zurueckFMS = document.querySelector('#zurueckFMS');

    var i = 0;for (i = 0; i < allFMS.length; ++i) {
        if (allFMS[i] != null) {
            allFMS[i].addEventListener("click", toggleSelection);
        }
    }

    /*
    Eventlistener für zurücksetzen
     */
    resetFMS.addEventListener('click', resetToggleSelection);

    /*
    Eventlistener für Zurück-Link in Nav
    zuerst schauen ob ausführbar, dann via fkt link in HTML einfügen
    Problem: auf der index bzw. Übersichtseite ist der zurückbutton
    nicht vorhanden
    Todo: idee: wert für fkt in localstorage, wenn auf musikrichtung.html
    wert holen und page einfügen
     */

    if (indexHTML != null) {
        indexHTML.addEventListener('click', backFMS);
    }

    if (festUebHTML != null) {
        festUebHTML.addEventListener('click', backFMS);
    }
    /*
        if (indexHTML != null) {
            indexHTML.addEventListener('click', e => {
                zurueckFMS.setAttribute("href", "https://bencollier.net/2011/05/quickly-creating-an-html-link-in-javascript/");
             })
        }*/
}

/*
Anpassungen HTML:
div mit form ersetzen -> glaubs unnötig bzw. wieder gelöscht
bei input name="musikrichtung" (nicht nötig)
label mit for und input mit id id="resetFMS"
ergebnis anzeigen id="filterFMS"
Filter zurücksetzen:
Todo's im HTML bezüglich weiteren Seiten  bzw. zurücksetzen löschen
 */