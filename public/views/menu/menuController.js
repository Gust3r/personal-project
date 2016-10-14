angular.module("restaurant").controller("menuController", function($scope, restaurantService){


 restaurantService.getMenu()
 .then(function(response){
   $scope.status = response.status;
   $scope.data = response.data;
   console.log($scope.data);
 });


 $scope.post = function(item) {
   console.log(item);
   var newItem = angular.copy(item);
   restaurantService.createMenuItem(newItem)
   .then(function(response){
     $scope.data.push(newItem);
     $scope.item.name = "";
     $scope.item.cut_of_meat = "";
     $scope.item.description = "";
   }, function(err) {
     console.log('error posting menu item', err);
   });
};




});
