'use strict';

describe('Service: Task', function () {

  // instantiate service
  var task;
  beforeEach(inject(function (_Task_) {
    Task = _Task_;
  }));

  it('should return true when isNew is called on a task without id', function () {
    expect(new Task().isNew()).toBeTruthy();
  });

  it('should return false when isNew is called on a task with id', function () {
    expect(new Task({id: 12}).isNew()).toBeFalsy();
  });

});
