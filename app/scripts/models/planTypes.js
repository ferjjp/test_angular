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