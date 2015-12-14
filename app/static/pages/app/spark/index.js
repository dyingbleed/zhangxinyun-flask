define(function(require) {
	var angular = require('angular');
	require('angular-route');
	var modules = require('modules');

	var spark = modules.get('spark', ['ngRoute']);

	// 加载任务页面
	require('pages/app/spark/controller/driver');

	return spark;
});
