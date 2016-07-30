'use strict';

/**
 * @ngdoc overview
 * @name demoWebEducWebApp.demoWebEducWebAppConfig
 * @description
 * # demoWebEducWebAppConfig
 * Dynamic configuration for the application.
 * This constant is filled dynamically build-time by grunt-replace,
 * with environment json files (dev.json, prod.json, ...)
 * This file will be placed INSIDE 'app' directory by grunt
 */
angular
  .module('demoWebEducWebApp')
  .constant('demoWebEducWebAppConfig', {
    api: {
      url: 'http://localhost:1337'
    }
  });
