'use strict';

/**
 * @ngdoc function
 * @name demoWebEducWebApp.controller:AppLoadpicCtrl
 * @description
 * # AppLoadpicCtrl
 * Controller of the demoWebEducWebApp
 */
angular.module('demoWebEducWebApp')
  .controller('AppLoadpicCtrl', function ($scope, pictureSrv, $translate, Notification) {
    $scope.image = null;

    $scope.validate = function(file) {
      //TODO type and size check
      $scope.image = file;
    };
    
    $scope.save = function(image) {
      pictureSrv.create(image).then(
        function() {
          Notification.success($translate.instant('page.app.loadpic.errors.success'));
          $scope.image = null;
        },
        function(error) {
          switch(error) {
            case pictureSrv.errors.tooBig:
              Notification.error($translate.instant('page.app.loadpic.errors.pictureTooBig'));
              break;
            default:
              Notification.error($translate.instant('page.app.loadpic.errors.generic'));
              break;
          }
        }
      );
    };
  });
