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
Todo: Total sowie welche ausgewählt speichern bei klick auf Tickets Kaufen
Todo: vorher herausfinden ob clickTotalTickets wirklich stimmt

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

    //array für alle plus (weniger Eventlistener code)
    let plusTicket = [plusDay1, plusDay1vip, plusDay3, plusDay3vip, plusZelt, plusZeltvip]

    //array für alle minus
    let minusTicket = [minusDay1, minusDay1vip, minusDay3, minusDay3vip, minusZelt, minusZeltvip]

    // idee: wenn keine mehr = ausverkauft, grammatik
    let verkaufbar = ' Tickets'

    //damit das clickTotTickets direkt im HMTL angezeigt werden kann
    let totalTickets = document.querySelector('#totalTickets')

    //damit die plus bzw. minus bei den Tickets gezählt werden können
    let clickDay1=0;
    let clickDay3=0;
    let clickDay1vip=0;
    let clickDay3vip=0;
    let clickZelt=0;
    let clickZeltvip=0;

    //Anzahl aller ausgewählter Tickets soll gezählt werden und in Kaufen Button
    let clickTotalTicket = 0;


    //Tickets hoch zählen


    function hinzufuegenTicket () {

        if(this == plusDay1){

            clickDay1 += 1;
            grammatikTicketsPlus()
            totDay1.innerHTML = clickDay1 + verkaufbar;

        }else if(this == plusDay3) {

            clickDay3 += 1;
            grammatikTicketsPlus()
            totDay3.innerHTML = clickDay3 + verkaufbar;

        }else if(this == plusDay1vip) {

            clickDay1vip += 1;
            grammatikTicketsPlus()
            totDay1vip.innerHTML = clickDay1vip + verkaufbar;

        }else if(this == plusDay3vip) {

            clickDay3vip += 1;
            grammatikTicketsPlus()
            totDay3vip.innerHTML = clickDay3vip + verkaufbar;

        }else if(this == plusZelt) {

            clickZelt += 1;
            grammatikTicketsPlus()
            totZelt.innerHTML = clickZelt + verkaufbar;

        }else if(this == plusZeltvip) {

            clickZeltvip += 1;
            grammatikTicketsPlus()
            totZeltvip.innerHTML = clickZeltvip + verkaufbar;

        }else{
            console.log('hä? (hint: plus)')
        }

        totalTickets.innerHTML = clickTotalTicket;
        //   console.log(clickTotalTicket)

    }


    //Tickets runter zählen (kann nicht weniger als 0 sein)
    function abziehenTicket () {
        if(this == minusDay1){

            clickDay1 -=1;

            if(clickDay1 < 1){
                clickDay1 = 0;
            }else{
                clickTotalTicket -=1;
            }
            grammatikTicketsMinus()
            totDay1.innerHTML = clickDay1 + verkaufbar;


        }else if(this == minusDay3) {

            clickDay3 -=1;

            if(clickDay3 < 1){
                clickDay3 = 0;
            }else{
                clickTotalTicket -=1;
            }
            grammatikTicketsMinus()
            totDay3.innerHTML = clickDay3 + verkaufbar;

        }else if(this == minusDay1vip) {

            clickDay1vip -=1;

            if(clickDay1vip < 1){
                clickDay1vip = 0;
            }else{
                clickTotalTicket -=1;
            }
            grammatikTicketsMinus()
            totDay1vip.innerHTML = clickDay1vip + verkaufbar;

        }else if(this == minusDay3vip) {

            clickDay3vip -=1;

            if(clickDay3vip < 1){
                clickDay3vip = 0;
            }else{
                clickTotalTicket -=1;
            }
            grammatikTicketsMinus()
            totDay3vip.innerHTML = clickDay3vip + verkaufbar;

        }else if(this == minusZelt) {

            clickZelt -=1;

            if(clickZelt < 1){
                clickZelt = 0;
            }else{
                clickTotalTicket -=1;
            }
            grammatikTicketsMinus()
            totZelt.innerHTML = clickZelt + verkaufbar;

        }else if(this == minusZeltvip) {

            clickZeltvip -=1;

            if(clickZeltvip < 1){
                clickZeltvip = 0;
            }else{
                clickTotalTicket -=1;
            }
            grammatikTicketsMinus()
            totZeltvip.innerHTML = clickZeltvip + verkaufbar;

        }else{
            console.log('hä? (hint: minus)')
        }
        //   console.log(clickTotalTicket) -> ist im grammatikTicketMinus
    }

    //für weniger code: funktion hinzu ausgelagert

    function grammatikTicketsPlus() {
        //damit im innerHTML die Grammatik stimmt
        clickTotalTicket +=1;
        if (clickDay1 != 1 || clickDay3 != 1 || clickDay1vip != 1 || clickDay3vip != 1 || clickZelt != 1 || clickDay1vip != 1){
            verkaufbar = ' Tickets'
        }else{
            verkaufbar = ' Ticket'
        }
    }

    function grammatikTicketsMinus() {
        //damit im innerHTML die Grammatik stimmt
        if (clickDay1 != 1 || clickDay3 != 1 || clickDay1vip != 1 || clickDay3vip != 1 || clickZelt != 1 || clickDay1vip != 1){
            verkaufbar = ' Tickets'
        }else{
            verkaufbar = ' Ticket'
        }
        totalTickets.innerHTML = clickTotalTicket;

    }

    //Eventlistener click plus
    //plusDay1.addEventListener('click', hinzufuegenTicket)

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