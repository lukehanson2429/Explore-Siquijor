let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.1999, lng: 123.5952 },
    zoom: 11,
  });

  addMarker({lat: 9.1999, lng: 123.5952});

// Add Marker Function
function addMarker(coords){
    var marker = new google.maps.Marker({
        position:coords,
        map:map,
    });
}
}