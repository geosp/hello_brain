// point-free programming: https://simonsmith.io/dipping-a-toe-into-functional-js-with-lodash-fp
import _ from 'lodash/fp'
import F from 'futil-js'

// Try it: node lib/snippets/perceptron.js
let sigmoid = x => 1 / (1 + Math.pow(Math.E, -x))
let pointfreePerceptron = (activations: number[], bias: number) => (weights: number[]) =>
  _.flow(
    F.mapIndexed((a, i) => weights[i] * a),
    // @ts-ignore
    _.reduce((sum, product) => sum + product, 0),
    sum => sum - bias,
    sigmoid
  )(activations)

// Change the values a and w to see if you can get it to go above 1.
let a = [0.1, 0.5, .3, .4]
let P = pointfreePerceptron(a, 2)
let w = [0.5, 0.6, 0.7, 0.8]

console.log({ potential: P(w) })
