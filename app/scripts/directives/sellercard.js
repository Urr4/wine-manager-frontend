'use strict';

angular.module('wineFrontendApp')
  .directive('sellerField', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/sellercard.html',
      controller: 'SellerFieldCtrl',
      controllerAs: 'ctrl',
      scope: {
        seller: '='
      },
      bindToController: true
    };
  })
  .controller('SellerFieldCtrl', function () {

  });
