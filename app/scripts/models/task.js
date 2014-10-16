'use strict';

function TaskState_Normal() {

  this.isNew = function() {
  return false;
}

    this.isDirty = function() {
      return false;
    }

  this.isDeleteable = function() {
      return false;
  }

  this.save = function(taskRepository,task) {
                
  }

}

function TaskState_Dirtied() {

  this.isNew = function() {
  return false;
}

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

  this.isNew = function() {
  return false;
}

  this.isDirty = function() {
        return false;
  }

  this.isDeleteable = function() {
      return true;
  }

  this.save = function(taskRepository,task) {
                taskRepository.delete(task);
  }
}

function TaskState_New() {

this.isNew = function() {
  return true;
}
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


function Task(json) {
  _.extend(this, json);
  //TODO Agregar logica distintiva al instanciar del repositorio
  if(json.id) {
      this.state = new TaskState_Normal();
  } else {
    this.state = new TaskState_New();
  }

  this.isNew = function() {
   return this.state.isNew();
  };

  this.isDirty = function() {
    return this.state.isDirty() || this.isNew();
  };

  this.setAsDirty = function() {
    this.state = new TaskState_Dirtied();
  };

  this.setAsPristine = function() {
    this.state = new TaskState_Normal();
  };

  this.setToBeDeleted = function() {
    this.state = new TaskState_Deleteable();
  };

  this.isDeleteable = function() {
    return this.state.isDeleteable();
  }

  this.save = function(taskRepository) {
       this.state.save(taskRepository,this);
  }

}


angular.module('todoAppApp')
  .factory('Task', function(){
    return Task;
  });
