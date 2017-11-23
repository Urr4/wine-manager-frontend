'use strict';

angular.module('wineFrontendApp')
  .controller('UserCtrl', function ($http, $window, $log) {

    this.users = [];
    this.loading = false;

    var self = this;

    this.loadAllUsers = function(){
      self.loading = true;
      $http({
        method: 'GET',
        url: 'http://localhost:8080/users/'
      }).then(function success(response){
        self.users = response.data;
        self.loading = false;
      }, function error(response){
        $log.error(response);
        $window.alert("Konnte Personen nicht laden");
        self.loading = false;
      });
    };

    this.loadAllUsers();

  });
