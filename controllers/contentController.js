app.controller('contentController', ['$scope', 'myservices',function($scope, myservices) {


var ary = myservices.getary();
$scope.mobileLists = ary;





}]);
