'use strict';

angular.module('wineFrontendApp')
  .directive('sellerCard', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/sellercard.html',
      controller: 'SellerCardCtrl',
      controllerAs: 'ctrl',
      scope: {
        seller: '='
      },
      bindToController: true
    };
  })
  .controller('SellerCardCtrl', function ($http, $window) {

    this.expanded = false;
    this.addWine = false;
    this.emailRequest = new CreateEmailRequest([]);

    this.switch = function(){
      this.expanded = !this.expanded;
    };

    this.openEmailModal = function(){
      $http({
        method: 'PUT',
        url: 'http://localhost:8080/growers/order/'+this.seller.id,
        data: this.emailRequest
      }).then(
        function(emailText){
          $window.alert(emailText);
        },
        function(){
          $window.alert('Could not generate email');
        }
      );
    };

    this.switchAddWine = function(){
      this.addWine = !this.addWine;
    };

    this.saveWine = function(){

    };

  });
