/*
Altes zeugs von gestern:
https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox
    gibt aktuell aus welche angeklickt wurden (true, false)
addEventListener("click", (e => {
    for (i = 0; i < len; i++) {
        i + (favoriteMusicStyle[i].checked ? ' checked ' : ' unchecked ') + favoriteMusicStyle[i].value
        console.log(favoriteMusicStyle[i].checked)
        console.log(favoriteMusicStyle[i].value)

    }
}))

zählt klicks und gibt Anzahl pro Value aus, allerdings egal wo man hinklickt:
    addEventListener("click", (e => {
        for (i = 0; i < len; i++) {
            if (favoriteMusicStyle[i].checked==true) {
                console.log(favoriteMusicStyle[i].value + " checked")

                //damit auch bei erneutem Klick etwas passiert:
                i++;

            }
        }
    }))


diese variante funktioniert halbwegs (switched nicht), aber für jede id Eventlistener....
    let favoriteMusicStyle = document.querySelector('checkbox')

    console.log(favoriteMusicStyle.value)

    function changeCheckbox(checkbox) {
        // check if checkbox is checked
        if (checkbox.checked) {
            // if checked
            console.log('checked');
        } else {
            // if unchecked
            console.log('unchecked');
        }
    }

    favoriteMusicStyle.addEventListener('change', changeCheckbox);



let musikfilter = document.getElementById('musikfilter');
if (musikfilter !== null) {
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
 */

//name="musikrichtung"

//let favoriteMusicStyle1 = document.getElementsByName('musikrichtung')
//Zeigt node-list mit input und id: console.log(favoriteMusicStyle1)
//undefined: console.log(favoriteMusicStyle1.value)
//undefined: console.log(favoriteMusicStyle1.checked)
//undefinedconsole.log(favoriteMusicStyle1.this)

//let lenfMS = favoriteMusicStyle1.length;

//let favoriteMusicStyle2 = document.querySelector('checkbox')
// null (auch mit musikrichtung) console.log(favoriteMusicStyle2)


//let favoriteMusicStyle3 = document.querySelectorAll('checkbox')
// zeigt node-list length 0 console.log(favoriteMusicStyle3)
// Array Iterator: console.log(favoriteMusicStyle3.values())
// zeigt node-list length 0 console.log(favoriteMusicStyle3.valueOf())

// undefined: console.log(favoriteMusicStyle3.value)
//undefined console.log(favoriteMusicStyle3.this)

//let favoriteMusicStyle4 = document.querySelector('#jazz')
// gibt html input aus: console.log(favoriteMusicStyle4)
// false: console.log(favoriteMusicStyle4.checked)


//let favoriteMusicStyle5 = document.querySelectorAll('#jazz, #hiphop, #poprock')
// node-list mit input und id's console.log(favoriteMusicStyle5)
// undefined: console.log(favoriteMusicStyle5.checked)

/*
Wurde auf die Checkbox geklickt? -> fkt checked
 */

/*function checked() {
    console.log(favoriteMusicStyle4.checked)
}*/

/*
Eventlistener für alle checkboxes
 */

//is not a function: favoriteMusicStyle1.addEventListener('click', checked)
//cannot read property of null favoriteMusicStyle2.addEventListener('click', checked)
//is not a function: favoriteMusicStyle3.addEventListener('click', checked)

//is not a function: favoriteMusicStyle5.addEventListener('click', checked)
//favoriteMusicStyle4.addEventListener('click', checked)

//Todo: Idee: 1 array mit allen "favoriteMusicStyle4", auf diesen Eventlistener machen

//}

/*
Anpassungen HTML:
div mit form ersetzen -> glaubs unnötig bzw. wieder gelöscht
bei input name="musikrichtung"
label mit for und input mit id
Todo's im HTML bezüglich weiteren Seiten  bzw. zurücksetzen löschen
 */



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


    //indexHTML.addEventListener('click', backFMS)

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