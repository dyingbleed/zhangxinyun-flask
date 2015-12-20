define(function(require) {
	var modules = require('modules');

	var process = modules.get('process');
	process.config(function($routeProvider) {
		$routeProvider.when('/process', {
			template: require("text!pages/app/process/controller/driver.html"),
			controller: function($scope, $http, $location) {
				$scope.connect = function() {
					console.log($scope.driver);
				};
			}
		});
	});
});