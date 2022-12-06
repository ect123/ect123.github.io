
mapboxgl.accessToken = "pk.eyJ1IjoiZWN0MTIzIiwiYSI6ImNranAwN2V5cjA0OGwyc3RjMG81YmY5dzAifQ.E1gXN2BWib0Z0pnS95iOtg";

const dPath = '{{ site.url }}/{{ page.geojson-url }}'

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
    //  fit() will fit the map to the bounding box of our geojson
    //  Called later after map is initialized
    function fit() {
                    map.fitBounds(bbox, {padding: 50});
                    }

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
 
    //  On load - add geojson
    map.on('load', function() {

    //  Add the geojson as a map source
        map.addSource('Data Layer', {
        type: 'geojson',
        data: geoJson
        });
        
    // skeleton outline of the grid
    map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'Data Layer',
                'layout': {
                    'line-cap': 'round',
                },
                'paint': {
                    'line-color': '#4c566a',
                    'line-width': 5,
                    },
                });
    


    // Call fit when clicking the zoomto button
    document.getElementById('zoomto').addEventListener('click', () => {
        fit()
    });
    });

    // Create an empty marker
    const marker = new mapboxgl.Marker();
    // Function to add the marker
    function add_marker (event) {
        var coordinates = event.lngLat;
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        marker.setLngLat(coordinates).addTo(map);
        }
};



// Call mapData() to initalize the map
mapData();

