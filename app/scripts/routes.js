'use strict';

/**
 * @ngdoc overview
 * @name demoWebEducWebApp.routes
 * @description
 * # routes
 * Routing for the application.
 */
angular
  .module('demoWebEducWebApp')
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
