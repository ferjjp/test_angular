'use strict';

angular.module('todoAppApp')
  .service('taskRepository', function TaskRepository(localStorageService) {
    var tasks = localStorageService.get('tasks') || {};

    this.get = function(){
      return _.values(tasks);
    };

    this.add = function(task){
      var last = _.max(tasks,'id');
      var nextId = last === undefined ? 1 : last.id + 1;
      task.id = nextId;
      tasks[task.id] = task;
      localStorageService.set('tasks',tasks);
    };

    this.update = function(task){
      if(!task.id) {
        throw 'cannot update a new task';
      }
      tasks[task.id] = task;
      localStorageService.set('tasks',tasks);
    };

  });
