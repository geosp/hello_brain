"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addition = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addition = function addition() {
  var neuroAddition = new _brain["default"].recurrent.LSTM();
  neuroAddition.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTM,
    name: 'addition',
    retrain: false,
    options: {
      hiddenLayers: [20]
    },
    trainingOptions: {
      errorThresh: 0.025
    }
  }));
  var additionInput = '1+1=';
  console.log({
    additionInput: additionInput,
    additionOutput: neuroAddition.run(additionInput)
  });
};

exports.addition = addition;