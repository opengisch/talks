$(document).ready(init);

var crs;

function init() {
    var res = [4000, 3750, 3500, 3250, 3000, 2750, 2500, 2250, 2000, 1750, 1500, 1250, 1000, 750, 650, 500, 250, 100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5];

    var scale = function(zoom) {
        return 1 / res[zoom];
    },

    crs = new L.Proj.CRS('EPSG:21781', '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 ' + '+k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs', {
        resolutions: res,
        origin: [420000, 350000]
        });

    var map = new L.Map('map', {
        crs: crs,
        //continuousWorld: true,
        //worldCopyJump: false,
        scale: scale
    });

    map.on('mousemove', function(e) {
        var coords = $('#coords');
        var projected = crs.project(e.latlng);
        coords.text("LV03: " + projected.x.toFixed(0) + "/" + projected.y.toFixed(0));
    });

    map.on('click', function(e){
        console.log(e.latlng);
        url = 'https://www.google.ch/maps/@' + e.latlng['lat'] + ',' + e.latlng['lng'] + ',14z'
        console.log(url)
    })

    var mapUrl = 'https://wmts6.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/20140520/21781/{z}/{y}/{x}.jpeg',
    attrib = 'Map data &copy; 2014 swisstopo',
    tilelayer = new L.TileLayer(mapUrl, {
        scheme: 'xyz',
        maxZoom: res.length - 1,
        minZoom: 0,
        opacity: 0.75,
        continuousWorld: true,
        attribution: attrib
    });


    var geojsonLayer = new L.GeoJSON.AJAX("pop_lv03.geojson", {style: style});

// get color depending on population density value
    function getColor(d) {
        return d > 1000 ? '#800026' :
               d > 500  ? '#BD0026' :
               d > 200  ? '#E31A1C' :
               d > 100  ? '#FC4E2A' :
               d > 50   ? '#FD8D3C' :
               d > 20   ? '#FEB24C' :
               d > 10   ? '#FED976' :
                          '#FFEDA0';
    }

    function style(feature) {
			return {
				weight: 2,
				opacity: 1,
				color: 'white',
				dashArray: '3',
				fillOpacity: 0.7,
				fillColor: getColor(feature.properties.density)
			};
		}

    map.addLayer(tilelayer);
    geojsonLayer.addTo(map);

    map.setView([46.77431,9.97378], 21);
}
