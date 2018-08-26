'use strict';

/*
Beispiel für Eggersriet SG, nähe Restaurant

key=API_KEY (=API Schlüssel:)

AIzaSyDc_-zGaTkngPM2I0zlbMFUXi67n93Gxw8 -> alter aus meinem account
von Rolf: AIzaSyDu3yT8LTKpy8_BW9wPnjQ7dMlo4mUxvZY

Doku: https://developers.google.com/maps/documentation/javascript/examples/icon-simple?hl=de

 */

/*
Da Codeschnipsel auf der Festivalseite:
check ob id xy vorhanden, falls ja dann ausführen
 */

var map = document.getElementById('map');
if (map !== null) {
    var initMap = function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: { lat: 47.44, lng: 9.46 }
        });

        var image = '../images/assets/detail_place.svg';
        var beachMarker = new google.maps.Marker({
            position: { lat: 47.4456102, lng: 9.46392949999997 },
            map: map,
            icon: image
        });
    };
}