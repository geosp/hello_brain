// Functional is declarative
import _ from 'lodash/fp'
import F from 'futil-js'
import {
  activationFunctions,
  random,
  arrayGenerator,
  supportedActivationFunctions,
  activationFunctionDerivatives,
} from './math'
import * as tf from '@tensorflow/tfjs-node'
import { sum } from '@tensorflow/tfjs-core/dist/util'

// Encoding knowledge into functions or layers through which information flows.
export let neuron = ({
  activations = [] as number[],
  weights = [] as number[],
  bias = random(),
  nonlinearity = 'sigmoid' as supportedActivationFunctions,
} = {}) => {
  let neuron = {
    weights,
    bias,
    activations,
    nonlinearity,
    signal: 0,
    init: (size: number) => {
      neuron.weights = arrayGenerator(size)
    },
    activate: () => {
      neuron.signal = _.flow(
        result => tf.sum(result),
        // @ts-ignore
        sum => sum.dataSync()[0] + neuron.bias,
        activationFunctions[neuron.nonlinearity]
      )(tf.mul(tf.tensor(neuron.weights), tf.tensor(neuron.activations)))
      return neuron.signal
    },
    activtionDerivative: ({ weight, error }: { weight: number; error: number }): number =>
      activationFunctionDerivatives[nonlinearity]({value: weight, error}),
    serialize: () => JSON.stringify(neuron),
  }
  return neuron
}
