'use strict';

angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope, taskRepository, Task) {

    $scope.tasks = taskRepository.get();

    $scope.addTask = function(){
      var newTask = new Task({date: new Date().toISOString()});
      $scope.tasks.push(newTask);
      return newTask;
    };

    $scope.hasChanged = function(){
      return _.some($scope.tasks, function(task){
        return task.isDirty() || task.toBeDeleted;
      });
    };

    $scope.saveAll = function(){
      $scope.tasks.forEach(function(task){

        if(task.isNew()){
          taskRepository.add(task);
        }
        else if(task.isDirty() && !task.toBeDeleted){
          taskRepository.update(task);
        }
        else if(task.toBeDeleted){
          taskRepository.delete(task);
        }

      });
      $scope.tasks = taskRepository.get();
    };

  });
