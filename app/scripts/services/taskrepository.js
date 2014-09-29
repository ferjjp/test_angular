'use strict';

angular.module('todoAppApp')
  .service('taskRepository', function TaskRepository(localStorageService) {
    var tasks = localStorageService.get('tasks') || {};

    this.get = function(){
      return _.values(tasks);
    };

  });
