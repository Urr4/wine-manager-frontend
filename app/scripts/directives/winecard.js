'use strict';

angular.module('wineFrontendApp')
  .directive('wineField', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/winecard.html',
      controller: 'WineFieldCtrl',
      controllerAs: 'ctrl',
      scope: {
        wine: '='
      },
      bindToController: true
    };
  })
  .controller('WineFieldCtrl', function ($log) {

  });
