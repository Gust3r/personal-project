angular.module("restaurant", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("home", {
      url:"/",
      controller:"homeController",
      templateUrl:"./views/home/homeTemplate.html"
    })
    .state("menu", {
      url:"/menu",
      controller:"menuController",
      templateUrl:"./views/menu/menuTemplate.html"
    })
    .state("about", {
      url:"/about",
      controller:"aboutController",
      templateUrl:"./views/about/aboutTemplate.html"
    })
    .state("contact", {
      url:"/contact",
      controller:"contactController",
      templateUrl:"./views/contact/contactTemplate.html"
    })
    .state("locations", {
      url:"/locations",
      controller:"locationsController",
      templateUrl:"./views/locations/locationsTemplate.html"
    })
    .state("reservations", {
      url:"/reservations",
      controller:"reservationsController",
      templateUrl:"./views/reservations/reservationsTemplate.html"
    });












});
