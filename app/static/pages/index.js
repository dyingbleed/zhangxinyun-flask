define(function(require) {
	var angular = require('angular');
    require('angular-route');
    var modules = require('modules');

    var zhangxinyun = modules.get('zhangxinyun', ['ngRoute']);

    modules.link(zhangxinyun);

    zhangxinyun.init = function() {
    	require("pages/app/scrapy/index");
        require("pages/app/spark/index");

        angular.bootstrap(document, ['zhangxinyun', 'scrapy', 'spark']);
    }

    return zhangxinyun;
});
