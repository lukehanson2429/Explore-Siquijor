let map;

// init Map function only initiated dependant on button clicked and will display correct markers dependant on array variable
function initMap(category) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 9.186013, lng: 123.580776 },
    zoom: 11,
  });


// for Loop through markers dependant on category
for(var i = 0;i < category.length;i++){
    addMarker(category[i]);
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
      map.panTo({ lat: 9.186013, lng: 123.580776 });
    }, 2000);
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
var attractions = [
  {   // Cambugahay Falls
    coords: { lat: 9.1400, lng: 123.6267 },
    content: '<div class="icon-content"><h3>Cambugahay Falls</h3><br><p>3-tiered waterfall & a swimming hole with clear waters, reachable by a short hike with stairs.</p><br><p>Siquijor Circumferential Road, Lazi, Siquijor, Philippines</p><br><p>Monday to Sunday: 7am - 5:30pm</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g664445-d1550553-Reviews-Cambugahay_Falls-Siquijor_Island_Visayas.html" target="_blank">Cambugahay Falls - Travellers Choice 2020: Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Salagdoong Beach
    coords: { lat: 9.2125, lng: 123.6811 },
    content: '<div class="icon-content"><h3>Salagdoong Beach</h3><br><p>Tropical stretch of sand featuring a diving platform & water slide, plus a casual restaurant.</p><br><p>Maria, Philippines</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g664445-d1954895-Reviews-Salagdoong_Beach-Siquijor_Island_Visayas.html" target="_blank">Salagdoong Beach - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Old Enchanted Balete Tree
    coords: { lat: 9.120970, lng: 123.575373 },
    content: '<div class="icon-content"><h3>Old Enchanted Balete Tree</h3><br><p>Grand 400-year-old tree with a spring at its base where visitors have their feet nibbled on by fish.</p><br><p>Siquijor Circumferential Road, Lazi, 6228 Siquijor, Philippines</p><br><p>Monday to Sunday: 6am - 6pm</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g664445-d1550106-Reviews-Old_Enchanted_Balete_Tree-Siquijor_Island_Visayas.html" target="_blank">Old Enchanted Balete Tree - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Sambulawan Underground River
    coords: { lat: 9.141527, lng: 123.636714 },
    content: '<div class="icon-content"><h3>Sambulawan Underground River</h3><br><p>1km Underground river system with spectacular underground rock formations. It is believed that the river provides the headwaters of Cambugahay Falls.</p><br><p>Lazi, Siquijor, Philippines</p><br><p>Monday to Sunday: 9am - 5pm</p><br><p>+63 955 334 0730</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g3862482-d15680151-Reviews-Sambulawan_Underground_River-Siquijor_Siquijor_Island_Visayas.html" target="_blank">Sambulawan Underground River - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Lagaan Falls
    coords: { lat: 9.1345, lng: 123.6136 },
    content: '<div class="icon-content"><h3>Lagaan Falls</h3><br><p>Smaller version of Cambugahay with swimming holes, rope swings, rock jumps, and small caves.</p><br><p>Lazi, Siquijor, Philippines</p><br><a href="https://www.siquijorisland.net/siquijor-lagaan-falls.html" target="_blank">Lagaan Falls - Siqujor Island Guide</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Lugnason Falls
    coords: { lat: 9.1485, lng: 123.5338 },
    content: '<div class="icon-content"><h3>Lugnason Falls</h3><br><p>Landscaped recreation area around an island waterfall, with spots for jumping into a natural pool.</p><br><p>San Juan, Siquijor, Philippines</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g3175044-d6537006-Reviews-Lugnason_Falls-San_Juan_Siquijor_Island_Visayas.html" target="_blank">Lugnason Falls - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Cantabon Cave
    coords: { lat: 9.185831, lng: 123.561178 },
    content: '<div class="icon-content"><h3>Cantabon Cave</h3><br><p>Big cave with stalactites, stalagmites & a pool of water, offering tours with helmets & flashlights.</p><br><p>Siquijor, Philippines</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g664445-d1550363-Reviews-Cantabon_Cave-Siquijor_Island_Visayas.html" target="_blank">Cantabon Cave - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
  {   // Tubod Beach/Marine Sanctuary
    coords: { lat: 9.1416, lng: 123.5091 },
    content: '<div class="icon-content"><h3>Tubod Beach/Marine Sanctuary</h3><br><p>White-sand beach featuring aqua water, snorkeling & scuba diving rentals & a marine sanctuary.</p><br><p>San Juan, Philippines</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g664445-d1575672-Reviews-Tubod_Marine_Sanctuary-Siquijor_Island_Visayas.html" target="_blank">Tubod Beach/Marine Sanctuary - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
];

var hostels = [
  {   // Cliff Garden Hostel
    coords: { lat: 9.132135, lng: 123.528480 },
    content: '<div class="icon-content"><h3>Cliff Garden Hostel</h3><br><p>Tag-ibo, San Juan, 6227 Siquijor, Philippines</p><br><p>+639356623611</p><br><a href="https://www.booking.com/hotel/ph/cliff-garden.en-gb.html" target="_blank">Cliff Garden - Booking.com</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Tori's Backpacker Paradise
    coords: { lat: 9.146809, lng: 123.505965 },
    content: '<div class="icon-content"><h3>Toris Backpacker Paradise</h3><br><p>Maite, San Juan, 6227 Siquijor, Philippines</p><br><p>+639071326666</p><br><a href="https://www.booking.com/hotel/ph/tori-s-backpacker-s-paradise.en-gb.html" target="_blank">Toris Backpacker Paradise - Booking.com</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Stella'z Guesthouse
    coords: { lat: 9.150441, lng: 123.501123 },
    content: '<div class="icon-content"><h3>Stellaz Guesthouse</h3><br><p>Maite, San Juan, 6227 Siquijor, Philippines</p><br><a href="https://www.booking.com/hotel/ph/stella-39-z-guesthouse.en-gb.html" target="_blank">Stellaz guesthouse - Booking.com</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // JJ's Backpackers Village
    coords: { lat: 9.168225, lng: 123.481887 },
    content: '<div class="icon-content"><h3>JJs Backpackers Village</h3><br><p>Solangon, San Juan Solangon, San Juan, 6227 Siquijor, Philippines</p><br><a href="https://www.tripadvisor.co.uk/Hotel_Review-g664445-d4465350-Reviews-JJ_s_Backpackers_Village-Siquijor_Island_Visayas.html" target="_blank">JJs Backpacker Village - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Love Shack Hostel
    coords: { lat: 9.176596, lng: 123.466639 },
    content: '<div class="icon-content"><h3>Love Shack Hostel</h3><br><p>Paliton road, Barangay, San Juan, Siquijor, Philippines</p><br><p>+639153937240</p><br><a href="https://www.tripadvisor.co.uk/Hotel_Review-g3175044-d17324100-Reviews-Love_Shack_Hostel-San_Juan_Siquijor_Island_Visayas.html" target="_blank">Love Shack Hostel - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
  {   // Lazy Lizard Hostel
    coords: { lat: 9.170282, lng: 123.485502 },
    content: '<div class="icon-content"><h3>Lazy Lizard Hostel</h3><br><p>Purok Mabuhay, San Juan, 6227 Siquijor, Philippines</p><br><p>+639271516338</p><br><a href="https://www.booking.com/hotel/ph/lazy-lizard.en-gb.html" target="_blank">Lazy Lizard Hostel - Booking.com</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
];

var foodDrink = [
  {   // Jungle of Peace Bar & BBQ
    coords: { lat: 9.134458, lng: 123.532479 },
    content: '<div class="icon-content"><h3>Jungle of Peace Bar & BBQ</h3><br><p>5 Palong Palong Tag-ibo San juan Siquijor, 6227 Philippines</p><br><p>Monday to Sunday: 8am - 11pm</p><br><p>+639561973310</p><br><a href="https://jungle-of-peace-bar-and-bbq.business.site/" target="_blank">Jungle of Peace Bar & BBQ</a></div>',
    iconImage: "https://drive.google.com/uc?id=1w6THhD0zdF6MVohbXnpbhGmxLkNyxHVd"
  },
  {   // Baha Bar 
    coords: { lat: 9.151960, lng: 123.499472 },
    content: '<div class="icon-content"><h3>Baha Bar</h3><br><p>San Juan, Maite, Siquijor, 6227 Siquijor, Philippines</p><br><p>Monday to Sunday: 11am - 11pm</p><br><p>+63 998 548 8784</p><br><a href="http://baha-bar.com/" target="_blank">Baha Bar</a></div>',
    iconImage: "https://drive.google.com/uc?id=1w6THhD0zdF6MVohbXnpbhGmxLkNyxHVd"
  },
    {   // Luca Loko Restaurant 
    coords: { lat: 9.154195, lng: 123.497322 },
    content: '<div class="icon-content"><h3>Luca Loko Restaurant</h3><br><p>Barangay Maite San Juan Siquijor, 6226 Philippines</p><br><p>Monday to Sunday: 8am - 12am</p><br><p>+63 906 213 8840</p><br><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g664445-d13313726-Reviews-Luca_Loko_Restaurant-Siquijor_Island_Visayas.html" target="_blank">Luca Loko Restaurant - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
        {   // Island Casitas Siquijor
    coords: { lat: 9.160996, lng: 123.489620 },
    content: '<div class="icon-content"><h3>Island Casitas Siquijor</h3><br><p>San Juan, Siquijor, Philippines</p><br><p>Monday to Sunday: 8am - 10pm</p><br><p>+639171269136</p><br><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g3862482-d17385178-Reviews-Island_Casitas-Siquijor_Siquijor_Island_Visayas.html" target="_blank">Island Casitas Siquijor - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=1w6THhD0zdF6MVohbXnpbhGmxLkNyxHVd"
  },
        {   // Aloha's Grill & Resto Bar
    coords: { lat: 9.164375, lng: 123.486283 },
    content: '<div class="icon-content"><h3>Alohas Grill & Resto Bar</h3><br><p>Siquijor Circumferential Road, Lalao, San Juan, Siquijor, Philippines</p><br><p>+63 977 096 4426</p><br><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g664445-d19384793-Reviews-Aloha_s_Grill_and_Restobar-Siquijor_Island_Visayas.html" target="_blank">Alohas Grill and Restobar - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
          {   // Roch Cuisine
    coords: { lat: 9.165614, lng: 123.484945 },
    content: '<div class="icon-content"><h3>Roch Cuisine</h3><br><p>Pop up restaurant in perfect sunset location. Try the special Mango Cake for dessert!</p><br><p>6227 San Juan, Philippines</p><br><p>Monday to Sunday: 5pm - 8pm</p><br><p>+63 949 973 2479</p></div>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
            {   // Monkey Business
    coords: { lat: 9.172996, lng: 123.476098 },
    content: '<div class="icon-content"><h3>Monkey Business</h3><br><p>Western & Filipino cuisine with live music every saturday. Special discount on burgers every saturday too!</p><br><p>Solangon, 6227 San Juan, Philippines</p><br><p>Monday to Sunday: 8am - 11:45pm</p><br><p>+63 906 803 2570</p><br><a href="https://m.facebook.com/MonkeyBusinessSiquijor/" target="_blank">Monkey Business - Facebook</a></div>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
  ];

  var topPick1 = [
        {   // Aloha's Grill & Resto Bar
    coords: { lat: 9.164375, lng: 123.486283 },
    content: '<div class="icon-content"><h3>Alohas Grill & Resto Bar</h3><br><p>Siquijor Circumferential Road, Lalao, San Juan, Siquijor, Philippines</p><br><p>+63 977 096 4426</p><br><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g664445-d19384793-Reviews-Aloha_s_Grill_and_Restobar-Siquijor_Island_Visayas.html" target="_blank">Alohas Grill and Restobar - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=1ZcGRu7i1Pcddjl4LHdItMm0JaBapAcEN"
  },
];

  var topPick2 = [
        {   // Island Casitas Siquijor
    coords: { lat: 9.160996, lng: 123.489620 },
    content: '<div class="icon-content"><h3>Island Casitas Siquijor</h3><br><p>San Juan, Siquijor, Philippines</p><br><p>Monday to Sunday: 8am - 10pm</p><br><p>+639171269136</p><br><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g3862482-d17385178-Reviews-Island_Casitas-Siquijor_Siquijor_Island_Visayas.html" target="_blank">Island Casitas Siquijor - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=1w6THhD0zdF6MVohbXnpbhGmxLkNyxHVd"
  },
];

  var topPick3 = [
  {   // Cambugahay Falls
    coords: { lat: 9.1400, lng: 123.6267 },
    content: '<div class="icon-content"><h3>Cambugahay Falls</h3><br><p>3-tiered waterfall & a swimming hole with clear waters, reachable by a short hike with stairs.</p><br><p>Siquijor Circumferential Road, Lazi, Siquijor, Philippines</p><br><p>Monday to Sunday: 7am - 5:30pm</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g664445-d1550553-Reviews-Cambugahay_Falls-Siquijor_Island_Visayas.html" target="_blank">Cambugahay Falls - Travellers Choice 2020: Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
];

  var topPick4 = [
  {   // Tubod Beach/Marine Sanctuary
    coords: { lat: 9.1416, lng: 123.5091 },
    content: '<div class="icon-content"><h3>Tubod Beach/Marine Sanctuary</h3><br><p>White-sand beach featuring aqua water, snorkeling & scuba diving rentals & a marine sanctuary.</p><br><p>San Juan, Philippines</p><br><a href="https://www.tripadvisor.co.uk/Attraction_Review-g664445-d1575672-Reviews-Tubod_Marine_Sanctuary-Siquijor_Island_Visayas.html" target="_blank">Tubod Beach/Marine Sanctuary - Tripadvisor</a></div>',
    iconImage: "https://drive.google.com/uc?id=13g8V-6J-tfzg5ZFNNJudd1yDGUuQUVlD"
  },
];

  var topPick5 = [
  {   // Cliff Garden Hostel
    coords: { lat: 9.132135, lng: 123.528480 },
    content: '<div class="icon-content"><h3>Cliff Garden Hostel</h3><br><p>Tag-ibo, San Juan, 6227 Siquijor, Philippines</p><br><p>+639356623611</p><br><a href="https://www.booking.com/hotel/ph/cliff-garden.en-gb.html" target="_blank">Cliff Garden - Booking.com</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
];

  var topPick6 = [
  {   // Lazy Lizard Hostel
    coords: { lat: 9.170282, lng: 123.485502 },
    content: '<div class="icon-content"><h3>Lazy Lizard Hostel</h3><br><p>Purok Mabuhay, San Juan, 6227 Siquijor, Philippines</p><br><p>+639271516338</p><br><a href="https://www.booking.com/hotel/ph/lazy-lizard.en-gb.html" target="_blank">Lazy Lizard Hostel - Booking.com</a></div>',
    iconImage: "https://drive.google.com/uc?id=1dy5KhZty_V0FCE_-J6yWuQwO7Xn6f3fi"
  },
];


  var topTips = [
        {   // Postada Scooter Hire
    coords: { lat: 9.216617, lng: 123.513314 },
    content: '<div class="icon-content"><h3>POSTADA Motorcycle Rental Agency</h3><p>Scooters to rent as you step off the pier on your left. If you would prefer another mode of transport, prices are as follows:</p><br><a href="https://siquijordirectory.com/postada-the-tourists-tricycles-in-siquijor-island/" target="_blank">Province of Siquijor Tourism Accredited Drivers Association (POSTADA) Tariff Rates for Multicab, Van for Rent and Tricycle</a></div>',
    iconImage: "https://drive.google.com/uc?id=1m6RvTMQoDrminWU6fZqAlKNorPf0vmYa"
  },
          {   // ATM
    coords: { lat: 9.214731, lng: 123.513230 },
    content: '<div class="icon-content"><h3>DBP ATM</h3><p>Main cashpoint when you arrive in Siquijor.</p><br><p>Open 24 hours</p><br><p>+63354809762</p></div>',
    iconImage: "https://drive.google.com/uc?id=1FSeCOCw3mz586oakR9RS_e0PuBsNTdWg"
  },
          {   // Czar's Palace Friday Party
    coords: { lat: 9.152048, lng: 123.499835 },
    content: '<div class="icon-content"><h3>C Zars Place</h3><p>San Juan, Siquijor, Philippines</p><br><p>Friday night till late - opposite Baha Bar!</p><br><p>+63354815012</p></div>',
    iconImage: "https://drive.google.com/uc?id=1gnfZADIwleJm6uKj59WNblbtAwdKw3vR"
  },
];


