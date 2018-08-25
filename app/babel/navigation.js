"use strict";

var openNav = document.getElementById('openNav');
if (openNav !== null) {
    var _openNav = function _openNav() {
        document.getElementById("myNav").style.width = "100%";
    };

    var closeNav = function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    };

    var overlay_open = document.querySelector('#openNav');
    overlay_open.addEventListener('click', _openNav);

    var overlay_close = document.querySelector('#closeNav');
    overlay_close.addEventListener('click', closeNav);
}