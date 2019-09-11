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
    if (retrain) return neuro;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3RyYWluLnRzIl0sIm5hbWVzIjpbInRyYWluIiwiYnJhaW5UeXBlIiwicHJlcG9jZXNzb3IiLCJ4IiwicmV0cmFpbiIsIm5hbWUiLCJvcHRpb25zIiwidHJhaW5pbmdPcHRpb25zIiwibmV1cm9uZXQiLCJuZXVyb05ldFBhdGgiLCJ0cmFpbmluZ1BhdGgiLCJmcyIsImV4aXN0c1N5bmMiLCJ0cmFpbmluZ0RhdGEiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuZXVybyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZGF0YSIsInN0cmluZ2lmeSIsImxvZ1BlcmlvZCIsInRvSlNPTiIsIndyaXRlRmlsZVN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVPLElBQUlBLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTRGO0FBQUEsTUFBekZDLFNBQXlGLFFBQXpGQSxTQUF5RjtBQUFBLDhCQUE5RUMsV0FBOEU7QUFBQSxNQUE5RUEsV0FBOEUsaUNBQWhFLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFKO0FBQUEsR0FBK0Q7QUFBQSxNQUF4REMsT0FBd0QsUUFBeERBLE9BQXdEO0FBQUEsTUFBL0NDLElBQStDLFFBQS9DQSxJQUErQztBQUFBLDBCQUF6Q0MsT0FBeUM7QUFBQSxNQUF6Q0EsT0FBeUMsNkJBQS9CLEVBQStCO0FBQUEsa0NBQTNCQyxlQUEyQjtBQUFBLE1BQTNCQSxlQUEyQixxQ0FBVCxFQUFTO0FBQzdHLE1BQUlDLFFBQUo7QUFDQSxNQUFJQyxZQUFZLDJCQUFvQkosSUFBcEIsVUFBaEI7QUFDQSxNQUFJSyxZQUFZLDJCQUFvQkwsSUFBcEIsVUFBaEI7O0FBQ0EsTUFBSUQsT0FBTyxJQUFJLENBQUNPLGVBQUdDLFVBQUgsQ0FBY0gsWUFBZCxDQUFoQixFQUE2QztBQUMzQyxRQUFJSSxZQUFZLEdBQUdYLFdBQVcsQ0FBQ1ksSUFBSSxDQUFDQyxLQUFMLENBQVdKLGVBQUdLLFlBQUgsQ0FBZ0JOLFlBQWhCLEVBQThCLE1BQTlCLENBQVgsQ0FBRCxDQUE5QjtBQUNBLFFBQUlPLEtBQUssR0FBRyxJQUFJaEIsU0FBSixDQUFjSyxPQUFkLENBQVo7QUFDQVksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUMsTUFBQUEsT0FBTyxFQUFFLGFBQVg7QUFBMEJDLE1BQUFBLElBQUksRUFBRVAsSUFBSSxDQUFDUSxTQUFMLENBQWVULFlBQWYsQ0FBaEM7QUFBOEROLE1BQUFBLGVBQWUsRUFBZkE7QUFBOUQsS0FBWjtBQUNBVSxJQUFBQSxLQUFLLENBQUNqQixLQUFOLENBQVlhLFlBQVo7QUFBNEJNLE1BQUFBLEdBQUcsRUFBRUQsT0FBTyxDQUFDQyxHQUF6QztBQUE4Q0ksTUFBQUEsU0FBUyxFQUFFO0FBQXpELE9BQWlFaEIsZUFBakU7QUFDQSxRQUFHSCxPQUFILEVBQVksT0FBT2EsS0FBUDtBQUNaVCxJQUFBQSxRQUFRLEdBQUdTLEtBQUssQ0FBQ08sTUFBTixFQUFYOztBQUNBYixtQkFBR2MsYUFBSCxDQUFpQmhCLFlBQWpCLEVBQStCSyxJQUFJLENBQUNRLFNBQUwsQ0FBZWQsUUFBZixDQUEvQjtBQUNELEdBUkQsTUFRTztBQUNMVSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFaO0FBQ0FaLElBQUFBLFFBQVEsR0FBR00sSUFBSSxDQUFDQyxLQUFMLENBQVdKLGVBQUdLLFlBQUgsQ0FBZ0JQLFlBQWhCLEVBQThCLE1BQTlCLENBQVgsQ0FBWDtBQUNEOztBQUVELFNBQU9ELFFBQVA7QUFDRCxDQWxCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBicmFpbiwgeyBJTmV1cmFsTmV0d29ya0pTT04gfSBmcm9tICdicmFpbi5qcydcbmltcG9ydCBmcyBmcm9tICdmcydcblxuZXhwb3J0IGxldCB0cmFpbiA9ICh7IGJyYWluVHlwZSwgcHJlcG9jZXNzb3IgPSB4ID0+IHgsIHJldHJhaW4sIG5hbWUsIG9wdGlvbnMgPSB7fSwgdHJhaW5pbmdPcHRpb25zID0ge30gfSkgPT4ge1xuICBsZXQgbmV1cm9uZXQ6IElOZXVyYWxOZXR3b3JrSlNPTlxuICBsZXQgbmV1cm9OZXRQYXRoID0gYGRhdGEvbmV1cm9uZXQvJHtuYW1lfS5qc29uYFxuICBsZXQgdHJhaW5pbmdQYXRoID0gYGRhdGEvdHJhaW5pbmcvJHtuYW1lfS5qc29uYFxuICBpZiAocmV0cmFpbiB8fCAhZnMuZXhpc3RzU3luYyhuZXVyb05ldFBhdGgpKSB7XG4gICAgbGV0IHRyYWluaW5nRGF0YSA9IHByZXBvY2Vzc29yKEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHRyYWluaW5nUGF0aCwgJ3V0ZjgnKSkpXG4gICAgbGV0IG5ldXJvID0gbmV3IGJyYWluVHlwZShvcHRpb25zKVxuICAgIGNvbnNvbGUubG9nKHsgbWVzc2FnZTogJ1RyYWluaW5nLi4uJywgZGF0YTogSlNPTi5zdHJpbmdpZnkodHJhaW5pbmdEYXRhKSwgdHJhaW5pbmdPcHRpb25zIH0pXG4gICAgbmV1cm8udHJhaW4odHJhaW5pbmdEYXRhLCB7IGxvZzogY29uc29sZS5sb2csIGxvZ1BlcmlvZDogMTAwLCAuLi50cmFpbmluZ09wdGlvbnMgfSlcbiAgICBpZihyZXRyYWluKSByZXR1cm4gbmV1cm9cbiAgICBuZXVyb25ldCA9IG5ldXJvLnRvSlNPTigpXG4gICAgZnMud3JpdGVGaWxlU3luYyhuZXVyb05ldFBhdGgsIEpTT04uc3RyaW5naWZ5KG5ldXJvbmV0KSlcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyh7IG1lc3NhZ2U6ICdUcmFpbmVkJyB9KVxuICAgIG5ldXJvbmV0ID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMobmV1cm9OZXRQYXRoLCAndXRmOCcpKVxuICB9XG5cbiAgcmV0dXJuIG5ldXJvbmV0XG59XG4iXX0=