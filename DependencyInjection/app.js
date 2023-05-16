(function () {
    'use strict';

    angular.module('DIApp', [])
    .controller('DIController', DIController);

    function DIController ($scope, $filter, $injector) {
        $scope.name="Kush";
        $scope.upper=function(){
            var upCase=$filter('uppercase');
            $scope.name=upCase($scope.name);
        };

        // gives array of args for DIController
        console.log($injector.annotate(DIController));
    }

    function AnnotateMe(name, job, blah){
        return "Blah!";
    }

     // prints entire functions
    console.log(AnnotateMe);
    console.log(DIController.toString());

}) ();