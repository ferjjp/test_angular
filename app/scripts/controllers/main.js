'use strict';

angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope,$window, taskRepository, Task, Plan) {

    // Task CRUD
    $scope.tasks = taskRepository.get();
    $scope.addTask = function(){
      var newTask = new Task({date: new Date().toISOString()});
      $scope.tasks.push(newTask);
      return newTask;
    };
    $scope.saveAll = function(){
      $scope.tasks.forEach(function(task){
        $scope.selectedPlan.save($window,task,taskRepository,$scope.getCountObject());
      });
      $scope.tasks = taskRepository.get();
    };
    $scope.hasChanged = function(){
      return _.some($scope.tasks, function(task){
        return task.isDirty() || task.isDeleteable();
      });
    };

    $scope.deleteAll = function() {
      $scope.tasks.forEach(function(task){
        task.setToBeDeleted();
      });
    }


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

    $scope.getCountObject = function() {
      return {
        'created': $scope.createdCount(),
        'updated': $scope.updatedCount(),
        'deleted': $scope.deletedCount()
      }
    }

    // Plans
    var basicPlan = new Plan('basicPlan',new PlanType_Basic());
    var freePlan = new Plan('FreePlan', new PlanType_Free());
    var premiumPlan = new Plan('PremiumPlan', new PlanType_Premium());
    $scope.plans = [basicPlan,freePlan,premiumPlan];
    $scope.selectedPlan = basicPlan;


  });
