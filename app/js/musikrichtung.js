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

    let favoriteMusicStyle1 = document.getElementsByName('musikrichtung')
     //Zeigt node-list mit input und id: console.log(favoriteMusicStyle1)
      //undefined: console.log(favoriteMusicStyle1.value)
     //undefined: console.log(favoriteMusicStyle1.checked)
        //undefinedconsole.log(favoriteMusicStyle1.this)

    let lenfMS = favoriteMusicStyle1.length;

    let favoriteMusicStyle2 = document.querySelector('checkbox')
    // null (auch mit musikrichtung) console.log(favoriteMusicStyle2)


    let favoriteMusicStyle3 = document.querySelectorAll('checkbox')
    // zeigt node-list length 0 console.log(favoriteMusicStyle3)
    // Array Iterator: console.log(favoriteMusicStyle3.values())
   // zeigt node-list length 0 console.log(favoriteMusicStyle3.valueOf())

    // undefined: console.log(favoriteMusicStyle3.value)
    //undefined console.log(favoriteMusicStyle3.this)

    let favoriteMusicStyle4 = document.querySelector('#jazz')
    // gibt html input aus: console.log(favoriteMusicStyle4)
    // false: console.log(favoriteMusicStyle4.checked)


    let favoriteMusicStyle5 = document.querySelectorAll('#jazz, #hiphop, #poprock')
    // node-list mit input und id's console.log(favoriteMusicStyle5)
    // undefined: console.log(favoriteMusicStyle5.checked)

    /*
    Wurde auf die Checkbox geklickt? -> fkt checked
     */

    function checked() {
        console.log(favoriteMusicStyle4.checked)
    }

    /*
    Eventlistener für alle checkboxes
     */

    //is not a function: favoriteMusicStyle1.addEventListener('click', checked)
    //cannot read property of null favoriteMusicStyle2.addEventListener('click', checked)
    //is not a function: favoriteMusicStyle3.addEventListener('click', checked)

    //is not a function: favoriteMusicStyle5.addEventListener('click', checked)
    favoriteMusicStyle4.addEventListener('click', checked)

    //Todo: Idee: 1 array mit allen "favoriteMusicStyle4", auf diesen Eventlistener machen

}

/*
Anpassungen HTML:
div mit form ersetzen -> glaubs unnötig bzw. wieder gelöscht
bei input name="musikrichtung"
label mit for und input mit id
Todo's im HTML bezüglich weiteren Seiten  bzw. zurücksetzen löschen
 */