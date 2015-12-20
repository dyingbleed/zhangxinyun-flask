define(function(require) {
	var modules = require('modules');

	var collect = modules.get('collect');
	collect.config(function($routeProvider) {
		$routeProvider.when('/collect/node/add', {
			template: require("text!pages/app/collect/controller/nodeEditor.html"),
			controller: function($scope, $http, $location, node) {
				$scope.save = function() {
					node.save($scope.node).then(function() {
						$location.path('/collect/node');
					}, function(error) {
						//TODO
					});
				};

				$scope.cancel = function() {
					$location.path('/collect/node');
				};
			}
		});
	});
});