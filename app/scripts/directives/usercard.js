'use strict';

angular.module('wineFrontendApp')
  .directive('userCard', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/usercard.html',
      controller: 'UserCardCtrl',
      controllerAs: 'ctrl',
      scope: {
        user: '='
      },
      bindToController: true
    };
  })
  .controller('UserCardCtrl', function () {

    this.collapsed = true;

    this.switch = function(){
      this.collapsed = !this.collapsed;
    };

  });
