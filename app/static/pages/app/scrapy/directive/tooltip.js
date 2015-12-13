define(function(require) {
	require('bootstrap-tooltip');
	
	var modules = require('modules');

	var scrapy = modules.get('scrapy');
	scrapy.directive('zxyTooltip', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				$(element).tooltip();
			}
		};
	});
});