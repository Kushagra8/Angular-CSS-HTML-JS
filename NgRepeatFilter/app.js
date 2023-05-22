(function () {
  'use strict';

  angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];

}) ();