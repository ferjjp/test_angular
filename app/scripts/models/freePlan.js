'use strict';

function BasicPlan() {
  this.name = 'Plan Gratis';
}

angular.module('todoAppApp')
  .factory('BasicPlan', function(){
    return BasicPlan;
  });