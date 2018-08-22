let favoriteMusicStyle = document.getElementById('filterFMS');
if (favoriteMusicStyle !== null) {
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
    da alle einzeln, bei fkt unchecked alle einzeln einfügen
    (oder Array bzw. Objekt erstellen und entsprechend in fkt unchecked)
     */

    let jazzFMS = document.querySelector('#jazz')
    let hiphopFMS = document.querySelector('#hiphop')
    let indieFMS = document.querySelector('#indie')
    let poprockFMS = document.querySelector('#poprock')
    let electronicFMS = document.querySelector('#electronic')
    let countryFMS = document.querySelector('#country')
    let soulFMS = document.querySelector('#soul')


    /*
    alle Filter zurücksetzen
     */
    let resetFMS = document.querySelector('#resetFMS')

    /*
    Damit man ans richtige Ort zurück kommt Link in nav auf passende Seite setzen

    wissen woher man kommt: class="indexHTML" und festivaluebersichtHTML
    (click mobile & grösser = anders, daher nicht id)
    Todo Anmerkung: querySelector = null, querySelectorAll = NodeList

    nötig: ort zum link für "zurück" setzen = id="zurueckFMS"
     */
    let indexHTML = document.querySelector('.indexHTML')
    let festUebHTML = document.querySelectorAll('.festivaluebersichtHTML')

    console.log(indexHTML)
    console.log(festUebHTML)

    let zurueckFMS = document.querySelector('#zurueckFMS')

    /*
    Wurde auf die Checkbox geklickt? -> fkt checked
     */

    function checked() {
        console.log(this) // HTML-String der ID
        console.log(this.checked) //Ausgabe: true bzw. false
        //todo: idee: this.checked bwz. true false in localstorage, dann dort holen und injecten
    }

    function unchecked() {
        jazzFMS.checked = false
        hiphopFMS.checked = false
        indieFMS.checked = false
        poprockFMS.checked = false
        electronicFMS.checked = false
        countryFMS.checked = false
        soulFMS.checked = false

        //Test:
        console.log(`jazzFMS ` + jazzFMS.checked)
        //todo: idee: this.checked bwz. true false in localstorage, dann dort holen und injecten

    }

    function backFMS () {
        console.log('link in zurueckFMS setzen')
    }

    /*
    Eventlistener für alle checkboxes
     */
    jazzFMS.addEventListener('click', checked)
    hiphopFMS.addEventListener('click', checked)
    indieFMS.addEventListener('click', checked)
    poprockFMS.addEventListener('click', checked)
    electronicFMS.addEventListener('click', checked)
    countryFMS.addEventListener('click', checked)
    soulFMS.addEventListener('click', checked)

    /*
    Eventlistener für zurücksetzen
     */
    resetFMS.addEventListener('click', unchecked)

    /*
    Eventlistener für Zurück-Link in Nav -> unnötig?!
    zuerst schauen ob ausführbar
     */
   // zurueckFMS.addEventListener('click', backFMS)


    indexHTML.addEventListener('click', backFMS)

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