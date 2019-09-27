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
import { sum } from '@tensorflow/tfjs-core/dist/util'

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
        result => tf.sum(result),
        // @ts-ignore
        sum => sum.dataSync()[0] + perceptron.bias,
        activationFunctions[perceptron.nonlinearity]
      )(tf.mul(tf.tensor(perceptron.weights), tf.tensor(perceptron.activations))),
    activtionDerivative: ({ weight, error }: { weight: number; error: number }): number =>
      activationFunctionDerivatives[nonlinearity]({value: weight, error}),
    serialize: () => JSON.stringify(perceptron),
  }
  return perceptron
}
