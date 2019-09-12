"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.train = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var train = function train(_ref) {
  var brainType = _ref.brainType,
      _ref$prepocessor = _ref.prepocessor,
      prepocessor = _ref$prepocessor === void 0 ? function (x) {
    return x;
  } : _ref$prepocessor,
      retrain = _ref.retrain,
      name = _ref.name,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      _ref$trainingOptions = _ref.trainingOptions,
      trainingOptions = _ref$trainingOptions === void 0 ? {} : _ref$trainingOptions;
  var neuronet;
  var neuroNetPath = "data/neuronet/".concat(name, ".json");
  var trainingPath = "data/training/".concat(name, ".json");

  if (retrain || !_fs["default"].existsSync(neuroNetPath)) {
    var trainingData = prepocessor(JSON.parse(_fs["default"].readFileSync(trainingPath, 'utf8')));
    var neuro = new brainType(options);
    console.log({
      message: 'Training...',
      data: JSON.stringify(trainingData),
      trainingOptions: trainingOptions
    });
    neuro.train(trainingData, _objectSpread({
      log: console.log,
      logPeriod: 100
    }, trainingOptions));
    neuronet = neuro.toJSON();

    if (retrain && _fs["default"].existsSync(neuroNetPath)) {
      _fs["default"].renameSync(neuroNetPath, "".concat(neuroNetPath, "_").concat(Math.round(+new Date() / 1e3), ".bck"));
    } else if (!retrain) {
      _fs["default"].writeFileSync(neuroNetPath, JSON.stringify(neuronet));
    }
  } else {
    console.log({
      message: 'Trained'
    });
    neuronet = JSON.parse(_fs["default"].readFileSync(neuroNetPath, 'utf8'));
  }

  return neuronet;
};

exports.train = train;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3RyYWluLnRzIl0sIm5hbWVzIjpbInRyYWluIiwiYnJhaW5UeXBlIiwicHJlcG9jZXNzb3IiLCJ4IiwicmV0cmFpbiIsIm5hbWUiLCJvcHRpb25zIiwidHJhaW5pbmdPcHRpb25zIiwibmV1cm9uZXQiLCJuZXVyb05ldFBhdGgiLCJ0cmFpbmluZ1BhdGgiLCJmcyIsImV4aXN0c1N5bmMiLCJ0cmFpbmluZ0RhdGEiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuZXVybyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZGF0YSIsInN0cmluZ2lmeSIsImxvZ1BlcmlvZCIsInRvSlNPTiIsInJlbmFtZVN5bmMiLCJNYXRoIiwicm91bmQiLCJEYXRlIiwid3JpdGVGaWxlU3luYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7O0FBRU8sSUFBSUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBNEY7QUFBQSxNQUF6RkMsU0FBeUYsUUFBekZBLFNBQXlGO0FBQUEsOEJBQTlFQyxXQUE4RTtBQUFBLE1BQTlFQSxXQUE4RSxpQ0FBaEUsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUo7QUFBQSxHQUErRDtBQUFBLE1BQXhEQyxPQUF3RCxRQUF4REEsT0FBd0Q7QUFBQSxNQUEvQ0MsSUFBK0MsUUFBL0NBLElBQStDO0FBQUEsMEJBQXpDQyxPQUF5QztBQUFBLE1BQXpDQSxPQUF5Qyw2QkFBL0IsRUFBK0I7QUFBQSxrQ0FBM0JDLGVBQTJCO0FBQUEsTUFBM0JBLGVBQTJCLHFDQUFULEVBQVM7QUFDN0csTUFBSUMsUUFBSjtBQUNBLE1BQUlDLFlBQVksMkJBQW9CSixJQUFwQixVQUFoQjtBQUNBLE1BQUlLLFlBQVksMkJBQW9CTCxJQUFwQixVQUFoQjs7QUFDQSxNQUFJRCxPQUFPLElBQUksQ0FBQ08sZUFBR0MsVUFBSCxDQUFjSCxZQUFkLENBQWhCLEVBQTZDO0FBQzNDLFFBQUlJLFlBQVksR0FBR1gsV0FBVyxDQUFDWSxJQUFJLENBQUNDLEtBQUwsQ0FBV0osZUFBR0ssWUFBSCxDQUFnQk4sWUFBaEIsRUFBOEIsTUFBOUIsQ0FBWCxDQUFELENBQTlCO0FBQ0EsUUFBSU8sS0FBSyxHQUFHLElBQUloQixTQUFKLENBQWNLLE9BQWQsQ0FBWjtBQUNBWSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFQyxNQUFBQSxPQUFPLEVBQUUsYUFBWDtBQUEwQkMsTUFBQUEsSUFBSSxFQUFFUCxJQUFJLENBQUNRLFNBQUwsQ0FBZVQsWUFBZixDQUFoQztBQUE4RE4sTUFBQUEsZUFBZSxFQUFmQTtBQUE5RCxLQUFaO0FBQ0FVLElBQUFBLEtBQUssQ0FBQ2pCLEtBQU4sQ0FBWWEsWUFBWjtBQUE0Qk0sTUFBQUEsR0FBRyxFQUFFRCxPQUFPLENBQUNDLEdBQXpDO0FBQThDSSxNQUFBQSxTQUFTLEVBQUU7QUFBekQsT0FBaUVoQixlQUFqRTtBQUNBQyxJQUFBQSxRQUFRLEdBQUdTLEtBQUssQ0FBQ08sTUFBTixFQUFYOztBQUNBLFFBQUlwQixPQUFPLElBQUlPLGVBQUdDLFVBQUgsQ0FBY0gsWUFBZCxDQUFmLEVBQTRDO0FBQzFDRSxxQkFBR2MsVUFBSCxDQUFjaEIsWUFBZCxZQUErQkEsWUFBL0IsY0FBK0NpQixJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDLElBQUlDLElBQUosRUFBRCxHQUFZLEdBQXZCLENBQS9DO0FBQ0QsS0FGRCxNQUVPLElBQUksQ0FBQ3hCLE9BQUwsRUFBYztBQUNuQk8scUJBQUdrQixhQUFILENBQWlCcEIsWUFBakIsRUFBK0JLLElBQUksQ0FBQ1EsU0FBTCxDQUFlZCxRQUFmLENBQS9CO0FBQ0Q7QUFDRixHQVhELE1BV087QUFDTFUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBWjtBQUNBWixJQUFBQSxRQUFRLEdBQUdNLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixlQUFHSyxZQUFILENBQWdCUCxZQUFoQixFQUE4QixNQUE5QixDQUFYLENBQVg7QUFDRDs7QUFFRCxTQUFPRCxRQUFQO0FBQ0QsQ0FyQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJhaW4sIHsgSU5ldXJhbE5ldHdvcmtKU09OIH0gZnJvbSAnYnJhaW4uanMnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmV4cG9ydCBsZXQgdHJhaW4gPSAoeyBicmFpblR5cGUsIHByZXBvY2Vzc29yID0geCA9PiB4LCByZXRyYWluLCBuYW1lLCBvcHRpb25zID0ge30sIHRyYWluaW5nT3B0aW9ucyA9IHt9IH0pID0+IHtcbiAgbGV0IG5ldXJvbmV0OiBJTmV1cmFsTmV0d29ya0pTT05cbiAgbGV0IG5ldXJvTmV0UGF0aCA9IGBkYXRhL25ldXJvbmV0LyR7bmFtZX0uanNvbmBcbiAgbGV0IHRyYWluaW5nUGF0aCA9IGBkYXRhL3RyYWluaW5nLyR7bmFtZX0uanNvbmBcbiAgaWYgKHJldHJhaW4gfHwgIWZzLmV4aXN0c1N5bmMobmV1cm9OZXRQYXRoKSkge1xuICAgIGxldCB0cmFpbmluZ0RhdGEgPSBwcmVwb2Nlc3NvcihKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh0cmFpbmluZ1BhdGgsICd1dGY4JykpKVxuICAgIGxldCBuZXVybyA9IG5ldyBicmFpblR5cGUob3B0aW9ucylcbiAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2U6ICdUcmFpbmluZy4uLicsIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRyYWluaW5nRGF0YSksIHRyYWluaW5nT3B0aW9ucyB9KVxuICAgIG5ldXJvLnRyYWluKHRyYWluaW5nRGF0YSwgeyBsb2c6IGNvbnNvbGUubG9nLCBsb2dQZXJpb2Q6IDEwMCwgLi4udHJhaW5pbmdPcHRpb25zIH0pXG4gICAgbmV1cm9uZXQgPSBuZXVyby50b0pTT04oKVxuICAgIGlmIChyZXRyYWluICYmIGZzLmV4aXN0c1N5bmMobmV1cm9OZXRQYXRoKSkge1xuICAgICAgZnMucmVuYW1lU3luYyhuZXVyb05ldFBhdGgsIGAke25ldXJvTmV0UGF0aH1fJHtNYXRoLnJvdW5kKCtuZXcgRGF0ZSAvIDFlMyl9LmJja2ApXG4gICAgfSBlbHNlIGlmICghcmV0cmFpbikge1xuICAgICAgZnMud3JpdGVGaWxlU3luYyhuZXVyb05ldFBhdGgsIEpTT04uc3RyaW5naWZ5KG5ldXJvbmV0KSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coeyBtZXNzYWdlOiAnVHJhaW5lZCcgfSlcbiAgICBuZXVyb25ldCA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKG5ldXJvTmV0UGF0aCwgJ3V0ZjgnKSlcbiAgfVxuXG4gIHJldHVybiBuZXVyb25ldFxufVxuIl19