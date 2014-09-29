'use strict';

function Task(json) {
  _.extend(this, json);

  this.isNew = function() {
    return this.id == undefined;
  };

  this.isDirty = function() {
    return this.isNew() || this.dirty;
  };

  this.setAsDirty = function() {
    this.dirty = true;
  };

  this.setAsPristine = function() {
    delete this.dirty;
  };

};


angular.module('todoAppApp')
  .factory('Task', function(){
    return Task;
  });
