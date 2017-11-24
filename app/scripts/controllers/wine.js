'use strict';

angular.module('wineFrontendApp')
  .controller('WineCtrl', function ($http, $window, $log) {

    this.addWine = false;

    this.wines = [];
    this.loading = false;

    var self = this;

    this.loadAllWines = function() {
      self.loading = true;
      $http({
        method: 'GET',
        url: 'http://localhost:8080/wines/'
      }).then(function success(response) {
        self.wines = response.data;
        self.loading = false;
      }, function error(response) {
        $log.error(response);
        $window.alert('Konnte Weine nicht laden');
        self.loading = false;
      });
    };

    this.switchAddWine = function(){
      this.addWine = !this.addWine;
    };

    this.loadAllWines();

  });
