"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.denormalizeMarketData = exports.normalizeMarketData = exports.getExtremes = void 0;

var _fp = _interopRequireDefault(require("lodash/fp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var normalize = function normalize(_ref, price) {
  var lowest = _ref.lowest,
      highest = _ref.highest;
  return (price - lowest) / (highest - lowest);
};

var denormalize = function denormalize(_ref2, normalizedPrice) {
  var lowest = _ref2.lowest,
      highest = _ref2.highest;
  return normalizedPrice * (highest - lowest) + lowest;
};

var processData = function processData(_ref3) {
  var data = _ref3.data,
      extremes = _ref3.extremes,
      fn = _ref3.fn;
  return _fp["default"].map(function (_ref4) {
    var open = _ref4.open,
        high = _ref4.high,
        low = _ref4.low,
        close = _ref4.close;
    return {
      open: fn(extremes, open),
      high: fn(extremes, high),
      low: fn(extremes, low),
      close: fn(extremes, close)
    };
  }, data);
};

var getExtremes = _fp["default"].flow( // @ts-ignore
_fp["default"].reduce(function (acc, _ref5) {
  var open = _ref5.open,
      high = _ref5.high,
      low = _ref5.low,
      close = _ref5.close;
  return [].concat(_toConsumableArray(acc), [open, high, low, close]);
}, []), _fp["default"].sortBy(_fp["default"].identity), function (x) {
  return {
    lowest: _fp["default"].head(x),
    highest: _fp["default"].last(x)
  };
});

exports.getExtremes = getExtremes;

var normalizeMarketData = _fp["default"].curry(function (data, extremes) {
  return processData({
    data: data,
    extremes: extremes,
    fn: normalize
  });
});

exports.normalizeMarketData = normalizeMarketData;

var denormalizeMarketData = _fp["default"].curry(function (data, extremes) {
  return processData({
    data: data,
    extremes: extremes,
    fn: denormalize
  });
});

exports.denormalizeMarketData = denormalizeMarketData;