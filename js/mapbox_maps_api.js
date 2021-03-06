

const mapboxToken = MAPBOX_TOKEN;

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-95.6963, 30.3883],
    zoom: 13
})

// call function to create method and give initial point
// let marker = getMarker([-95.6963, 30.3883]);
let marker;

// call addMapEvent AFTER the marker has been initially set
addMapEvent();

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

    map.addControl(geocoder);

    geocoder.on('result', function (event) {
        console.log(event);
        if(marker){
            marker.remove();
        }
        getMarker(event.result.geometry.coordinates).setPopup(getPopup(event.result.place_name));

    })

}

// creates the marker
function getMarker(point) {

    return new mapboxgl.Marker().setLngLat(point).addTo(map);

}

// adds event to map that changes location of marker based
// on where the user clicks
function addMapEvent() {

    map.on('click', function (event) {
        console.log(event.lngLat);
        if(!marker){
            marker = getMarker(event.lngLat);
        }else{
            marker.setLngLat(event.lngLat);
        }

        // marker.setLngLat(event.lngLat).addTo(map);
    })

}

function getPopup(textDetails) {

    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);

}


