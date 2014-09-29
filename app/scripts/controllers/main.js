'use strict';

angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope, taskRepository, Task, BasicPlan) {

    // Task CRUD
    $scope.tasks = taskRepository.get();
    $scope.addTask = function(){
      var newTask = new Task({date: new Date().toISOString()});
      $scope.tasks.push(newTask);
      return newTask;
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
    $scope.hasChanged = function(){
      return _.some($scope.tasks, function(task){
        return task.isDirty() || task.toBeDeleted;
      });
    };


    // Counters
    $scope.createdCount = function(){
      return taskRepository.createdCount();
    };
    $scope.updatedCount = function(){
      return taskRepository.updatedCount();
    };
    $scope.deletedCount = function(){
      return taskRepository.deletedCount();
    };
    $scope.resetCounters = function(){
      taskRepository.resetCounters();
    };


    // Plans
    var basicPlan = new BasicPlan();
    $scope.plans = [basicPlan];
    $scope.selectedPlan = basicPlan;


  });
