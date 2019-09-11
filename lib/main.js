"use strict";

var _xor = require("./examples/xor");

var _brightness = require("./examples/brightness");

var _colors = require("./examples/colors");

var _restaurants = require("./examples/restaurants");

var _market = require("./examples/market");

var params = process.argv.slice(2);
var examples = {
  xor: _xor.xor,
  brightness: _brightness.brightness,
  colors: _colors.colors,
  restaurants: _restaurants.restaurants,
  market: _market.market
};
examples[params[0]]();