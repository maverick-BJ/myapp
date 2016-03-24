

// var app = angular.module("myapp",[]);

// (function () {
// 	var FibonacciCalculate = function ($scope, $Log, $location) {
// 		$scope.testvar = "ASDFADSFADF"		
// 	}

// app.controller("FibonacciCalculate", ["$scope", "$log", FibonacciCalculate]);
// })();


angular.module('myapp', [])
  .controller('FibonacciCalculateCtrl', ['$scope',FibonacciCalculateCtrl]);


function FibonacciCalculateCtrl ($scope) {
	$scope.testvar = "JUSTTEST"
}