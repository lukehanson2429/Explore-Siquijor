let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.1999, lng: 123.5952 },
    zoom: 11,
  });

// for Loop through markers
for(var i = 0;i < markersAttractions.length;i++){
    addMarker(markersAttractions[i]);
}

// Add Marker Function
function addMarker(properties){
    var marker = new google.maps.Marker({
        position:properties.coords,
        map:map,
    });

// Marker listener to adjust zoom on click
  marker.addListener("click", () => {
    map.setZoom(13);
    map.setCenter(marker.getPosition());
  });


// if statement - check for icon
if(properties.iconImage){
    marker.setIcon(properties.iconImage);
}

// Checking for content
if(properties.content){
    var infoWindow = new google.maps.InfoWindow({
        content: properties.content
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}
}
}

// var Attractions Markers stored in Array
var markersAttractions = [
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

var markersHostels = [
  {   // Cliff Garden Hostel, Content description - https://www.booking.com/hotel/ph/cliff-garden.en-gb.html
    coords: { lat: 9.132135, lng: 123.528480 },
    content: '<h3 class="main-content">Cliff Garden Hostel</h2><p class="main-content">Set in Siquijor, 1.4 miles from Salamangka Beach, Cliff Garden offers accommodation with a restaurant, free private parking, a garden and a terrace. All rooms are fitted with a patio with garden views and free WiFi.</p>'
  },
  {   // Tori's Backpacker Paradise, Content description - https://www.facebook.com/pg/torisbackpackersparadisesiquijor/about/?ref=page_internal
    coords: { lat: 9.146809, lng: 123.505965 },
    content: '<h3 class="main-content">Toris Backpacker Paradise</h2><p class="main-content">Situated along the shores of Tubod Beach, Toris Backpackers Paradise offers basic and comfy accommodation with free parking on site. It features lush tropical gardens, small beach and restobar with free WiFi access.</p>'
  },
  {   // Stella'z Guesthouse, Content description - https://www.booking.com/hotel/ph/stella-39-z-guesthouse.en-gb.html
    coords: { lat: 9.150441, lng: 123.501123 },
    content: '<h3 class="main-content">Stellaz Guesthouse</h2><p class="main-content">Located in Siquijor, Stellaz guesthouse offers accommodation with private balconies. Among the facilities at this property are a 24-hour front desk and a shared kitchen, along with free WiFi throughout the property. Free private parking is available and the guest house also provides bike hire for guests who want to explore the surrounding area.</p>'
  },
  {   // JJ's Backpackers Village, Content description - https://www.booking.com/hotel/ph/jjs-backpackers-village.en-gb.html
    coords: { lat: 9.168225, lng: 123.481887 },
    content: '<h3 class="main-content">JJs Backpackers Village</h2><p class="main-content">Located in Siquijor, 1.1 miles from Pontod Beach, JJS BACKPACKERS VILLAGE provides accommodation with a restaurant, free private parking, a bar and a shared lounge. The accommodation features a private beach area, as well as a garden and a terrace. The accommodation offers a 24-hour front desk, room service and currency exchange for guests.</p>'
  },
  {   // Love Shack Hostel, Content description - https://www.hostelworld.com/hosteldetails.php/Love-Shack-Hostel-Cafe/Siquijor-Island-near-Bohol/301353
    coords: { lat: 9.176596, lng: 123.466639 },
    content: '<h3 class="main-content">Love Shack Hostel</h2><p class="main-content">Love Shack Hostel is located in Paliton road., San Juan, Siquijor Island. 3 minute walk to the famous Paliton Marine Sanctuary with a a long stretch of white beach with amazing sunset. Considered as the best spot for relaxing after a long day of exploring the magical island of Siquijor. Shops, bars, restaurants, banks/ATM machines are within the area of San Juan.</p>'
  },
  {   // Lazy Lizard Hostel, Content description - https://www.booking.com/hotel/ph/lazy-lizard.en-gb.html
    coords: { lat: 9.170282, lng: 123.485502 },
    content: '<h3 class="main-content">Lazy Lizard Hostel</h2><p class="main-content">Located in Siquijor, 1.5 miles from Pontod Beach, Lazy Lizard Hostel provides accommodation with a bar, free private parking, a shared lounge and a garden. Guests can enjoy garden views.</p>'
  },
];

