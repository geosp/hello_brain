// Functional is declarative
import _ from 'lodash/fp'
import F from 'futil-js'

//Introducing a nonlinearity to increase the range from linear to nonlinear functions.
export let sigmoid = x => 1 / (1 + Math.pow(Math.E, -x))
export let leakyRelu = x => x > 0 ? x: 0.01 * x

// Encoding knowledge into functions or layers through which information flows.
export let pointfreePerceptron = (
  activations: number[],
  bias: number,
  nonlinearity: Function = sigmoid
) => (weights: number[]) =>
  // @ts-ignore
  _.flow(
    F.mapIndexed((a, i) => weights[i] * a),
    // @ts-ignore
    _.reduce((sum, product) => sum + product, 0),
    sum => sum - bias, // This is a function in linear form y = ax + b
    nonlinearity // This makes the function nonlinear.
  )(activations)
