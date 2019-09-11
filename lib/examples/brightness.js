"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brightness = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var brightness = function brightness() {
  var neuroBrightness = new _brain["default"].NeuralNetwork();
  neuroBrightness.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'brightness',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));
  var brightNessInput = {
    red: 0.02,
    blue: 0.5,
    green: 0.5
  };
  console.log({
    brightNessInput: brightNessInput,
    colorOutput: neuroBrightness.run(brightNessInput)
  });
};

exports.brightness = brightness;