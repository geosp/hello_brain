import brain from 'brain.js'
import { train, trainingErrors, getErrorPlot} from '../../core/train'
import _ from 'lodash/fp'
import { range } from 'lodash'
import { plot, stack } from 'nodeplotlib'
import {
  preprocessor,
  normalizeHp,
  denormalizeMpg,
  hpExtreems,
  rawData,
} from './util'

export default ({retrain, name}) => {
  let model = new brain.NeuralNetwork()
  let networkOptions = {
    hiddenLayers: [2],
    activation: 'sigmoid'
  } as brain.INeuralNetworkOptions
  let trainingOptions = {
    errorThresh: 0.0138,
    // iterations: 50,
  } as brain.INeuralNetworkTrainingOptions
  model.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      networkOptions,
      trainingOptions,
      name,
      retrain,
      svg: true,
      svgOptions: { width: 500, height: 600},
      trainingSets: ['empty'],
      preprocessor,
    })
  )
  // Training data domain.
  let x0 = _.map(x => x.hp, rawData)
  // Training data range.
  let y0 = _.map(y => y.mpg, rawData)
  // Domain of possible input values.
  let x1 = range(hpExtreems.lowest, hpExtreems.highest, 10)
  // Range of predictions based on our model.
  let y1 = _.flow(
    _.map(normalizeHp),
    _.map(hp => model.run(hp)),
    _.map(denormalizeMpg),
    _.map(_.get('mpg'))
  )(x1)
  stack(
    [
      {
        x: x0,
        y: y0,
        type: 'scatter',
        name: 'raw',
        mode: 'markers',
      },
      { x: x1, y: y1, name: 'prediction' },
    ],
    {
      title: 'HP vs. Fuel Economy',
      xaxis: { title: 'HP' },
      yaxis: { title: 'MPG' },
    }
  )
  if (trainingErrors.length > 0) {
    let errorPlot = getErrorPlot()
    // @ts-ignore
    stack(errorPlot.plot, errorPlot.layout)
  }
  plot()
}
