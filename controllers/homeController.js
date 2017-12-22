//var app=angular.module('loginApp', []);
app.controller('homeController', ['$scope', 'myservices', '$state', '$mdSidenav', function($scope, myservices, $state, $mdSidenav) {
  $scope.firstRate = 0;

    $scope.len=0;

      console.log($scope.len);
  var x = 0;
  $scope.toggleSidenav = function() {
    $mdSidenav('left-side-nav').toggle();
    if (x == 0) {
      {
        $scope.cardstyle = {
          'margin-left': '300px'
        };
      }
      x = 1;
    } else {
      {
        $scope.cardstyle = {
          'margin-left': '0px'
        };
      }
      x = 0;
    }
  };

  var mobileListgetary = myservices.mobileListary(); //load mobile list from services
  $scope.mobileLists = mobileListgetary;

  var mobileOSListgetary = myservices.osListary(); //load mobile OS list from services
  $scope.osList = mobileOSListgetary;

  var mobfeaturegetListary = myservices.mobfeatureListary(); //load mobile Featuers list from services
  $scope.featureList = mobfeaturegetListary;

  var mobileBrandListgetary = myservices.mobileBrandListary(); //load mobile Brand list from services
  $scope.brandList = mobileBrandListgetary;

  $scope.logout = function() {
    $state.go('login'); //goto login page after logout
  }






var arr=[];
  $scope.check = function(data) { //  console.log(data);
    if (data.checked == true) {
      if(arr.indexOf(data.name)==-1){
        arr.push(data.name);
      // arr[k]=data.name;
    }
    //  console.log(arr);
      }else {
         $scope.itemType = ' ';
         var index=arr.indexOf(data.name);
         if (index !== -1) {
           arr.splice(index, 1);

         }
         //console.log(arr);
       }
        $scope.itemType = arr;

    //  console.log($scope.itemType);
  }
  var arr1=[];
    $scope.checkBrand = function(data) {
        console.log(data);
      if (data.checked == true) {
        if(arr1.indexOf(data.name)==-1){
          arr1.push(data.name);

      }
          }else {
           $scope.itemBrandType = ' ';
           var index=arr1.indexOf(data.name);
           if (index !== -1) {
             arr1.splice(index, 1);

           }

         }
          $scope.itemBrandType = arr1;

       console.log($scope.itemBrandType);
    }

  $scope.checks = function(data) {
    if (data.checked == true) {
      $scope.itemsType = data.name;
    } else {
      $scope.itemsType = ' ';
    }
  }
  // $scope.checkBrand = function(data) {
  //   if (data.checked == true) {
  //     $scope.itemBrandType = data.name;
  //   } else {
  //     $scope.itemBrandType = ' ';
  //   }
  // }

  if (localStorage.getItem('cart') == null) {
    $scope.NoOfCartElements = 0;
  } else { //if(JSON.parse(localStorage.getItem('cart')).length >= 0 )

  var cartInfo=JSON.parse(localStorage.getItem('cart'));

    var totalQunt=0;
    for (var i = 0; i < cartInfo.length; i++) {
        totalQunt +=cartInfo[i].quantity*1;
    }
    //$state.reload();
        $scope.NoOfCartElements =  totalQunt;

    console.log(totalQunt);


  }


}]);

app.filter('selectedCustomerbrnd', function($filter) {

  return function(mobileListgetary , OSList) {
   console.log(mobileListgetary);
console.log(OSList);


     var temp = mobileListgetary.filter(function (data) {
      //console.log(data);
      if (OSList && OSList.length > 0 ) {
        return ((OSList.indexOf(data.os) > -1) || (OSList.indexOf(data.brand) > -1) );
      }
      return true;

     });return temp;



       //return temp;
       }
     });

// app.filter('selectedCustomerfet', function($filter) {
//     return function(mobileListgetary ,featList) {
//  var temp1 = mobileListgetary.filter(function (data) {
//   console.log(data);
//   if (featList && featList.length > 0 ) {
//     return (featList.indexOf(data.brand) > -1)
//   }
//   return true;
//
//  });
//  //return temp;
// return temp1;
// }
// });
