'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoAppApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,taskRepository) {
    scope = $rootScope.$new();

    var savedTasks = [{id: 1, text: 'resolver este ejercicio', date: '2014-09-29T13:03:06.030Z'}];
    spyOn(taskRepository, 'get').andReturn(savedTasks);

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      taskRepository: taskRepository
    });
  }));

  it('should load tasks on initialization', function () {
    expect(scope.tasks.length).toBe(1);
  });

  it('should add a task on dirty state when addTask is called', function () {
    var newTask = scope.addTask();
    expect(scope.tasks.length).toBe(2);
    expect(newTask.isDirty).toBeTruthy();
  });
});
