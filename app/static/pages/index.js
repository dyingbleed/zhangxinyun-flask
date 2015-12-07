define(function(require) {
    var angular = require('angular');

    var zhangxinyun = angular.module('zhangxinyun', []);

    zhangxinyun.init = function() {
        angular.bootstrap(document, ['zhangxinyun']);
    }

    return zhangxinyun;
});
