define(function(require) {
	var modules = require('modules');

	var visualize = modules.get('visualize');
	visualize.config(function($routeProvider) {
		$routeProvider.when('/visualize', {
			template: require("text!pages/app/visualize/controller/vis.html"),
			controller: function($scope) {
				$scope.data = ["Baidu", "Alibaba", "Tencent"].map(function(d) {
					return {text: d, size: 10 + Math.random() * 90};
				})
			}
		});
	});
});