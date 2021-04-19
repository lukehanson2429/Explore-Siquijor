// Variable for initial Map on Page Load
let mapInitial;

// Variable for New Map with Icons
let map;

// Function to load initial Map 
function initMap() {
    mapInitial = new google.maps.Map(document.getElementById("map"), {
        mapId: "58081ee022056e14",
        center: { lat: 9.186013, lng: 123.580776 },
        zoom: 10,
        disableDefaultUI: true,
    });
}

// Function to show certain icons, only activated when a certain button category is clicked
function iconMap(category) {
    map = new google.maps.Map(document.getElementById("map"), {
        mapId: "58081ee022056e14",
        center: { lat: 9.186013, lng: 123.580776 },
        zoom: 11,
        disableDefaultUI: true,
    });

    // Loop through the array category depending on which category has been clicked 
    for (var i = 0; i < category.length; i++) {
        addMarker(category[i],map);
    }

}

// Add Marker Function
function addMarker(properties, map) {
    var marker = new google.maps.Marker({
        position: properties.coords,
        map: map,
    });

    // Marker listener to adjust zoom and pan to centered latitutde on mouse
    map.addListener("mouseout", () => {
        // 0.5 seconds after the center of the map has changed, pan back to the
        // initial location.
        window.setTimeout(() => {
            map.setZoom(11);
            map.panTo({ lat: 9.186013, lng: 123.580776 });
        }, 1000);
    });

    // Marker listener to adjust zoom on click
    marker.addListener("click", () => {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
    });

    // if statement - check for icon
    if (properties.iconImage) {
        marker.setIcon(properties.iconImage);
    }

    // Checking for content
    if (properties.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: properties.content,
        });

        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
    }
}