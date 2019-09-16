import _ from 'lodash/fp'
import brain from 'brain.js'
import { train } from '../../core/train'
import {
  trainingData,
  marketDataPreprocessor,
  denormailizeData
} from './util'

export let market = () => {
  let neuroMarket = new brain.recurrent.LSTMTimeStep()
  neuroMarket.fromJSON(
    train({
      brainType: brain.recurrent.LSTMTimeStep,
      name: 'market',
      retrain: false,
      svg: true,
      svgOptions: { width: 1000, height: 1250},
      options: { hiddenLayers: [8, 8], inputSize: 4, outputSize: 4 },
      trainingOptions: { learningRate: 0.005, errorThresh: 0.02 },
      preprocessor: marketDataPreprocessor,
      trainingSets: ['first']
    })
  )
  let marketForcastInput = _.last(trainingData)
  let marketForcastOutput = neuroMarket.forecast(marketForcastInput, 5)
  console.log({ marketForcastInput: denormailizeData(marketForcastInput), marketForcastOutput: denormailizeData(marketForcastOutput) })
}
