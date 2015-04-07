"use strict";

angular.module('pitstopMapDirectives', [])
	.directive('estabCard', function () {
		return {
			restrict: 'E',
			templateUrl: 'estab-card.ptl.html'
		};
	})
	.directive('cardPage', function () {
		return {
			restrict: 'E',
			templateUrl: 'card-page.ptl.html'
		};
	});