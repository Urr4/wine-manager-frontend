'use strict';

/**
 * @ngdoc overview
 * @name wineFrontendApp
 * @description
 * # wineFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('wineFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
