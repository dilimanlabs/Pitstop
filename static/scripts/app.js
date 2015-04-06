'use strict';

/**
 * PitstopMapApp module
 */

angular.module('pitstopMapApp', ['ngRoute', 'pitstopMapControllers', 'pitstopMapServices', 'pitstopMapDirectives'])
    .config(['$routeProvider',
    	// used for routing inside the webappp
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: "index.ptl.html",
                    controller: "IndexController"
                })
                .otherwise({
                    redirectTo : "/"
                });
        }]);