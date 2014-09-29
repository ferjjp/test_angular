'use strict';

describe('Service: taskRepository', function () {
  var savedTask;

  // load the service's module
  beforeEach(module('todoAppApp'));

  // mock service dependencies
  beforeEach(function(){
    module(function ($provide){
      savedTask = {id: 1, text: 'resolver este ejercicio', date: '2014-09-29T13:03:06.030Z'};
      var allTasks = {1: savedTask};

      var mockedLocalStorage = {
        get: function(){
          return allTasks;
        },
        set: function(value) {
          allTasks = value;
        }
      };

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


  describe("when add is called", function(){

    beforeEach(function(){
      var newTask = {text: 'soy una nueva tarea'};
      taskRepository.add(newTask);
    });

    it('should store the task ', function () {
      expect(taskRepository.get().length).toBe(2);
    });

    it('should set the following id to the new task when add is called', function () {
      expect(taskRepository.get()[1]).toEqual({id: 2, text: 'soy una nueva tarea'});
    });

  });

});
