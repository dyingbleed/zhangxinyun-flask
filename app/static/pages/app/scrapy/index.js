define(function(require) {
	var angular = require('angular');
	require('angular-route');
	var modules = require('modules');

	var scrapy = modules.get('scrapy', ['ngRoute']);

	// 加载 Node 服务
	require('pages/app/scrapy/service/task');
	require('pages/app/scrapy/service/node');

	// 加载 Tooltip 指令
	require('pages/app/scrapy/directive/tooltip');

	// 加载任务页面
	require('pages/app/scrapy/controller/task');
	require('pages/app/scrapy/controller/taskEditor');

	// 加载节点页面
	require('pages/app/scrapy/controller/node');
	require('pages/app/scrapy/controller/nodeEditor');

	return scrapy;
});
