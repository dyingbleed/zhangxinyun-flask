define(function(require) {
	var modules = require('modules');

	var collect = modules.get('collect');
	collect.config(function($routeProvider) {
		$routeProvider.when('/collect/task/add', {
			template: require("text!pages/app/collect/controller/taskEditor.html"),
			controller: function($scope, $http, $location, task, node) {
				$scope.save = function() {
					task.save($scope.task).then(function() {
						$location.path('/collect');
					}, function(error) {
						//TODO
					});
				};

				$scope.cancel = function() {
					$location.path('/collect');
				};

				node.query().then(function(resp) {
					$scope.nodes = resp.data;
				});
			}
		});
	});
});