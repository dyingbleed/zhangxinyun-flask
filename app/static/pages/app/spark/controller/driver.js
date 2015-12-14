define(function(require) {
	var modules = require('modules');

	var spark = modules.get('spark');
	spark.config(function($routeProvider) {
		$routeProvider.when('/spark', {
			template: require("text!pages/app/spark/controller/driver.html"),
			controller: function($scope, $http, $location) {
				$scope.connect = function() {
					console.log($scope.driver);
				};
			}
		});
	});
});