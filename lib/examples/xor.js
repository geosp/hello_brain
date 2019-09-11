"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _fp = _interopRequireDefault(require("lodash/fp"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var xor = function xor() {
  var neuroXor = new _brain["default"].NeuralNetwork();
  neuroXor.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'xor',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));

  var xorRun = _fp["default"].flow(function (x) {
    return neuroXor.run(x);
  }, _fp["default"].head);

  var xorInput = [0, 1];
  console.log({
    xorInput: xorInput,
    xorOutput: xorRun(xorInput)
  });
};

exports.xor = xor;