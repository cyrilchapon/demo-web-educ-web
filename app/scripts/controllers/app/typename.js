'use strict';

/**
 * @ngdoc function
 * @name demoWebEducWebApp.controller:AppTypenameCtrl
 * @description
 * # AppTypenameCtrl
 * Controller of the demoWebEducWebApp
 */
angular.module('demoWebEducWebApp')
  .controller('AppTypenameCtrl', function ($scope, nameSrv, $translate, Notification) {
    $scope.name = '';

    $scope.save = function(name) {
      nameSrv.create(name).then(
        function() {
          $scope.name = '';
          Notification.success($translate.instant('page.app.typename.errors.success'));
        },
        function(error) {
          switch(error) {
            default:
              Notification.error($translate.instant('page.app.typename.errors.generic'));
              break;
          }
        }
      );
    };
  });
