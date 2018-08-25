'use strict';

/*
Da Codeschnipsel auf der Festivalseite:
check ob id festivaluebersicht vorhanden, falls ja dann ausführen
 */

var festivaluebersicht = document.getElementById('festivaluebersicht');
if (festivaluebersicht !== null) {
    var switchCSS = function switchCSS() {
        if (cssSwitcher.checked == true) {
            console.log('hi');

            cssUebersicht.classList.add('festival__kachel');
            cssUebersicht.classList.remove('festival__list');
        } else if (cssSwitcher.checked == false) {
            console.log('bye');

            cssUebersicht.classList.add('festival__list');
            cssUebersicht.classList.remove('festival__kachel');
        } else {
            console.log('nothing to do');
        }
    };

    //für click-Event
    var cssSwitcher = document.querySelector('#switcher');

    //für CSS Klassen-Austausch
    var cssUebersicht = document.querySelector('#css_uebersicht');

    cssSwitcher.addEventListener('click', switchCSS);
}