"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addition = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addition = function addition() {
  var neuroAddition = new _brain["default"].recurrent.LSTM();
  neuroAddition.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTM,
    name: 'addition',
    retrain: false,
    options: {
      hiddenLayers: [20]
    },
    trainingOptions: {
      errorThresh: 0.025
    }
  }));
  var additionInput = '1+1=';
  console.log({
    additionInput: additionInput,
    additionOutput: neuroAddition.run(additionInput)
  });
};

exports.addition = addition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9hZGRpdGlvbi50cyJdLCJuYW1lcyI6WyJhZGRpdGlvbiIsIm5ldXJvQWRkaXRpb24iLCJicmFpbiIsInJlY3VycmVudCIsIkxTVE0iLCJmcm9tSlNPTiIsImJyYWluVHlwZSIsIm5hbWUiLCJyZXRyYWluIiwib3B0aW9ucyIsImhpZGRlbkxheWVycyIsInRyYWluaW5nT3B0aW9ucyIsImVycm9yVGhyZXNoIiwiYWRkaXRpb25JbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJhZGRpdGlvbk91dHB1dCIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRU8sSUFBSUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUMxQixNQUFJQyxhQUFhLEdBQUcsSUFBSUMsa0JBQU1DLFNBQU4sQ0FBZ0JDLElBQXBCLEVBQXBCO0FBQ0FILEVBQUFBLGFBQWEsQ0FBQ0ksUUFBZCxDQUNFLGtCQUFNO0FBQ0pDLElBQUFBLFNBQVMsRUFBRUosa0JBQU1DLFNBQU4sQ0FBZ0JDLElBRHZCO0FBRUpHLElBQUFBLElBQUksRUFBRSxVQUZGO0FBR0pDLElBQUFBLE9BQU8sRUFBRSxLQUhMO0FBSUpDLElBQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxZQUFZLEVBQUUsQ0FBQyxFQUFEO0FBQWhCLEtBSkw7QUFLSkMsSUFBQUEsZUFBZSxFQUFFO0FBQUVDLE1BQUFBLFdBQVcsRUFBRTtBQUFmO0FBTGIsR0FBTixDQURGO0FBU0EsTUFBSUMsYUFBYSxHQUFHLE1BQXBCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLElBQUFBLGFBQWEsRUFBYkEsYUFBRjtBQUFpQkcsSUFBQUEsY0FBYyxFQUFFZixhQUFhLENBQUNnQixHQUFkLENBQWtCSixhQUFsQjtBQUFqQyxHQUFaO0FBQ0QsQ0FiTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBicmFpbiBmcm9tICdicmFpbi5qcydcbmltcG9ydCB7IHRyYWluIH0gZnJvbSAnLi4vY29yZS90cmFpbidcblxuZXhwb3J0IGxldCBhZGRpdGlvbiA9ICgpID0+IHtcbiAgbGV0IG5ldXJvQWRkaXRpb24gPSBuZXcgYnJhaW4ucmVjdXJyZW50LkxTVE0oKVxuICBuZXVyb0FkZGl0aW9uLmZyb21KU09OKFxuICAgIHRyYWluKHtcbiAgICAgIGJyYWluVHlwZTogYnJhaW4ucmVjdXJyZW50LkxTVE0sXG4gICAgICBuYW1lOiAnYWRkaXRpb24nLFxuICAgICAgcmV0cmFpbjogZmFsc2UsXG4gICAgICBvcHRpb25zOiB7IGhpZGRlbkxheWVyczogWzIwXSB9LFxuICAgICAgdHJhaW5pbmdPcHRpb25zOiB7IGVycm9yVGhyZXNoOiAwLjAyNSB9LFxuICAgIH0pXG4gIClcbiAgbGV0IGFkZGl0aW9uSW5wdXQgPSAnMSsxPSdcbiAgY29uc29sZS5sb2coeyBhZGRpdGlvbklucHV0LCBhZGRpdGlvbk91dHB1dDogbmV1cm9BZGRpdGlvbi5ydW4oYWRkaXRpb25JbnB1dCkgfSlcbn0iXX0=