'use strict';

angular.module('wineFrontendApp')
  .directive('wineUserSlot', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/wineuserslot.html',
      controller: 'WineUserSlotCtrl',
      controllerAs: 'ctrl',
      scope: {
        wine: '=',
        user: '='
      },
      bindToController: true
    };
  })
  .controller('WineUserSlotCtrl', function ($http) {

    this.removeFromUser = function(){
      $http({
        method: 'DELETE',
        url: 'http://localhost:8080/users/'+this.user.id+'/wines/'+this.wine.id,
      }).then(
        function(){},
        function(){}
      );
    };

  });
