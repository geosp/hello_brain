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