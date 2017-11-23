'use strict';

angular.module('wineFrontendApp')
  .controller('WineCtrl', function ($http, $window, $log) {

    this.wines = [];
    this.currentWine = null;
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
        $window.alert("Konnte Weine nicht laden");
        self.loading = false;
      });
    };

    this.loadWineById = function(id) {
      self.loading = true;
      $http({
        method: 'GET',
        url: 'http://localhost:8080/wines/'+id
      }).then(function success(response) {
        self.currentWine = response.data;
        self.loading = false;
      }, function error(response) {
        $log.error(response);
        $window.alert("Konnte Weine nicht laden");
        self.loading = false;
      });
    };

    this.loadAllWines();

  });
