function initmap() {
  var newRestaurant = {lat:40.762525, lng: -111.903336};
  var map = new google.maps.Map(document.getElementId('map'), {
    zoom: 4,
    center: newRestaurant
  });
  var marker = new google.maps.Marker({
    postion: newRestaurant,
    map: map
  });
}



//
//
// var mapOptions = {
//   center: new google.maps.LatLng(40.762525, 111.903336),
//   zoom: 12,
//   mapTypeId: google.maps.mapTypeId.ROADMAP
// };
//
// new google.maps.Map(document.getElementId('map'), mapOptions);
//
// var markerOptions = {
//   posiiton: new google.maps.LatLng(40.762525, 111.903336)
// };
//
// var marker = new google.maps.Marker(markerOptions);
// marker.setMap(map);
