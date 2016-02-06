Vue.config.delimiters = ['${', '}'];

var datasourceForm = new Vue({
	el: '#datasource-form',
	data: {
		spiders: [],
		datasource: []
	},
	methods: {
		submit: function() {
			debugger;
		},
		refresh: function(spider) {
			alert(spider);
		}
	}
});

$.getJSON('/api/spiders', function(data) {
	datasourceForm.$set('spiders', data);
});