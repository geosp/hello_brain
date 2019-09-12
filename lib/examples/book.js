"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.book = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var book = function book() {
  var neuro = new _brain["default"].recurrent.LSTM();
  neuro.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTM,
    name: 'book',
    retrain: false,
    trainingOptions: {
      iterations: 1500,
      errorThresh: 0.011
    }
  }));
  var bookInput = 'Jane saw seat';
  console.log({
    bookInput: bookInput,
    additionOutput: neuro.run(bookInput)
  });
};

exports.book = book;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9ib29rLnRzIl0sIm5hbWVzIjpbImJvb2siLCJuZXVybyIsImJyYWluIiwicmVjdXJyZW50IiwiTFNUTSIsImZyb21KU09OIiwiYnJhaW5UeXBlIiwibmFtZSIsInJldHJhaW4iLCJ0cmFpbmluZ09wdGlvbnMiLCJpdGVyYXRpb25zIiwiZXJyb3JUaHJlc2giLCJib29rSW5wdXQiLCJjb25zb2xlIiwibG9nIiwiYWRkaXRpb25PdXRwdXQiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUVPLElBQUlBLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDcEIsTUFBSUMsS0FBSyxHQUFHLElBQUlDLGtCQUFNQyxTQUFOLENBQWdCQyxJQUFwQixFQUFaO0FBQ0FILEVBQUFBLEtBQUssQ0FBQ0ksUUFBTixDQUNFLGtCQUFNO0FBQ0pDLElBQUFBLFNBQVMsRUFBRUosa0JBQU1DLFNBQU4sQ0FBZ0JDLElBRHZCO0FBRUpHLElBQUFBLElBQUksRUFBRSxNQUZGO0FBR0pDLElBQUFBLE9BQU8sRUFBRSxLQUhMO0FBSUpDLElBQUFBLGVBQWUsRUFBRTtBQUFFQyxNQUFBQSxVQUFVLEVBQUUsSUFBZDtBQUFvQkMsTUFBQUEsV0FBVyxFQUFFO0FBQWpDO0FBSmIsR0FBTixDQURGO0FBUUEsTUFBSUMsU0FBUyxHQUFHLGVBQWhCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLElBQUFBLFNBQVMsRUFBVEEsU0FBRjtBQUFhRyxJQUFBQSxjQUFjLEVBQUVkLEtBQUssQ0FBQ2UsR0FBTixDQUFVSixTQUFWO0FBQTdCLEdBQVo7QUFDSCxDQVpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJyYWluIGZyb20gJ2JyYWluLmpzJ1xuaW1wb3J0IHsgdHJhaW4gfSBmcm9tICcuLi9jb3JlL3RyYWluJ1xuXG5leHBvcnQgbGV0IGJvb2sgPSAoKSA9PiB7XG4gICAgbGV0IG5ldXJvID0gbmV3IGJyYWluLnJlY3VycmVudC5MU1RNKClcbiAgICBuZXVyby5mcm9tSlNPTihcbiAgICAgIHRyYWluKHtcbiAgICAgICAgYnJhaW5UeXBlOiBicmFpbi5yZWN1cnJlbnQuTFNUTSxcbiAgICAgICAgbmFtZTogJ2Jvb2snLFxuICAgICAgICByZXRyYWluOiBmYWxzZSxcbiAgICAgICAgdHJhaW5pbmdPcHRpb25zOiB7IGl0ZXJhdGlvbnM6IDE1MDAsIGVycm9yVGhyZXNoOiAwLjAxMSB9LFxuICAgICAgfSlcbiAgICApXG4gICAgbGV0IGJvb2tJbnB1dCA9ICdKYW5lIHNhdyBzZWF0J1xuICAgIGNvbnNvbGUubG9nKHsgYm9va0lucHV0LCBhZGRpdGlvbk91dHB1dDogbmV1cm8ucnVuKGJvb2tJbnB1dCkgfSlcbn1cbiJdfQ==