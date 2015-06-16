import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		this.store.init();
    return this.store.find('user', {query: 'with_deleted'});
  },
});
