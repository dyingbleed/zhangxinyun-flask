requirejs.config({
    baseUrl: "static",
    paths: {
        zhangxinyun: "pages/index",
        modules: "pages/utils/modules",

        text: "js/text",
        css: "js/css",

        angular: "js/angular",
        "angular-route": "js/angular-route",

        jquery: "js/jquery-2.1.4",
        lodash: "js/lodash",

        "bootstrap-tooltip": "js/bootstrap",

        highcharts: "js/highcharts"
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        "angular-route": ["angular"],

        "bootstrap-tooltip": {
            deps: ['jquery'],
            exports: '$.fn.tooltip'
        },

        highcharts: {
            deps: ['jquery'],
            exports: "$.fn.highcharts"
        }
    },
    waitSeconds: 60
});