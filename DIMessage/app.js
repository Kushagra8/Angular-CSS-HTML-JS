(function () {
  'use strict';

  angular.module('MsgApp', [])
  .controller('MsgController', MsgController);
  
  MsgController.$inject = ['$scope', '$filter'];
  function MsgController ($scope, $filter) {
      $scope.name = "Kush";
      $scope.upper = function () {
          var upCase = $filter('uppercase');
          $scope.name = upCase($scope.name);
      };
  }
})();