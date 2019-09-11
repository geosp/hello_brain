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
    countOutput: neuroCount.run(countInput)
  });
};

exports.count = count;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9jb3VudC50cyJdLCJuYW1lcyI6WyJjb3VudCIsIm5ldXJvQ291bnQiLCJicmFpbiIsInJlY3VycmVudCIsIkxTVE1UaW1lU3RlcCIsImZyb21KU09OIiwiYnJhaW5UeXBlIiwibmFtZSIsInJldHJhaW4iLCJvcHRpb25zIiwiaGlkZGVuTGF5ZXJzIiwiY291bnRJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJjb3VudE91dHB1dCIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sSUFBSUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUN2QixNQUFJQyxVQUFVLEdBQUcsSUFBSUMsa0JBQU1DLFNBQU4sQ0FBZ0JDLFlBQXBCLEVBQWpCO0FBQ0FILEVBQUFBLFVBQVUsQ0FBQ0ksUUFBWCxDQUNFLGtCQUFNO0FBQ0pDLElBQUFBLFNBQVMsRUFBRUosa0JBQU1DLFNBQU4sQ0FBZ0JDLFlBRHZCO0FBRUpHLElBQUFBLElBQUksRUFBRSxPQUZGO0FBR0pDLElBQUFBLE9BQU8sRUFBRSxLQUhMO0FBSUpDLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxZQUFZLEVBQUUsQ0FBQyxDQUFEO0FBQWhCO0FBSkwsR0FBTixDQURGO0FBUUEsTUFBSUMsVUFBVSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQWpCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLElBQUFBLFVBQVUsRUFBVkEsVUFBRjtBQUFjRyxJQUFBQSxXQUFXLEVBQUViLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlSixVQUFmO0FBQTNCLEdBQVo7QUFDRCxDQVpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJyYWluIGZyb20gJ2JyYWluLmpzJ1xuaW1wb3J0IHsgdHJhaW4gfSBmcm9tICcuLi9jb3JlL3RyYWluJ1xuXG5leHBvcnQgbGV0IGNvdW50ID0gKCkgPT4ge1xuICBsZXQgbmV1cm9Db3VudCA9IG5ldyBicmFpbi5yZWN1cnJlbnQuTFNUTVRpbWVTdGVwKClcbiAgbmV1cm9Db3VudC5mcm9tSlNPTihcbiAgICB0cmFpbih7XG4gICAgICBicmFpblR5cGU6IGJyYWluLnJlY3VycmVudC5MU1RNVGltZVN0ZXAsXG4gICAgICBuYW1lOiAnY291bnQnLFxuICAgICAgcmV0cmFpbjogZmFsc2UsXG4gICAgICBvcHRpb25zOiB7IGhpZGRlbkxheWVyczogWzNdIH0sXG4gICAgfSlcbiAgKVxuICBsZXQgY291bnRJbnB1dCA9IFsxLCAyLCAzXVxuICBjb25zb2xlLmxvZyh7IGNvdW50SW5wdXQsIGNvdW50T3V0cHV0OiBuZXVyb0NvdW50LnJ1bihjb3VudElucHV0KSB9KVxufSJdfQ==