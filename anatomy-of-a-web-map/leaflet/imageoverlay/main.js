var my_map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});


var tile_layer = L.tileLayer('/media/marco/Samsung_T1/BK/html/geodata/tilesets/imagery/NaturalEarthII/{z}/{x}/{y}.jpg', {
    tms: true,
    maxZoom: 5,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.streets',
});
tile_layer.addTo(my_map);

var imageUrl = 'bg.jpg',
    // This is the trickiest part - you'll need accurate coordinates for the
    // corners of the image. You can find and create appropriate values at
    // http://maps.nypl.org/warper/ or
    // http://www.georeferencer.org/
    imageBounds = L.latLngBounds([
        [40.712216, -74.22655],
        [40.773941, -74.12544]]);

    my_map.fitBounds(imageBounds);

// See full documentation for the ImageOverlay type:
// http://leafletjs.com/reference.html#imageoverlay
var overlay = L.imageOverlay(imageUrl, imageBounds).addTo(my_map);
