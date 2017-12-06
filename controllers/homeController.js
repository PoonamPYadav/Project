//var app=angular.module('loginApp', []);
app.controller('homeController', ['$scope', 'myservices', '$state', function($scope, myservices, $state) {
  
  var ary = myservices.getary();
  $scope.mobileLists = ary;

  var ary2 = myservices.getary2();
  $scope.driversList = ary2;

  var ary3 = myservices.getary3();
  $scope.driversFeatures = ary3;

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
  // $scope.check = function(data) {
  //   console.log(data);
  //   $scope.itemType = data.name;
  // }

}]);
