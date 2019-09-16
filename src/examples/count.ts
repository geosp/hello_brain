import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'

export let count = () => {
  let neuroCount = new brain.recurrent.LSTMTimeStep()
  let extendDataSet = () => {
    let a = _.tail([...Array(6).keys()])
    let b = _.clone(a).reverse()
    return [
      a,
      b,
    ]
  }
  neuroCount.fromJSON(
    train({
      brainType: brain.recurrent.LSTMTimeStep,
      name: 'count',
      retrain: true,
      svg: true,
      svgOptions: { width: 400, height: 300},
      options: { hiddenLayers: [3] },
      trainingSets: ['forward', 'backward'],
      // preprocessor: data => [...data, ...extendDataSet()],
      // preprocessor: extendDataSet,
      // trainingOptions: {errorThresh: 0.00005}
    })
  )
  let countInput = [3, 2]
  console.log({
    countInput,
    // @ts-ignore
    countOutput: Math.round(neuroCount.run(countInput)),
  })
}
