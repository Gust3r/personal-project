angular.module("restaurant").service("restaurantService", function($http){
  this.getMenu = function(){
    return $http({
      method: "GET",
      url: "http://localhost:9000/api/menu"
    });
  };
  this.createMenuItem = function(menu){
    return $http({
      method: "POST",
      url: "http://localhost:9000/api/menu",
      data: menu
    });
  };
  this.postMenuItem = function(menu) {
    return $http({
      method: "PUT",
      url: "http://localhost:9000/api/menu"
    });
  };
  this.deleteMenuItem = function(menu) {
    return $http({
      method: "DELETE",
      url: "htpp://localhost:9000/api/menu"
    });
  };
});
