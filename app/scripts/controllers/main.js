'use strict';

angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope,localStorageService) {

    $scope.tasks = localStorageService.get('tasks');

    $scope.addTask = function(){
      var newTask = {date: new Date().toISOString(), isDirty: true};
      $scope.tasks.push(newTask);
      return newTask;
    };

  });
