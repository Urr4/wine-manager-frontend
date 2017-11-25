'use strict';

angular.module('wineFrontendApp')
  .directive('wineSellerSlot', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/winesellerslot.html',
      controller: 'WineSellerSlotCtrl',
      controllerAs: 'ctrl',
      scope: {
        wine: '=',
        order: '='
      },
      bindToController: true
    };
  })
  .controller('WineSellerSlotCtrl', function ($scope, $window) {

    this.count = 0;
    this.text = 'test';

  });
