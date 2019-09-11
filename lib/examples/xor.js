"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xor = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _fp = _interopRequireDefault(require("lodash/fp"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var xor = function xor() {
  var neuroXor = new _brain["default"].NeuralNetwork();
  neuroXor.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'xor',
    retrain: false,
    options: {
      hiddenLayers: [3]
    }
  }));

  var xorRun = _fp["default"].flow(function (x) {
    return neuroXor.run(x);
  }, _fp["default"].head);

  var xorInput = [0, 1];
  console.log({
    xorInput: xorInput,
    xorOutput: xorRun(xorInput)
  });
};

exports.xor = xor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy94b3IudHMiXSwibmFtZXMiOlsieG9yIiwibmV1cm9Yb3IiLCJicmFpbiIsIk5ldXJhbE5ldHdvcmsiLCJmcm9tSlNPTiIsImJyYWluVHlwZSIsIm5hbWUiLCJyZXRyYWluIiwib3B0aW9ucyIsImhpZGRlbkxheWVycyIsInhvclJ1biIsIl8iLCJmbG93IiwieCIsInJ1biIsImhlYWQiLCJ4b3JJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJ4b3JPdXRwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVPLElBQUlBLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDckIsTUFBSUMsUUFBUSxHQUFHLElBQUlDLGtCQUFNQyxhQUFWLEVBQWY7QUFDQUYsRUFBQUEsUUFBUSxDQUFDRyxRQUFULENBQ0Usa0JBQU07QUFDSkMsSUFBQUEsU0FBUyxFQUFFSCxrQkFBTUMsYUFEYjtBQUVKRyxJQUFBQSxJQUFJLEVBQUUsS0FGRjtBQUdKQyxJQUFBQSxPQUFPLEVBQUUsS0FITDtBQUlKQyxJQUFBQSxPQUFPLEVBQUU7QUFBRUMsTUFBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRDtBQUFoQjtBQUpMLEdBQU4sQ0FERjs7QUFRQSxNQUFJQyxNQUFNLEdBQUdDLGVBQUVDLElBQUYsQ0FDWCxVQUFBQyxDQUFDO0FBQUEsV0FBSVosUUFBUSxDQUFDYSxHQUFULENBQWFELENBQWIsQ0FBSjtBQUFBLEdBRFUsRUFFWEYsZUFBRUksSUFGUyxDQUFiOztBQUlBLE1BQUlDLFFBQVEsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWY7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk7QUFBRUYsSUFBQUEsUUFBUSxFQUFSQSxRQUFGO0FBQVlHLElBQUFBLFNBQVMsRUFBRVQsTUFBTSxDQUFDTSxRQUFEO0FBQTdCLEdBQVo7QUFDRCxDQWhCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBicmFpbiBmcm9tICdicmFpbi5qcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaC9mcCdcbmltcG9ydCB7IHRyYWluIH0gZnJvbSAnLi4vY29yZS90cmFpbidcblxuZXhwb3J0IGxldCB4b3IgPSAoKSA9PiB7XG4gIGxldCBuZXVyb1hvciA9IG5ldyBicmFpbi5OZXVyYWxOZXR3b3JrKClcbiAgbmV1cm9Yb3IuZnJvbUpTT04oXG4gICAgdHJhaW4oe1xuICAgICAgYnJhaW5UeXBlOiBicmFpbi5OZXVyYWxOZXR3b3JrLFxuICAgICAgbmFtZTogJ3hvcicsXG4gICAgICByZXRyYWluOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IHsgaGlkZGVuTGF5ZXJzOiBbM10gfSxcbiAgICB9KVxuICApXG4gIGxldCB4b3JSdW4gPSBfLmZsb3coXG4gICAgeCA9PiBuZXVyb1hvci5ydW4oeCksXG4gICAgXy5oZWFkXG4gIClcbiAgbGV0IHhvcklucHV0ID0gWzAsIDFdXG4gIGNvbnNvbGUubG9nKHsgeG9ySW5wdXQsIHhvck91dHB1dDogeG9yUnVuKHhvcklucHV0KSB9KVxufVxuIl19