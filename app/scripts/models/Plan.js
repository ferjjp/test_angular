'use strict';

function Plan(name,type) {
  this.name = name;
  this.type = type;
  this.save = function($window,task, repository, countObject) {
  	if (this.type.canSave(countObject)) {
  		task.save(repository);
  	} else {
  		$window.alert('Sorry, the task ' + task.text + ' could not be saved.' );  	} //Si bien lo deje aca por brevedad, si quisiera un mensaje especifico lo podria delegar en el tipo
  }
}

angular.module('todoAppApp')
  .factory('Plan', function(){
    return Plan;
  });
