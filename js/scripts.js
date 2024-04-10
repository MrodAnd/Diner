

mapboxgl.accessToken = 'pk.eyJ1IjoibXJvZGEiLCJhIjoiY2x1dHl3cXM5MDRmZTJscDZuczk1MGR0MyJ9.b4OLZlubx4b5Hc19pGZRpQ';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // dark basemap
    center: [-74.05, 40.68], // starting position [lng, lat]
    zoom: 10.4, // starting zoom, 
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// loop over the dinerData array to make a marker for each record
dinerData.forEach(function (dinerRecord) {

    var color

    // use if statements to assign colors based on dinerData.program
    if (dinerRecord.hours === 'N') {
        color = '#8dd6a1'
    }
    if (dinerRecord.hours === 'Y') {
        color = '#d67ea6'
    }
    if (dinerRecord.hours === 'W') {
        color = '#1f8f39'
    }

    // create a popup to attach to the marker
    const popup = new mapboxgl.Popup({
        offset: 40,
        anchor: 'bottom'
    }).setText(
        `${dinerRecord.Diner}`
);

// create a marker, set the coordinates, add the popup, add it to the map
new mapboxgl.Marker({
    scale: 0.5,
    color: color
})
    .setLngLat([dinerRecord.Longitude, dinerRecord.Latitude])
    .setPopup(popup)
    .addTo(map);
})

