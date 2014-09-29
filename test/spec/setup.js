'use strict';

// load the service's module
beforeEach(module('todoAppApp'));

beforeEach(function(){
  this.addMatchers({
    toDeepEqual: function(expected) {
      var ignoreFns = _.partialRight(_.pick,function(value){
        return !_.isFunction(value);
      });

      return _.isEqual(ignoreFns(this.actual),ignoreFns(expected));
    }
  });
});

