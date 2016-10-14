angular.module("restaurant").controller("adminController", function($scope, restaurantService){


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

  $scope.delete = function(id, index) {
    console.log(id);
    $scope.data = $scope.data.filter(function(data){
      return data.id != id;
    });
    restaurantService.deleteMenuItem(id)
    .then(function(data){
      $scope.data.splice(index, 1);
    });
  };




});
