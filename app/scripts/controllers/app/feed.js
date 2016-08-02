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

    $scope.loading = true;

    $scope.refreshImages = function() {
      return pictureSrv.findAll().then(function(images){
        images = _.sortBy(images, 'savedAt');
        $scope.images = images;
      });
    };

    $scope.refreshImages().finally(function(){
      $scope.loading = false;
    });

  });
