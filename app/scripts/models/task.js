'use strict';

function Task(json) {
  _.extend(this, json);

  this.isNew = function() {
    return this.id == undefined;
  };

};


angular.module('todoAppApp')
  .factory('Task', function(){
    return Task;
  });
