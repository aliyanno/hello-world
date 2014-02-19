var helloApp = angular.module('helloApp', []);

// function greetingController(name) {
// 	if (!name) {
// 		return "World";
// 	} else {
// 		var lowName = name.toString().toLowerCase();
// 		return lowName.charAt(0).toUpperCase() + lowName.slice(1);
// 	}
// }	

// function greetingController($scope) {
// 	//$scope.name = "World";
// }

helloApp.controller('greetingController', ['$scope', function($scope) {
	$scope.name = "World";

	$scope.inputName = function(arg) {
		$scope.name = arg;	
	}
}]);


