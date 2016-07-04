import Ember from 'ember';
import HighchartsMixin from 'ember-highcharts-mixin';

export default Ember.Component.extend(HighchartsMixin, {
  series: Ember.computed('data', function() {
  var series = [{
    name: 'Jane',
    data: [1, 0, 4]
  }, {
    name: 'John',
    data: [5, 7, 3]
  }];
  
  if (this.get('data')) {
    series.push({
    name: 'Joe',
    data: [4, 6, 1]
    });
  }
  return series;
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
    }}
  });
