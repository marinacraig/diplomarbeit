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



    // für die jeweiligen + bzw. -
    let plusDay1 = document.querySelector('#day1 .plus')
    let minusDay1 = document.querySelector('#day1 .minus')

    let plusDay3 = document.querySelector('#day3 .plus')
    let minusDay3 = document.querySelector('#day3 .minus')

    let plusDay1vip = document.querySelector('#day1vip .plus')
    let minusDay1vip = document.querySelector('#day1vip .minus')

    let plusDay3vip = document.querySelector('#day3vip .plus')
    let minusDay3vip = document.querySelector('#day3vip .minus')

    let plusZelt = document.querySelector('#zelt .plus')
    let minusZelt = document.querySelector('#zelt .minus')

    let plusZeltvip = document.querySelector('#zeltvip .plus')
    let minusZeltvip = document.querySelector('#zeltvip .minus')

    //array für alle plus (weniger Eventlistener code
    let plusTicket = [plusDay1, plusDay1vip, plusDay3, plusDay3vip, plusZelt, plusZeltvip]

    //array für alle minus
    let minusTicket = [minusDay1, minusDay1vip, minusDay3, minusDay3vip, minusZelt, minusZeltvip]

    //Tickets hoch zählen
    function hinzufuegenTicket () {
        console.log(this + ' plus klick');
    }

    //Tickets runter zählen (kann nicht weniger als 0 sein)
    function abziehenTicket () {
        console.log(this + ' minus klick');
    }

    //Eventlistener click plus
    //plusDay1.addEventListener('click', hinzufuegenTicket);

    for (let i = 0; i < plusTicket.length; ++i) {
        if (plusTicket[i] != null) {
            plusTicket[i].addEventListener("click", hinzufuegenTicket)
        }
    }

    //Eventlistener click minus
    //minusDay1.addEventListener('click', abziehenTicket);

    for (let i = 0; i < minusTicket.length; ++i) {
        if (minusTicket[i] != null) {
            minusTicket[i].addEventListener("click", abziehenTicket)
        }
    }

}