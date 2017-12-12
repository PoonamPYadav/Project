app.controller('viewController',['$scope','$stateParams','myservices','$state',function($scope,$stateParams,myservices,$state){

var ResultId = $stateParams.Id;
//console.log(ResultId);
  var factary=myservices.getary();

  //console.log(factary);

  var aryres=[];

  for(var i=0;i<factary.length;i++)
  {
    if(ResultId==factary[i].Id)
    {
    aryres.push(factary[i]);
    }
  }

  $scope.mobileLists=aryres;
  //console.log($stateParams);
  //var data;
  if(localStorage.getItem('cart') == null) {
    $scope.NoOfCartElements = 0;
  }
  else //if(JSON.parse(localStorage.getItem('cart')).length >= 0 )
  $scope.NoOfCartElements = JSON.parse(localStorage.getItem('cart')).length;

  $scope.add=function(data){


cartElemArray=[];


if(localStorage.getItem('cart') == null) {
  cartElemArray.push(data.Id);
  localStorage.setItem('cart', JSON.stringify(cartElemArray));
 $state.reload();
}
else {
  var obj = JSON.parse(localStorage.getItem('cart'));
  // console.log(obj.length);
  obj.push(data.Id);
  localStorage.setItem('cart',JSON.stringify(obj));
  $state.reload();
}

 }
 $scope.backPage = function() {
   $state.go('home.dashboard');

 }

}]);
