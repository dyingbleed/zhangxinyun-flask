define(function(require) {
	var angular = require('angular');

	var scrapy = angular.module('scrapy', ['ngRoute']);

	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy', {
			template: require("text!pages/app/scrapy/index.html"),
			controller: function($scope, $http) {
				$http.get("/api/spiders").then(function(resp) {
					$scope.spiders = resp.data;
				});
			}
		});

		$routeProvider.when('/scrapy/add', {
			template: require("text!pages/app/scrapy/editor.html"),
			controller: function($scope, $http) {
				$scope.save = function() {
					$http.post("/api/spiders", {
						name: $scope.name,
						host: $scope.host,
						port: $scope.port
					}).then(function() {
						alert("OK");
					}, function() {
						alert("Error");
					});
				};
			}
		});

		$routeProvider.when('/scrapy/update/:id', {
			template: require("text!pages/app/scrapy/editor.html")
		});
	});

	return scrapy;
});
