'use strict';

angular.module('todoAppApp')
  .service('taskRepository', function TaskRepository(localStorageService, Task) {
    var tasks = localStorageService.get('tasks') || {};

    this.get = function(){
      return _.values(tasks).map(function(json){
        return new Task(json);
      });
    };

    this.add = function(task){
      var last = _.max(tasks,'id');
      var nextId = last === undefined ? 1 : last.id + 1;
      task.id = nextId;
      tasks[task.id] = task;
      localStorageService.set('tasks',tasks);
    };

    this.update = function(task){
      if(task.isNew()) {
        throw 'cannot update a new task';
      }
      tasks[task.id] = task;
      localStorageService.set('tasks',tasks);
    };

    this.delete = function(task){
      if(task.isNew()) {
        throw 'cannot delete a new task';
      }
      delete tasks[task.id];
      localStorageService.set('tasks',tasks);
    };

  });
