app.controller('cartPageController', function($scope, myservices, $state) {

  var cartId = JSON.parse(localStorage.getItem('cart'));
  console.log(Array.isArray(cartId));
  //cartId.sort();
  console.log(cartId);
  console.log(cartId.length);
  var myObje;
  aryqunt = [];
  var current = null;
  var cnt = 0;
  for (var i = 0; i < cartId.length; i++) {
    if (cartId[i] != current) {
      if (cnt > 0) {
        // myObje={"mobId":current,
        //          "qun":cnt
        //          }

        aryqunt.push(current, cnt);
      }
      current = cartId[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  if (cnt > 0) {
    // myObje={"mobId":current,
    //          "qun":cnt
    //          }
    //console.log(myObje);
    aryqunt.push(current, cnt);
  }

  console.log(aryqunt);

  Arr2 = [],
    Arr3 = [];

  for (var i = 0; i < aryqunt.length; i++) {
    if ((i + 2) % 2 == 0) {
      Arr3.push(aryqunt[i]);
    } else {
      Arr2.push(aryqunt[i]);
    }
  }
  console.log(Arr3);


  var k = 0;

  var factary = myservices.mobileListary();
  var cartPageListary = [];
  var aryQuantity = [];
  for (var i = 0; i < factary.length; i++) {
    if (Arr3[k] == factary[i].Id) {
      cartPageListary.push(factary[i]);
      k++;
    }

  }
  //
  // for(var i=0;i<Arr3.length;i++){
  // if(Arr3.indexOf[i]==Arr2.indexOf[i]){
  // aryQuantity.push(Arr2[i])
  // }
  // }
  console.log(cartPageListary);
  //console.log(aryQuantity);
  $scope.mobileLists = cartPageListary;
  //$scope.quantity=aryQuantity;
  $scope.sample = ['1', '2', '3', '4', '5'];
  //console.log($scope.sample.length);
  var tot = 0;
  arrId = [];
  arrId1 = [];
  var k = 0;
  var i = 0;
var grandtotal=0;
  $scope.getselectval = function(id, data, price,index) {
    var sub=data*price;
    var tot=sub;
    $scope.mobileLists[index].productCost = sub;

$scope.total=$scope.mobileLists[index].productCost;

    console.log(tot,arrId);
  
   grandtotal +=$scope.mobileLists[index].productCost;
  $scope.grandTotal =grandtotal;
  }

});

//  $scope.calculateSum = function(data){
// var sum=0;
// var counter=0;
//  for (var property in data) {
//    if (data.hasOwnProperty(property)) {
//       sum += data[property];
//       counter++;
//    }
//  }
//  return sum;
// };
