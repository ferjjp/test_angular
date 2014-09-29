'use strict';

angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope,taskRepository) {

    $scope.tasks = taskRepository.get();

    $scope.addTask = function(){
      var newTask = {date: new Date().toISOString(), isDirty: true};
      $scope.tasks.push(newTask);
      return newTask;
    };

  });
