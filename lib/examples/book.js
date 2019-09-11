"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.book = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var book = function book() {
  var neuro = new _brain["default"].recurrent.LSTM();
  neuro.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTM,
    name: 'book',
    retrain: false,
    trainingOptions: {
      iterations: 1500,
      errorThresh: 0.011
    }
  }));
  var bookInput = 'Jane saw seat';
  console.log({
    bookInput: bookInput,
    additionOutput: neuro.run(bookInput)
  });
};

exports.book = book;