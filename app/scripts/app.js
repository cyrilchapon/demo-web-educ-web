'use strict';

/**
 * @ngdoc overview
 * @name demoWebEducWebApp
 * @description
 * # demoWebEducWebApp
 *
 * Main module of the application.
 */
angular
  .module('demoWebEducWebApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
