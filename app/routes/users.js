import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
    return this.store.findAll('user');
  },
  actions: {
    deleteUser: function(user) {
    	var _this = this;
  	 	user.destroyRecord().then(function(){
  	 		_this.transitionTo('users.index');
  	 	})
  	}
  }
});
