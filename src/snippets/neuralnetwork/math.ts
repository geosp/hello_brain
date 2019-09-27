import _ from 'lodash/fp'
import F from 'futil-js'

export type valueWithError = { value: number, error?: number }
export let logicRandom = () => 2 * Math.random() - 1
export let arrayGenerator = (size: number) => _.times(logicRandom, size)
//Introducing a nonlinearity to increase the range from linear to nonlinear functions.
export type supportedActivationFunctions = 'sigmoid' | 'leakyRelu' | 'tanh'
export let activationFunctions = {
  sigmoid: (value): number => 1 / (1 + Math.pow(Math.E, -value)),
  leakyRelu: (value):number => (value > 0 ? value : 0.01 * value),
  tanh: Math.tanh,
}
export let activationFunctionDerivatives = {
  sigmoid: ({ value, error = 1 }: valueWithError) : number => value * (1 - value) * error,
  leakyRelu: ({ value, error = 1 }: valueWithError) : number => (value > 0 ? error : error * 0.01),
  tanh: ({ value, error = 1 }: valueWithError) : number => (1 - Math.pow(value, 2)) * error,
}
export let meanSquaredError = ({ predicted = [] as number[], expected = [] as number[] }) =>
  _.flow(
    F.reduceIndexed(
      (sum, value, i) => (sum += (predicted[i] - value) ** 2),
      0
    ),
    (sum: number) => sum / expected.length
  )(expected)