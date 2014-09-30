'use strict';

angular.module('todoAppApp')
  .service('taskRepository', function TaskRepository(localStorageService, Task) {
    var tasks = localStorageService.get('tasks') || {};

    var store = function(task){
      tasks[task.id] = task;
      task.setAsPristine();
      localStorageService.set('tasks',tasks);
    };

    var getCounter = function(key){
      return localStorageService.get(key) || 0;
    };

    var increaseCounter = function(key){
      var counter = parseInt(getCounter(key));
      counter += 1;
      localStorageService.set(key, counter);
    };

    var resetCounter = function(key){
      localStorageService.remove(key);
    };

    this.get = function(){
      return _.values(tasks).map(function(json){
        return new Task(json);
      });
    };

    this.add = function(task){
      var nextId = _.isEmpty(tasks) ? 1 : _.max(tasks,'id').id + 1;
      task.id = nextId;
      store(task);
      increaseCounter('created');
    };

    this.update = function(task){
      if(task.isNew()) {
        throw 'cannot update a new task';
      }
      if(!task.isDirty()) {
        throw 'cannot update a non-dirty task';
      }
      store(task);
      increaseCounter('updated');
    };

    this.delete = function(task){
      if(task.isNew()) {
        throw 'cannot delete a new task';
      }
      delete tasks[task.id];
      localStorageService.set('tasks',tasks);
      increaseCounter('deleted');
    };

    this.createdCount = function(){
      return getCounter('created');
    };

    this.updatedCount = function(){
      return getCounter('updated');
    };

    this.deletedCount = function(){
      return getCounter('deleted');
    };

    this.resetCounters = function(){
      resetCounter('created');
      resetCounter('updated');
      resetCounter('deleted');
    };
  });
