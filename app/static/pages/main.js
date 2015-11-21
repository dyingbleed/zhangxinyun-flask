requirejs.config({
    baseUrl: "static/js",
    paths: {
        domReady: "domReady",
        jquery: "jquery-2.1.4",
        bootstrap: "bootstrap",
        highcharts: "highcharts",
        pages: "../pages"
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        highcharts: {
            deps: ['jquery'],
            exports: "$.fn.highcharts"
        }
    }
});

require(["bootstrap", "pages/index"], function() {
});
