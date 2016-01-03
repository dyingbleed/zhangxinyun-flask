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

        d3: "js/d3",
        "d3-layout-cloud": "js/d3.layout.cloud",

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

        "d3-layout-cloud": {
            deps: ['d3'],
            exports: 'd3.layout.cloud'
        },

        highcharts: {
            deps: ['jquery'],
            exports: "$.fn.highcharts"
        }
    },
    waitSeconds: 60
});