'use strict';

describe('Service: taskRepository', function () {

  // load the service's module
  beforeEach(module('todoAppApp'));

  var savedTask = {id: 1, text: 'resolver este ejercicio', date: '2014-09-29T13:03:06.030Z'};
  var allTasks = {1: savedTask};

  var mockedLocalStorage = {
    get: function(){
      return allTasks;
    }
  };

  // mock service dependencies
  beforeEach(function(){
    module(function ($provide){
      $provide.value('localStorageService', mockedLocalStorage);
    });
  });

  // instantiate service
  var taskRepository;
  beforeEach(inject(function (_taskRepository_) {
    taskRepository = _taskRepository_;
  }));

  it('should return an array of tasks when get is called', function () {
    expect(taskRepository.get().length).toBe(1);
    expect(taskRepository.get()[0]).toBe(savedTask);
  });

});
