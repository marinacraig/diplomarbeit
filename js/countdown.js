//let end_time = document.querySelector('#remaining-time');


//Startdatum Festival ist das Enddatum für den Countdown: aktuell ohne this, festival - js - class fehlt

//let end_time = '30.09.2018'

//console.log(end_time)


function countdown(endDate) {
    let days, hours, minutes, seconds;

    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
        return;
    }

    setInterval(calculate, 1000);

    function calculate() {
        let startDate = new Date();
        startDate = startDate.getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);

            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);

            seconds = parseInt(timeRemaining);

            if(parseInt(days, 10) >= 2) {
                document.getElementById("remaining-time").innerHTML = parseInt(days, 10) + " Tage";
            }else{
                if(("0" + hours).slice(-2) >= 2){
                    document.getElementById("remaining-time").innerHTML = ("0" + hours).slice(-2) +':'+ ("0" + minutes).slice(-2) + " Stunden";
                } else if(("0" + hours).slice(-2) < 1){
                    document.getElementById("remaining-time").innerHTML = ("0" + minutes).slice(-2) + " Minuten";
                }
            }

            // document.getElementById("hours").innerHTML = ("0" + hours).slice(-2) + " Stunden";
           // document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2) + "Minuten";
           // document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            return;
        }
    }
}


//hier kommt die Zeit rein dd/mm/yyyy hh/mm/ss AM oder PM
(function () {
    countdown('09/30/2018 11:00:00 AM');
}());