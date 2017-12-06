// app.controller("viewController",function($scope,$stateParams){
//
// console.log($stateParams);
//
// });
app.controller('viewController',['$scope','$stateParams','myservices',function($scope,$stateParams,myservices){

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



  //console.log($scope.driverList);
}]);
