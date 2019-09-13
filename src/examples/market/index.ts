import _ from 'lodash/fp'
import brain from 'brain.js'
import { train } from '../../core/train'
import marketData from '../../../data/training/market/first.json'
import {
  getExtremes,
  normalizeMarketData,
  denormalizeMarketData,
} from './util'

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
  const trainingData = marketDataPreprocessor(marketData)
  let neuroMarket = new brain.recurrent.LSTMTimeStep()
  neuroMarket.fromJSON(
    train({
      brainType: brain.recurrent.LSTMTimeStep,
      name: 'market',
      retrain: false,
      options: { hiddenLayers: [8, 8], inputSize: 4, outputSize: 4 },
      trainingOptions: { learningRate: 0.005, errorThresh: 0.02 },
      preprocessor: marketDataPreprocessor,
      trainingSets: ['first']
    })
  )
  let marketInput = [trainingData[0][0]]
  let marketOutput = neuroMarket.run(marketInput)
  console.log({ marketInput, denormailizedMarketOutput: denormailizeData([marketOutput]) })
  let marketForcastInput = [
    trainingData[0][0],
    trainingData[0][1],
  ]
  let marketForcastOutput = neuroMarket.forecast(marketForcastInput, 3)
  console.log({ marketForcastInput, denormailizedMarketOutput: denormailizeData(marketForcastOutput) })
}
