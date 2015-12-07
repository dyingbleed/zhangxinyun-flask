requirejs.config({
    baseUrl: "static/js",
    paths: {
        zhangxinyun: "../pages/index",

        angular: "angular",
        jquery: "jquery-2.1.4",
        bootstrap: "bootstrap",
        highcharts: "highcharts"
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        highcharts: {
            deps: ['jquery'],
            exports: "$.fn.highcharts"
        }
    },
    waitSeconds: 60
});