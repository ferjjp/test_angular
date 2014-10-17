'use strict';

function Plan(name,type) {
  this.name = name;
  this.type = type;
  this.canSave = function(countObject) {
    return type.canSave(countObject);
}
};

angular.module('todoAppApp')
  .factory('Plan', function(){
    return Plan;
  });
