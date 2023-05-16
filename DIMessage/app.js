(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope', '$filter'];
  function MsgController ($scope, $filter) {
      $scope.message = "message";
      $scope.upper = function () {
          var upCase = $filter('uppercase');
          $scope.message = upCase($scope.message);
      };
      $scope.sayMessage = function () {
        return 'Kush likes to eat snacks';
      }
  }
})();