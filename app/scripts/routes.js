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
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      });
  });
