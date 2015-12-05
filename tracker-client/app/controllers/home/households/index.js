"use strict";

import Ember from "ember";

export default Ember.Controller.extend({
  householdsSorting: ['district.name', 'teachers', 'name'],
  sortedHouseholds: Ember.computed.sort('model', 'householdsSorting'),

  activeHouseholds: Ember.computed.filter('model.@each.status', function(household) {
    return household.get('status');
  }),
  deactiveHouseholds: Ember.computed.filter('model.@each.status', function(household) {
    return !household.get('status');
  }),

  sortedActiveHouseholds: Ember.computed.sort('activeHouseholds.@each.status', 'householdsSorting'),
  sortedDeactiveHouseholds: Ember.computed.sort('deactiveHouseholds.@each.status', 'householdsSorting'),

  actions: {
    createNewHousehold: function() {
      var newHousehold = this.store.createRecord('household');
      this.send('showModal', 'household-modal', newHousehold);
    },

    disableHousehold: function(household) {
      household.set('status', false);
      household.save();
    },

    enableHousehold: function(household) {
      household.set('status', true);
      household.save();
    }
  }
});
