"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colors = function colors() {
  var neuroColors = new _brain["default"].NeuralNetwork();
  neuroColors.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'colors',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));
  var colorInput = {
    light: 0.5
  };
  console.log({
    colorInput: colorInput,
    colorOutput: neuroColors.run(colorInput)
  });
};

exports.colors = colors;