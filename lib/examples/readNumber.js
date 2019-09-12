"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readNumber = void 0;

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

var _fp = _interopRequireDefault(require("lodash/fp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var readNumber = function readNumber() {
  var normalizeNumber = function normalizeNumber(number) {
    if (number.length === 49) return _toConsumableArray(number).map(function (c) {
      return c === '#' ? 1 : 0;
    });else throw 'Invalid length!!!';
  };

  var zero = normalizeNumber('#######' + '#     #' + '#     #' + '#     #' + '#     #' + '#     #' + '#######');
  var one = normalizeNumber('   #   ' + '   #   ' + '   #   ' + '   #   ' + '   #   ' + '   #   ' + '   #   ');
  var two = normalizeNumber('#######' + '      #' + '      #' + '#######' + '#      ' + '#      ' + '#######');
  var three = normalizeNumber('#######' + '      #' + '      #' + '#######' + '      #' + '      #' + '#######');
  var four = normalizeNumber('#     #' + '#     #' + '#######' + '      #' + '      #' + '      #' + '      #');
  var five = normalizeNumber('#######' + '#      ' + '#      ' + '#######' + '      #' + '      #' + '#######');
  var six = normalizeNumber('#######' + '#      ' + '#      ' + '#######' + '#     #' + '#     #' + '#######');
  var seven = normalizeNumber('#######' + '      #' + '      #' + '      #' + '      #' + '      #' + '      #');
  var eight = normalizeNumber('#######' + '#     #' + '#     #' + '#######' + '#     #' + '#     #' + '#######');
  var nine = normalizeNumber('#######' + '#     #' + '#     #' + '#######' + '      #' + '      #' + '      #');
  var almostNine = normalizeNumber('# # # #' + '#     #' + '#     #' + '# # # #' + '      #' + '       ' + '      #');
  var numbers = {
    zero: zero,
    one: one,
    two: two,
    three: three,
    four: four,
    five: five,
    six: six,
    seven: seven,
    eight: eight,
    nine: nine
  };

  var data = _fp["default"].flow(_fp["default"].keys, _fp["default"].map(function (key) {
    return {
      input: numbers[key],
      output: _defineProperty({}, key, 1)
    };
  }))(numbers);

  var neuro = new _brain["default"].NeuralNetwork();
  neuro.fromJSON((0, _train.train)({
    brainType: _brain["default"].NeuralNetwork,
    name: 'readNumber',
    retrain: false,
    options: {
      hiddenLayers: [3]
    },
    prepocessor: function prepocessor() {
      return data;
    }
  }));
  var numberInput = almostNine;
  console.log({
    numberInput: JSON.stringify(numberInput),
    numberOutput: _brain["default"].likely(numberInput, neuro)
  });
};

exports.readNumber = readNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlcy9yZWFkTnVtYmVyLnRzIl0sIm5hbWVzIjpbInJlYWROdW1iZXIiLCJub3JtYWxpemVOdW1iZXIiLCJudW1iZXIiLCJsZW5ndGgiLCJtYXAiLCJjIiwiemVybyIsIm9uZSIsInR3byIsInRocmVlIiwiZm91ciIsImZpdmUiLCJzaXgiLCJzZXZlbiIsImVpZ2h0IiwibmluZSIsImFsbW9zdE5pbmUiLCJudW1iZXJzIiwiZGF0YSIsIl8iLCJmbG93Iiwia2V5cyIsImtleSIsImlucHV0Iiwib3V0cHV0IiwibmV1cm8iLCJicmFpbiIsIk5ldXJhbE5ldHdvcmsiLCJmcm9tSlNPTiIsImJyYWluVHlwZSIsIm5hbWUiLCJyZXRyYWluIiwib3B0aW9ucyIsImhpZGRlbkxheWVycyIsInByZXBvY2Vzc29yIiwibnVtYmVySW5wdXQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm51bWJlck91dHB1dCIsImxpa2VseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVPLElBQUlBLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDNUIsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQW9CO0FBQ3hDLFFBQUlBLE1BQU0sQ0FBQ0MsTUFBUCxLQUFrQixFQUF0QixFQUEwQixPQUFPLG1CQUFJRCxNQUFKLEVBQVlFLEdBQVosQ0FBZ0IsVUFBQUMsQ0FBQztBQUFBLGFBQUtBLENBQUMsS0FBSyxHQUFOLEdBQVksQ0FBWixHQUFnQixDQUFyQjtBQUFBLEtBQWpCLENBQVAsQ0FBMUIsS0FDSyxNQUFNLG1CQUFOO0FBQ04sR0FIRDs7QUFLQSxNQUFJQyxJQUFJLEdBQUdMLGVBQWUsQ0FDdEIsWUFDQSxTQURBLEdBRUEsU0FGQSxHQUdBLFNBSEEsR0FJQSxTQUpBLEdBS0EsU0FMQSxHQU1BLFNBUHNCLENBQTFCO0FBVUEsTUFBSU0sR0FBRyxHQUFH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QUFBO0FBTFQsR0FBTixDQURGO0FBU0EsTUFBSWlCLFdBQVcsR0FBR25CLFVBQWxCO0FBQ0FvQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFRixJQUFBQSxXQUFXLEVBQUVHLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixXQUFmLENBQWY7QUFBNENLLElBQUFBLFlBQVksRUFBRWQsa0JBQU1lLE1BQU4sQ0FBYU4sV0FBYixFQUEwQlYsS0FBMUI7QUFBMUQsR0FBWjtBQUNELENBdElNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJyYWluIGZyb20gJ2JyYWluLmpzJ1xuaW1wb3J0IHsgdHJhaW4gfSBmcm9tICcuLi9jb3JlL3RyYWluJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoL2ZwJ1xuXG5leHBvcnQgbGV0IHJlYWROdW1iZXIgPSAoKSA9PiB7XG4gIGxldCBub3JtYWxpemVOdW1iZXIgPSAobnVtYmVyOiBTdHJpbmcpID0+IHtcbiAgICBpZiAobnVtYmVyLmxlbmd0aCA9PT0gNDkpIHJldHVybiBbLi4ubnVtYmVyXS5tYXAoYyA9PiAoYyA9PT0gJyMnID8gMSA6IDApKVxuICAgIGVsc2UgdGhyb3cgJ0ludmFsaWQgbGVuZ3RoISEhJ1xuICB9XG5cbiAgbGV0IHplcm8gPSBub3JtYWxpemVOdW1iZXIoXG4gICAgICAnIyMjIyMjIycgK1xuICAgICAgJyMgICAgICMnICtcbiAgICAgICcjICAgICAjJyArXG4gICAgICAnIyAgICAgIycgK1xuICAgICAgJyMgICAgICMnICtcbiAgICAgICcjICAgICAjJyArXG4gICAgICAnIyMjIyMjIydcbiAgKVxuXG4gIGxldCBvbmUgPSBub3JtYWxpemVOdW1iZXIoXG4gICAgICAnICAgIyAgICcgK1xuICAgICAgJyAgICMgICAnICtcbiAgICAgICcgICAjICAgJyArXG4gICAgICAnICAgIyAgICcgK1xuICAgICAgJyAgICMgICAnICtcbiAgICAgICcgICAjICAgJyArXG4gICAgICAnICAgIyAgICdcbiAgKVxuXG4gIGxldCB0d28gPSBub3JtYWxpemVOdW1iZXIoXG4gICAgICAnIyMjIyMjIycgK1xuICAgICAgJyAgICAgICMnICtcbiAgICAgICcgICAgICAjJyArXG4gICAgICAnIyMjIyMjIycgK1xuICAgICAgJyMgICAgICAnICtcbiAgICAgICcjICAgICAgJyArXG4gICAgICAnIyMjIyMjIydcbiAgKVxuXG4gIGxldCB0aHJlZSA9IG5vcm1hbGl6ZU51bWJlcihcbiAgICAgICcjIyMjIyMjJyArXG4gICAgICAnICAgICAgIycgK1xuICAgICAgJyAgICAgICMnICtcbiAgICAgICcjIyMjIyMjJyArXG4gICAgICAnICAgICAgIycgK1xuICAgICAgJyAgICAgICMnICtcbiAgICAgICcjIyMjIyMjJ1xuICApXG5cbiAgbGV0IGZvdXIgPSBub3JtYWxpemVOdW1iZXIoXG4gICAgICAnIyAgICAgIycgK1xuICAgICAgJyMgICAgICMnICtcbiAgICAgICcjIyMjIyMjJyArXG4gICAgICAnICAgICAgIycgK1xuICAgICAgJyAgICAgICMnICtcbiAgICAgICcgICAgICAjJyArXG4gICAgICAnICAgICAgIydcbiAgKVxuXG4gIGxldCBmaXZlID0gbm9ybWFsaXplTnVtYmVyKFxuICAgICAgJyMjIyMjIyMnICtcbiAgICAgICcjICAgICAgJyArXG4gICAgICAnIyAgICAgICcgK1xuICAgICAgJyMjIyMjIyMnICtcbiAgICAgICcgICAgICAjJyArXG4gICAgICAnICAgICAgIycgK1xuICAgICAgJyMjIyMjIyMnXG4gIClcblxuICBsZXQgc2l4ID0gbm9ybWFsaXplTnVtYmVyKFxuICAgICAgJyMjIyMjIyMnICtcbiAgICAgICcjICAgICAgJyArXG4gICAgICAnIyAgICAgICcgK1xuICAgICAgJyMjIyMjIyMnICtcbiAgICAgICcjICAgICAjJyArXG4gICAgICAnIyAgICAgIycgK1xuICAgICAgJyMjIyMjIyMnXG4gIClcblxuICBsZXQgc2V2ZW4gPSBub3JtYWxpemVOdW1iZXIoXG4gICAgICAnIyMjIyMjIycgK1xuICAgICAgJyAgICAgICMnICtcbiAgICAgICcgICAgICAjJyArXG4gICAgICAnICAgICAgIycgK1xuICAgICAgJyAgICAgICMnICtcbiAgICAgICcgICAgICAjJyArXG4gICAgICAnICAgICAgIydcbiAgKVxuXG4gIGxldCBlaWdodCA9IG5vcm1hbGl6ZU51bWJlcihcbiAgICAgICcjIyMjIyMjJyArXG4gICAgICAnIyAgICAgIycgK1xuICAgICAgJyMgICAgICMnICtcbiAgICAgICcjIyMjIyMjJyArXG4gICAgICAnIyAgICAgIycgK1xuICAgICAgJyMgICAgICMnICtcbiAgICAgICcjIyMjIyMjJ1xuICApXG5cbiAgbGV0IG5pbmUgPSBub3JtYWxpemVOdW1iZXIoXG4gICAgICAnIyMjIyMjIycgK1xuICAgICAgJyMgICAgICMnICtcbiAgICAgICcjICAgICAjJyArXG4gICAgICAnIyMjIyMjIycgK1xuICAgICAgJyAgICAgICMnICtcbiAgICAgICcgICAgICAjJyArXG4gICAgICAnICAgICAgIydcbiAgKVxuXG4gIGxldCBhbG1vc3ROaW5lID0gbm9ybWFsaXplTnVtYmVyKFxuICAgICcjICMgIyAjJyArXG4gICAgJyMgICAgICMnICtcbiAgICAnIyAgICAgIycgK1xuICAgICcjICMgIyAjJyArXG4gICAgJyAgICAgICMnICtcbiAgICAnICAgICAgICcgK1xuICAgICcgICAgICAjJ1xuKVxuXG4gIGxldCBudW1iZXJzID0geyB6ZXJvLCBvbmUsIHR3bywgdGhyZWUsIGZvdXIsIGZpdmUsIHNpeCwgc2V2ZW4sIGVpZ2h0LCBuaW5lIH1cbiAgbGV0IGRhdGEgPSBfLmZsb3coXG4gICAgICBfLmtleXMsXG4gICAgICBfLm1hcChrZXkgPT4gKHtpbnB1dDogbnVtYmVyc1trZXldLCBvdXRwdXQ6IHtba2V5XTogMX19KSlcbiAgKShudW1iZXJzKVxuXG4gIGxldCBuZXVybyA9IG5ldyBicmFpbi5OZXVyYWxOZXR3b3JrKClcbiAgbmV1cm8uZnJvbUpTT04oXG4gICAgdHJhaW4oe1xuICAgICAgYnJhaW5UeXBlOiBicmFpbi5OZXVyYWxOZXR3b3JrLFxuICAgICAgbmFtZTogJ3JlYWROdW1iZXInLFxuICAgICAgcmV0cmFpbjogZmFsc2UsXG4gICAgICBvcHRpb25zOiB7IGhpZGRlbkxheWVyczogWzNdIH0sXG4gICAgICBwcmVwb2Nlc3NvcjogKCkgPT4gZGF0YVxuICAgIH0pXG4gIClcbiAgbGV0IG51bWJlcklucHV0ID0gYWxtb3N0TmluZVxuICBjb25zb2xlLmxvZyh7IG51bWJlcklucHV0OiBKU09OLnN0cmluZ2lmeShudW1iZXJJbnB1dCksIG51bWJlck91dHB1dDogYnJhaW4ubGlrZWx5KG51bWJlcklucHV0LCBuZXVybykgfSlcbn1cbiJdfQ==