'use strict';

/* Controllers */

angular.module('pitstopMapControllers', ['google-maps', 'ngAnimate'])
  .controller('IndexController', ['$scope', 'EstablishmentsService', 'EstabCardService',
    function ($scope, EstablishmentsService, EstabCardService) {
      $scope.map = {
        center: {
          latitude: 14.581287, longitude: 120.9762219
        },
        zoom: 15,
        control: {},
        events: {
          idle: function() {
            if (!$scope.loaded) {
              if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition($scope.getGeoLocation);
              }
              $scope.loaded = true;
            }
            var gMap = $scope.map.control.getGMap();
            var bounds = gMap.getBounds();
            var neBound = bounds.getNorthEast();
            var swBound = bounds.getSouthWest();

            EstablishmentsService.listAll(
              {}, {
                bounds: {
                    ne: {
                        lat: neBound.lat(),
                        lon: neBound.lng()
                    },
                    sw: {
                        lat: swBound.lat(),
                        lon: swBound.lng()
                    }
                }
              }
            ).$promise.then(function (data) {
                if (data.hasOwnProperty('establishments')) {
                  var establishments = data.establishments;
                  var markers = [];
                  establishments.forEach(function (estab) {
                    markers.push({
                      latitude: estab.location.position.lat,
                      longitude: estab.location.position.lon,
                      id: estab.url,
                      bizId: (estab.url.split('/'))[4],
                      estabId: (estab.url.split('/'))[6],
                      details: {
                        contact: estab.contact.formattedPhone,
                        address: estab.location.address,
                        name: estab.name
                      },
                      visible: true
                    });
                  });
                  $scope.estabMarkers = markers;
                }
              });
            },
            click : function () {
              $scope.$apply(function () {
                $scope.cardVisible = false;
              });
            }
          }, bounds: {}
      };
      $scope.cardVisible = false;
      $scope.loaded = false;
      $scope.getGeoLocation = function (location) {
        $scope.map.center = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        };
      };
      // Initialize with no markers
      $scope.estabMarkers = [];
      $scope.markersEvents = {
        click: function (gMarker, eventName, model) {
          $scope.cardModel = model;
          EstabCardService.getEstab({estabId: model.estabId, bizId: model.bizId}, {}).$promise.then(function (data) {
            if (data.hasOwnProperty('pages')) {
             
              var pages = data.pages;  // TODO: Change to pages
              $scope.cardModel.pages = pages;
              $scope.currentPage = $scope.cardModel.pages[0];
              console.log($scope.cardModel);
              $scope.cardVisible = model.visible;
              $scope.pageTitles = $scope.cardModel.pages.map(function (page) { return page.title; });              
            }
          });
         
        }
      };
    }
  ]
);


function fromCoords(location, zoom) {
  var lat_rad = parseFloat(location['latitude'])*Math.PI/180.0;
  var n = Math.pow(2, zoom);
  return {
    x: parseInt((parseFloat(location['longitude']) + 180) / 360.0 * n),
    y: parseInt((1.0 - Math.log(Math.tan(lat_rad) + (1 / Math.cos(lat_rad))) / Math.PI) / 2.0 * n),
    zoom: zoom
  };
}
