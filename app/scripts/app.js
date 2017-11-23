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
      .when('/users', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'ctrl'
      })
      .when('/sellers', {
        templateUrl: 'views/seller.html',
        controller: 'SellerCtrl',
        controllerAs: 'ctrl'
      })
      .when('/wine', {
        templateUrl: 'views/wine.html',
        controller: 'WineCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/wine'
      });
  })
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
