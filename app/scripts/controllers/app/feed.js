'use strict';

/**
 * @ngdoc function
 * @name demoWebEducWebApp.controller:AppFeedCtrl
 * @description
 * # AppFeedCtrl
 * Controller of the demoWebEducWebApp
 */
angular.module('demoWebEducWebApp')
  .controller('AppFeedCtrl', function ($scope, $q, pictureSrv, nameSrv) {
    $scope.items = [];

    $scope.loading = true;

    $scope.refreshFeed = function() {
      return $q.all([
        pictureSrv.findAll(),
        nameSrv.findAll()
      ])
      .spread(function(images, names){
        $scope.items = _.sortBy(_.concat(images, names), 'savedAt').reverse();
      })
      .finally(function(){
        $scope.loading = false;
      });
    };

    $scope.refreshFeed();
  });
