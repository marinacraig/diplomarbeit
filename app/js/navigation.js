function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let overlay_open = document.querySelector('#openNav');
overlay_open.addEventListener('click', openNav);

let overlay_close = document.querySelector('#closeNav');
overlay_close.addEventListener('click', closeNav);
