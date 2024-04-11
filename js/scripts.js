

mapboxgl.accessToken = 'pk.eyJ1IjoibXJvZGEiLCJhIjoiY2x1dHl3cXM5MDRmZTJscDZuczk1MGR0MyJ9.b4OLZlubx4b5Hc19pGZRpQ';

var mapOptions = {
    container: 'map-container',
    style: 'mapbox://styles/mapbox/satellite-v9', 
    center: [-74.05, 40.68], 
    zoom: 10.4,  
}

const map = new mapboxgl.Map(mapOptions);

// navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// dinerData array
dinerData.forEach(function (dinerRecord) {

    var color

    // use if statements to assign colors based on dinerData.program
    if (dinerRecord.hours === 'N') {
        color = '#a30a14'
    }
    if (dinerRecord.hours === 'Y') {
        color = '#046123'
    }
    if (dinerRecord.hours === 'W') {
        color = '#e6db0b'
    }

    // popup
    const popup = new mapboxgl.Popup({
        offset: 40,
        anchor: 'bottom'
    }).setText(
        `${dinerRecord.Diner}`
);

// coordinates
new mapboxgl.Marker({
    scale: 0.5,
    color: color
})
    .setLngLat([dinerRecord.Longitude, dinerRecord.Latitude])
    .setPopup(popup)
    .addTo(map);
})

