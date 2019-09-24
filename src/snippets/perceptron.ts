// Functional is declarative
import _ from 'lodash/fp'
import F from 'futil-js'

let sigmoid = x => 1 / (1 + Math.pow(Math.E, -x))
export let pointfreePerceptron = (activations: number[], bias: number) => (weights: number[]) =>
  _.flow(
    F.mapIndexed((a, i) => weights[i] * a),
    // @ts-ignore
    _.reduce((sum, product) => sum + product, 0),
    sum => sum - bias,
    sigmoid
  )(activations)
