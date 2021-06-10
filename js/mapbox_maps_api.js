const mapboxToken = 'pk.eyJ1IjoiYW1hZG9henVhMyIsImEiOiJja3BwbmF6Z3kwZm5uMm9vM3UxN3NlZDhxIn0.A1NW3gQvtIoSPBYC9YJVxg';

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-95.6963, 30.3883],
    zoom: 12
})


// Thai wok in coordinates
//30.360659429537527, -95.60451675244695




// call function to create method and give initial point
let marker = setMarker([-95.60451, 30.36065]);
// call addMapEvent AFTER the marker has been initially set
addMapEvent(marker);

// create new geocoder and assign to variable
let geocoder = setGeocoder();
addGeocoderToMap(geocoder);

setPopup("Thai Wok In");

// creates and returns a new GeoCoder (search box)
function setGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

// adds event listener to geocoder and sets new marker location
function addGeocoderToMap(geocoder) {

    // map.addControl(geocoder);

    geocoder.on('result', function (event) {
        console.log(event);
        marker.setLngLat(event.result.geometry.coordinates)

        setPopup(event.result.place_name);
    })

}

function addGeocoderEvent(geocoder){
    geocoder.on()
}


// creates the marker
function setMarker(point){

    return new mapboxgl.Marker().setLngLat(point).addTo(map);

}

// adds event to map that changes location of marker based
// on where the user clicks
function addMapEvent() {

    map.on('click', function (event) {
        console.log(event.lngLat);
        marker.setLngLat(event.lngLat).addTo(map);
    })

}


function setPopup(textDetails){

    let popup = new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);

    marker.setPopup(popup);
}


