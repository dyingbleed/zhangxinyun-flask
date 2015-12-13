define(function(require) {
	var $ = require('jquery');
	require('bootstrap');
	var angular = require('angular');

	var scrapy = angular.module('scrapy', ['ngRoute']);

	scrapy.directive('tooltip', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				$(element).tooltip();
			}
		};
	});

	scrapy.config(function($routeProvider) {
		$routeProvider.when('/scrapy', {
			template: require("text!pages/app/scrapy/index.html"),
			controller: function($scope, $http, $location) {
				$scope.addTask = function() {
					$location.path('/scrapy/task/add');
				};

				$scope.manageNode = function() {
					$location.path('/scrapy/node');
				};

				var refresh = $scope.refresh = function() {
					$http.get("/api/spider/tasks").then(function(resp) {
						$scope.tasks = resp.data;
					});
				};

				refresh();
			}
		});

		$routeProvider.when('/scrapy/task/add', {
			template: require("text!pages/app/scrapy/taskEditor.html"),
			controller: function($scope, $http, $location) {
				$scope.save = function() {
					$http.post("/api/spider/tasks", $scope.task).then(function() {
						$location.path('/scrapy');
					}, function(error) {
						//TODO
					});
				};

				$scope.cancel = function() {
					$location.path('/scrapy');
				};
			}
		});

		$routeProvider.when('/scrapy/node', {
			template: require("text!pages/app/scrapy/node.html"),
			controller: function($scope, $http, $location) {
				$scope.addNode = function() {
					$location.path('/scrapy/node/add');
				};

				var refresh = $scope.refresh = function() {
					$http.get("/api/spider/nodes").then(function(resp) {
						$scope.nodes = resp.data;
					});
				}

				refresh();
			}
		});

		$routeProvider.when('/scrapy/node/add', {
			template: require("text!pages/app/scrapy/nodeEditor.html"),
			controller: function($scope, $http, $location) {
				$scope.save = function() {
					$http.post("/api/spider/nodes", $scope.node).then(function() {
						$location.path('/scrapy/node');
					}, function(error) {
						//TODO
					});
				};

				$scope.cancel = function() {
					$location.path('/scrapy/node');
				};
			}
		});
	});

	return scrapy;
});
