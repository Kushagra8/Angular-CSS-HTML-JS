(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope', '$filter'];
  function MsgController ($scope, $filter) {
      $scope.message = "Hi";
      $scope.hungerState = "hungry";
      $scope.upper = function () {
          var upCase = $filter('uppercase');
          $scope.message = upCase($scope.message);}
      $scope.sayMessage = function () {
        return 'Kush likes to eat snacks';}
      $scope.feedDog = function() {
        $scope.hungerState = "notHungry";
      }
  };
  
})();