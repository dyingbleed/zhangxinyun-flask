/*
 * 界定符
 */
Vue.config.delimiters = ['${', '}'];

/*
 * 标签云
 */
Vue.directive('word-cloud', {
	params: ['words'],
	paramWatchers: {
		words: function(val, oldVal) {
			var fill = d3.scale.category20();

			var layout = cloud()
				.size([$("#chart").width(), 500])
				.words(val)
				.padding(5)
				.rotate(function() { return 0; })
				.font("Impact")
				.fontSize(function(d) { return d.size; })
				.on("end", draw);
			layout.start();

			function draw(words) {
				d3.select("#chart")
					.html("")
					.append("svg")
					.attr("width", layout.size()[0])
					.attr("height", layout.size()[1])
					.append("g")
					.attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
					.selectAll("text")
					.data(words)
					.enter().append("text")
					.style("font-size", function(d) { return d.size + "px"; })
					.style("font-family", "Impact")
					.style("fill", function(d, i) { return fill(i); })
					.style("cursor", "pointer")
					.attr("text-anchor", "middle")
					.attr("transform", function(d) {
						return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
					})
					.text(function(d) { return d.text; })
					.on("click", function(d) {
						articles.$set('articles', d.articles);
					});
			}
		}
	}
});

/*
 * 数据源表单
 */
var datasourceForm = new Vue({
	el: '#form',
	data: {
		spiders: [],
		datasource: [],
		loading: false,
		loading_submit: '生成图表'
	},
	methods: {
		submit: function() {
			var datasource = this.$data.datasource;
			$.post('/api/spiders', JSON.stringify(datasource));

			datasourceForm.$set('loading', true);
			function polling() {
				$.getJSON('/api/spiders', function(data) {
					datasourceForm.$set('spiders', data);
				});

				if((function(spiders) {
					if(spiders && spiders.length > 0) {
						for(var i = 0; i < spiders.length; i++) {
							var spider = spiders[i];
							if(spider['status'] == 'finished') {
								$.getJSON('/api/labels', function(data) {
									chart.$set('words', data);
								});
								return false;
							}
						}
					}

					return true;
				})(datasourceForm.$data.spiders)) {
					setTimeout(polling, 1000);
				} else {
					datasourceForm.$set('loading', false);
				}
			}
			$.getJSON('/api/spiders', function(data) {
				datasourceForm.$set('spiders', data);
				setTimeout(polling, 1000);
			});
		}
	},
	watch: {
		'loading': function(loading) {
			if(loading) {
				this.$set('loading_submit', '正在生成...');
			} else {
				this.$set('loading_submit', '生成图表');
			}
		}
	}
});

/*
 * 特征词图表
 */
var chart = new Vue({
	el: '#chart',
	data: {
		words: []
	}
});

/*
 * 文章列表
 */
var articles = new Vue({
	el: '#articles',
	data: {
		articles: []
	}
});

$.getJSON('/api/spiders', function(data) {
	datasourceForm.$set('spiders', data);
});

$.getJSON('/api/labels', function(data) {
	chart.$set('words', data);
});

$.getJSON('/api/topics', function(data) {
	/*
	 * 散点图
	 */
	var topicBubble = $("#topicBubble").highcharts({
		chart: {
			type: "bubble"
		},
		title: {
			text: "文章 － 主题"
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: null
			}
		},
		plotOptions: {
			bubble: {
				events: {
					click: function(event) {
						$("#topicBar").highcharts().series[0].setData(event.point.terms)
					}
				}
			},
			series: {
				dataLabels: {
					enabled: true,
					format: "{point.name}"
				}
			}
		},
		series: [{
			data: data
		}]
	});

	/*
	 * 柱状图
	 */
	var topicBar = $("#topicBar").highcharts({
		chart: {
			type: "column",
			inverted: true
		},
		title: {
			text: "主题 － 词汇"
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false
		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			title: {
				text: null
			}
		},
		series: [{
			data: []
		}]
	});
});