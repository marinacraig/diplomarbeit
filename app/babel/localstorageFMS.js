'use strict';

function localstorageSetFMS(allFMS) {

    var selection = [];

    allFMS.forEach(function (e, i) {
        selection[i] = e.checked;
    });

    localStorage.setItem('allFMSSelection', JSON.stringify(selection));
}

function getFMSSelection() {
    var response = JSON.parse(localStorage.getItem('allFMSSelection'));
    if (response === null) {
        return [];
    } else {
        return response;
    }
}