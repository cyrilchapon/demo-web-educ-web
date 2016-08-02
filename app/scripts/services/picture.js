'use strict';

/**
 * @ngdoc service
 * @name demoWebEducWebApp.pictureSrv
 * @description
 * # pictureSrv
 * Service in the demoWebEducWebApp.
 */
angular.module('demoWebEducWebApp')
  .service('pictureSrv', function (localStorageService, $q, uuid, itemSrv) {
    var service = {};
    
    var imagePrefix = 'img.';

    service.errors = {
      tooBig: 1
    };
    
    service.maxSize = 500000;

    service.create = function(image) {
      var deferred = $q.defer();

      if(image.size > service.maxSize) {
        deferred.reject(service.errors.tooBig);
        return deferred.promise;
      }

      var item = {
        type: 'image',
        savedAt: new Date(),
        id: imagePrefix + uuid.v4(),
        data: image
      };

      return itemSrv.create(item);
    };

    service.findAll = function() {
      var deferred = $q.defer();

      var result = _.map(_.filter(localStorageService.keys(), function(key) { return key.startsWith(imagePrefix); }), function(key) {
        return localStorageService.get(key);
      });
      
      deferred.resolve(result);

      return deferred.promise;
    };

    service.findById = function(id) {
      var deferred = $q.defer();

      var result = localStorageService.get(imagePrefix + id);
      deferred.resolve(result);

      return deferred.promise;
    };

    return service;
  });
