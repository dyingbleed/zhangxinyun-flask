define(function(require) {
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy/task/add', {
			template: require("text!pages/app/scrapy/controller/taskEditor.html"),
			controller: function($scope, $http, $location) {
				$scope.save = function() {
					$http.post("/api/spider/tasks", $scope.task).then(function() {
						$location.path('/scrapy');
					}, function(error) {
						//TODO
					});
				};

				$scope.cancel = function() {
					$location.path('/scrapy');
				};
			}
		});
	});
});