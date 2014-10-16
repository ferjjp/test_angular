'use strict';

describe('Service: Task', function () {

  // instantiate service
  var Task;
  beforeEach(inject(function (_Task_) {
    Task = _Task_;
  }));

  it('should return true when isNew is called on a task without id', function () {
    expect(new Task().isNew()).toBeTruthy();
  });

  it('should return false when isNew is called on a task with id', function () {
    expect(new Task({id: 12}).isNew()).toBeFalsy();
  });

  it('a new Task should be dirty', function () {
    expect(new Task().isDirty()).toBeTruthy();
  });

  it('an existing Task should not be dirty when is instantiated', function () {
    expect(new Task({id: 12}).isDirty()).toBeFalsy();
  });

  it('should be set as dirty when setAsDirty is called', function () {
    var existingTask = new Task({id: 12});
    existingTask.setAsDirty();
    expect(existingTask.isDirty()).toBeTruthy();
  });

  it('should be set toBeDeleted when setToBeDeleted is called', function () {
    var task = new Task({id: 12});
    task.setToBeDeleted();
    expect(task.isDeleteable()).toBeTruthy();
  });

});
