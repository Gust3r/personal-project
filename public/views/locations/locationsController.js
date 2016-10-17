angular.module("restaurant").controller("locationsController", function($scope){

  var coordinates = {lat:40.762541,lng: -111.902828}


$scope.weekday = "11:00 AM - 9:00 PM";
$scope.weekend = "11:00 AM - 11:00 PM";

$scope.phone = "(801) 000-0000";
$scope.email = "newrestaurant@email.com";

$scope.address = "423 West 300 South, Salt Lake City, UT 84101";


function initMap(){
  var newRestaurant = coordinates;
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: newRestaurant
  });
  var marker = new google.maps.Marker({
    position: newRestaurant,
    map: map
  });
}
initMap();

});
