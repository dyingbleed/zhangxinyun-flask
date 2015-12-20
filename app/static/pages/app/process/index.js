define(function(require) {
	var angular = require('angular');
	require('angular-route');
	var modules = require('modules');

	var process = modules.get('process', ['ngRoute']);

	// 加载任务页面
	require('pages/app/process/controller/driver');

	return process;
});
