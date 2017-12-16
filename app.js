var app=angular.module('loginApp', ['ngMaterial','ui.router','jkAngularRatingStars']);

app.config(function ($stateProvider, $urlRouterProvider){
     $stateProvider
     .state({
       name: 'login',
       url: '/login',
       templateUrl: 'template/login.html',
       controller:'loginController'
     })
     .state({
        name: 'register',
        url: '/register',
         templateUrl: 'template/registerform.html',
         controller:'registerController'
      })
     .state({
        name: 'home',
        url: '/home',
         templateUrl: 'template/home.html',
         controller:'homeController'
      }
      )
     .state({
        name: 'home.dashboard',
        url: '/dashboard',
         templateUrl: 'template/content.html',
         controller:'homeController'
      })
     .state({
        name: 'home.view',
        url: '/view/:Id',
         templateUrl: 'template/view.html',
         controller:'viewController'
      })
      .state({
         name: 'home.cartpage',
         url: '/cartpage',
          templateUrl: 'template/cartpage.html',
          controller:'cartPageController'
       });


   $urlRouterProvider.otherwise('/login');

});
