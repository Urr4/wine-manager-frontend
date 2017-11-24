'use strict';

angular.module('wineFrontendApp')
  .directive('wineCard', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/winecard.html',
      controller: 'WineCardCtrl',
      controllerAs: 'ctrl',
      scope: {
        wine: '='
      },
      bindToController: true
    };
  })
  .controller('WineCardCtrl', function () {

  });
