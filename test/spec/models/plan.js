'use strict'

describe("Plan", function() {
	var $window;
	var Plan;
	var Task;

	beforeEach(inject(function(_$window_,_Plan_,_Task_) {
		$window = _$window_;
		Plan = _Plan_;
		Task = _Task_;
	}));

it('can save is false, alert shows up', function(){
	var type = jasmine.createSpyObj('type',['canSave']);
	var plan = new Plan('test',type);
	var task = jasmine.createSpyObj('task',['text']);
	spyOn($window,'alert');
	plan.save($window,task,null,null)
	expect($window.alert).toHaveBeenCalled();
});
})