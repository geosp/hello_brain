import _ from 'lodash/fp'
import F from 'futil-js'

export let arrayGenerator = (size: number) => _.times(Math.random, size)
//Introducing a nonlinearity to increase the range from linear to nonlinear functions.
export type supportedActivationFunctions = 'sigmoid' | 'leakyRelu' | 'tanh'
export let activationFunctions = {
    sigmoid: x => 1 / (1 + Math.pow(Math.E, -x)),
    leakyRelu: x => (x > 0 ? x : 0.01 * x),
    tanh: Math.tanh
  }
export let meanSquaredError = ({ predicted = [] as number[], expected = [] as number[] }) =>
  _.flow(
    F.reduceIndexed(
      (sum, expectedValue, i) =>
        (sum += Math.pow(predicted[i] - expectedValue, 2)),
      0
    ),
    (sum: number) => sum / expected.length
  )(expected)