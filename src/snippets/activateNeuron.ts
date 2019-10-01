import _ from 'lodash/fp'
import {neuron, layer } from './neuralnetwork'
import { arrayGenerator } from './neuralnetwork/math'

let P = neuron()
P.init(4)
P.activations = arrayGenerator(4)
console.log({neuron: P, potential: P.activate()})
// Change activation function
P.nonlinearity = 'tanh'
console.log({perceptron: P, potential: P.activate()})
// Update weights
P.weights = arrayGenerator(4)
console.log({perceptron: P, potential: P.activate()})

let L1 = layer({neurons: [P]})
console.log({P: L1.neurons[0]})
let L2 = layer()
L2.init({count: 4, size: 3, nonlinearity: 'leakyRelu' })
console.log({L2: L2.serialize()})