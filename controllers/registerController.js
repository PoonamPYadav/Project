app.controller('registerController', function($scope, $state) {
  $scope.user = {};
  $scope.saveData = function()
  {
    //console.log($scope.user);
      if ($scope.SaveForm.$valid)
      {
        alert("User sucessfully  register..!!");
        localStorage.setItem($scope.user.email, JSON.stringify($scope.user)); //Convert a JavaScript object into a string with JSON.stringify().
        $state.go('login');
      }else {
        alert("Form is not Valid..!!");
      }
  }
});
