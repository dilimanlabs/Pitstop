var app = angular.module('App');

app.controller('MainBusinessesCntrlr', ['$scope', '$window', '$http', '$modal', '$state',
    function($scope, $window, $http, $modal, $state) {

        $scope.businesses = {};
        $scope.businessesCursor = null;

        $scope.createBusiness = function() {
            var modalInstance = $modal.open({
                templateUrl: 'BusinessModal.html',
                controller: 'CreateBusinessModalInstanceCtrlr',
                backdrop: 'static',
                size: ''
            });

            modalInstance.result.then(function(business) {
                $scope.businesses[business.url] = business;
            }, function() {

            });
        };

        var getBusinesses = function(url) {
            $http({
                    method: 'GET',
                    url: url
                })
                .success(function(data, status, headers, config) {
                    data.response.businesses.forEach(function(business) {
                        $scope.businesses[business.url] = business;
                    });

                    $scope.businessesCursor = data.meta.next_cursor;
                })
                .error(function(data, status, headers, config) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        }

        $scope.listBusinesses = function() {
            $scope.businesses = {};
            $scope.businessesCursor = null;

            getBusinesses('http://pitstop.dilimanlabs.com/admin/api/businesses/');
        };

        $scope.listMoreBusinesses = function() {
            if ($scope.businessesCursor !== null) {
                getBusinesses('http://pitstop.dilimanlabs.com/admin/api/businesses/' +
                    '?' + 'cursor=' + $scope.businessesCursor);
            }
        };

        $scope.onBusinessClick = function(obj) {
            var businessId = new RegExp('^.*/businesses/([a-zA-Z0-9]{11})/?$').exec(obj.url)[1];
            var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/';

            $state.go('business', {
                businessId: businessId
            });
        };

    }
]);

app.controller('CreateBusinessModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance',
    function($scope, $window, $http, $modalInstance) {
        $scope.business = {};
        $scope.business.adminUsers = [];

        $scope.create = function() {
            var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/';
            var data = {
                'business': {
                    'adminUsers': $scope.business.adminUsers,
                    'description': $scope.business.description,
                    'name': $scope.business.name,
                    'registeredName': $scope.business.registeredName
                }
            };

            $http({
                    method: 'POST',
                    url: url,
                    data: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .success(function(data, status, headers, config) {
                    var businessId = new RegExp('^.*/businesses/([a-zA-Z0-9]{11})/?$')
                        .exec(headers('Location'))[1];
                    var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId;

                    $http({
                            method: 'GET',
                            url: url
                        })
                        .success(function(data, status, headers, config) {
                            $modalInstance.close(data.response.business);
                        })
                        .error(function(data, status, headers, config) {
                            $window.alert(status + '\n' + JSON.stringify(data));
                        });
                })
                .error(function(data, status, headers, config) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }
]);
