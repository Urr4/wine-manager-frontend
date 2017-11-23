'use strict';

angular.module('wineFrontendApp')
  .directive('userField', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/usercard.html',
      controller: 'UserFieldCtrl',
      controllerAs: 'ctrl',
      scope: {
        user: '='
      },
      bindToController: true
    };
  })
  .controller('UserFieldCtrl', function () {

    this.collapsed = true;

    this.switch = function(){
      this.collapsed = !this.collapsed;
    }

  });
