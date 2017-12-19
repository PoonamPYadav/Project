//var app=angular.module('loginApp', []);
app.controller('homeController', ['$scope', 'myservices', '$state', '$mdSidenav', function($scope, myservices, $state, $mdSidenav) {
  $scope.firstRate = 0;
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

  // $scope.useMakes = [];
  //
  //   $scope.filterMakes = function () {
  //       return function (p) {
  //           for (var i in $scope.useMakes) {
  //               if (p.name == $scope.group[i] && $scope.useMakes[i]) {
  //                   return true;
  //               }
  //           }
  //       };
  //   };
  //



  arr = [];
  var k = 0;

  $scope.check = function(data) { //  console.log(data);
    if (data.checked == true) {

      // var mySet = new Set();
      // mySet.add(data.name);
      arr[k] = data.name;
      k++;

      arr.join();

      arr.forEach(function(element) {
        $scope.itemType = element;
      });

      console.log(arr);
    } else {
      $scope.itemType = ' ';
    }


  }


  $scope.checks = function(data) {
    if (data.checked == true) {
      $scope.itemsType = data.name;
    } else {
      $scope.itemsType = ' ';
    }
  }
  $scope.checkBrand = function(data) {
    if (data.checked == true) {
      $scope.itemBrandType = data.name;
    } else {
      $scope.itemBrandType = ' ';
    }
  }

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

app.filter('filterSelectBrand', function() {

  return function(items) {

    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      filtered.push(item);
    }
    return filtered;
    console.log(filtered);
  }

})

// var uniqueItems = function (data, key) {
//     var result = new Array();
//     for (var i = 0; i < data.length; i++) {
//         var value = data[i][key];
//
//         if (result.indexOf(value) == -1) {
//             result.push(value);
//         }
//
//     }
//     return result;
// };
// app.filter('groupBy',
//             function () {
//                 return function (collection, key) {
//                     if (collection === null) return;
//                     //return uniqueItems(collection, key);
//         };
//     });
