'use strict';

var app = angular.module('App', ['ui.bootstrap', 'ui.router', 'flow', 'checklist-model']);

app.controller('MainCntrlr', ['$scope', '$window', 'Navigation',
    function($scope, $window, Navigation) {
        $scope.Navigation = Navigation;

        var a = function() {
            $scope.Navigation.push({
                name: 'Businesses',
                value: 'businesses'
            });
        };

        a();
    }
]);

app.filter('object2Array', function() {
    return function(input) {
        var out = [];
        var i;
        for (i in input) {
            out.push(input[i]);
        }
        return out;
    };
});

app.factory('Navigation', function() {
    return [];
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'main.ptl.html',
            controller: 'MainCntrlr'
        })
        .state('main.businesses', {
            url: '/businesses',
            templateUrl: 'main.businesses.ptl.html',
            controller: 'MainBusinessesCntrlr'
        })
        .state('main.categories', {
            url: '/categories',
            templateUrl: 'main.categories.ptl.html',
            controller: 'MainCategoriesCntrlr'
        })
        .state('business', {
            url: '/businesses/:businessId',
            templateUrl: 'business.ptl.html',
            resolve: {
                businessId: function($stateParams) {
                    return $stateParams.businessId;
                },
                business: function($stateParams, $http) {
                    return $http({
                            method: 'GET',
                            url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + $stateParams.businessId
                        })
                        .then(function(result) {
                            return result.data.response.business;
                        });
                },
                images: function($stateParams, $http) {
                    return $http({
                            method: 'GET',
                            url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + $stateParams.businessId + '/images/'
                        })
                        .then(function(result) {
                            return result.data.response.images;
                        });
                }
            },
            controller: 'BusinessCntrlr'
        })
        .state('business.products', {
            url: '/products',
            templateUrl: 'business.products.ptl.html',
            controller: 'BusinessProductsCntrlr'
        })
        .state('business.pages', {
            url: '/pages',
            templateUrl: 'business.pages.ptl.html',
            controller: 'BusinessPagesCntrlr'
        })
        .state('business.establishments', {
            url: '/establishments',
            templateUrl: 'business.establishments.ptl.html',
            controller: 'BusinessEstablishmentsCntrlr'
        });
});
