import Ember from 'ember';

const { get, set, on, computed, observer, run, merge } = Ember;

export default Ember.Mixin.create({
  series: [],
  options: {},

  highcharts(options) {
    return this.$().highcharts(options);
  },

  chartOptions: computed('series', 'options',  {
    get() {
      let series = get(this, 'series');
      let options = get(this, 'options');

      return merge(options, { series });
    },
    set(key, value) {
      set(this, "series", value.series);
      delete value.series;
      set(this, 'options', value);
    }
  }),

  seriesDidChange: observer('series', function() {
    let chart = get(this, 'chart');
    let newSeries = get(this, 'series');

    if ( !(chart && newSeries) ) {
      return;
    }

    while(chart.series[0]) {
      chart.series[0].remove(false);
    }

    for (let series of newSeries) {
      chart.addSeries(series);
    }

    chart.redraw();
  }),

  draw() {
    const options = get(this, 'chartOptions');
    set(this, 'chart', this.highcharts(options).highcharts());
  },

  drawLater() {
    run.scheduleOnce('afterRender', this, 'draw');
  },

  _renderChart: on('didInsertElement', function() {
    this.drawLater();
  })
});
