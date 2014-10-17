'use strict'

describe("Plan", function() {
	var window_;
	var Plan;
	var MainController;
	var scope;


	beforeEach(inject(function(_$window_,$controller,$rootScope,_Plan_) {
		window_ = _$window_
		Plan = _Plan_;
		scope = $rootScope.$new;
		MainController = $controller('MainCtrl',{ $window: window_, $scope: scope});
	}));

it('can save is false, alert shows up', function(){
	scope.selectedPlan = new Plan('asdasd',null);
	spyOn(scope.selectedPlan,'canSave').andReturn(false);
	spyOn(window_,'alert');
	scope.saveAll()
	expect(window_.alert).toHaveBeenCalled();
});
})