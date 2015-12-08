define(function(require) {
    var angular = require('angular');
    
    require('angular-route');

    var zhangxinyun = angular.module('zhangxinyun', ['ngRoute']);

    zhangxinyun.init = function() {
    	require("pages/app/scrapy/index");

        angular.bootstrap(document, ['zhangxinyun', 'scrapy']);
    }

    return zhangxinyun;
});
