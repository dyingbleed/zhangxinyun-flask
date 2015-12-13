define(function(require) {
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy', {
			template: require("text!pages/app/scrapy/controller/task.html"),
			controller: function($scope, $http, $location) {
				$scope.addTask = function() {
					$location.path('/scrapy/task/add');
				};

				$scope.manageNode = function() {
					$location.path('/scrapy/node');
				};

				var refresh = $scope.refresh = function() {
					$http.get("/api/spider/tasks").then(function(resp) {
						$scope.tasks = resp.data;
					});
				};

				refresh();
			}
		});
	});
});