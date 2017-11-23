'use strict';

angular.module('wineFrontendApp')
  .controller('SellerCtrl', function ($http, $window, $log) {

    this.sellers = [];
    this.currentSeller = null;
    this.loading = false;

    var self = this;

    this.loadAllSellers = function() {
      self.loading=true;
      $http({
        method: 'GET',
        url: 'http://localhost:8080/growers/'
      }).then(function success(response) {
        self.sellers = response.data;
        self.loading=false;
      }, function error(response) {
        $log.error(response);
        $window.alert("Konnte Winzer nicht laden");
        self.loading=false;
      });
    };

    this.loadSellerById = function(id) {
      self.loading=true;
      $http({
        method: 'GET',
        url: 'http://localhost:8080/growers/'+id
      }).then(function success(response) {
        self.currentSeller = response.data;
        self.loading=false;
      }, function error(response) {
        $log.error(response);
        $window.alert("Konnte Winzer nicht laden");
        self.loading=false;
      });
    };

    this.loadAllSellers();

  });
