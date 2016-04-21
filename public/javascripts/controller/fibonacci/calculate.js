

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
	// $scope.testvar = "JUSTTEST"

	//计算斐波那契额
	//返回数值 和计算时间
	$scope.calculate = function() {
		console.log($scope.calculateTimes);
		$.ajax({
			url: "calculate_fibonaci",
			data: {times:$scope.calculateTimes},
			type: "POST",
			success: function(ret) {
				// console.log("返回结果",ret);
				if(ret.success) {
					//解决异步页面不渲染
					$scope.$apply(function() {
						$scope.calculateResult = ret.result;
						$scope.calculateSuccess = true;
						$scope.calculateError = false;
					})
					
				}
				else {
					$scope.$apply(function() {
						$scope.calculateError = true;
						$scope.calculateSuccess = false;
					})
				}
			},
			error: function() {
				$scope.$apply(function() {
					$scope.calculateError = true;
					$scope.calculateSuccess = false;
				})
			}

		})

	}//calculate

	//初始化结果框
	$scope.initResult = function() {
		console.log("init");
		$scope.calculateError = false;
		$scope.calculateSuccess = false;
	}
	// $scope.$watch($scope.calculateTimes, function( ) {
	// 	    console.log('$scope.name was updated!');
	// 	    $scope.calculateError = false;
	// 			$scope.calculateSuccess = false;
	// });
}