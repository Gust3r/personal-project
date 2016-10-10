angular.module("restaurant").controller("menuController", function($scope, restaurantService){


 restaurantService.getMenu()
 .then(function(response){
   $scope.status = response.status;
   $scope.data = response.data;
   console.log($scope.data);
 });





});
