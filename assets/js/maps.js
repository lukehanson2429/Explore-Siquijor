let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.1999, lng: 123.5952 },
    zoom: 11,
  });

  addMarker({coords:{lat: 9.1999, lng: 123.5952}});

// Add Marker Function
function addMarker(props){
    var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
    });

// if statement - check for icon
if(props.iconImage){
    marker.setIcon(props.iconImage);
}

// Checking for content
if(props.content){
    var infoWindow = new google.maps.InfoWindow({
        content: props.content
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}
}
}