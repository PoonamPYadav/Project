//var app=angular.module('loginApp', []);
app.controller('homeController', ['$scope', 'myservices', '$state','$mdSidenav', function($scope, myservices, $state,$mdSidenav) {

 var x=0;
      $scope.toggleSidenav = function () {
     $mdSidenav('left-side-nav').toggle();

       if(x==0)
           {
             {

                $scope.cardstyle={'margin-left': '300px'};
              }  x=1;
         }else
         {
           {
           $scope.cardstyle={'margin-left': '0px'};
         } x = 0;
         }
   };

        var ary = myservices.getary();
  $scope.mobileLists = ary;

  var ary2 = myservices.getary2();
  $scope.driversList = ary2;

  var ary3 = myservices.getary3();
  $scope.driversFeatures = ary3;

  var ary4 = myservices.getary4();
  $scope.brandList = ary4;

  $scope.logout = function() {
    $state.go('login');

  }

  $scope.check = function(data) {
    console.log(data);
    if (data.checked == true) {
      //console.log(data.checked);
      $scope.itemType = data.name;
    } else {
      $scope.itemType = ' ';
    }

  }
  $scope.checks = function(data) {
    console.log(data);
    if (data.checked == true) {
      $scope.itemsType = data.name;
    } else {
      $scope.itemsType = ' ';
    }
  }
  $scope.checkBrand = function(data) {
    console.log(data);
    if (data.checked == true) {
      $scope.itemBrandType = data.name;
    } else {
      $scope.itemBrandType = ' ';
    }
  }
  // $scope.check = function(data) {
  //   console.log(data);
  //   $scope.itemType = data.name;
  // }


  if(localStorage.getItem('cart') == null) {
    $scope.NoOfCartElements = 0;
  }
  else //if(JSON.parse(localStorage.getItem('cart')).length >= 0 )
  $scope.NoOfCartElements = JSON.parse(localStorage.getItem('cart')).length;

}]);
