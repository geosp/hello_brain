"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentiment = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sentiment = function sentiment() {
  var neuro = new _brain["default"].recurrent.LSTM();
  neuro.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTM,
    name: 'sentiment',
    retrain: false,
    trainingOptions: {
      iterations: 1000,
      errorThresh: 0.011
    }
  }));
  var sentimentInput = "I am unhappy!";
  console.log({
    sentimentInput: sentimentInput,
    sentimentOutput: neuro.run(sentimentInput)
  });
};

exports.sentiment = sentiment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9zZW50aW1lbnQudHMiXSwibmFtZXMiOlsic2VudGltZW50IiwibmV1cm8iLCJicmFpbiIsInJlY3VycmVudCIsIkxTVE0iLCJmcm9tSlNPTiIsImJyYWluVHlwZSIsIm5hbWUiLCJyZXRyYWluIiwidHJhaW5pbmdPcHRpb25zIiwiaXRlcmF0aW9ucyIsImVycm9yVGhyZXNoIiwic2VudGltZW50SW5wdXQiLCJjb25zb2xlIiwibG9nIiwic2VudGltZW50T3V0cHV0IiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxJQUFJQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3pCLE1BQUlDLEtBQUssR0FBRyxJQUFJQyxrQkFBTUMsU0FBTixDQUFnQkMsSUFBcEIsRUFBWjtBQUNBSCxFQUFBQSxLQUFLLENBQUNJLFFBQU4sQ0FDRSxrQkFBTTtBQUNKQyxJQUFBQSxTQUFTLEVBQUVKLGtCQUFNQyxTQUFOLENBQWdCQyxJQUR2QjtBQUVKRyxJQUFBQSxJQUFJLEVBQUUsV0FGRjtBQUdKQyxJQUFBQSxPQUFPLEVBQUUsS0FITDtBQUlKQyxJQUFBQSxlQUFlLEVBQUU7QUFBRUMsTUFBQUEsVUFBVSxFQUFFLElBQWQ7QUFBb0JDLE1BQUFBLFdBQVcsRUFBRTtBQUFqQztBQUpiLEdBQU4sQ0FERjtBQVFBLE1BQUlDLGNBQWMsR0FBRyxlQUFyQjtBQUNBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixJQUFBQSxjQUFjLEVBQWRBLGNBQUY7QUFBa0JHLElBQUFBLGVBQWUsRUFBRWQsS0FBSyxDQUFDZSxHQUFOLENBQVVKLGNBQVY7QUFBbkMsR0FBWjtBQUNILENBWk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJhaW4gZnJvbSAnYnJhaW4uanMnXG5pbXBvcnQgeyB0cmFpbiB9IGZyb20gJy4uL2NvcmUvdHJhaW4nXG5cbmV4cG9ydCBsZXQgc2VudGltZW50ID0gKCkgPT4ge1xuICAgIGxldCBuZXVybyA9IG5ldyBicmFpbi5yZWN1cnJlbnQuTFNUTSgpXG4gICAgbmV1cm8uZnJvbUpTT04oXG4gICAgICB0cmFpbih7XG4gICAgICAgIGJyYWluVHlwZTogYnJhaW4ucmVjdXJyZW50LkxTVE0sXG4gICAgICAgIG5hbWU6ICdzZW50aW1lbnQnLFxuICAgICAgICByZXRyYWluOiBmYWxzZSxcbiAgICAgICAgdHJhaW5pbmdPcHRpb25zOiB7IGl0ZXJhdGlvbnM6IDEwMDAsIGVycm9yVGhyZXNoOiAwLjAxMSB9LFxuICAgICAgfSlcbiAgICApXG4gICAgbGV0IHNlbnRpbWVudElucHV0ID0gXCJJIGFtIHVuaGFwcHkhXCJcbiAgICBjb25zb2xlLmxvZyh7IHNlbnRpbWVudElucHV0LCBzZW50aW1lbnRPdXRwdXQ6IG5ldXJvLnJ1bihzZW50aW1lbnRJbnB1dCkgfSlcbn1cbiJdfQ==