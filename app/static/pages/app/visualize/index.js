define(function(require) {
	var angular = require('angular');
	require('angular-route');
	var modules = require('modules');

	var visualize = modules.get('visualize', ['ngRoute']);

	// 加载任务页面
	require('pages/app/visualize/controller/vis');

	return visualize;
});
