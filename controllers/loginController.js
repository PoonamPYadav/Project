app.controller('loginController', function($scope,$state)
{
  $scope.user = {};
  $scope.user.email = '';
  $scope.user.password = '';
  $scope.submit = function()
  {
    //console.log($scope.user.email);
    var retrievedData = localStorage.getItem($scope.user.email);
    //console.log(retrievedData);
    // console.log(returndata.email);
    if (retrievedData == null)
     {
       alert('User not register'); //console.log('wronginput');
     } else
     {
        var returndata = JSON.parse(retrievedData);// console.log(returndata.email);
        if ($scope.user.email == returndata.email && $scope.user.password == returndata.password)
              $state.go('home.dashboard');
      }
  };
});
