import _ from 'lodash/fp'
import {pointfreePerceptron, leakyRelu} from './perceptron'

let bias = 2
let randomGenerator = () => _.times(Math.random,4)
let a = randomGenerator() // Activation values.
let w = randomGenerator() // Weights
let P = pointfreePerceptron(a, bias) // Default perceptron with sigma
let tanhP = pointfreePerceptron(a, 2, Math.tanh) //Hyperbolic tangent perceptron
let leakyReluP = pointfreePerceptron(a, 2, leakyRelu) //Hyperbolic tangent perceptron

console.log({ sigma_potential: P(w),  tanh_potential: tanhP(w), leaky_relu: leakyReluP(w) })