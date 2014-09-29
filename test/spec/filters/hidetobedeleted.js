'use strict';

describe('Filter: hideToBeDeleted', function () {

  // load the filter's module
  beforeEach(module('todoAppApp'));

  // initialize a new instance of the filter before each test
  var hideToBeDeleted;
  var Task;

  beforeEach(inject(function ($filter, _Task_) {
    hideToBeDeleted = $filter('hideToBeDeleted');
    Task = _Task_;
  }));

  it('should return the task not to be deleted', function () {
    var taskToBeDeleted = new Task({text: 'borrame', toBeDeleted: true});
    var otherTask = new Task({text: 'tarea'});
    var tasks = [taskToBeDeleted, otherTask];
    expect(hideToBeDeleted(tasks)).toEqual([otherTask]);
  });

});
