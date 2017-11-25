'use strict';

angular.module('wineFrontendApp')
  .directive('sellerForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/sellerform.html',
      controller: 'SellerFormCtrl',
      controllerAs: 'ctrl',
      bindToController: true
    };
  })
  .controller('SellerFormCtrl', function ($http, $window, $log) {

    this.newSeller = new Seller();

    this.submitNewSeller = function(){
      $log.info(this.newSeller);
      $http({
        method: 'POST',
        url: 'http://localhost:8080/growers',
        data: this.newSeller
      }).then(
        function(){
          $window.alert('Winzer angelegt');
        },
        function(){
          $window.alert('Konnte Winzer nicht anlegen');
        }
        );
    };

  });
