'use strict';

function PlanType_Basic() {
  this.canSave = function(countObject) {
  	return (countObject.created < 50) && (countObject.updated < 50) && (countObject.deleted < 50);
  }
}

function PlanType_Free() {
	this.canSave = function(countObject) {
		return ((countObject.created + countObject.updated) < 20) && countObject.deleted < 5;
	}
}

function PlanType_Premium() {
	this.canSave = function(countObject) {
		return true;
	}
}

angular.module('todoAppApp')
  .factory('PlanType_Free', function(){
    return PlanType_Free;
  });

  angular.module('todoAppApp')
  .factory('PlanType_Basic', function(){
    return PlanType_Basic;
  });

  angular.module('todoAppApp')
  .factory('PlanType_Premium', function(){
    return PlanType_Premium;
  });