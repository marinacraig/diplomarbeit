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
     */

}

/*
Anpassungen HTML:
div mit form ersetzen -> glaubs unnötig bzw. wieder gelöscht
bei input name="musikrichtung"
label mit for und input mit id
Todo's im HTML bezüglich weiteren Seiten  bzw. zurücksetzen löschen
 */