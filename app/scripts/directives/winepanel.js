'use strict';

angular.module('wineFrontendApp')
  .directive('winePanel', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/winepanel.html',
      controller: 'WinePanelCtrl',
      controllerAs: 'ctrl',
      scope: {
        wine: '='
      },
      bindToController: true
    };
  })
  .controller('WinePanelCtrl', function () {

  });
