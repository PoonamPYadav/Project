var app=angular.module('loginApp', ['ngMaterial','ui.router']);

app.config(function ($stateProvider, $urlRouterProvider){
  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'template/login.html',
    controller:'loginController'
  }
  var registerState = {
     name: 'register',
     url: '/register',
      templateUrl: 'template/registerform.html',
      controller:'registerController'
   }
   var homeState = {
      name: 'home',
      url: '/home',
       templateUrl: 'template/home.html',
       controller:'homeController'
    }
    var viewState = {
       name: 'view',
       url: '/view/:Id',
        templateUrl: 'template/view.html',
        controller:'viewController'
     }
   $stateProvider.state(loginState);
   $stateProvider.state(registerState);
    $stateProvider.state(homeState);
      $stateProvider.state(viewState);
   $urlRouterProvider.otherwise('/login');

});
