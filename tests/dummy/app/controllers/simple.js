// BEGIN-SNIPPET simple-controller
import Ember from 'ember';

const {
  get
} = Ember;

export default Ember.Controller.extend({
  init() {
    this._super();
    this.set('openNodes', []);
  },
  actions: {
    open(node) {
      this.get('openNodes').addObject(node);
    },
    close(node) {
      this.get('openNodes').removeObject(node);
    },
    fetch(node) {
      let result;
      let type = get(node, 'type');
      if (type === 'character') {
        result = [
          { type: 'location', name: 'Jerry\'s house' },
          { type: 'location', name: 'Dinner'}
        ];
      }
      if (type === 'location') {
        result = [
          { type: 'prop', name: 'Fork' },
          { type: 'prop', name: 'Shoe'}
        ];
      }
      return new Ember.RSVP.Promise(function(resolve){
        Ember.run.later(resolve, result, 3000);
      });
    }
  }
});
// END-SNIPPET
