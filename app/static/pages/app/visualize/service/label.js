define(function(require) {
	var modules = require('modules');

	var visualize = modules.get('visualize');
	visualize.factory('label', function($http) {
		var query = function() {
			var url = "/api/labels";
			return $http.get(url);
		}

		return {
			query: query
		};
	});
});