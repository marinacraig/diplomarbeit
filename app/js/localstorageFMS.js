let favoriteMusicStyle = document.getElementById('musikrichtung');
if (favoriteMusicStyle !== null) {

    /*
    Idee: allFMS status checked in Objekt speichern

    dieses Objekt stringify
    dann setItem
    und getItem
     */


    /*
    hole aus localStorage
     */

   let json = JSON.stringify(allFMS);  // eingabe console: leeres Teil mit Klammern

    localStorage.getItem('allFMS');
    if (json) {
        let allFMS = JSON.parse(json);
    } else {
        //let allFMS = allFMS.checked = false; // Default Wert setzen, z.B. leere Liste
    }

    /*
    füge in localStorage ein
    wenn checked()
     */
  localStorage.setItem('allFMS', json);


/*
Wenn jemand eingeloggt bzw. einloggt: auf server speichern, sonst nicht
 */

}