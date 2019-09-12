"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colors = function colors() {
  var neuroColors = new _brain["default"].NeuralNetwork();
  neuroColors.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'colors',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));
  var colorInput = {
    light: 0.5
  };
  console.log({
    colorInput: colorInput,
    colorOutput: neuroColors.run(colorInput)
  });
};

exports.colors = colors;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9jb2xvcnMudHMiXSwibmFtZXMiOlsiY29sb3JzIiwibmV1cm9Db2xvcnMiLCJicmFpbiIsIk5ldXJhbE5ldHdvcmsiLCJmcm9tSlNPTiIsImJyYWluVHlwZSIsIm5hbWUiLCJyZXRyYWluIiwib3B0aW9ucyIsImhpZGRlbkxheWVycyIsImNvbG9ySW5wdXQiLCJsaWdodCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvck91dHB1dCIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sSUFBSUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUN4QixNQUFJQyxXQUFXLEdBQUcsSUFBSUMsa0JBQU1DLGFBQVYsRUFBbEI7QUFDQUYsRUFBQUEsV0FBVyxDQUFDRyxRQUFaLENBQ0Usa0JBQU07QUFDSkMsSUFBQUEsU0FBUyxFQUFFSCxrQkFBTUMsYUFEYjtBQUVKRyxJQUFBQSxJQUFJLEVBQUUsUUFGRjtBQUdKQyxJQUFBQSxPQUFPLEVBQUUsS0FITDtBQUlKQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRDtBQUFoQjtBQUpMLEdBQU4sQ0FERjtBQVFBLE1BQUlDLFVBQVUsR0FBRztBQUFFQyxJQUFBQSxLQUFLLEVBQUU7QUFBVCxHQUFqQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFSCxJQUFBQSxVQUFVLEVBQVZBLFVBQUY7QUFBY0ksSUFBQUEsV0FBVyxFQUFFYixXQUFXLENBQUNjLEdBQVosQ0FBZ0JMLFVBQWhCO0FBQTNCLEdBQVo7QUFDRCxDQVpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJyYWluIGZyb20gJ2JyYWluLmpzJ1xuaW1wb3J0IHsgdHJhaW4gfSBmcm9tICcuLi9jb3JlL3RyYWluJ1xuXG5leHBvcnQgbGV0IGNvbG9ycyA9ICgpID0+IHtcbiAgbGV0IG5ldXJvQ29sb3JzID0gbmV3IGJyYWluLk5ldXJhbE5ldHdvcmsoKVxuICBuZXVyb0NvbG9ycy5mcm9tSlNPTihcbiAgICB0cmFpbih7XG4gICAgICBicmFpblR5cGU6IGJyYWluLk5ldXJhbE5ldHdvcmssXG4gICAgICBuYW1lOiAnY29sb3JzJyxcbiAgICAgIHJldHJhaW46IGZhbHNlLFxuICAgICAgb3B0aW9uczogeyBoaWRkZW5MYXllcnM6IFszXSB9LFxuICAgIH0pXG4gIClcbiAgbGV0IGNvbG9ySW5wdXQgPSB7IGxpZ2h0OiAwLjUgfVxuICBjb25zb2xlLmxvZyh7IGNvbG9ySW5wdXQsIGNvbG9yT3V0cHV0OiBuZXVyb0NvbG9ycy5ydW4oY29sb3JJbnB1dCkgfSlcbn1cbiJdfQ==