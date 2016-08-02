'use strict';

/**
 * @ngdoc function
 * @name demoWebEducWebApp.controller:AppFeedCtrl
 * @description
 * # AppFeedCtrl
 * Controller of the demoWebEducWebApp
 */
angular.module('demoWebEducWebApp')
  .controller('AppFeedCtrl', function ($scope, pictureSrv) {
    $scope.images = [];

    $scope.refreshImages = function() {
      return pictureSrv.findAll().then(function(images){
        $scope.images = images;
      });
    };

    $scope.refreshImages();

  });
