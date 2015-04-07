var app = angular.module('App');

app.controller('MainCategoriesCntrlr', ['$scope', '$window', '$http', '$modal', '$state',
    function($scope, $window, $http, $modal, $state) {

        $scope.categories = {};
        $scope.categoriesCursor = null;

        $scope.createCategory = function() {
            var modalInstance = $modal.open({
                templateUrl: 'CategoryModal.html',
                controller: 'CreateCategoryModalInstanceCtrlr',
                backdrop: 'static',
                size: ''
            });

            modalInstance.result.then(function(category) {
                $scope.categories[category.url] = category;
            }, function() {

            });
        };

        var getCategories = function(url) {
            $http({
                    method: 'GET',
                    url: url
                })
                .success(function(data, status, headers, config) {
                    data.response.categories.forEach(function(category) {
                        $scope.categories[category.url] = category;
                    });

                    $scope.categoriesCursor = data.meta.next_cursor;
                })
                .error(function(data, status, headers, config) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        }

        $scope.listCategories = function() {
            $scope.categories = {};
            $scope.categoriesCursor = null;

            getCategories('http://pitstop.dilimanlabs.com/admin/api/categories/');
        };

        $scope.listMoreCategories = function() {
            if ($scope.categoriesCursor !== null) {
                getCategories('http://pitstop.dilimanlabs.com/admin/api/categories/' +
                    '?' + 'cursor=' + $scope.categoriesCursor);
            }
        }

        $scope.onCategoryClick = function(obj) {
            var categoryId = new RegExp('^.*/categories/([a-zA-Z0-9]{11})/?$')
                .exec(obj.url)[1];

            var modalInstance = $modal.open({
                templateUrl: 'CategoryModal.html',
                controller: 'EditCategoryModalInstanceCtrlr',
                backdrop: 'static',
                size: '',
                resolve: {
                    categoryId: function() {
                        return categoryId;
                    },
                    category: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/categories/' + categoryId
                            })
                            .then(function(result) {
                                return result.data.response.category;
                            });
                    },
                    categoryImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/categories/' + categoryId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    }
                }
            });

            modalInstance.result.then(function(category) {
                $scope.categories[category.url] = category;
            }, function() {

            });
        };

    }
]);

app.controller('CreateCategoryModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance',
    function($scope, $window, $http, $modalInstance) {
        $scope.mode = 'CREATE';

        $scope.category = {};

        $scope.create = function() {
            var url = 'http://pitstop.dilimanlabs.com/admin/api/categories/';
            var data = {
                'category': {
                    'description': $scope.category.description,
                    'name': $scope.category.name,
                    'pluralName': $scope.category.pluralName
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
                    var categoryId = new RegExp('^.*/categories/([a-zA-Z0-9]{11})/?$')
                        .exec(headers('Location'))[1];
                    var url = 'http://pitstop.dilimanlabs.com/admin/api/categories/' + categoryId;

                    $http({
                            method: 'GET',
                            url: url
                        })
                        .success(function(data, status, headers, config) {
                            $modalInstance.close(data.response.category);
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

app.controller('EditCategoryModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'categoryId', 'category', 'categoryImages',
    function($scope, $window, $http, $modalInstance, categoryId, category, categoryImages) {
        $scope.mode = 'EDIT';

        $scope.category = category;
        $scope.images = categoryImages;
        $scope.uploader = {};

        $scope.onImageClick = function(image) {
            if ($scope.category.primaryImage === image.url) {
                $scope.category.primaryImage = '';
            } else {
                $scope.category.primaryImage = image.url;
            }
        };

        $scope.upload = function() {
            var url = 'http://pitstop.dilimanlabs.com/admin/api/categories/' + categoryId + '/images/';

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
            var url = 'http://pitstop.dilimanlabs.com/admin/api/categories/' + categoryId;
            var data = {
                'category': {
                    'description': $scope.category.description,
                    'name': $scope.category.name,
                    'pluralName': $scope.category.pluralName,
                    'primaryImage': $scope.category.primaryImage
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
                    var url = 'http://pitstop.dilimanlabs.com/admin/api/categories/' + categoryId;

                    $http({
                            method: 'GET',
                            url: url
                        })
                        .success(function(data, status, headers, config) {
                            $modalInstance.close(data.response.category);
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
