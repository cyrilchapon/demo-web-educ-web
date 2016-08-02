'use strict';

/**
 * @ngdoc service
 * @name demoWebEducWebApp.itemSrv
 * @description
 * # itemSrv
 * Service in the demoWebEducWebApp.
 */
angular.module('demoWebEducWebApp')
  .service('itemSrv', function (localStorageService, $q) {
    var service = {};

    service.create = function(item) {
      var deferred = $q.defer();

      var result = localStorageService.set(item.id, item);

      if(result) {
        deferred.resolve(item);
      } else {
        deferred.reject();
      }

      return deferred.promise;
    };

    return service;
  });
