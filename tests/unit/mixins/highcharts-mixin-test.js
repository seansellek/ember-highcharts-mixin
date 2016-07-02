import Ember from 'ember';
import HighchartsMixinMixin from 'ember-highcharts-mixin/mixins/highcharts-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | highcharts mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let HighchartsMixinObject = Ember.Object.extend(HighchartsMixinMixin);
  let subject = HighchartsMixinObject.create();
  assert.ok(subject);
});
