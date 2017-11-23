'use strict';

angular.module('wineFrontendApp')
  .directive('wineSlot', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/wineslot.html',
      controller: 'WineSlotCtrl',
      controllerAs: 'ctrl',
      scope: {
        wine: '=',
        user: '='
      },
      bindToController: true
    };
  })
  .controller('WineSlotCtrl', function ($http, $log) {

    this.removeFromUser = function(){
      $http({
        method: 'DELETE',
        url: 'http://localhost:8080/users/wines/'+this.wine.id,
        data: this.user,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(
        function(){},
        function(){}
      );
    };

  });
