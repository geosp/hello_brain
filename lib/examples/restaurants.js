"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restaurants = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var restaurants = function restaurants() {
  var neuroRestaurants = new _brain["default"].NeuralNetwork();
  neuroRestaurants.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'restaurants',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));
  var restaurantsInput = {
    Friday: 1
  };
  console.log({
    restaurantsInput: restaurantsInput,
    restaurantsOutput: neuroRestaurants.run(restaurantsInput)
  });
};

exports.restaurants = restaurants;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9yZXN0YXVyYW50cy50cyJdLCJuYW1lcyI6WyJyZXN0YXVyYW50cyIsIm5ldXJvUmVzdGF1cmFudHMiLCJicmFpbiIsIk5ldXJhbE5ldHdvcmsiLCJmcm9tSlNPTiIsImJyYWluVHlwZSIsIm5hbWUiLCJyZXRyYWluIiwib3B0aW9ucyIsImhpZGRlbkxheWVycyIsInJlc3RhdXJhbnRzSW5wdXQiLCJGcmlkYXkiLCJjb25zb2xlIiwibG9nIiwicmVzdGF1cmFudHNPdXRwdXQiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLElBQUlBLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDN0IsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBSUMsa0JBQU1DLGFBQVYsRUFBdkI7QUFDQUYsRUFBQUEsZ0JBQWdCLENBQUNHLFFBQWpCLENBQ0Usa0JBQU07QUFDSkMsSUFBQUEsU0FBUyxFQUFFSCxrQkFBTUMsYUFEYjtBQUVKRyxJQUFBQSxJQUFJLEVBQUUsYUFGRjtBQUdKQyxJQUFBQSxPQUFPLEVBQUUsS0FITDtBQUlKQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRDtBQUFoQjtBQUpMLEdBQU4sQ0FERjtBQVFBLE1BQUlDLGdCQUFnQixHQUFHO0FBQUVDLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBQXZCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQ1ZILElBQUFBLGdCQUFnQixFQUFoQkEsZ0JBRFU7QUFFVkksSUFBQUEsaUJBQWlCLEVBQUViLGdCQUFnQixDQUFDYyxHQUFqQixDQUFxQkwsZ0JBQXJCO0FBRlQsR0FBWjtBQUlELENBZk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJhaW4gZnJvbSAnYnJhaW4uanMnXG5pbXBvcnQgeyB0cmFpbiB9IGZyb20gJy4uL2NvcmUvdHJhaW4nXG5cbmV4cG9ydCBsZXQgcmVzdGF1cmFudHMgPSAoKSA9PiB7XG4gIGxldCBuZXVyb1Jlc3RhdXJhbnRzID0gbmV3IGJyYWluLk5ldXJhbE5ldHdvcmsoKVxuICBuZXVyb1Jlc3RhdXJhbnRzLmZyb21KU09OKFxuICAgIHRyYWluKHtcbiAgICAgIGJyYWluVHlwZTogYnJhaW4uTmV1cmFsTmV0d29yayxcbiAgICAgIG5hbWU6ICdyZXN0YXVyYW50cycsXG4gICAgICByZXRyYWluOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHsgaGlkZGVuTGF5ZXJzOiBbM10gfSxcbiAgICB9KVxuICApXG4gIGxldCByZXN0YXVyYW50c0lucHV0ID0geyBGcmlkYXk6IDEgfVxuICBjb25zb2xlLmxvZyh7XG4gICAgcmVzdGF1cmFudHNJbnB1dCxcbiAgICByZXN0YXVyYW50c091dHB1dDogbmV1cm9SZXN0YXVyYW50cy5ydW4ocmVzdGF1cmFudHNJbnB1dCksXG4gIH0pXG59XG4iXX0=