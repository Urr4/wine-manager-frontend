'use strict';

/**
 * @ngdoc function
 * @name wineFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wineFrontendApp
 */
angular.module('wineFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
