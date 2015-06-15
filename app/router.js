import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function() { 
  	this.route('new');
  	this.route('deleted-users');
  	this.route('all-users');
  	this.route('show', { path: ':user_id' });
  });
});

export default Router;
