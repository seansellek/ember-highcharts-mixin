import Ember from 'ember';
import HighchartsMixinMixin from 'ember-highcharts-mixin/mixins/highcharts-mixin';
import { module, test } from 'qunit';

let subject;

module('Unit | Mixin | highcharts mixin', {
  beforeEach() {
    let SampleHighchartsComponent = Ember.Component.extend(HighchartsMixinMixin, {
      series: Ember.computed('data', function () {
        let data = this.get('data');
        let seriesArray = [];
        for (let person in data) {
          let series = {
            name: person,
            data: []
          };
          for (let fruit in data[person]) {
            series.data.push(data[person][fruit]);
          }
          seriesArray.push(series);
        }
        return seriesArray;
      }),
      options: {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        }
      }
    });

    subject = SampleHighchartsComponent.create({
      data: {
        'Jane': {
          apples: 1,
          bananas: 0,
          oranges: 4
        },

        'John': {
          apples: 5,
          bananas: 7,
          oranges: 3
        }
      }
    });
  }
});

test('it merges series and options into chartOptions', function (assert) {

  assert.deepEqual(subject.get('chartOptions'), {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  }, "Merges series into options hash.");
});

test('instantiates highcharts object and sets it as chart', function (assert) {
  let highchartsStub = { highcharts: sinon.stub().returns('chartStub') };
  subject.highcharts = sinon.stub().returns(highchartsStub);
  
  Ember.run(function () {
    subject.trigger('didInsertElement');
  });

  assert.ok(subject.highcharts.calledWith(subject.get('chartOptions')), "Passes chartOptions to highcharts.");
  assert.ok(highchartsStub.highcharts.calledOnce, "Initialized highcharts.");
  assert.equal(subject.get('chart'), 'chartStub', 'Saved chart object.');
});

test('redraws chart when series change', function(assert) {
  subject.chart = {
    redraw: sinon.spy(),
    series: [{
      remove: sinon.spy()
    }],
    addSeries: sinon.spy()
  };
  let series = [{
      name: 'Jane',
      data: [1, 0, 4]
  }];
  subject.set('series', series );
  assert.ok(subject.chart.series[0].remove.calledOnce, "Removed old series.");
  assert.ok(subject.chart.addSeries.calledWith(series[0]), "Added new series.");
  assert.ok(subject.chart.redraw.calledOnce, "Redrew chart.");
});
