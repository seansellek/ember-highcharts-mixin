/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-highcharts-mixin',

  included(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/highcharts/highcharts.js');
  }
};
