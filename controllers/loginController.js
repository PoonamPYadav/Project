app.controller('loginController', function($scope,$state) {

  $scope.user = {};

  $scope.user.email = '';
  $scope.user.password = '';
  var list = [];


  $scope.submit = function() {

    var retrievedData = localStorage.getItem($scope.user.email);
    console.log(retrievedData);

    if (retrievedData == null) {
      alert('User not register');
    //document.getElementById('result').innerHTML="wronginput";//  console.log('wronginput');
    } else {
      var returndata = JSON.parse(retrievedData);
      //console.log(returndata.email);


      if ($scope.user.email == returndata.email && $scope.user.password == returndata.password) {
        //list.push($scope.user.email);
        $state.go('home');

        //window.location = '../template/registerform.html';
      //  $window.location.href = '../template/registerform.html';
        document.getElementById('result').innerHTML="login successfully";//console.log("success");
        //$scope.text = '';
      } else {
      document.getElementById('result').innerHTML="Wrong Pssword" ;// console.log('wrong');
      }
    }
  };

//  console.log(list);

});
