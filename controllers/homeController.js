//var app=angular.module('loginApp', []);
app.controller('homeController', ['$scope', 'myservices', '$state','$mdSidenav', function($scope, myservices, $state,$mdSidenav) {
  $scope.firstRate = 0;
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

  var mobileListgetary = myservices.mobileListary(); //load mobile list from services
  $scope.mobileLists = mobileListgetary;

  var mobileOSListgetary = myservices.osListary(); //load mobile OS list from services
  $scope.osList = mobileOSListgetary;

  var mobfeaturegetListary = myservices.mobfeatureListary(); //load mobile Featuers list from services
  $scope.featureList = mobfeaturegetListary;

  var mobileBrandListgetary = myservices.mobileBrandListary(); //load mobile Brand list from services
  $scope.brandList = mobileBrandListgetary;

      $scope.logout = function()
          {
            $state.go('login');  //goto login page after logout
          }

      $scope.check = function(data)
        {                              //console.log(data);
         if (data.checked == true) {
            $scope.itemType = data.name;
          } else {
            $scope.itemType = ' ';
          }
        }
      $scope.checks = function(data) {
        if (data.checked == true) {
          $scope.itemsType = data.name;
        } else {
          $scope.itemsType = ' ';
        }
      }
      $scope.checkBrand = function(data) {
        if (data.checked == true) {
            $scope.itemBrandType = data.name;
        } else {
            $scope.itemBrandType = ' ';
        }
      }

  if(localStorage.getItem('cart') == null) {
    $scope.NoOfCartElements = 0;
  }
  else{                          //if(JSON.parse(localStorage.getItem('cart')).length >= 0 )
  $scope.NoOfCartElements = JSON.parse(localStorage.getItem('cart')).length;
  }


}]);
