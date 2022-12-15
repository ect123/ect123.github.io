
mapboxgl.accessToken = "pk.eyJ1IjoiZWN0MTIzIiwiYSI6ImNranAwN2V5cjA0OGwyc3RjMG81YmY5dzAifQ.E1gXN2BWib0Z0pnS95iOtg";

const dPath = '{{ site.url }}/{{ page.route-url }}';
const lon = '{{ page.trailhead-lon }}';
const lat = '{{ page.trailhead-lat }}';

async function mapData(){

    const data = await fetch(dPath, {
                                headers: {
                                'Accept': 'application/json'
                                }
                            });
    //  Read geojson from the fetched value
    const geoJson = await data.json();
    //  Turf moddule allows us to get the bounding box of a geojson 
    var bbox = turf.extent(geoJson);
    //  fit() will fit the map to the bounding box of thegeojson
    //  Called later after map is initialized
    function fit() {
                    map.fitBounds(bbox, {padding: 50});
                    }
    // Create a new parking marker.
    var parking = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              description: "Parking",
              iconSize: [60, 60]
            },
            geometry: {
              type: "Point",
              coordinates: {lon: lon, lat: lat}
            }
          }
        ]
      };

    //  Create the map - zoom and center are arbitrary
    const map = new mapboxgl.Map({
                container: 'map',
                zoom: 4,
                center: [-125.193328, 50.506185],
                style: "mapbox://styles/ect123/ck4ym048y4upi1cmzoq53immx"
                });
    map.addControl(new mapboxgl.NavigationControl());

    //  Fit to bbox, overwrite the center/zoom
    fit();

    // disable scrool wheel zoom
    map.scrollZoom.disable();
 
    //  On load - add route geojson
    map.on('load', function() {

    //  Add the route as a map source
        map.addSource('Data Layer', {
            type: 'geojson',
            data: geoJson
        });
    //  Add the parking svg as a map source
        map.addSource("parking", {
            type: "geojson",
            data: parking
          });

    // route layer
        map.addLayer({
                    'id': 'route',
                    'type': 'line',
                    'source': 'Data Layer',
                    'layout': {
                        'line-cap': 'round',
                        'line-join': 'round',
                    },
                    'paint': {
                        'line-color': '#d08770',
                        'line-width': 5,
                        'line-opacity': 0.75,
                        'line-dasharray': [1.5, 2]
                        },
                    });
                    
        for (const marker of parking.features) {
                    const el = document.createElement('div');
                    el.className = 'marker';
                    el.style.backgroundImage = `url(img/all_maki_icons/svgs/parking.svg)`;
                    el.style.width = '20px';
                    el.style.height = '20px';
                    el.style.backgroundSize = '100%';
                
                    // Add parking marker to the map.
                    new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
                    };
    });

};
mapData();

    
