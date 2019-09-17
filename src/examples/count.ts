import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'

export default (retrain = false) => {
  let extendDataSet = () => {
    let a = _.tail([...Array(6).keys()])
    let b = _.clone(a).reverse()
    return [
      a,
      b,
    ]
  }

  let neuroCount = new brain.recurrent.LSTMTimeStep()
  let networkOptions = {
    hiddenLayers: [3],
  } as brain.INeuralNetworkOptions
  let trainingOptions = {
    errorThresh: 0.00005,
  } as brain.INeuralNetworkTrainingOptions
  neuroCount.fromJSON(
    train({
      brainType: brain.recurrent.LSTMTimeStep,
      networkOptions,
      // trainingOptions,
      name: 'count',
      retrain,
      svg: true,
      svgOptions: { width: 400, height: 300},
      trainingSets: ['forward', 'backward'],
      // preprocessor: data => [...data, ...extendDataSet()],
      // preprocessor: extendDataSet,
    })
  )
  let countInput = [3, 2]
  console.log({
    countInput,
    // @ts-ignore
    countOutput: Math.round(neuroCount.run(countInput)),
  })
}
