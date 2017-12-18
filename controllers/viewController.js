app.controller('viewController',['$scope','$stateParams','myservices','$state',function($scope,$stateParams,myservices,$state){

  var ResultId = $stateParams.Id;
  var factary=myservices.mobileListary();
  var viewPageListary=[];
  for(var i=0;i<factary.length;i++)
  {
    if(ResultId==factary[i].Id)
    {
    viewPageListary.push(factary[i]);
    }
  }
  $scope.mobileLists=viewPageListary;

  $scope.addToCart=function(data){
    //console.log(data);
    cartElemArray=[];
    if(localStorage.getItem('cart') == null) {
        // cartElemArray.push(data);
        cartElemArray.push({product_id:data, quantity:1});
        localStorage.setItem('cart', JSON.stringify(cartElemArray));
        $state.reload();
      }
    else {
        var obj = JSON.parse(localStorage.getItem('cart'));  //string to object conversion
        // console.log(obj);
        obj.push({product_id:data, quantity:1});
        localStorage.setItem('cart',JSON.stringify(obj));  //Convert a JavaScript object into a string with JSON.stringify()
        $state.reload();
      }


    }

    $scope.backToPage = function() {
          $state.go('home.dashboard');
        }

}]);
