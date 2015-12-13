define(function(require) {
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy/task/add', {
			template: require("text!pages/app/scrapy/controller/taskEditor.html"),
			controller: function($scope, $http, $location, task, node) {
				$scope.save = function() {
					task.save($scope.task).then(function() {
						$location.path('/scrapy');
					}, function(error) {
						//TODO
					});
				};

				$scope.cancel = function() {
					$location.path('/scrapy');
				};

				node.query().then(function(resp) {
					$scope.nodes = resp.data;
				});
			}
		});
	});
});