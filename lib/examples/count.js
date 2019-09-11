"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var count = function count() {
  var neuroCount = new _brain["default"].recurrent.LSTMTimeStep();
  neuroCount.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTMTimeStep,
    name: 'count',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));
  var countInput = [1, 2, 3];
  console.log({
    countInput: countInput,
    colorOutput: neuroCount.run(countInput)
  });
};

exports.count = count;