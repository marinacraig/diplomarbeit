
/*
Da Codeschnipsel auf der Festivalseite:
check ob id festivaluebersicht vorhanden, falls ja dann ausführen
 */

let festivaluebersicht = document.getElementById('festivaluebersicht');
if (festivaluebersicht!==null) {

    //für click-Event
    let cssSwitcher = document.querySelector('#switcher')

    //für CSS Klassen-Austausch
    let cssUebersicht = document.querySelector('#css_uebersicht')

    function switchCSS(){
        if (cssSwitcher.checked == true){
            console.log('hi')

            cssUebersicht.classList.add('festival__kachel')
            cssUebersicht.classList.remove('festival__list')

        }else if (cssSwitcher.checked == false){
            console.log('bye')

            cssUebersicht.classList.add('festival__list')
            cssUebersicht.classList.remove('festival__kachel')

        } else {
            console.log('nothing to do')
        }
    }

    cssSwitcher.addEventListener('click', switchCSS)
}