let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.1999, lng: 123.5952 },
    zoom: 11,
  });

// for Loop through markers
for(var i = 0;i < markers.length;i++){
    addMarker(markers[i]);
}

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

// var Attractions Markers stored in Array
var markers = [
    {   // Cambugahay Falls
        coords:{lat: 9.1400, lng: 123.6267},
        content:'<h3 class="main-content">Cambugahay Falls</h2><p class="main-content">3-tiered waterfall & a swimming hole with clear waters, reachable by a short hike with stairs.</p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {   // Salagdoong Beach
        coords:{lat: 9.2125, lng: 123.6811},
        content:'<h3 class="main-content">Salagdoong Beach</h2><p class="main-content">Tropical stretch of sand featuring a diving platform & water slide, plus a casual restaurant. </p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {   // Old Enchanted Balete Tree
        coords:{lat: 9.120970, lng: 123.575373},
        content:'<h3 class="main-content">Old Enchanted Balete Tree</h2><p class="main-content">Grand 400-year-old tree with a spring at its base where visitors have their feet nibbled on by fish. </p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {   // Sambulawan Underground River
        coords:{lat: 9.141527, lng: 123.636714},
        content:'<h3 class="main-content">Sambulawan Underground River</h2><p class="main-content">The underground river system goes on for more than 1km through spectacular underground rock formations that will leave you breathless. It is believed that the river provides the headwaters of Cambugahay Falls, which is less than one kilometre away.</p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {   // Lagaan Falls
        coords:{lat: 9.1345, lng: 123.6136},
        content:'<h3 class="main-content">Lagaan Falls</h2><p class="main-content">While not as large as Cambugahay Falls this smaller waterfall is less touristy and provides swimming holes, rope swings, rock jumps, and small caves.</p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {   // Lugnason Falls
        coords:{lat: 9.1485, lng: 123.5338},
        content:'<h3 class="main-content">Lugnason Falls</h2><p class="main-content">Landscaped recreation area around an island waterfall, with spots for jumping into a natural pool.</p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {   // Cantabon Cave
        coords:{lat: 9.185831, lng: 123.561178},
        content:'<h3 class="main-content">Cantabon Cave</h2><p class="main-content">Big cave with stalactites, stalagmites & a pool of water, offering tours with helmets & flashlights.</p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
    {   // Tubod Beach Marine Sanctuary
        coords:{lat: 9.1416, lng: 123.5091},
        content:'<h3 class="main-content">Tubod Beach Marine Sanctuary</h2><p class="main-content">White-sand beach featuring aqua water, snorkeling & scuba diving rentals & a marine sanctuary.</p>',
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    },
];

