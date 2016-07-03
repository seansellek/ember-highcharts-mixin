[![Code Climate](https://codeclimate.com/github/seansellek/ember-highcharts-mixin/badges/gpa.svg)](https://codeclimate.com/github/seansellek/ember-highcharts-mixin)
[![Build Status](https://travis-ci.org/seansellek/ember-highcharts-mixin.svg?branch=master)](https://travis-ci.org/seansellek/ember-highcharts-mixin)
# Highcharts-mixin

Takes care of the hard stuff so you can focus on building charts.

## Installation

`ember install ember-highcharts-mixin`

## Usage

This mixin will automagicify a component with auto chart-drawing and refreshing. Include it with:

```javascript
import HighchartsMixin from 'ember-highcharts-mixin';
```

At the top of your component's file. Your component only needs to provide two things: 

1. An `options` property that returns a POJO of Highcharts options. This would be the same object you'd pass to Highcharts, [see documentation](http://www.highcharts.com/docs/getting-started/how-to-set-options). The only difference is you won't include your `series` here.
2. A `series` property that returns an array of objects representing your [series](http://api.highcharts.com/highcharts#series). This would be the same array you'd normally have as a `series` property of the Highcharts options object.

And that's it! You can now place your component in your templates. 

Why the separation of `series` from `options`? Because it's very unlikely your data is already formatted as Highcharts series. And each series is unique to that specific chart. Separating the `series` allows you to define it as a computed property that takes in data from elsewhere and massages it into the format you want for this particular chart. Everything is live bound, so if the data changes, your `series` array will change, and your chart will redraw.

## Examples
See https://seansellek.github.io/ember-highcharts-mixin for a couple examples.
