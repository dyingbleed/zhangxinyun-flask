define(function(require) {
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy/node', {
			template: require("text!pages/app/scrapy/controller/node.html"),
			controller: function($scope, $http, $location) {
				$scope.addNode = function() {
					$location.path('/scrapy/node/add');
				};

				var refresh = $scope.refresh = function() {
					$http.get("/api/spider/nodes").then(function(resp) {
						$scope.nodes = resp.data;
					});
				}

				refresh();
			}
		});
	});
});