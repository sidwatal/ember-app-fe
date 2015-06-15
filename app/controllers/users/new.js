import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    createUser: function() {
      this.get('model').save();
      this.transitionTo('users.index');
    	return false;
  	}
  }
});
