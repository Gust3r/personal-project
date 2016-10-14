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
      url: "http://localhost:9000/api/admin", //changed menu to admin
      data: menu
    });
  };


  this.updateMenuItem = function(menu) {
    return $http({
      method: "PUT",
      url: "http://localhost:9000/api/menu"
    });
  };


  this.deleteMenuItem = function(id) {
    return $http({
      method: "DELETE",
      url: "http://localhost:9000/api/admin/" + id
    }).then(function(res){
      return res.data;
    });
  };
});
