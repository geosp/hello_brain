import _ from 'lodash/fp'
import { plot, stack } from 'nodeplotlib'
import { random, activationFunctions } from '../snippets/neuralnetwork/math'
import * as tf from '@tensorflow/tfjs-node'

let neuronCount = 200
let neuronsPerLayer = 20
let terms = 4
let generateData = () => _.times(w => random(), terms)
let AN = () => {
  let bias = random()
  return _.flow(
    ({ weights, activations }) => tf.mul(tf.tensor(weights), tf.tensor(activations)),
    tf.sum,
    sum => (sum.dataSync()[0] += bias),
    activationFunctions.sigmoid
  )({ weights: generateData(), activations: generateData() })
}

let layers = _.flow(_.chunk(neuronsPerLayer))(_.times(AN, neuronCount))

stack(
  [
    {
      z: layers,
      // @ts-ignore
      type: 'surface',
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: '#42f462',
          project: { z: true },
        },
      },
    },
  ],
  {
    title: 'Neural Network',
    width: 1000,
    height: 1000,
  }
)
plot()
