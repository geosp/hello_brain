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

    _fs["default"].writeFileSync(neuroNetPath, JSON.stringify(neuronet));
  } else {
    console.log({
      message: 'Trained'
    });
    neuronet = JSON.parse(_fs["default"].readFileSync(neuroNetPath, 'utf8'));
  }

  return neuronet;
};

exports.train = train;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3RyYWluLnRzIl0sIm5hbWVzIjpbInRyYWluIiwiYnJhaW5UeXBlIiwicHJlcG9jZXNzb3IiLCJ4IiwicmV0cmFpbiIsIm5hbWUiLCJvcHRpb25zIiwidHJhaW5pbmdPcHRpb25zIiwibmV1cm9uZXQiLCJuZXVyb05ldFBhdGgiLCJ0cmFpbmluZ1BhdGgiLCJmcyIsImV4aXN0c1N5bmMiLCJ0cmFpbmluZ0RhdGEiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuZXVybyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZGF0YSIsInN0cmluZ2lmeSIsImxvZ1BlcmlvZCIsInRvSlNPTiIsIndyaXRlRmlsZVN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTRGO0FBQUEsTUFBekZDLFNBQXlGLFFBQXpGQSxTQUF5RjtBQUFBLDhCQUE5RUMsV0FBOEU7QUFBQSxNQUE5RUEsV0FBOEUsaUNBQWhFLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFKO0FBQUEsR0FBK0Q7QUFBQSxNQUF4REMsT0FBd0QsUUFBeERBLE9BQXdEO0FBQUEsTUFBL0NDLElBQStDLFFBQS9DQSxJQUErQztBQUFBLDBCQUF6Q0MsT0FBeUM7QUFBQSxNQUF6Q0EsT0FBeUMsNkJBQS9CLEVBQStCO0FBQUEsa0NBQTNCQyxlQUEyQjtBQUFBLE1BQTNCQSxlQUEyQixxQ0FBVCxFQUFTO0FBQzdHLE1BQUlDLFFBQUo7QUFDQSxNQUFJQyxZQUFZLDJCQUFvQkosSUFBcEIsVUFBaEI7QUFDQSxNQUFJSyxZQUFZLDJCQUFvQkwsSUFBcEIsVUFBaEI7O0FBQ0EsTUFBSUQsT0FBTyxJQUFJLENBQUNPLGVBQUdDLFVBQUgsQ0FBY0gsWUFBZCxDQUFoQixFQUE2QztBQUMzQyxRQUFJSSxZQUFZLEdBQUdYLFdBQVcsQ0FBQ1ksSUFBSSxDQUFDQyxLQUFMLENBQVdKLGVBQUdLLFlBQUgsQ0FBZ0JOLFlBQWhCLEVBQThCLE1BQTlCLENBQVgsQ0FBRCxDQUE5QjtBQUNBLFFBQUlPLEtBQUssR0FBRyxJQUFJaEIsU0FBSixDQUFjSyxPQUFkLENBQVo7QUFDQVksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUEsT0FBTyxFQUFFLGFBQVg7QUFBMEJDLE1BQUFBLElBQUksRUFBRVAsSUFBSSxDQUFDUSxTQUFMLENBQWVULFlBQWYsQ0FBaEM7QUFBOEROLE1BQUFBLGVBQWUsRUFBZkE7QUFBOUQsS0FBWjtBQUNBVSxJQUFBQSxLQUFLLENBQUNqQixLQUFOLENBQVlhLFlBQVo7QUFBNEJNLE1BQUFBLEdBQUcsRUFBRUQsT0FBTyxDQUFDQyxHQUF6QztBQUE4Q0ksTUFBQUEsU0FBUyxFQUFFO0FBQXpELE9BQWlFaEIsZUFBakU7QUFDQUMsSUFBQUEsUUFBUSxHQUFHUyxLQUFLLENBQUNPLE1BQU4sRUFBWDs7QUFDQWIsbUJBQUdjLGFBQUgsQ0FBaUJoQixZQUFqQixFQUErQkssSUFBSSxDQUFDUSxTQUFMLENBQWVkLFFBQWYsQ0FBL0I7QUFDRCxHQVBELE1BT087QUFDTFUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBWjtBQUNBWixJQUFBQSxRQUFRLEdBQUdNLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixlQUFHSyxZQUFILENBQWdCUCxZQUFoQixFQUE4QixNQUE5QixDQUFYLENBQVg7QUFDRDs7QUFFRCxTQUFPRCxRQUFQO0FBQ0QsQ0FqQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJhaW4sIHsgSU5ldXJhbE5ldHdvcmtKU09OIH0gZnJvbSAnYnJhaW4uanMnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmV4cG9ydCBsZXQgdHJhaW4gPSAoeyBicmFpblR5cGUsIHByZXBvY2Vzc29yID0geCA9PiB4LCByZXRyYWluLCBuYW1lLCBvcHRpb25zID0ge30sIHRyYWluaW5nT3B0aW9ucyA9IHt9IH0pID0+IHtcbiAgbGV0IG5ldXJvbmV0OiBJTmV1cmFsTmV0d29ya0pTT05cbiAgbGV0IG5ldXJvTmV0UGF0aCA9IGBkYXRhL25ldXJvbmV0LyR7bmFtZX0uanNvbmBcbiAgbGV0IHRyYWluaW5nUGF0aCA9IGBkYXRhL3RyYWluaW5nLyR7bmFtZX0uanNvbmBcbiAgaWYgKHJldHJhaW4gfHwgIWZzLmV4aXN0c1N5bmMobmV1cm9OZXRQYXRoKSkge1xuICAgIGxldCB0cmFpbmluZ0RhdGEgPSBwcmVwb2Nlc3NvcihKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyh0cmFpbmluZ1BhdGgsICd1dGY4JykpKVxuICAgIGxldCBuZXVybyA9IG5ldyBicmFpblR5cGUob3B0aW9ucylcbiAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2U6ICdUcmFpbmluZy4uLicsIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRyYWluaW5nRGF0YSksIHRyYWluaW5nT3B0aW9ucyB9KVxuICAgIG5ldXJvLnRyYWluKHRyYWluaW5nRGF0YSwgeyBsb2c6IGNvbnNvbGUubG9nLCBsb2dQZXJpb2Q6IDEwMCwgLi4udHJhaW5pbmdPcHRpb25zIH0pXG4gICAgbmV1cm9uZXQgPSBuZXVyby50b0pTT04oKVxuICAgIGZzLndyaXRlRmlsZVN5bmMobmV1cm9OZXRQYXRoLCBKU09OLnN0cmluZ2lmeShuZXVyb25ldCkpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coeyBtZXNzYWdlOiAnVHJhaW5lZCcgfSlcbiAgICBuZXVyb25ldCA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKG5ldXJvTmV0UGF0aCwgJ3V0ZjgnKSlcbiAgfVxuXG4gIHJldHVybiBuZXVyb25ldFxufVxuIl19