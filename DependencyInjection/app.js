(function () {
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController);
    
    DIController.$inject = ['$scope', '$filter'];
    function DIController ($scope, $filter) {
        $scope.name = "Kush";
        $scope.upper = function () {
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };
    }
})();

// minification (removes extra characters to save space)
// !function () { "use strict"; function e(e, n) { e.name = "Kush", e.upper = function () { var o = n("uppercase"); e.name = o(e.name) } } angular.module("DIApp", []).controller("DIController", e), e.$inject = ["$scope", "$filter"] }();

// (function () {
//     'use strict';

//     angular.module('DIApp', [])
//     //.controller('DIController', ['$scope', '$filter', DIController]);
//     .controller('DIController', ['$scope', '$filter', function])

//     function DIController ($scope, $filter, $injector) {
//         $scope.name="Kush";
//         $scope.upper=function(){
//             var upCase=$filter('uppercase');
//             $scope.name=upCase($scope.name);
//         };

//         // // gives array of args for DIController
//         // console.log($injector.annotate(DIController));
//     }

//     // function AnnotateMe(name, job, blah){
//     //     return "Blah!";
//     // }

//     //  // prints entire functions
//     // console.log(AnnotateMe);
//     // console.log(DIController.toString());

// }) ();

// (function () {
//     'use strict';

//     angular.module('DIApp', [])
//     .controller('DIController', ['$scope', '$filter', function ($scope, $filter) {
//         $scope.name="Kush";
//         $scope.upper=function(){
//             var upCase=$filter('uppercase');
//             $scope.name=upCase($scope.name);
//         };
//     }]);
// }