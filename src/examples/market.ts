import _ from 'lodash/fp'
import brain from 'brain.js'
import { train } from '../core/train'
import marketData from '../../data/training/market.json'
import {
  getExtremes,
  normalizeMarketData,
  denormalizeMarketData,
} from '../util/market'

export let market = () => {
  const marketDataPreprocessor = data =>
    _.flow(
      getExtremes,
      normalizeMarketData(data),
      _.chunk(5)
    )(data)
  const denormailizeData = data => 
    _.flow(
      getExtremes,
      denormalizeMarketData(data)
    )(marketData)
  
  let neuroMarket = new brain.recurrent.LSTMTimeStep()
  neuroMarket.fromJSON(
    train({
      brainType: brain.recurrent.LSTMTimeStep,
      name: 'market',
      retrain: false,
      options: { hiddenLayers: [8, 8], inputSize: 4, outputSize: 4 },
      trainingOptions: { learningRate: 0.005, errorThresh: 0.02 },
      prepocessor: marketDataPreprocessor,
    })
  )
  let marketInput = [
    {
      open: 0.6143595883694769,
      high: 0.7425657752134043,
      low: 0.5876882425193283,
      close: 0.6789736073408139,
    },
  ]
  let marketOutput = neuroMarket.run(marketInput)
  console.log({ marketInput, denormailizedMarketOutput: denormailizeData(marketOutput) })
}
