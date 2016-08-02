'use strict';

/**
 * @ngdoc service
 * @name demoWebEducWebApp.pictureSrv
 * @description
 * # pictureSrv
 * Service in the demoWebEducWebApp.
 */
angular.module('demoWebEducWebApp')
  .service('pictureSrv', function (localStorageService, $q) {
    var service = {};
    
    var imagePrefix = 'img.';

    service.errors = {
      tooBig: 1
    };
    
    service.maxSize = 500000;

    service.save = function(image) {
      var deferred = $q.defer();

      if(image.size > service.maxSize) {
        deferred.reject(service.errors.tooBig);
        return deferred.promise;
      }

      image.savedAt = new Date();

      var result = localStorageService.set(imagePrefix + image.name, image);

      if(result) {
        deferred.resolve();
      } else {
        deferred.reject();
      }

      return deferred.promise;
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
