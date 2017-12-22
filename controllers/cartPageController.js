app.controller('cartPageController', function($scope, myservices, $state) {


var cartInfo = JSON.parse(localStorage.getItem('cart'));
console.log(cartInfo);
var k = 0;
var factary = myservices.mobileListary();
var cartPageListary = [];
for (var i = 0; i < factary.length; i++) {
  if (cartInfo[k] == null) {
    break;
  }
  if (cartInfo[k].product_id == factary[i].Id) {
    cartPageListary.push(factary[i]);
    k++;
  }
}

      arrnum=[];
      for (var i = 1; i <=10; i++) {
        arrnum[i]=i;
      }
      $scope.sample = arrnum;
      $scope.mobileLists = cartPageListary;

      $scope.getselectval = function(productId, quantity,price,index) {
      //  console.log(sub);
          //var qunt=parseInt(data);
      //  console.log(productId + ' ' + quantity );
      var sub = quantity * price;
      $scope.mobileLists[index].productCost = sub;
        for (var i = 0; i < cartInfo.length; i++) {
          if (cartInfo[i].product_id == productId){
            cartInfo[i].quantity = quantity;
          }//$state.reload();
          }
            //$state.reload();
        localStorage.setItem('cart', JSON.stringify(cartInfo));
console.log($scope.mobileLists[index].productCost );
      }

      $scope.quantityTotal=function(){
        var totalQunt=0;
        for (var i = 0; i < cartInfo.length; i++) {
            totalQunt +=cartInfo[i].quantity*1;
        }
        return totalQunt;
        //console.log(totalQunt);
        }

$scope.grandTotal=function(){
var totalCost=0;
for (var i = 0; i < cartInfo.length; i++) {
  for (var j = 0; j < factary.length; j++) {
  if(  factary[j].Id==  cartInfo[i].product_id){

    totalCost +=cartInfo[i].quantity*factary[j].price;
  }
  }
}
return totalCost;
console.log(totalCost);
}



      $scope.backToPage = function() {
            $state.go('home.dashboard');
          }

});














//       var tot = 0;
//       $scope.getselectval = function(id, data, price, index) {
//         var sub = data * price;
//         var qunt=parseInt(data);
//         //var tot = sub;
//         //pro=[];
//         $scope.mobileLists[index].productCost = sub;
//           //console.log(data);
//             cartElemArray=[];
//             if(localStorage.getItem('proqunt') == null) {
//                 cartElemArray.push({product_id:id, quantity:1,prices:(1*price)});
//                 localStorage.setItem('proqunt', JSON.stringify(cartElemArray));
//                 $state.reload();
//               }
//             else {
//               //  var obj = JSON.parse(localStorage.getItem('proqunt'));  //string to object conversion
//                 // console.log(obj);
//                 for (var i = 0; i < cartId.length; i++) {
//                       if (cartId[i].product_id == productId)
//                         cartId[i].quantity = quantity;
//                     }
//                 //obj.push({product_id:id, quantity:qunt,prices:$scope.mobileLists[index].productCost});
//                 localStorage.setItem('proqunt',JSON.stringify(cartId));  //Convert a JavaScript object into a string with JSON.stringify()
//                 $state.reload();
//               }
//               // prodcost.push({index: $scope.mobileLists[index].Id, cost: $scope.mobileLists[index].productCost});
//               //   console.log(pro);
//               }
// // var prod=JSON.parse(localStorage.getItem('proqunt'));
// // console.log(prod);
// // var total=0;
// //
// // arr=[];
// // for (var i = 0; i < prod.length; i++) {
// //   if(cartId[k]==prod.product_id){
// //   arr[i]=prod.lastIndexOf(prod.product_id)}
// //   k++;
// // }
// // console.log(arr);
// // for (var i = 0; i < prod.length; i++) {
// //   if (cartId[k]==prod[i].product_id) {
// //     if (prod.lastIndexOf(prod.product_id)) {
// //       total+=prod[i].prices;
// //     }
// //     k++;
//
// //   }
// // }
// //console.log(total);
//

// $scope.grandTotal = function() {
//     var totalCost = 0;
//     for (var i = 0; i < cartInfo.length; i++) {
//       for (var j = 0; j < factary.length; j++) {
//         if (factary[j].Id == cartInfo[i].product_id) {
//           totalCost += cartInfo[i].quantity * factary[j].price;
//         }
//       }
//     }
//     return totalCost;
//   }
//
//
//     // $scope.grandTotal = function(list) {
    //   var totalCost = 0;
    //   // for (var i = 0; i < cartInfo.length; i++) {
    //   //   for (var j = 0; j < factary.length; j++) {
    //   //     if (factary[j].Id == cartInfo[i].product_id) {
    //   //       totalCost += cartInfo[i].quantity * factary[j].price;
    //   //     }
    //   //   }
    //   // }
    //
    //   angular.foreach(list,function(item){
    //
    //     totalCost +=parseInt(item.productCost);
    //   })
    //   return totalCost;
    // }


    //    grandtotal +=$scope.mobileLists[index].productCost;
    //   $scope.grandTotal =grandtotal;
    //   }
    // $scope.grandTotal=function(){
    //   var totl=0;
    //   angular.forEach($scope.mobileLists.productCost,)
    // }


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
