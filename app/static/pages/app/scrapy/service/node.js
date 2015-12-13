define(function(require) {
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.factory('node', function($http) {
		var query = function(id) {
			var url = "/api/spider/nodes";
			if (!!id) {
				url = url + ':' + id;
			}

			return $http.get(url);
		}

		var save = function(node) {
			var url = "/api/spider/nodes";
			return $http.post(url, node);
		};

		return {
			query: query,
			save: save
		};
	});
});