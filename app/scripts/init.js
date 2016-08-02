'use strict';

/**
 * @ngdoc overview
 * @name demoWebEducWebApp.init
 * @description
 * # init
 * Initializations for the application.
 */
angular
  .module('demoWebEducWebApp')
  .config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 3000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'left',
      positionY: 'bottom'
    });
  })
  .config(function(tmhDynamicLocaleProvider){
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('demoWebEducWebApp');
  })
  .config(function($translateProvider) {
    $translateProvider
      .useStaticFilesLoader({
        files: [{
          prefix: 'languages/',
          suffix: '.json'
        }]
      })
      .registerAvailableLanguageKeys(['en','fr'], {
        'en*': 'en',
        'fr*': 'fr'
      });
    
    //$translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en');
  })
  .run(function($window, tmhDynamicLocale, $translate, amMoment){
    //get browser locale
    var lang = $window.navigator.userLanguage || $window.navigator.language;
    
    //configure globale locale
    tmhDynamicLocale.set(lang ? lang.toLowerCase() : null);
    
    //configure translation language
    $translate.use(lang);
    
    //configure locale for angular-moment
    amMoment.changeLocale(lang);
  });
