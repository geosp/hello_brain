"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brightness = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var brightness = function brightness() {
  var neuroBrightness = new _brain["default"].NeuralNetwork();
  neuroBrightness.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'brightness',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));
  var brightNessInput = {
    red: 0.02,
    blue: 0.5,
    green: 0.5
  };
  console.log({
    brightNessInput: brightNessInput,
    colorOutput: neuroBrightness.run(brightNessInput)
  });
};

exports.brightness = brightness;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9icmlnaHRuZXNzLnRzIl0sIm5hbWVzIjpbImJyaWdodG5lc3MiLCJuZXVyb0JyaWdodG5lc3MiLCJicmFpbiIsIk5ldXJhbE5ldHdvcmsiLCJmcm9tSlNPTiIsImJyYWluVHlwZSIsIm5hbWUiLCJyZXRyYWluIiwib3B0aW9ucyIsImhpZGRlbkxheWVycyIsImJyaWdodE5lc3NJbnB1dCIsInJlZCIsImJsdWUiLCJncmVlbiIsImNvbnNvbGUiLCJsb2ciLCJjb2xvck91dHB1dCIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sSUFBSUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM1QixNQUFJQyxlQUFlLEdBQUcsSUFBSUMsa0JBQU1DLGFBQVYsRUFBdEI7QUFDQUYsRUFBQUEsZUFBZSxDQUFDRyxRQUFoQixDQUNFLGtCQUFNO0FBQ0pDLElBQUFBLFNBQVMsRUFBRUgsa0JBQU1DLGFBRGI7QUFFSkcsSUFBQUEsSUFBSSxFQUFFLFlBRkY7QUFHSkMsSUFBQUEsT0FBTyxFQUFFLEtBSEw7QUFJSkMsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLFlBQVksRUFBRSxDQUFDLENBQUQ7QUFBaEI7QUFKTCxHQUFOLENBREY7QUFRQSxNQUFJQyxlQUFlLEdBQUc7QUFBRUMsSUFBQUEsR0FBRyxFQUFFLElBQVA7QUFBYUMsSUFBQUEsSUFBSSxFQUFFLEdBQW5CO0FBQXdCQyxJQUFBQSxLQUFLLEVBQUU7QUFBL0IsR0FBdEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFDVkwsSUFBQUEsZUFBZSxFQUFmQSxlQURVO0FBRVZNLElBQUFBLFdBQVcsRUFBRWYsZUFBZSxDQUFDZ0IsR0FBaEIsQ0FBb0JQLGVBQXBCO0FBRkgsR0FBWjtBQUlELENBZk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJhaW4gZnJvbSAnYnJhaW4uanMnXG5pbXBvcnQgeyB0cmFpbiB9IGZyb20gJy4uL2NvcmUvdHJhaW4nXG5cbmV4cG9ydCBsZXQgYnJpZ2h0bmVzcyA9ICgpID0+IHtcbiAgbGV0IG5ldXJvQnJpZ2h0bmVzcyA9IG5ldyBicmFpbi5OZXVyYWxOZXR3b3JrKClcbiAgbmV1cm9CcmlnaHRuZXNzLmZyb21KU09OKFxuICAgIHRyYWluKHtcbiAgICAgIGJyYWluVHlwZTogYnJhaW4uTmV1cmFsTmV0d29yayxcbiAgICAgIG5hbWU6ICdicmlnaHRuZXNzJyxcbiAgICAgIHJldHJhaW46IGZhbHNlLFxuICAgICAgb3B0aW9uczogeyBoaWRkZW5MYXllcnM6IFszXSB9LFxuICAgIH0pXG4gIClcbiAgbGV0IGJyaWdodE5lc3NJbnB1dCA9IHsgcmVkOiAwLjAyLCBibHVlOiAwLjUsIGdyZWVuOiAwLjUgfVxuICBjb25zb2xlLmxvZyh7XG4gICAgYnJpZ2h0TmVzc0lucHV0LFxuICAgIGNvbG9yT3V0cHV0OiBuZXVyb0JyaWdodG5lc3MucnVuKGJyaWdodE5lc3NJbnB1dCksXG4gIH0pXG59XG4iXX0=