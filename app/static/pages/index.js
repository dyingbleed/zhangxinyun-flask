define(function(require) {
	var angular = require('angular');
    require('angular-route');
    var modules = require('modules');

    var zhangxinyun = modules.get('zhangxinyun', ['ngRoute']);

    modules.link(zhangxinyun);

    zhangxinyun.init = function() {
    	require("pages/app/collect/index");
        require("pages/app/process/index");

        angular.bootstrap(document, ['zhangxinyun', 'collect', 'process']);
    }

    return zhangxinyun;
});
