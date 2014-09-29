'use strict';

function BasicPlan() {
  this.name = 'Plan Basico';
}

angular.module('todoAppApp')
  .factory('BasicPlan', function(){
    return BasicPlan;
  });
