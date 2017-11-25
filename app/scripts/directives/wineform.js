'use strict';

angular.module('wineFrontendApp')
  .directive('wineForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/wineform.html',
      controller: 'WineFormCtrl',
      controllerAs: 'ctrl',
      scope: {
        seller: '='
      },
      bindToController: true
    };
  })
  .controller('WineFormCtrl', function ($http, $window, $log) {

    this.newWine = new Wine();
    this.colors = [];
    this.berries = [];
    this.sellers = [];
    this.selectedColor = [];
    this.selectedBerries = [];
    this.selectedSeller = [];

    var self = this;

    this.saveWine = function(){
      this.newWine.berries = this.selectedBerries;
      this.newWine.wineColor = this.selectedColor[0];
      var sellerId;
      if(this.seller){
        sellerId = this.seller.id;
      }else{
        sellerId = this.selectedSeller[0].id;
      }
      $log.info('Creating Wine');
      $log.info(this.newWine);
      $http({
        method: 'POST',
        url: 'http://localhost:8080/growers/'+sellerId+'/wines',
        data: this.newWine
      })
        .then(
          function(){
            $window.alert('Wein angelegt');
          },
          function(){
            $window.alert('Wein anlegen gescheitert.');
          });
    };

    this.getAllBerries = function(){
      $http({
        method: 'GET',
        url: 'http://localhost:8080/berries'
      })
        .then(
          function(response){
            var berries = response.data;
            $log.info(berries);
            self.berries = berries;
          },
          function(){
            $window.alert('Konnte Beeren nicht laden');
          });
    };

    this.getAllColors = function(){
      $http({
        method: 'GET',
        url: 'http://localhost:8080/colors'
      })
        .then(
          function(response){
            var colors = response.data;
            $log.info(colors);
            self.colors = colors;
          },
          function(){
            $window.alert('Konnte Farben nicht laden');
          });
    };

    this.getAllSellers = function(){
      $http({
        method: 'GET',
        url: 'http://localhost:8080/growers'
      })
        .then(
          function(response){
            var sellers = response.data;
            $log.info(sellers);
            self.sellers = sellers;
          },
          function(){
            $window.alert('Konnte Winzer nicht laden');
          });
    };

    this.getAllBerries();
    this.getAllColors();
    this.getAllSellers();

  });
