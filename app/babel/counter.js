'use strict';

/*
Da Codeschnipsel für ticketbestellen:
check ob id xy vorhanden, falls ja dann ausführen
 */

var ticketsBestellen = document.getElementById('ticketsBestellen');
if (ticketsBestellen !== null) {

    //Tickets hoch zählen


    var hinzufuegenTicket = function hinzufuegenTicket() {

        if (this == plusDay1) {

            clickDay1 += 1;
            clickTotalTicket += 1;
            if (clickDay1 == 1) {
                verkaufbar = ' Ticket';
                totDay1.innerHTML = clickDay1 + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay1.innerHTML = clickDay1 + verkaufbar;
            }
        } else if (this == plusDay3) {

            clickDay3 += 1;
            clickTotalTicket += 1;
            if (clickDay3 == 1) {
                verkaufbar = ' Ticket';
                totDay3.innerHTML = clickDay3 + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay3.innerHTML = clickDay3 + verkaufbar;
            }
        } else if (this == plusDay1vip) {

            clickDay1vip += 1;
            clickTotalTicket += 1;
            if (clickDay1vip == 1) {
                verkaufbar = ' Ticket';
                totDay1vip.innerHTML = clickDay1vip + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay1vip.innerHTML = clickDay1vip + verkaufbar;
            }
        } else if (this == plusDay3vip) {

            clickDay3vip += 1;
            clickTotalTicket += 1;
            if (clickDay3vip == 1) {
                verkaufbar = ' Ticket';
                totDay3vip.innerHTML = clickDay3vip + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay3vip.innerHTML = clickDay3vip + verkaufbar;
            }
        } else if (this == plusZelt) {

            clickZelt += 1;
            clickTotalTicket += 1;
            if (clickZelt == 1) {
                verkaufbar = ' Ticket';
                totZelt.innerHTML = clickZelt + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totZelt.innerHTML = clickZelt + verkaufbar;
            }
        } else if (this == plusZeltvip) {

            clickZeltvip += 1;
            clickTotalTicket += 1;
            if (clickZeltvip == 1) {
                verkaufbar = ' Ticket';
                totZeltvip.innerHTML = clickZeltvip + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totZeltvip.innerHTML = clickZeltvip + verkaufbar;
            }
        } else {
            console.log('hä? (hint: plus)');
        }

        totalTickets.innerHTML = clickTotalTicket;
    };

    //Tickets runter zählen (kann nicht weniger als 0 sein)


    var abziehenTicket = function abziehenTicket() {
        if (this == minusDay1) {

            if (clickDay1 < 1) {
                clickDay1 = 0;
            } else {
                clickDay1 -= 1;
                clickTotalTicket -= 1;
                totalTickets.innerHTML = clickTotalTicket;
            }
            if (clickDay1 == 1) {
                verkaufbar = ' Ticket';
                totDay1.innerHTML = clickDay1 + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay1.innerHTML = clickDay1 + verkaufbar;
            }
        } else if (this == minusDay3) {

            if (clickDay3 < 1) {
                clickDay3 = 0;
            } else {
                clickDay3 -= 1;
                clickTotalTicket -= 1;
                totalTickets.innerHTML = clickTotalTicket;
            }
            if (clickDay3 == 1) {
                verkaufbar = ' Ticket';
                totDay3.innerHTML = clickDay3 + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay3.innerHTML = clickDay3 + verkaufbar;
            }
        } else if (this == minusDay1vip) {

            if (clickDay1vip < 1) {
                clickDay1vip = 0;
            } else {
                clickDay1vip -= 1;
                clickTotalTicket -= 1;
                totalTickets.innerHTML = clickTotalTicket;
            }
            if (clickDay1vip == 1) {
                verkaufbar = ' Ticket';
                totDay1vip.innerHTML = clickDay1vip + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay1vip.innerHTML = clickDay1vip + verkaufbar;
            }
        } else if (this == minusDay3vip) {

            if (clickDay3vip < 1) {
                clickDay3vip = 0;
            } else {
                clickDay3vip -= 1;
                clickTotalTicket -= 1;
                totalTickets.innerHTML = clickTotalTicket;
            }
            if (clickDay3vip == 1) {
                verkaufbar = ' Ticket';
                totDay3vip.innerHTML = clickDay3vip + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totDay3vip.innerHTML = clickDay3vip + verkaufbar;
            }
        } else if (this == minusZelt) {

            if (clickZelt < 1) {
                clickZelt = 0;
            } else {
                clickZelt -= 1;
                clickTotalTicket -= 1;
                totalTickets.innerHTML = clickTotalTicket;
            }
            if (clickZelt == 1) {
                verkaufbar = ' Ticket';
                totZelt.innerHTML = clickZelt + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totZelt.innerHTML = clickZelt + verkaufbar;
            }
        } else if (this == minusZeltvip) {

            if (clickZeltvip < 1) {
                clickZeltvip = 0;
            } else {
                clickZeltvip -= 1;
                clickTotalTicket -= 1;
                totalTickets.innerHTML = clickTotalTicket;
            }
            if (clickZeltvip == 1) {
                verkaufbar = ' Ticket';
                totZeltvip.innerHTML = clickZeltvip + verkaufbar;
            } else {
                verkaufbar = ' Tickets';
                totZeltvip.innerHTML = clickZeltvip + verkaufbar;
            }
        } else {
            console.log('hä? (hint: minus)');
        }
        //   console.log(clickTotalTicket) -> ist im grammatikTicketMinus
    };

    //Eventlistener click plus
    //plusDay1.addEventListener('click', hinzufuegenTicket)

    /*
    Idee:
    Einzelne Ticket-Variante
    Bei klick auf plus: plus 1
    bei klick auf minus: minus 1
    -> Total dazwischen anzeigen
    Todo: Total sowie welche ausgewählt speichern bei klick auf Tickets Kaufen
    
    später:
    überprüfe Festival
    überprüfen ob wirklich tickets vorhanden
    - falls ja, welche? -> Zahlen entsprechend einfügen
    - falls nein, welche? -> Text grau einfügen
    - auf icon__ticket-grafik--1 bis icon__ticket-grafik--10 zugreifen, Farben abfüllen
    
     */

    //alle ticketvarianten aus html holen - vorbereitet für später
    var day1 = document.querySelector('#day1');
    var day3 = document.querySelector('#day3');
    var day1vip = document.querySelector('#day1vip');
    var day3vip = document.querySelector('#day3vip');
    var zelt = document.querySelector('#zelt');
    var zeltvip = document.querySelector('#zeltvip');

    var ticketVarianten = [day1, day1vip, day3, day3vip, zelt, zeltvip];

    // für die jeweiligen + bzw. -
    var plusDay1 = document.querySelector('#plusDay1');
    var minusDay1 = document.querySelector('#minusDay1');
    var totDay1 = document.querySelector('#totDay1');

    var plusDay3 = document.querySelector('#plusDay3');
    var minusDay3 = document.querySelector('#minusDay3');
    var totDay3 = document.querySelector('#totDay3');

    var plusDay1vip = document.querySelector('#plusDay1vip');
    var minusDay1vip = document.querySelector('#minusDay1vip');
    var totDay1vip = document.querySelector('#totDay1vip');

    var plusDay3vip = document.querySelector('#plusDay3vip');
    var minusDay3vip = document.querySelector('#minusDay3vip');
    var totDay3vip = document.querySelector('#totDay3vip');

    var plusZelt = document.querySelector('#plusZelt');
    var minusZelt = document.querySelector('#minusZelt');
    var totZelt = document.querySelector('#totZelt');

    var plusZeltvip = document.querySelector('#plusZeltvip');
    var minusZeltvip = document.querySelector('#minusZeltvip');
    var totZeltvip = document.querySelector('#totZeltvip');

    //array für alle plus (weniger Eventlistener code)
    var plusTicket = [plusDay1, plusDay1vip, plusDay3, plusDay3vip, plusZelt, plusZeltvip];

    //array für alle minus
    var minusTicket = [minusDay1, minusDay1vip, minusDay3, minusDay3vip, minusZelt, minusZeltvip];

    // idee: wenn keine mehr = ausverkauft, grammatik
    var verkaufbar = ' Tickets';

    //damit das clickTotTickets direkt im HMTL angezeigt werden kann
    var totalTickets = document.querySelector('#totalTickets');

    //damit die plus bzw. minus bei den Tickets gezählt werden können
    var clickDay1 = 0;
    var clickDay3 = 0;
    var clickDay1vip = 0;
    var clickDay3vip = 0;
    var clickZelt = 0;
    var clickZeltvip = 0;

    //Anzahl aller ausgewählter Tickets soll gezählt werden und in Kaufen Button
    var clickTotalTicket = 0;for (var i = 0; i < plusTicket.length; ++i) {
        if (plusTicket[i] != null) {
            plusTicket[i].addEventListener("click", hinzufuegenTicket);
        }
    }

    //Eventlistener click minus
    //minusDay1.addEventListener('click', abziehenTicket)

    for (var _i = 0; _i < minusTicket.length; ++_i) {
        if (minusTicket[_i] != null) {
            minusTicket[_i].addEventListener("click", abziehenTicket);
        }
    }
}