/*
Beispiel für Eggersriet SG, nähe Restaurant

key=API_KEY (=API Schlüssel:)

AIzaSyDc_-zGaTkngPM2I0zlbMFUXi67n93Gxw8


 */
function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 47.44, lng: 9.46}
    });

    let image = '../assets/detail_place.svg';
    let beachMarker = new google.maps.Marker({
        position: {lat: 47.4456102, lng: 9.46392949999997},
        map: map,
        icon: image
    });
}