import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    return this.store.findAll('user');
  },
  actions: {
    deleteUser: function(user) {
  	 	user.destroyRecord()
      this.refresh();
  	}
  }
});
