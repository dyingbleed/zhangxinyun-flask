define(function(require) {
	var modules = require('modules');

	var visualize = modules.get('visualize');
	visualize.config(function($routeProvider) {
		$routeProvider.when('/visualize', {
			template: require("text!pages/app/visualize/controller/vis.html"),
			controller: function($scope, label) {
				label.query().then(function(response) {
					$scope.data = response.data;
				});
			}
		});
	});
});