define(function(require) {
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy/node/add', {
			template: require("text!pages/app/scrapy/controller/nodeEditor.html"),
			controller: function($scope, $http, $location, node) {
				$scope.save = function() {
					node.save($scope.node).then(function() {
						$location.path('/scrapy/node');
					}, function(error) {
						//TODO
					});
				};

				$scope.cancel = function() {
					$location.path('/scrapy/node');
				};
			}
		});
	});
});