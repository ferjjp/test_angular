'use strict';

function TaskState_Normal() {

    this.isDirty = function() {
      return false;
    }

  this.isDeleteable = function() {
      return false;
  }

  this.save = function(taskRepository,task) {
                  taskRepository.add(task);
  }
}

function TaskState_Dirtied() {

  this.isDirty = function() {
        return true;
  }

  this.isDeleteable = function() {
      return false;
  }

    this.save = function(taskRepository,task) {
                         taskRepository.update(task);
  }
}

function TaskState_Deleteable() {

  this.isDirty = function() {
        return true;
  }

  this.isDeleteable = function() {
      return true;
  }

  this.save = function(taskRepository,task) {
                taskRepository.delete(task);
  }
}

function Task(json) {
  _.extend(this, json);

 var state = new TaskState_Normal();



  this.isNew = function() {
    return this.id  === undefined;
  };

  this.isDirty = function() {
    return state.isDirty() || this.isNew();
  };

  this.setAsDirty = function() {
    state = new TaskState_Dirtied();
  };

  this.setAsPristine = function() {
    state = new TaskState_Normal();
  };

  this.setToBeDeleted = function() {
    state = new TaskState_Deleteable();
  };

  this.isDeleteable = function() {
    return state.isDeleteable();
  }

  this.save = function(taskRepository) {
       state.save(taskRepository,this);
  }

}


angular.module('todoAppApp')
  .factory('Task', function(){
    return Task;
  });
