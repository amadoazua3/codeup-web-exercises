const mapboxToken = 'pk.eyJ1IjoiYW1hZG9henVhMyIsImEiOiJja3BwbmF6Z3kwZm5uMm9vM3UxN3NlZDhxIn0.A1NW3gQvtIoSPBYC9YJVxg';

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-95.3698, 29.7604],
    zoom: 12
})

