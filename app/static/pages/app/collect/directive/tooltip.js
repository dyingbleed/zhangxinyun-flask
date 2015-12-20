define(function(require) {
	require('bootstrap-tooltip');
	
	var modules = require('modules');

	var collect = modules.get('collect');
	collect.directive('zxyTooltip', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				$(element).tooltip();
			}
		};
	});
});