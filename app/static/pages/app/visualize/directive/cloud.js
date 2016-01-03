define(function(require) {
	var d3 = require('d3');
	require('d3-layout-cloud');
	
	var modules = require('modules');

	var visualize = modules.get('visualize');
	visualize.directive('zxyCloud', function() {
		return {
			restrict: 'A',
			scope: {
				data: '='
			},
			link: function(scope, element, attrs) {
				var width = element.width();
				width = !!width ? width : 500;
				var height = element.height();
				height = !! height ? height : 500;

				var fill = d3.scale.category20();

				var layout = d3.layout.cloud();
				layout.words(scope.data)
					.timeInterval(10)
					.size([width, height])
					.padding(5)
					.rotate(function() { return 0; })
					.fontSize(function(i) { return i['size'] })
					.on('end', draw);

				layout.start();

				function draw(words) {
					d3.select(element.get(0))
						.append('svg')
						.attr('width', width)
						.attr('height', height)
						.append('g')
						.attr('transform', function() {
							return "translate(" + width / 2 + "," + height / 2 + ")"
						}) 
						.selectAll('text')
						.data(words)
						.enter()
						.append('text')
						.style('font-size', function(word) { return word.size + 'px'; })
						.style('fill', function(word, i) { return fill(i); })
						.attr('text-anchor', 'middle')
						.attr('transform', function(word) {
							return "translate(" + [word.x, word.y] + ")"
						})
						.text(function(word) { return word.text })
				}
			}
		};
	});
});