'use strict';

function localstorageSetFMS(allFMS) {

    //leeres Array
    var selection = [];

    //für jedes Element i füge an position i checked ein
    allFMS.forEach(function (e, i) {
        selection[i] = e.checked;
    });

    //in allFMSSelection (=neues Array) als json string in localStorage speichern
    localStorage.setItem('allFMSSelection', JSON.stringify(selection));
}

function getFMSSelection() {

    //von localStorage holen und prüfen ob null, falls nichts ausgewählt ist
    var response = JSON.parse(localStorage.getItem('allFMSSelection'));
    if (response === null) {
        return [];
    } else {
        return response;
    }
}