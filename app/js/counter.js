/*
Da Codeschnipsel für ticketbestellen:
check ob id xy vorhanden, falls ja dann ausführen
 */

let ticketsBestellen = document.getElementById('ticketsBestellen');
if (ticketsBestellen!==null) {

/*
Idee:
Einzelne Ticket-Variante
Bei klick auf plus: plus 1
bei klick auf minus: minus 1
-> Total dazwischen anzeigen

später:
überprüfe Festival
überprüfen ob wirklich tickets vorhanden
- falls ja, welche? -> Zahlen entsprechend einfügen
- falls nein, welche? -> Text grau einfügen
- auf icon__ticket-grafik--1 bis icon__ticket-grafik--10 zugreifen, Farben abfüllen

 */

//alle ticketvarianten aus html holen - vorbereitet für später
    let day1 = document.querySelector('#day1')
    let day3 = document.querySelector('#day3')
    let day1vip = document.querySelector('#day1vip')
    let day3vip = document.querySelector('#day3vip')
    let zelt = document.querySelector('#zelt')
    let zeltvip = document.querySelector('#zeltvip')

    let ticketVarianten = [day1, day1vip, day3, day3vip, zelt, zeltvip]


    // für die jeweiligen + bzw. -
    let plusDay1 = document.querySelector('#plusDay1')
    let minusDay1 = document.querySelector('#minusDay1')
    let totDay1 = document.querySelector('#totDay1')

    let plusDay3 = document.querySelector('#plusDay3')
    let minusDay3 = document.querySelector('#minusDay3')
    let totDay3 = document.querySelector('#totDay3')

    let plusDay1vip = document.querySelector('#plusDay1vip')
    let minusDay1vip = document.querySelector('#minusDay1vip')
    let totDay1vip = document.querySelector('#totDay1vip')

    let plusDay3vip = document.querySelector('#plusDay3vip')
    let minusDay3vip = document.querySelector('#minusDay3vip')
    let totDay3vip = document.querySelector('#totDay3vip')

    let plusZelt = document.querySelector('#plusZelt')
    let minusZelt = document.querySelector('#minusZelt')
    let totZelt = document.querySelector('#totZelt')

    let plusZeltvip = document.querySelector('#plusZeltvip')
    let minusZeltvip = document.querySelector('#minusZeltvip')
    let totZeltvip = document.querySelector('#totZeltvip')

    //array für alle plus (weniger Eventlistener code
    let plusTicket = [plusDay1, plusDay1vip, plusDay3, plusDay3vip, plusZelt, plusZeltvip]

    //array für alle minus
    let minusTicket = [minusDay1, minusDay1vip, minusDay3, minusDay3vip, minusZelt, minusZeltvip]


    let click=0;

    //Tickets hoch zählen
    //für weniger code: funktion hinzu auslagern

    function plus1() {

        click +=1;

        if (click === 1){
            verkaufbar = ' Ticket'
        }else{
            verkaufbar = ' Tickets'
        }
        totDay1.innerHTML = click + verkaufbar;

    }

    function hinzufuegenTicket () {

        let verkaufbar = ' Tickets' // idee: wenn keine mehr = ausverkauft

        if(this == plusDay1){
            plus1()

        }else if(this == plusDay3) {

            click +=1;

            if (click === 1){
                verkaufbar = ' Ticket'
            }else{
                verkaufbar = ' Tickets'
            }
            totDay1.innerHTML = click + verkaufbar;

        }else{
            console.log('plus')
        }

    }



    //Tickets runter zählen (kann nicht weniger als 0 sein)
    function abziehenTicket () {
        if(this == minusDay1){

            click -=1;

            if (click === 1){
                verkaufbar = ' Ticket'
                totDay1.innerHTML = click + verkaufbar;
            }else if(click < 1){
                click = 0;
                totDay1.innerHTML = 0 + verkaufbar;
            }else{
                verkaufbar = ' Tickets'
            }


        }else if(this == minusDay3) {
            console.log('hi minus 3')
        }else{
            console.log('minus')
        }

    }


    //Eventlistener click plus
/*

    plusDay1.addEventListener('click', hinzufuegenTicket)
    plusDay3.addEventListener('click', hinzufuegenTicket)
    plusDay1vip.addEventListener('click', hinzufuegenTicket)
    plusDay3vip.addEventListener('click', hinzufuegenTicket)
    plusZelt.addEventListener('click', hinzufuegenTicket)
    plusZeltvip.addEventListener('click', hinzufuegenTicket)

*/

    for (let i = 0; i < plusTicket.length; ++i) {
        if (plusTicket[i] != null) {
            plusTicket[i].addEventListener("click", hinzufuegenTicket)
        }
    }


    //Eventlistener click minus
    //minusDay1.addEventListener('click', abziehenTicket)

    for (let i = 0; i < minusTicket.length; ++i) {
        if (minusTicket[i] != null) {
            minusTicket[i].addEventListener("click", abziehenTicket)
        }
    }


}