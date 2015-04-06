var app = angular.module('App');

app.controller('BusinessEstablishmentsCntrlr', ['$scope', '$window', '$http', '$modal', '$state', 'businessId',
    function($scope, $window, $http, $modal, $state, businessId) {

        $scope.establishments = {};
        $scope.establishmentsCursor = null;

        $scope.createEstablishment = function() {
            var modalInstance = $modal.open({
                templateUrl: 'EstablishmentModal.html',
                controller: 'CreateEstablishmentModalInstanceCtrlr',
                backdrop: 'static',
                size: '',
                resolve: {
                    categories: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/categories/?limit=100'
                            })
                            .then(function(result) {
                                result.data.response.categories.forEach(function(category) {
                                    category.id = new RegExp('^.*/categories/([a-zA-Z0-9]{11})/?$').exec(category.url)[1];
                                });

                                return result.data.response.categories;
                            });
                    },
                    businessId: function() {
                        return businessId;
                    },
                    businessImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    }
                }
            });

            modalInstance.result.then(function(establishment) {
                $scope.establishments[establishment.url] = establishment;
            }, function() {

            });
        };

        var getEstablishments = function(url) {
            $http({
                    method: 'GET',
                    url: url
                })
                .success(function(data, status, headers, config) {
                    data.response.establishments.forEach(function(establishment) {
                        $scope.establishments[establishment.url] = establishment;
                    });

                    $scope.establishmentsCursor = data.meta.next_cursor;
                })
                .error(function(data, status, headers, config) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        };

        $scope.listEstablishments = function() {
            $scope.establishments = {};
            $scope.establishmentsCursor = null;

            getEstablishments('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/');
        };

        $scope.listMoreEstablishments = function() {
            if ($scope.establishmentsCursor !== null) {
                getEstablishments('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + '?' + 'cursor=' + $scope.establishmentsCursor);
            }
        };

        $scope.onEstablishmentClick = function(obj) {
            var establishmentId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/establishments/([a-zA-Z0-9]{11})/?$')
                .exec(obj.url)[1];

            var modalInstance = $modal.open({
                templateUrl: 'EstablishmentModal.html',
                controller: 'EditEstablishmentModalInstanceCtrlr',
                backdrop: 'static',
                size: '',
                resolve: {
                    categories: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/categories/?limit=100'
                            })
                            .then(function(result) {
                                return result.data.response.categories;
                            });
                    },
                    businessId: function() {
                        return businessId;
                    },
                    establishmentId: function() {
                        return establishmentId;
                    },
                    establishment: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId
                            })
                            .then(function(result) {
                                return result.data.response.establishment;
                            });
                    },
                    businessImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    },
                    establishmentImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    }
                }
            });

            modalInstance.result.then(function(establishment) {
                $scope.establishments[establishment.url] = establishment;
            }, function() {

            });
        };

    }
]);

app.controller('CreateEstablishmentModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'categories', 'businessId', 'businessImages',
    function($scope, $window, $http, $modalInstance, categories, businessId, businessImages) {
        $scope.mode = 'CREATE';

        $scope.categories = categories;
        $scope.images = businessImages;

        $scope.establishment = {};

        $scope.onImageClick = function(image) {
            if ($scope.establishment.primaryImage === image.url) {
                $scope.establishment.primaryImage = '';
            } else {
                $scope.establishment.primaryImage = image.url;
            }
        };

        $scope.create = function() {
            var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/';
            var data = {
                'establishment': {
                    'categories': $scope.establishment.categories,
                    'contact': $scope.establishment.contact,
                    'location': $scope.establishment.location,
                    'name': $scope.establishment.name,
                    'primaryImage': $scope.establishment.primaryImage
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
                    var establishmentId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/establishments/([a-zA-Z0-9]{11})/?$').exec(headers('Location'))[1];
                    var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId;

                    $http({
                            method: 'GET',
                            url: url
                        })
                        .success(function(data, status, headers, config) {
                            $modalInstance.close(data.response.establishment);
                        })
                        .error(function(data, status, headers, config) {
                            $window.alert(status + '\n' + JSON.stringify(data));
                        });
                })
                .error(function(data, status, headers, confi) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }
]);

app.controller('EditEstablishmentModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'categories', 'businessId', 'establishmentId', 'establishment', 'businessImages', 'establishmentImages', function($scope, $window, $http, $modalInstance, categories, businessId, establishmentId, establishment, businessImages, establishmentImages) {
    $scope.mode = 'EDIT';

    $scope.categories = categories;
    $scope.establishment = establishment;
    $scope.images = businessImages.concat(establishmentImages);
    $scope.uploader = {};

    $scope.onImageClick = function(image) {
        if ($scope.establishment.primaryImage === image.url) {
            $scope.establishment.primaryImage = '';
        } else {
            $scope.establishment.primaryImage = image.url;
        }
    };

    $scope.upload = function() {
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId + '/images/';

        var formData = new FormData();
        formData.append('title', $scope.uploader.flow.files[0].name);
        formData.append('image', $scope.uploader.flow.files[0].file);

        $http({
                method: 'POST',
                url: url,
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity
            })
            .success(function(data, status, headers, config) {
                var newImage = {
                    'url': headers('Location'),
                    'title': $scope.uploader.flow.files[0].name
                };

                $scope.images.push(newImage);
                $scope.uploader.flow.files[0].cancel();
            })
            .error(function(data, status, headers, config) {
                $window.alert(status + '\n' + JSON.stringify(data));
            });
    };

    $scope.save = function() {
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId;
        var data = {
            'establishment': {
                'categories': $scope.establishment.categories,
                'contact': $scope.establishment.contact,
                'location': {
                    'address': $scope.establishment.location.address,
                    'cc': $scope.establishment.location.cc,
                    'cityOrMunicipality': $scope.establishment.location.cityOrMunicipality,
                    'position': {
                        'lat': $scope.establishment.location.position.lat,
                        'lon': $scope.establishment.location.position.lon
                    }
                },
                'name': $scope.establishment.name,
                'primaryImage': $scope.establishment.primaryImage
            }
        };

        $http({
                method: 'PUT',
                url: url,
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data, status, headers, config) {
                var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId;

                $http({
                        method: 'GET',
                        url: url
                    })
                    .success(function(data, status, headers, config) {
                        $modalInstance.close(data.response.establishment);
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

}]);
