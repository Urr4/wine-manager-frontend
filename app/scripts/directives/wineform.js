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
  .controller('WineFormCtrl', function ($http, $window) {

    this.newWine = new Wine();
    this.colors = [];
    this.berries = [];

    var self = this;

    this.saveWine = function(){

    };

    this.getAllBerries = function(){
      $http({
        method: 'GET',
        url: 'http://localhost:8080/berries'
      })
        .then(
          function(response){
            self.berries = response.data;
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
            self.colors = response.data;
          },
          function(){
            $window.alert('Konnte Farben nicht laden');
          });
    };

    this.getAllBerries();
    this.getAllColors();

  });
