/*
Idee: allFMS status checked in Objekt speichern

dieses Objekt stringify
dann setItem
und getItem
 */


/*
hole aus localStorage
 */

let json = JSON.stringify(allFMS);

localStorage.getItem('allFMS');
if (json) {
    let allFMS = JSON.parse(json);
} else {
    let i = 0 ; i < allFMS.length ; ++i
    let allFMS = allFMS[i].checked = false; // Default Wert setzen, z.B. leere Liste
}

/*
füge in localStorage ein
wenn checked()
 */

localStorage.setItem('allFMS', json);

