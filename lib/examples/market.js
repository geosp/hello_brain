"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.market = void 0;

var _fp = _interopRequireDefault(require("lodash/fp"));

var _brain = _interopRequireDefault(require("brain.js"));

var _train = require("../core/train");

var _market = _interopRequireDefault(require("../../data/training/market.json"));

var _market2 = require("../util/market");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var market = function market() {
  var marketDataPreprocessor = function marketDataPreprocessor(data) {
    return _fp["default"].flow(_market2.getExtremes, (0, _market2.normalizeMarketData)(data), _fp["default"].chunk(5))(data);
  };

  var denormailizeData = function denormailizeData(data) {
    return _fp["default"].flow(_market2.getExtremes, (0, _market2.denormalizeMarketData)(data))(_market["default"]);
  };

  var neuroMarket = new _brain["default"].recurrent.LSTMTimeStep();
  neuroMarket.fromJSON((0, _train.train)({
    brainType: _brain["default"].recurrent.LSTMTimeStep,
    name: 'market',
    retrain: false,
    options: {
      hiddenLayers: [8, 8],
      inputSize: 4,
      outputSize: 4
    },
    trainingOptions: {
      learningRate: 0.005,
      errorThresh: 0.02
    },
    prepocessor: marketDataPreprocessor
  }));
  var marketInput = [{
    open: 0.6143595883694769,
    high: 0.7425657752134043,
    low: 0.5876882425193283,
    close: 0.6789736073408139
  }];
  var marketOutput = neuroMarket.run(marketInput);
  console.log({
    marketInput: marketInput,
    denormailizedMarketOutput: denormailizeData(marketOutput)
  });
};

exports.market = market;