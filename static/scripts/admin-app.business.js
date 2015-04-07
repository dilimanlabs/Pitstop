var app = angular.module('App');

app.controller('BusinessCntrlr', ['$scope', '$window', '$http', '$modal', '$state', 'businessId', 'business', 'images', function($scope, $window, $http, $modal, $state, businessId, business, images) {

    $scope.business = angular.copy(business);
    $scope.images = angular.copy(images);
    $scope.uploader = {};

    $scope.onImageClick = function(image) {
        if ($scope.business.primaryImage === image.url) {
            $scope.business.primaryImage = '';
        } else {
            $scope.business.primaryImage = image.url;
        }
    };

    $scope.upload = function() {
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/images/';

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
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId;
        var data = {
            'business': {
                'adminUsers': $scope.business.adminUsers,
                'description': $scope.business.description,
                'name': $scope.business.name,
                'primaryImage': $scope.business.primaryImage,
                'registeredName': $scope.business.registeredName
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
                $window.alert('Changes saved.');
            })
            .error(function(data, status, headers, config) {
                $window.alert(status + '\n' + JSON.stringify(data));
            });
    };

}]);
