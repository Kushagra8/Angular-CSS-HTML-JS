(function () {
  'use strict';

  //shoppingList1 is an array with 8 elements
  var shoppingList1 = [
    "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
    "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"];
    
  // shoppngList2 has 4 objects
  var shoppingList2 = [
    { name: "Milk", quantity: "2" },
    { name: "Donuts", quantity: "200" },
    { name: "Cookies", quantity: "300" },
    { name: "Chocolate", quantity: "5" }];

  angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];

  function ShoppingListController($scope){
    $scope.shoppingList1 = shoppingList1;
    $scope.shoppingList2 = shoppingList1;
  }
}) ();