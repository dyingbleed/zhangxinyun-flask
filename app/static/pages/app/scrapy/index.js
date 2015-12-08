define(function(require) {
    var angular = require('angular');

    var scrapy = angular.module('scrapy', ['ngRoute']);

    scrapy.config(function($routeProvider) {
    	$routeProvider.when('/scrapy', {
    		template: require("text!pages/app/scrapy/index.html")
    	});
    })

    return scrapy;
});
