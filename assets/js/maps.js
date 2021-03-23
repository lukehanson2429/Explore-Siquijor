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

for (var i = 0; i < markersHostels.length; i++) {
    addMarker(markersHostels[i]);
  }

for (var i = 0; i < markersEatDrink.length; i++) {
    addMarker(markersEatDrink[i]);
  }

// Add Marker Function
function addMarker(properties){
    var marker = new google.maps.Marker({
        position:properties.coords,
        map:map,
    });

// Marker listener to adjust zoom and pan to centered latitutde on mouse
map.addListener("mouseout", () => {
    // 0.5 seconds after the center of the map has changed, pan back to the
    // initial location.
    window.setTimeout(() => {
      map.setZoom(11);
      map.panTo({ lat: 9.1999, lng: 123.5952 });
    }, 500);
  });

// Marker listener to adjust zoom and pan to centered latitutde on drag
      map.addListener("drag", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.setZoom(11);
      map.panTo({ lat: 9.1999, lng: 123.5952 });
    }, 3000);
  });

// Marker listener to adjust zoom on click
  marker.addListener("click", () => {
    map.setZoom(15);
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
    coords: { lat: 9.1400, lng: 123.6267 },
    content: '<h3 class="main-content">Cambugahay Falls</h3><p class="main-content">3-tiered waterfall & a swimming hole with clear waters, reachable by a short hike with stairs.</p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Salagdoong Beach
    coords: { lat: 9.2125, lng: 123.6811 },
    content: '<h3 class="main-content">Salagdoong Beach</h3><p class="main-content">Tropical stretch of sand featuring a diving platform & water slide, plus a casual restaurant. </p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Old Enchanted Balete Tree
    coords: { lat: 9.120970, lng: 123.575373 },
    content: '<h3 class="main-content">Old Enchanted Balete Tree</h3><p class="main-content">Grand 400-year-old tree with a spring at its base where visitors have their feet nibbled on by fish. </p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Sambulawan Underground River
    coords: { lat: 9.141527, lng: 123.636714 },
    content: '<h3 class="main-content">Sambulawan Underground River</h3><p class="main-content">The underground river system goes on for more than 1km through spectacular underground rock formations that will leave you breathless. It is believed that the river provides the headwaters of Cambugahay Falls, which is less than one kilometre away.</p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Lagaan Falls
    coords: { lat: 9.1345, lng: 123.6136 },
    content: '<h3 class="main-content">Lagaan Falls</h3><p class="main-content">While not as large as Cambugahay Falls this smaller waterfall is less touristy and provides swimming holes, rope swings, rock jumps, and small caves.</p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Lugnason Falls
    coords: { lat: 9.1485, lng: 123.5338 },
    content: '<h3 class="main-content">Lugnason Falls</h3><p class="main-content">Landscaped recreation area around an island waterfall, with spots for jumping into a natural pool.</p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Cantabon Cave
    coords: { lat: 9.185831, lng: 123.561178 },
    content: '<h3 class="main-content">Cantabon Cave</h3><p class="main-content">Big cave with stalactites, stalagmites & a pool of water, offering tours with helmets & flashlights.</p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Tubod Beach Marine Sanctuary
    coords: { lat: 9.1416, lng: 123.5091 },
    content: '<h3 class="main-content">Tubod Beach Marine Sanctuary</h3><p class="main-content">White-sand beach featuring aqua water, snorkeling & scuba diving rentals & a marine sanctuary.</p>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
];

var markersHostels = [
  {   // Cliff Garden Hostel, Content description - https://www.booking.com/hotel/ph/cliff-garden.en-gb.html
    coords: { lat: 9.132135, lng: 123.528480 },
    content: '<h3 class="main-content">Cliff Garden Hostel</h3><p class="main-content">Set in Siquijor, 1.4 miles from Salamangka Beach, Cliff Garden offers accommodation with a restaurant, free private parking, a garden and a terrace. All rooms are fitted with a patio with garden views and free WiFi.</p>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Tori's Backpacker Paradise, Content description - https://www.facebook.com/pg/torisbackpackersparadisesiquijor/about/?ref=page_internal
    coords: { lat: 9.146809, lng: 123.505965 },
    content: '<h3 class="main-content">Toris Backpacker Paradise</h3><p class="main-content">Situated along the shores of Tubod Beach, Toris Backpackers Paradise offers basic and comfy accommodation with free parking on site. It features lush tropical gardens, small beach and restobar with free WiFi access.</p>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Stella'z Guesthouse, Content description - https://www.booking.com/hotel/ph/stella-39-z-guesthouse.en-gb.html
    coords: { lat: 9.150441, lng: 123.501123 },
    content: '<h3 class="main-content">Stellaz Guesthouse</h3><p class="main-content">Located in Siquijor, Stellaz guesthouse offers accommodation with private balconies. Among the facilities at this property are a 24-hour front desk and a shared kitchen, along with free WiFi throughout the property. Free private parking is available and the guest house also provides bike hire for guests who want to explore the surrounding area.</p>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // JJ's Backpackers Village, Content description - https://www.booking.com/hotel/ph/jjs-backpackers-village.en-gb.html
    coords: { lat: 9.168225, lng: 123.481887 },
    content: '<h3 class="main-content">JJs Backpackers Village</h3><p class="main-content">Located in Siquijor, 1.1 miles from Pontod Beach, JJS BACKPACKERS VILLAGE provides accommodation with a restaurant, free private parking, a bar and a shared lounge. The accommodation features a private beach area, as well as a garden and a terrace. The accommodation offers a 24-hour front desk, room service and currency exchange for guests.</p>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Love Shack Hostel, Content description - https://www.hostelworld.com/hosteldetails.php/Love-Shack-Hostel-Cafe/Siquijor-Island-near-Bohol/301353
    coords: { lat: 9.176596, lng: 123.466639 },
    content: '<h3 class="main-content">Love Shack Hostel</h3><p class="main-content">Love Shack Hostel is located in Paliton road., San Juan, Siquijor Island. 3 minute walk to the famous Paliton Marine Sanctuary with a a long stretch of white beach with amazing sunset. Considered as the best spot for relaxing after a long day of exploring the magical island of Siquijor. Shops, bars, restaurants, banks/ATM machines are within the area of San Juan.</p>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Lazy Lizard Hostel, Content description - https://www.booking.com/hotel/ph/lazy-lizard.en-gb.html
    coords: { lat: 9.170282, lng: 123.485502 },
    content: '<h3 class="main-content">Lazy Lizard Hostel</h3><p class="main-content">Located in Siquijor, 1.5 miles from Pontod Beach, Lazy Lizard Hostel provides accommodation with a bar, free private parking, a shared lounge and a garden. Guests can enjoy garden views.</p>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
];

var markersEatDrink = [
  {   // Jungle of Peace Bar & BBQ
    coords: { lat: 9.134458, lng: 123.532479 },
    content: '<h3 class="main-content">Jungle of Peace Bar & BBQ</h3><p class="main-content">With some of the best views on the island this is the perfect place to unwind and watch the sunset with a nice cold beer/cocktail.</p>',
    iconImage: "https://drive.google.com/uc?id=1w6THhD0zdF6MVohbXnpbhGmxLkNyxHVd"
  },
  {   // Baha Bar content description  - http://baha-bar.com/
    coords: { lat: 9.151960, lng: 123.499472 },
    content: '<h3 class="main-content">Baha Bar</h3><p class="main-content">Baha Bar has a loungey informal laid-back atmosphere that welcomes overseas visitors and locals alike. It prides itself on having an extensive tapas style menu that permits you to experience the best flavours of the Philippines and a cocktail drinks menu unrivalled on Siquijor if not the Visayas.</p>',
    iconImage: "https://drive.google.com/uc?id=1w6THhD0zdF6MVohbXnpbhGmxLkNyxHVd"
  },
    {   // Luca Loko Restaurant 
    coords: { lat: 9.154195, lng: 123.497322 },
    content: '<h3 class="main-content">Luca Loko Restaurant</h3><p class="main-content">A small and very welcome restaurant that faces the ocean , conviently along the road,with mixed international cuisine, and a lot of healthy food for vegetarians and vegans.</p>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
      {   // Island Casitas Siquijor
    coords: { lat: 9.160996, lng: 123.489620 },
    content: '<h3 class="main-content">Island Casitas Siquijor</h3><p class="main-content">Bar with laid back vibe right on the beach with cozy chairs and hammocks. Perfect place to watch the sunset. Also have extensive food menu.</p>',
    iconImage: "https://drive.google.com/uc?id=1w6THhD0zdF6MVohbXnpbhGmxLkNyxHVd"
  },
        {   // Aloha's Grill & Resto Bar
    coords: { lat: 9.164375, lng: 123.486283 },
    content: '<h3 class="main-content">Alohas Grill & Resto Bar</h3><p class="main-content">Unpretentious BBQ place that serves you freshly cooked meat and sea food with your own choice of sides.</p>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
          {   // Roch Cuisine
    coords: { lat: 9.165614, lng: 123.484945 },
    content: '<h3 class="main-content">Roch Cuisine</h3><p class="main-content">Pop up restaurant in perfect sunset location. Try the special Mango Cake for dessert!</p>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
            {   // Monkey Business
    coords: { lat: 9.172996, lng: 123.476098 },
    content: '<h3 class="main-content">Monkey Business</h3><p class="main-content">Western & Filipino cuisine with live music every saturday. Special discount on burgers every saturday too!</p>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
  ];

