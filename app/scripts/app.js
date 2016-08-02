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
    'ui.router',
    'tmh.dynamicLocale',
    'pascalprecht.translate',
    'angularMoment',
    'angularFileInput',
    'LocalStorageModule'
  ]);
