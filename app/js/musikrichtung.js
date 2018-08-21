let musikfilter = document.getElementById('musikfilter');
if (musikfilter !== null) {
    /*
    Idee:
    merke von welcher Seite jemand kommt
    ist filter angeglickt?
    welcher?
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
    hole aus HTML name="musikrichtung"
     */
    let favoriteMusicStyle = document.getElementsByName('musikrichtung')

    /*
    Verkürze die Variable, für mehr Übersicht bzw. nur Anzahl Elemente
     */
    let len = favoriteMusicStyle.length
    let i = 0;

    /*
    Eventlister: ausführen wenn jemand klickt
    gibt aktuell aus welche angeklickt wurden

    https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox
     */

    addEventListener("click", (e => {
        for (i = 0; i < len; i++) {
            i + (favoriteMusicStyle[i].checked ? ' checked ' : ' unchecked ') + favoriteMusicStyle[i].value
            console.log(favoriteMusicStyle[i].checked)
            console.log(favoriteMusicStyle[i].value)

        }
    }))
}

/*
Anpassungen HTML:
div mit form ersetzen
bei input name="musikrichtung"
 */