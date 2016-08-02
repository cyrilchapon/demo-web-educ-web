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
      })
      .state('app', {
        abstract: true,
        url: '/app',
        template: '<ui-view/>'
      })
        .state('app.feed', {
          url: '/feed',
          templateUrl: 'views/app/feed.html',
          controller: 'AppFeedCtrl'
        })
        .state('app.loadpic', {
          url: '/loadpic',
          templateUrl: 'views/app/loadpic.html',
          controller: 'AppLoadpicCtrl'
        })
        .state('app.typename', {
          url: '/typename',
          templateUrl: 'views/app/typename.html',
          controller: 'AppTypenameCtrl'
        });
  });
