/*
Altes zeugs von gestern:
https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox
    gibt aktuell aus welche angeklickt wurden (true, false)
addEventListener("click", (e => {
    for (i = 0; i < len; i++) {
        i + (favoriteMusicStyle[i].checked ? ' checked ' : ' unchecked ') + favoriteMusicStyle[i].value
        console.log(favoriteMusicStyle[i].checked)
        console.log(favoriteMusicStyle[i].value)

    }
}))

zählt klicks und gibt Anzahl pro Value aus, allerdings egal wo man hinklickt:
    addEventListener("click", (e => {
        for (i = 0; i < len; i++) {
            if (favoriteMusicStyle[i].checked==true) {
                console.log(favoriteMusicStyle[i].value + " checked")

                //damit auch bei erneutem Klick etwas passiert:
                i++;

            }
        }
    }))


diese variante funktioniert halbwegs (switched nicht), aber für jede id Eventlistener....
    let favoriteMusicStyle = document.querySelector('checkbox')

    console.log(favoriteMusicStyle.value)

    function changeCheckbox(checkbox) {
        // check if checkbox is checked
        if (checkbox.checked) {
            // if checked
            console.log('checked');
        } else {
            // if unchecked
            console.log('unchecked');
        }
    }

    favoriteMusicStyle.addEventListener('change', changeCheckbox);
*/
