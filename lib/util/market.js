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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL21hcmtldC50cyJdLCJuYW1lcyI6WyJub3JtYWxpemUiLCJwcmljZSIsImxvd2VzdCIsImhpZ2hlc3QiLCJkZW5vcm1hbGl6ZSIsIm5vcm1hbGl6ZWRQcmljZSIsInByb2Nlc3NEYXRhIiwiZGF0YSIsImV4dHJlbWVzIiwiZm4iLCJfIiwibWFwIiwib3BlbiIsImhpZ2giLCJsb3ciLCJjbG9zZSIsImdldEV4dHJlbWVzIiwiZmxvdyIsInJlZHVjZSIsImFjYyIsInNvcnRCeSIsImlkZW50aXR5IiwieCIsImhlYWQiLCJsYXN0Iiwibm9ybWFsaXplTWFya2V0RGF0YSIsImN1cnJ5IiwiZGVub3JtYWxpemVNYXJrZXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXNCQyxLQUF0QjtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLE9BQVgsUUFBV0EsT0FBWDtBQUFBLFNBQ2hCLENBQUNGLEtBQUssR0FBR0MsTUFBVCxLQUFvQkMsT0FBTyxHQUFHRCxNQUE5QixDQURnQjtBQUFBLENBQWxCOztBQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBQXNCQyxlQUF0QjtBQUFBLE1BQUdILE1BQUgsU0FBR0EsTUFBSDtBQUFBLE1BQVdDLE9BQVgsU0FBV0EsT0FBWDtBQUFBLFNBQ2xCRSxlQUFlLElBQUlGLE9BQU8sR0FBR0QsTUFBZCxDQUFmLEdBQXVDQSxNQURyQjtBQUFBLENBQXBCOztBQUVBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0MsUUFBVCxTQUFTQSxRQUFUO0FBQUEsTUFBbUJDLEVBQW5CLFNBQW1CQSxFQUFuQjtBQUFBLFNBQ2xCQyxlQUFFQyxHQUFGLENBQ0U7QUFBQSxRQUFHQyxJQUFILFNBQUdBLElBQUg7QUFBQSxRQUFTQyxJQUFULFNBQVNBLElBQVQ7QUFBQSxRQUFlQyxHQUFmLFNBQWVBLEdBQWY7QUFBQSxRQUFvQkMsS0FBcEIsU0FBb0JBLEtBQXBCO0FBQUEsV0FBaUM7QUFDL0JILE1BQUFBLElBQUksRUFBRUgsRUFBRSxDQUFDRCxRQUFELEVBQVdJLElBQVgsQ0FEdUI7QUFFL0JDLE1BQUFBLElBQUksRUFBRUosRUFBRSxDQUFDRCxRQUFELEVBQVdLLElBQVgsQ0FGdUI7QUFHL0JDLE1BQUFBLEdBQUcsRUFBRUwsRUFBRSxDQUFDRCxRQUFELEVBQVdNLEdBQVgsQ0FId0I7QUFJL0JDLE1BQUFBLEtBQUssRUFBRU4sRUFBRSxDQUFDRCxRQUFELEVBQVdPLEtBQVg7QUFKc0IsS0FBakM7QUFBQSxHQURGLEVBT0VSLElBUEYsQ0FEa0I7QUFBQSxDQUFwQjs7QUFVTyxJQUFJUyxXQUFXLEdBQUdOLGVBQUVPLElBQUYsRUFDdkI7QUFDQVAsZUFBRVEsTUFBRixDQUFTLFVBQUNDLEdBQUQsU0FBcUM7QUFBQSxNQUE3QlAsSUFBNkIsU0FBN0JBLElBQTZCO0FBQUEsTUFBdkJDLElBQXVCLFNBQXZCQSxJQUF1QjtBQUFBLE1BQWpCQyxHQUFpQixTQUFqQkEsR0FBaUI7QUFBQSxNQUFaQyxLQUFZLFNBQVpBLEtBQVk7QUFDNUMsc0NBQVdJLEdBQVgsSUFBZ0JQLElBQWhCLEVBQXNCQyxJQUF0QixFQUE0QkMsR0FBNUIsRUFBaUNDLEtBQWpDO0FBQ0QsQ0FGRCxFQUVHLEVBRkgsQ0FGdUIsRUFLdkJMLGVBQUVVLE1BQUYsQ0FBU1YsZUFBRVcsUUFBWCxDQUx1QixFQU12QixVQUFBQyxDQUFDO0FBQUEsU0FBSztBQUFFcEIsSUFBQUEsTUFBTSxFQUFFUSxlQUFFYSxJQUFGLENBQU9ELENBQVAsQ0FBVjtBQUFxQm5CLElBQUFBLE9BQU8sRUFBRU8sZUFBRWMsSUFBRixDQUFPRixDQUFQO0FBQTlCLEdBQUw7QUFBQSxDQU5zQixDQUFsQjs7OztBQVFBLElBQUlHLG1CQUFtQixHQUFHZixlQUFFZ0IsS0FBRixDQUFRLFVBQUNuQixJQUFELEVBQU9DLFFBQVA7QUFBQSxTQUN2Q0YsV0FBVyxDQUFDO0FBQUVDLElBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxJQUFBQSxRQUFRLEVBQVJBLFFBQVI7QUFBa0JDLElBQUFBLEVBQUUsRUFBRVQ7QUFBdEIsR0FBRCxDQUQ0QjtBQUFBLENBQVIsQ0FBMUI7Ozs7QUFFQSxJQUFJMkIscUJBQXFCLEdBQUdqQixlQUFFZ0IsS0FBRixDQUFRLFVBQUNuQixJQUFELEVBQU9DLFFBQVA7QUFBQSxTQUN6Q0YsV0FBVyxDQUFDO0FBQUVDLElBQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRQyxJQUFBQSxRQUFRLEVBQVJBLFFBQVI7QUFBa0JDLElBQUFBLEVBQUUsRUFBRUw7QUFBdEIsR0FBRCxDQUQ4QjtBQUFBLENBQVIsQ0FBNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gvZnAnXG5cbmNvbnN0IG5vcm1hbGl6ZSA9ICh7IGxvd2VzdCwgaGlnaGVzdCB9LCBwcmljZSkgPT4gXG4gIChwcmljZSAtIGxvd2VzdCkgLyAoaGlnaGVzdCAtIGxvd2VzdClcbmNvbnN0IGRlbm9ybWFsaXplID0gKHsgbG93ZXN0LCBoaWdoZXN0IH0sIG5vcm1hbGl6ZWRQcmljZSkgPT5cbiAgbm9ybWFsaXplZFByaWNlICogKGhpZ2hlc3QgLSBsb3dlc3QpICsgbG93ZXN0XG5jb25zdCBwcm9jZXNzRGF0YSA9ICh7IGRhdGEsIGV4dHJlbWVzLCBmbiB9KSA9PlxuICBfLm1hcChcbiAgICAoeyBvcGVuLCBoaWdoLCBsb3csIGNsb3NlIH0pID0+ICh7XG4gICAgICBvcGVuOiBmbihleHRyZW1lcywgb3BlbiksXG4gICAgICBoaWdoOiBmbihleHRyZW1lcywgaGlnaCksXG4gICAgICBsb3c6IGZuKGV4dHJlbWVzLCBsb3cpLFxuICAgICAgY2xvc2U6IGZuKGV4dHJlbWVzLCBjbG9zZSksXG4gICAgfSksXG4gICAgZGF0YVxuICApXG5leHBvcnQgbGV0IGdldEV4dHJlbWVzID0gXy5mbG93KFxuICAvLyBAdHMtaWdub3JlXG4gIF8ucmVkdWNlKChhY2MsIHsgb3BlbiwgaGlnaCwgbG93LCBjbG9zZSB9KSA9PiB7XG4gICAgcmV0dXJuIFsuLi5hY2MsIG9wZW4sIGhpZ2gsIGxvdywgY2xvc2VdXG4gIH0sIFtdKSxcbiAgXy5zb3J0QnkoXy5pZGVudGl0eSksXG4gIHggPT4gKHsgbG93ZXN0OiBfLmhlYWQoeCksIGhpZ2hlc3Q6IF8ubGFzdCh4KSB9KVxuKVxuZXhwb3J0IGxldCBub3JtYWxpemVNYXJrZXREYXRhID0gXy5jdXJyeSgoZGF0YSwgZXh0cmVtZXMpID0+XG4gIHByb2Nlc3NEYXRhKHsgZGF0YSwgZXh0cmVtZXMsIGZuOiBub3JtYWxpemUgfSkpXG5leHBvcnQgbGV0IGRlbm9ybWFsaXplTWFya2V0RGF0YSA9IF8uY3VycnkoKGRhdGEsIGV4dHJlbWVzKSA9PlxuICBwcm9jZXNzRGF0YSh7IGRhdGEsIGV4dHJlbWVzLCBmbjogZGVub3JtYWxpemUgfSkpXG4iXX0=