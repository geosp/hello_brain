// Functional is declarative
import _ from 'lodash/fp'
import F from 'futil-js'

//Introducing a nonlinearity to increase the range from linear to nonlinear functions.
export type supportedActivationFunctions = 'sigmoid' | 'leakyRelu'
let activationFunctions = {
  sigmoid: x => 1 / (1 + Math.pow(Math.E, -x)),
  leakyRelu: x => (x > 0 ? x : 0.01 * x),
}
export let arrayGenerator = (size: number) => _.times(Math.random, size)

// Encoding knowledge into functions or layers through which information flows.
export let perceptron = ({
  activations = [] as number[],
  weights = [] as number[],
  bias = Math.random(),
  nonlinearity = 'sigmoid' as supportedActivationFunctions,
} = {}) => {
  let perceptron = {
    weights,
    bias,
    activations,
    nonlinearity,
    init: (size: number) => {
      // @ts-ignore
      ;[perceptron.weights, perceptron.activations, perceptron.bias] = [
        ..._.times(() => arrayGenerator(size), 2),
        Math.random(),
      ]
    },
    activate: (): number =>
      // @ts-ignore
      _.flow(
        F.mapIndexed((a, i) => perceptron.weights[i] * a),
        // @ts-ignore
        _.reduce((sum, product) => sum + product, 0),
        sum => sum + perceptron.bias, // This is a function in linear form y = ax + b
        activationFunctions[perceptron.nonlinearity] // This makes the function nonlinear.
      )(perceptron.activations),
    serialize: () => JSON.stringify(perceptron)
  }
  return perceptron
}

