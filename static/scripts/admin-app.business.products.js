var app = angular.module('App');

app.controller('BusinessProductsCntrlr', ['$scope', '$window', '$http', '$modal', '$state', 'businessId', function($scope, $window, $http, $modal, $state, businessId) {

    $scope.products = {};
    $scope.productsCursor = null;

    $scope.createProduct = function() {
        var modalInstance = $modal.open({
            templateUrl: 'ProductModal.html',
            controller: 'CreateProductModalInstanceCtrlr',
            backdrop: 'static',
            size: '',
            resolve: {
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

        modalInstance.result.then(function(product) {
            $scope.products[product.url] = product;
        }, function() {

        });
    };

    var getProducts = function(url) {
        $http({
                method: 'GET',
                url: url
            })
            .success(function(data, status, headers, config) {
                data.response.products.forEach(function(product) {
                    $scope.products[product.url] = product;
                });

                $scope.productsCursor = data.meta.next_cursor;
            })
            .error(function(data, status, headers, config) {
                $window.alert(status + '\n' + JSON.stringify(data));
            });
    }

    $scope.listProducts = function() {
        $scope.products = {};
        $scope.productsCursor = null;

        getProducts('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/');
    };

    $scope.listMoreProducts = function() {
        if ($scope.productsCursor !== null) {
            getProducts('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/' + '?' + 'cursor=' + $scope.productsCursor);
        }
    };

    $scope.onProductClick = function(obj) {
        var productId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/products/([a-zA-Z0-9]{11})/?$').exec(obj.url)[1];

        var modalInstance = $modal.open({
            templateUrl: 'ProductModal.html',
            controller: 'EditProductModalInstanceCtrlr',
            backdrop: 'static',
            size: '',
            resolve: {
                businessId: function() {
                    return businessId;
                },
                productId: function() {
                    return productId;
                },
                product: function($http) {
                    return $http({
                            method: 'GET',
                            url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/' + productId
                        })
                        .then(function(result) {
                            return result.data.response.product;
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
                productImages: function($http) {
                    return $http({
                            method: 'GET',
                            url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/' + productId + '/images/'
                        })
                        .then(function(result) {
                            return result.data.response.images;
                        });
                }
            }
        });

        modalInstance.result.then(function(product) {
            $scope.products[product.url] = product;
        }, function() {

        });
    };

}]);

app.controller('CreateProductModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'businessId', 'businessImages', function($scope, $window, $http, $modalInstance, businessId, businessImages) {
    $scope.mode = 'CREATE';

    $scope.product = {};
    $scope.images = angular.copy(businessImages);
    $scope.product.primaryImage = '';
    $scope.product.intents = [];

    $scope.onImageClick = function(image) {
        if ($scope.product.primaryImage === image.url) {
            $scope.product.primaryImage = '';
        } else {
            $scope.product.primaryImage = image.url;
        }
    };

    $scope.create = function() {
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/';
        var data = {
            'product': {
                'description': $scope.product.description,
                'intents': $scope.product.intents,
                'isPromo': $scope.product.isPromo,
                'isVisible': $scope.product.isVisible,
                'name': $scope.product.name,
                'order': $scope.product.order,
                'primaryImage': $scope.product.primaryImage
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
                var productId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/products/([a-zA-Z0-9]{11})/?$').exec(headers('Location'))[1];
                var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/' + productId;

                $http({
                        method: 'GET',
                        url: url
                    })
                    .success(function(data, status, headers, config) {
                        $modalInstance.close(data.response.product);
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

}]);

app.controller('EditProductModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'businessId', 'productId', 'product', 'businessImages', 'productImages', function($scope, $window, $http, $modalInstance, businessId, productId, product, businessImages, productImages) {
    $scope.mode = 'EDIT';

    $scope.product = angular.copy(product);
    $scope.images = businessImages.concat(productImages);
    $scope.uploader = {};
    $scope.product.intents = [];

    $scope.onImageClick = function(image) {
        if ($scope.product.primaryImage === image.url) {
            $scope.product.primaryImage = '';
        } else {
            $scope.product.primaryImage = image.url;
        }
    };

    $scope.upload = function() {
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/' + productId + '/images/';

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
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/' + productId;
        var data = {
            'product': {
                'description': $scope.product.description,
                'intents': $scope.product.intents,
                'isPromo': $scope.product.isPromo,
                'isVisible': $scope.product.isVisible,
                'name': $scope.product.name,
                'order': $scope.product.order,
                'primaryImage': $scope.product.primaryImage
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
                var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/' + productId;

                $http({
                        method: 'GET',
                        url: url
                    })
                    .success(function(data, status, headers, config) {
                        $modalInstance.close(data.response.product);
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
