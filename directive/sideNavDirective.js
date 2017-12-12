app.directive('nav', navDirective);
         function navDirective() {
             return {

                 restrict: 'EA',

                 templateUrl: 'template/sideNav.html'
             };


         }
