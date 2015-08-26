"use strict";

import Ember from "ember";

export default Ember.Controller.extend({
  sistersSorting: ['lastName', 'firstName'],
  sortedSisters: Ember.computed.sort('sisters', 'sistersSorting'),
  newSister: null
});
