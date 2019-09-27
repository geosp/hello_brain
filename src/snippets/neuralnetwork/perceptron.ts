// Functional is declarative
import _ from 'lodash/fp'
import F from 'futil-js'
import {
  activationFunctions,
  logicRandom,
  arrayGenerator,
  supportedActivationFunctions,
  activationFunctionDerivatives,
} from './math'
import * as tf from '@tensorflow/tfjs-node'

// Encoding knowledge into functions or layers through which information flows.
export let perceptron = ({
  activations = [] as number[],
  weights = [] as number[],
  bias = logicRandom(),
  nonlinearity = 'sigmoid' as supportedActivationFunctions,
} = {}) => {
  let perceptron = {
    weights,
    bias,
    activations,
    nonlinearity,
    init: (size: number) => {
      perceptron.weights = arrayGenerator(size)
    },
    activate: () =>
      _.flow(
        x => x.dataSync(),
        _.first,
        (sum: number) => sum + perceptron.bias,
        activationFunctions[perceptron.nonlinearity]
      )(tf.mul(tf.tensor(perceptron.weights), tf.tensor(perceptron.activations))),
    activtionDerivative: ({ weight, error }: { weight: number; error: number }): number =>
      activationFunctionDerivatives[nonlinearity]({value: weight, error}),
    serialize: () => JSON.stringify(perceptron),
  }
  return perceptron
}
