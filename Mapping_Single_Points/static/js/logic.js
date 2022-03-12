// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });


////////13.4.1 - Creating single markers


// Adding Markers to the Map
//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Create a Circular point around LA
// L.circle([34.0522, -118.2437], {
//   // radius: 100,
//   color: 'yellow',

// }).addTo(map);
// Alternative circle creation method
// L.circleMarker([34.0522, -118.2437]).addTo(map);

////////13.4.2 - adding multiple markers

// Get data from cities.js
let cityData = cities;
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location).addTo(map);
// });


/////13.4.2 - Bind a Popup to the Marker
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.marker(city.location)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.
////  //// To Locale String adding in Commas in the Numbers
  toLocaleString() + "</h3>")
.addTo(map);
});


// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.
////  //// To Locale String adding in Commas in the Numbers
  toLocaleString() + "</h3>")
.addTo(map);
});


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);