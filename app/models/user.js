import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dob: DS.attr('string'),
  deleted_at: DS.attr('date')
});
