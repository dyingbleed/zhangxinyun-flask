define(function(require) {
	var angular = require('angular');
	require('angular-route');
	var modules = require('modules');

	var collect = modules.get('collect', ['ngRoute']);

	// 加载 Node 服务
	require('pages/app/collect/service/task');
	require('pages/app/collect/service/node');

	// 加载 Tooltip 指令
	require('pages/app/collect/directive/tooltip');

	// 加载任务页面
	require('pages/app/collect/controller/task');
	require('pages/app/collect/controller/taskEditor');

	// 加载节点页面
	require('pages/app/collect/controller/node');
	require('pages/app/collect/controller/nodeEditor');

	return collect;
});
