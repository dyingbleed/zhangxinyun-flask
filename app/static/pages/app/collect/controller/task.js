define(function(require) {
	var modules = require('modules');

	var collect = modules.get('collect');
	collect.config(function($routeProvider) {
		$routeProvider.when('/collect', {
			template: require("text!pages/app/collect/controller/task.html"),
			controller: function($scope, $http, $location, task) {
				$scope.addTask = function() {
					$location.path('/collect/task/add');
				};

				$scope.manageNode = function() {
					$location.path('/collect/node');
				};

				var refresh = $scope.refresh = function() {
					task.query().then(function(resp) {
						$scope.tasks = resp.data;
					});
				};

				refresh();
			}
		});
	});
});