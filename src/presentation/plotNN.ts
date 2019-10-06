import _ from 'lodash/fp'
import { plot, stack } from 'nodeplotlib'
import { toNumber } from '../snippets/neuralnetwork/math'
import * as tf from '@tensorflow/tfjs-node'

let neuronCount = 200
let neuronsPerLayer = 20
let terms = 4
let AN = () => {
  let bias = tf.randomUniform([1])
  return _.flow(
    ({ weights, activations }) => tf.mul(weights, activations),
    tf.sum,
    sum => tf.add(sum, bias),
    tf.sigmoid,
    toNumber
  )({ weights: tf.randomUniform([terms]), activations: tf.randomUniform([terms])})
}
let layers = _.chunk(neuronsPerLayer, _.times(AN, neuronCount))
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
