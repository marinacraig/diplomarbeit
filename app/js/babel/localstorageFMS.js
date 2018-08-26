'use strict';

/*
Idee: allFMS status checked in Objekt speichern

dieses Objekt stringify
dann setItem
und getItem
 */

/*
hole aus localStorage
 */

var json = JSON.stringify(allFMS);

localStorage.getItem('allFMS');
if (json) {
  var _allFMS = JSON.parse(json);
} else {
  var i = 0;i < _allFMS2.length;++i;
  var _allFMS2 = _allFMS2[i].checked = false; // Default Wert setzen, z.B. leere Liste
}

/*
füge in localStorage ein
wenn checked()
 */

localStorage.setItem('allFMS', json);