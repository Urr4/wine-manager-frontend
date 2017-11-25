'use strict';

angular.module('wineFrontendApp')
  .directive('dropdown', function(){
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/dropdown.html',
      controller: 'DropdownCtrl',
      controllerAs: 'ctrl',
      scope: {
        label: '@',
        list: '=',
        multiple: '@',
        max: '@',
        selected: '='
      },
      bindToController: true
    };
  })
  .controller('DropdownCtrl', function ($log, $window) {

    this.open = false;

    if(!!!this.multiple){
      this.max = 1;
    }

    if(!!!this.header){
      this.header = '';
    }

    this.toggle = function(){
      $log.info(this.list);
      this.open = !this.open;
    };

    this.getLabel = function(){
      var label = '';
      if(this.selected.length > 0){
        var sep = '';
        for(var i=0; i<this.selected.length; i++){
          label += sep + this.selected[i].name;
          sep = ','
        }
      }else{
        label = this.label;
      }
      return label;
    };

    this.isSelected = function(obj){
      var isSelected = getContainedIndex(this.selected, obj) > -1;
      return isSelected;
    };

    this.select = function(obj){
      $log.info(obj);
      var containedIndex = getContainedIndex(this.selected, obj);
      if(containedIndex > -1){
        if(!!this.multiple){
          this.selected.splice(containedIndex, 1);
        }else{
          this.selected = [];
        }
      }else{
        if(!!!this.multiple){
          this.selected = [];
        }
        if(this.selected.length > this.max-1){
          $window.alert('Bitte nicht mehr als '+this.max+' auswählen.');
        }else{
          this.selected.push(obj);
        }
      }
      $log.info(this.selected);
    };

    var getContainedIndex = function(list, obj){
      var index = -1;
      for(var i=0; i<list.length;i++){
        if(list[i].id==obj.id){
          index = i;
          break;
        }
      }
      return index;
    };

  });
