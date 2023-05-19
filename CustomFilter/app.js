(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope', '$filter'];
  function MsgController ($scope, $filter) {
    $scope.name = "Kush";
    $scope.sayMessage = function () {
      var msg = "I like to eat snacks";
      var output = $filter('uppercase')(msg);
      return output;
    }
    $scope.hungerState = "hungry";
    $scope.cookieCost = .45;
    $scope.feedDog = function() {
      $scope.hungerState = "notHungry";
    }
  };
  
})();