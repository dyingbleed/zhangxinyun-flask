require(["domReady!", "jquery", "highcharts"], function(document, $, Highcharts) {
    $.when($.getJSON("data/test?cluster=0"), $.getJSON("data/test?cluster=1")).done(function(cluster0, cluster1) {
        $("#scatter").highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Infoq Article Clustering'
            },
            xAxis: {
            },
            yAxis: {
            },
            plotOptions: {
                 series: {
                     turboThreshold: 5000
                 },
                 scatter: {
                     marker: {
                         radius: 5,
                         states: {
                             hover: {
                                 enabled: true,
                                 lineColor: 'rgb(100, 100, 100)'
                             }
                         }
                     },
                     states: {
                         hover: {
                             marker: {
                                 enabled: false
                             }
                         }
                     },
                     tooltip: {
                         headerFormat: '<b>{series.title}<b><br>'
                     }
                 }
            },
            series: [{
                name: 'Cluster 1',
                color: 'rgba(223, 83, 83, .5)',
                data: cluster0[0]
            }, {
                name: 'Cluster 2',
                color: 'rgba(119, 152, 191, .5)',
                data: cluster1[0]
            }]
        });
    });
});
