'use strict';

angular.module('todoAppApp')
  .filter('hideToBeDeleted', function () {
    return function (input) {
      return input.filter(function(task){
        return !task.isDeleteable();
      });
    };
  });
