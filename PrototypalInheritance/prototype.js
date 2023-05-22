(function () {
  'use strict';

  angular.module('PrototypalApp', []);
})();

//** Prototypal inheritance
var parent = {
  value: "parentValue",
  obj: {
    objValue: "parentObiValue"
  },
  walk: function () {
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent. value: ", parent.value);
console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);

console.log("parent: ", parent);
console.log("child: ", child);
child.value = "childValue";

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.Log("*** CHANGED: child.value = 'childvalue'");
console.log("**** CHANGED: child.obj.objValue = 'childObjvalue'");
console.log("CHILD - child. value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
console.log("PARENT - parent. value: ", parent.value); console.log("PARENT - parent.obj.objValue: ", parent.obj.objvalue);
console.log("parent: ", parent); console.log("child: ", child);