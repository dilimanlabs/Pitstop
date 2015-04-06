var app = angular.module('App');

app.controller('BusinessPagesCntrlr', ['$scope', '$window', '$http', '$modal', '$state', 'businessId',
    function($scope, $window, $http, $modal, $state, businessId) {

        $scope.pages = {};
        $scope.pagesCursor = null;

        $scope.createPage = function() {
            var modalInstance = $modal.open({
                templateUrl: 'PageModal.html',
                controller: 'CreatePageModalInstanceCtrlr',
                backdrop: 'static',
                size: '',
                resolve: {
                    businessId: function() {
                        return businessId;
                    },
                    products: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/?limit=100'
                            })
                            .then(function(result) {
                                return result.data.response.products;
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
                    }
                }
            });

            modalInstance.result.then(function(page) {
                $scope.pages[page.url] = page;
            }, function() {

            });
        };

        var getPages = function(url) {
            $http({
                    method: 'GET',
                    url: url
                })
                .success(function(data, status, headers, config) {
                    data.response.pages.forEach(function(page) {
                        $scope.pages[page.url] = page;
                    });

                    $scope.pagesCursor = data.meta.next_cursor;
                })
                .error(function(data, status, headers, config) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        };

        $scope.listPages = function() {
            $scope.pages = {};
            $scope.pagesCursor = null;

            getPages('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/');
        };

        $scope.listMorePages = function() {
            if ($scope.pagesCursor !== null) {
                getPages('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/' + '?' + 'cursor=' + $scope.pagesCursor);
            }
        };

        $scope.onPageClick = function(obj) {
            var pageId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/pages/([a-zA-Z0-9]{11})/?$').exec(obj.url)[1];

            var modalInstance = $modal.open({
                templateUrl: 'PageModal.html',
                controller: 'EditPageModalInstanceCtrlr',
                backdrop: 'static',
                size: '',
                resolve: {
                    businessId: function() {
                        return businessId;
                    },
                    pageId: function() {
                        return pageId;
                    },
                    page: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/' + pageId
                            })
                            .then(function(result) {
                                return result.data.response.page;
                            });
                    },
                    products: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/products/?limit=100'
                            })
                            .then(function(result) {
                                return result.data.response.products;
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
                    pageImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/' + pageId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    }
                }
            });

            modalInstance.result.then(function(page) {
                $scope.pages[page.url] = page;
            }, function() {

            });
        };

    }
]);

app.controller('CreatePageModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'businessId', 'products', 'businessImages',
    function($scope, $window, $http, $modalInstance, businessId, products, businessImages) {
        $scope.mode = 'CREATE';

        $scope.page = {}
        $scope.products = angular.copy(products)
        $scope.images = angular.copy(businessImages);
        $scope.page.primaryImage = '';

        $scope.onImageClick = function(image) {
            if ($scope.page.primaryImage === image.url) {
                $scope.page.primaryImage = '';
            } else {
                $scope.page.primaryImage = image.url;
            }
        };

        $scope.create = function() {
            var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/';
            var data = {
                'page': {
                    'description': $scope.page.description,
                    'order': $scope.page.order,
                    'primaryImage': $scope.page.primaryImage,
                    'products': $scope.page.products,
                    'title': $scope.page.title
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
                    var productId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/pages/([a-zA-Z0-9]{11})/?$').exec(headers('Location'))[1];
                    var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/' + productId;

                    $http({
                            method: 'GET',
                            url: url
                        })
                        .success(function(data, status, headers, config) {
                            $modalInstance.close(data.response.page);
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

app.controller('EditPageModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'businessId', 'pageId', 'page', 'products', 'businessImages', 'pageImages',
    function($scope, $window, $http, $modalInstance, businessId, pageId, page, products, businessImages, pageImages) {
        $scope.mode = 'EDIT';

        $scope.page = angular.copy(page);
        $scope.products = angular.copy(products)
        $scope.images = businessImages.concat(pageImages);
        $scope.uploader = {};

        $scope.onImageClick = function(image) {
            if ($scope.page.primaryImage === image.url) {
                $scope.page.primaryImage = '';
            } else {
                $scope.page.primaryImage = image.url;
            }
        };

        $scope.upload = function() {
            var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/' + pageId + '/images/';

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
            var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/' + pageId;
            var data = {
                'page': {
                    'description': $scope.page.description,
                    'order': $scope.page.order,
                    'primaryImage': $scope.page.primaryImage,
                    'products': $scope.page.products,
                    'title': $scope.page.title
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
                    var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/pages/' + pageId;

                    $http({
                            method: 'GET',
                            url: url
                        })
                        .success(function(data, status, headers, config) {
                            $modalInstance.close(data.response.page);
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
