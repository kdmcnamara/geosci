angular.module('geoSci') // No new module
.controller('mainCtrl', function($scope) {
	$scope.hello = function() {
		console.log("Hi!");
	}
})