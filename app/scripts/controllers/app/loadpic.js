'use strict';

/**
 * @ngdoc function
 * @name demoWebEducWebApp.controller:AppLoadpicCtrl
 * @description
 * # AppLoadpicCtrl
 * Controller of the demoWebEducWebApp
 */
angular.module('demoWebEducWebApp')
  .controller('AppLoadpicCtrl', function ($scope, pictureSrv, $translate, $window) {
    $scope.image = null;

    $scope.validate = function(file) {
      //TODO type and size check
      $scope.image = file;
    };
    
    $scope.save = function(image) {
      pictureSrv.save(image).then(
        null,
        function(error) {
          switch(error) {
            case pictureSrv.errors.tooBig:
              $window.alert($translate.instant('page.app.loadpic.errors.pictureTooBig'));
              break;
          }
        }
      );
    };
  });
