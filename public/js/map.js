
mapboxgl.accessToken = mapTokan;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [73.8786, 18.5246], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});



// const marker = new mapboxgl.Marker()
//         .setLngLat(coordinates) //listing.geometry.coordinates
//         .addTo(map);