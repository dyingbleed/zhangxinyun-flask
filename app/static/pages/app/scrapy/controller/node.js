define(function(require) {
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy/node', {
			template: require("text!pages/app/scrapy/controller/node.html"),
			controller: function($scope, $http, $location, node) {
				$scope.addNode = function() {
					$location.path('/scrapy/node/add');
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