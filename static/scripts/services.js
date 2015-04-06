'use strict';

/* Services */

angular.module('pitstopMapServices', ['ngResource'])
  .factory('EstablishmentsService', ['$resource',
	  function ($resource) {
      return $resource(
        'http://pitstop.dilimanlabs.com/api/maps.list_establishments_from_bounds',
        {}, {
          listAll: { method: 'POST'}
      	}
      );
  	}])
  .factory('EstabCardService', ['$resource', 
    function ($resource) {
      return $resource(
        'http://pitstop.dilimanlabs.com/biz/:bizId/establishments/:estabId',
        {}, {
          getEstab: {method: 'GET'}
        }
      );
    }]);

