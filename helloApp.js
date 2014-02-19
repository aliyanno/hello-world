// Creates a module within the global scope to control angular app
var helloApp = angular.module('helloApp', []);

// Creates controller named greetingController
// Within the DOM tag scope, in this case <body>, this controller
// and its attributes exist.
// The function initially has Hello World and changes depending on input
helloApp.controller('greetingController', ['$scope', function($scope) {
	$scope.name = "World";

	$scope.inputName = function(arg) {
		$scope.name = arg;	
	}
}]);


