requirejs.config({
    baseUrl: "static",
    paths: {
        zhangxinyun: "pages/index",

        text: "js/text",

        angular: "js/angular",
        "angular-route": "js/angular-route",

        jquery: "js/jquery-2.1.4",
        bootstrap: "js/bootstrap",

        highcharts: "js/highcharts"
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        "angular-route": ["angular"],
        highcharts: {
            deps: ['jquery'],
            exports: "$.fn.highcharts"
        }
    },
    waitSeconds: 60
});