function programm(){
    console.log(this)
/*  if(freitag){
        document.getElementById("show_freitag").innerHTML = value
    }
    else if (samstag){
     document.getElementById("show_samstag").innerHTML = value
        document.getElementById("show_freitag").style.width = "0%";
        document.getElementById("freitag").remove('btnschwarz')
        document.getElementById("freitag").add('btnweiss')
        //dito sonntag
    }*/

}


let freitag = document.querySelector('#freitag');
freitag.addEventListener('click', programm (freitag));

let samstag = document.querySelector('#samstag');
samstag.addEventListener('click', programm (samstag));

/*


Idee: onclick zeige Inhalt von etwas mit id sowieso und setze class="xy"
class btnweiss bzw. btnschwarz ist für styling zuständig

Bsp.: click id's: freitag -> div id ist show_freitag
 */