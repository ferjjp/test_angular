'use strict';

angular.module('todoAppApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    $scope.tasks = localStorageService.get('tasks');
  });
