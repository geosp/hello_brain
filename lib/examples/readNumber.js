"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readNumber = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

var _fp = _interopRequireDefault(require("lodash/fp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var readNumber = function readNumber() {
  var normalizeNumber = function normalizeNumber(number) {
    if (number.length === 49) return _toConsumableArray(number).map(function (c) {
      return c === '#' ? 1 : 0;
    });else throw 'Invalid length!!!';
  };

  var zero = normalizeNumber('#######' + '#     #' + '#     #' + '#     #' + '#     #' + '#     #' + '#######');
  var one = normalizeNumber('   #   ' + '   #   ' + '   #   ' + '   #   ' + '   #   ' + '   #   ' + '   #   ');
  var two = normalizeNumber('#######' + '      #' + '      #' + '#######' + '#      ' + '#      ' + '#######');
  var three = normalizeNumber('#######' + '      #' + '      #' + '#######' + '      #' + '      #' + '#######');
  var four = normalizeNumber('#     #' + '#     #' + '#######' + '      #' + '      #' + '      #' + '      #');
  var five = normalizeNumber('#######' + '#      ' + '#      ' + '#######' + '      #' + '      #' + '#######');
  var six = normalizeNumber('#######' + '#      ' + '#      ' + '#######' + '#     #' + '#     #' + '#######');
  var seven = normalizeNumber('#######' + '      #' + '      #' + '      #' + '      #' + '      #' + '      #');
  var eight = normalizeNumber('#######' + '#     #' + '#     #' + '#######' + '#     #' + '#     #' + '#######');
  var nine = normalizeNumber('#######' + '#     #' + '#     #' + '#######' + '      #' + '      #' + '      #');
  var almostNine = normalizeNumber('# # # #' + '#     #' + '#     #' + '# # # #' + '      #' + '       ' + '      #');
  var numbers = {
    zero: zero,
    one: one,
    two: two,
    three: three,
    four: four,
    five: five,
    six: six,
    seven: seven,
    eight: eight,
    nine: nine
  };

  var data = _fp["default"].flow(_fp["default"].keys, _fp["default"].map(function (key) {
    return {
      input: numbers[key],
      output: _defineProperty({}, key, 1)
    };
  }))(numbers);

  var neuro = new _brain["default"].NeuralNetwork();
  neuro.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'readNumber',
    retrain: false,
    options: {
      hiddenLayers: [3]
    },
    prepocessor: function prepocessor() {
      return data;
    }
  }));
  var numberInput = almostNine;
  console.log({
    numberInput: JSON.stringify(numberInput),
    numberOutput: _brain["default"].likely(numberInput, neuro)
  });
};

exports.readNumber = readNumber;