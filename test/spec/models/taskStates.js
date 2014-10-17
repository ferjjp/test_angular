'use strict';

describe('TaskStates', function () {

  var task;
  var taskRepository;
  beforeEach(inject(function (_Task_,_taskRepository_) {
    task = new _Task_();
    taskRepository = _taskRepository_;
  }));

  it('a task with a state on delete, should call delete on save',function() {
    task.setToBeDeleted();
    spyOn(taskRepository,'delete');
    task.save(taskRepository);
    expect(taskRepository.delete).toHaveBeenCalledWith(task);
  });

  it('a task with a dirtied state should update on save ', function() {
    task.setAsDirty();
    spyOn(taskRepository,'update');
    task.save(taskRepository);
    expect(taskRepository.update).toHaveBeenCalledWith(task);
  });

  it('a task with a new state should be added on save', function() {
    spyOn(taskRepository,'add');
    task.save(taskRepository);
    expect(taskRepository.add).toHaveBeenCalledWith(task);
  })
 
});
