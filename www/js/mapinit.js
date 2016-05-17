var map;
document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);

}, false);

function onMapReady() {
//    var button = document.getElementById("button");
//    button.addEventListener("click", onBtnClicked, false);
    alert('im ready');
    map.getMyLocation(function(location) {
        var msg = ["Current your location:\n",
        "latitude:" + location.latLng.lat,
        "longitude:" + location.latLng.lng,
        "speed:" + location.speed,
        "time:" + location.time,
        "bearing:" + location.bearing].join("\n");

        map.addMarker({
        'position': location.latLng,
        'title': msg
        }, function(marker) {
        marker.showInfoWindow();
        });

        var GOOGLE = new plugin.google.maps.LatLng(location.latLng.lat, location.latLng.lng);
        map.moveCamera({
          'target': GOOGLE,
          'tilt': 60,
          'zoom': 18,
          'bearing': 140
        }, function() {
          console.log("The animation is done");
        });
    });
}

//function onBtnClicked() {
//  map.showDialog();
//}
/*
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
*/