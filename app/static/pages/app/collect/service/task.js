define(function(require) {
	var modules = require('modules');

	var collect = modules.get('collect');
	collect.factory('task', function($http) {
		var query = function(id) {
			var url = "/api/spider/tasks";
			if (!!id) {
				url = url + ':' + id;
			}

			return $http.get(url);
		}

		var save = function(task) {
			var url = "/api/spider/tasks";
			return $http.post(url, task);
		};

		return {
			query: query,
			save: save
		};
	});
});