app.controller('registerController', function($scope, $state) {
  $scope.user = {};

  $scope.save = function() {
    //console.log($scope.user);

    if ($scope.user.email == null && $scope.user.password == null) {
      alert('Please fill data');
    } else {

      localStorage.setItem($scope.user.email, angular.toJson($scope.user));
      $state.go('home.dashboard');
    }
  }

});
