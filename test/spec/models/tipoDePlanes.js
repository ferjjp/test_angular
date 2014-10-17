'use strict'
describe('TipoDePlanes',function() {
var Free;
var Premium;
var Basic;
var $window;
//No se me ocurrio otra manera que crear una fabrica para cada uno a este momento, igual me falta investigar, pero no tuve mucho tiempo :P
beforeEach(inject(function(_$window_,PlanType_Free,PlanType_Basic,PlanType_Premium) {
 $window = _$window_;
 Free = PlanType_Free;
 Premium = PlanType_Premium;
 Basic = PlanType_Basic;
}));

var createExpect = function(Type,ObjCount) {
	var type = new Type();
	return expect(type.canSave(ObjCount));
}

it('type premium and count 10000000 of each type should be able to save',function() {
	createExpect(Premium,{'created': 10000000,
							'updated': 10000000,
							'deleted': 10000000}).toBeTruthy();

})

it('plan type free and count 30 of created should not be able to save', function() {
	createExpect(Free,{'created': 30,
							'updated': 0,
							'deleted': 0}).toBeFalsy();
});

it('type free and count 10 between created and updated should be able to save', function() {
	createExpect(Free,{'created': 5,
							'updated': 5,
							'deleted': 0}).toBeTruthy();
})

it('type free and count 5 on delete should not be able to save',function() {
		createExpect(Free,{'created': 0,
							'updated': 0,
							'deleted': 5}).toBeFalsy();
})

it('type basic with 20 in each count type should be able to save',function() {
	createExpect(Basic,{'created': 20,
						  'updated': 20,
						  'deleted': 20}).toBeTruthy();
})

it('type basic with 50 in created should not be able to save', function() {
	createExpect(Basic,{'created': 50,
						  'updated': 20,
						  'deleted': 20}).toBeFalsy();
})

it('type basic with 1000 in updated should not be able to save',function() {
	createExpect(Basic,{'created': 0,
						  'updated': 1000,
						  'deleted': 0}).toBeFalsy();
})
});

