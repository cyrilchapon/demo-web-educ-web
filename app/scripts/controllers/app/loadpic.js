'use strict';

/**
 * @ngdoc function
 * @name demoWebEducWebApp.controller:AppLoadpicCtrl
 * @description
 * # AppLoadpicCtrl
 * Controller of the demoWebEducWebApp
 */
angular.module('demoWebEducWebApp')
  .controller('AppLoadpicCtrl', function ($scope, localStorageService) {
    $scope.image = null;

    $scope.validate = function(file) {
      //TODO type and size check
      $scope.image = file;
    };
    
    $scope.save = function(image) {
      return localStorageService.set(image.name, image);
    };
  });
