let favoriteMusicStyle = document.getElementById('musikrichtung');
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

   _______________________

    hole aus HTML favoriteMusicStyle (= FMS)
    da je Musikrichtung -> allFMS für alle
      */


    let jazzFMS = document.querySelector('#jazz')
    let hiphopFMS = document.querySelector('#hiphop')
    let indieFMS = document.querySelector('#indie')
    let poprockFMS = document.querySelector('#poprock')
    let electronicFMS = document.querySelector('#electronic')
    let countryFMS = document.querySelector('#country')
    let soulFMS = document.querySelector('#soul')


    // alle in Array


    let allFMS = [jazzFMS, hiphopFMS, indieFMS, poprockFMS, electronicFMS, countryFMS, soulFMS]

    //alle Filter zurücksetzen
    let resetFMS = document.querySelector('#resetFMS')

    let i = 0;
    /*
    laden von eventuell bereits gesetzten elementen aus localstorage: muss als erstes gemacht werden
    -> Todo: nur die passenden in festivaluebersicht anzeigen
     */

    getFMSSelection().forEach((e,i)=>{
      allFMS[i].checked = e;

    });


   //Wurde auf die Checkbox geklickt? -> fkt toggleSelection  / zurücksetzen -> resetToggleSelection

    function toggleSelection() {
        // HTML-String der ID:console.log(this)
        //Ausgabe: true bzw. false console.log(this.toggleSelection)

        //enthält alle inkl. toggleSelection: true or false allFMS

        localstorageSetFMS(allFMS);
    }

    function resetToggleSelection() {
        /*
        statt alle einzeln & Probleme auf Seiten ohne
        jazzFMS.checked = false etc. folgend ersetzt
         */

        for (i = 0; i < allFMS.length; ++i) {
            if (allFMS[i] != null) {
                allFMS[i].checked = false

                //Antwort alle ohne true: console.log (allFMS[i])
            }
        }
        let showFMS
        localstorageSetFMS(allFMS);
    }


    /*
Eventlistener für alle checkboxes
statt alle einzeln & Fehlermeldung
(Bsp.:soulFMS.addEventListener('click', checked))
 */

    for (i=0;  i < allFMS.length; ++i) {
        if (allFMS[i] != null) {
            allFMS[i].addEventListener("click", toggleSelection)
        }
    }

    /*
    Eventlistener für zurücksetzen
     */
    resetFMS.addEventListener('click', resetToggleSelection)



    /*
    Idee: Klick auf genres / musikfilter -> herkunft seite speichern

    diese info wird nur vorübergehend benötigt (kann nach klick zurück) gelöscht werden

    -> teilweise umgesetzt, funktion "wenn in x gestartet kehre zu x zurück",
    Grund: eigentlich nur für Mobile interessant - auseinandersetzen mit DB wichtiger
     */
    /*

   let indexHTML = document.querySelector('.indexHTML')
   let festUebHTML = document.querySelector('.festivaluebersichtHTML')

   let zurueckFMS = document.querySelector('#zurueckFMS')


   function backFMS() {
       console.log('link in zurueckFMS setzen')
       //sowas oder so:
       zurueckFMS.setAttribute("href", "https://bencollier.net/2011/05/quickly-creating-an-html-link-in-javascript/");

   }


   if (indexHTML != null) {
       indexHTML.addEventListener('click', backFMS)
   }

   if (festUebHTML != null) {
       festUebHTML.addEventListener('click', backFMS)
   }

   //spick:
       if (indexHTML != null) {
           indexHTML.addEventListener('click', e => {
               zurueckFMS.setAttribute("href", "https://bencollier.net/2011/05/quickly-creating-an-html-link-in-javascript/");

           })
       }*/

}
