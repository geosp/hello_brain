"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentiment = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sentiment = function sentiment() {
  var neuro = new _brain["default"].recurrent.LSTM();
  neuro.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTM,
    name: 'sentiment',
    retrain: false,
    trainingOptions: {
      iterations: 1000,
      errorThresh: 0.011
    }
  }));
  var sentimentInput = "I am unhappy!";
  console.log({
    sentimentInput: sentimentInput,
    sentimentOutput: neuro.run(sentimentInput)
  });
};

exports.sentiment = sentiment;