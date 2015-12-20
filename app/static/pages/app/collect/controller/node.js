define(function(require) {
	var modules = require('modules');

	var collect = modules.get('collect');
	collect.config(function($routeProvider) {
		$routeProvider.when('/collect/node', {
			template: require("text!pages/app/collect/controller/node.html"),
			controller: function($scope, $http, $location, node) {
				$scope.addNode = function() {
					$location.path('/collect/node/add');
				};

				var refresh = $scope.refresh = function() {
					node.query().then(function(resp) {
						$scope.nodes = resp.data;
					});
				}

				refresh();
			}
		});
	});
});