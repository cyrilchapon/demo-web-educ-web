'use strict';

/**
 * @ngdoc service
 * @name demoWebEducWebApp.nameSrv
 * @description
 * # nameSrv
 * Service in the demoWebEducWebApp.
 */
angular.module('demoWebEducWebApp')
  .service('nameSrv', function (localStorageService, $q, uuid, itemSrv) {
    var service = {};

    var namePrefix = 'name.';

    service.errors = {
      badFormat: 1
    };

    service.create = function(name) {
      if(!name || typeof(name) !== 'string' || !name.length) {
        var deferred = $q.defer();
        deferred.reject(service.errors.badFormat);
        return deferred.promise;
      }

      var item = {
        type: 'name',
        savedAt: new Date(),
        id: namePrefix + uuid.v4(),
        data: name
      };

      return itemSrv.create(item);
    };

    service.findAll = function() {
      var deferred = $q.defer();

      var result = _.map(_.filter(localStorageService.keys(), function(key) { return key.startsWith(namePrefix); }), function(key) {
        return localStorageService.get(key);
      });

      deferred.resolve(result);

      return deferred.promise;
    };

    return service;
  });
