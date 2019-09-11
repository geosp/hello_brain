"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restaurants = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var restaurants = function restaurants() {
  var neuroRestaurants = new _brain["default"].NeuralNetwork();
  neuroRestaurants.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'restaurants',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));
  var restaurantsInput = {
    Friday: 1
  };
  console.log({
    restaurantsInput: restaurantsInput,
    restaurantsOutput: neuroRestaurants.run(restaurantsInput)
  });
};

exports.restaurants = restaurants;