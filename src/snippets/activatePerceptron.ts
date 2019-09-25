import _ from 'lodash/fp'
import {perceptron, layer, arrayGenerator} from './perceptron'

let P = perceptron()
P.init(4)
console.log({perceptron: P, potential: P.activate()})
// Change activation function
P.nonlinearity = 'leakyRelu'
console.log({perceptron: P, potential: P.activate()})
// Update weights
P.weights = arrayGenerator(4)
console.log({perceptron: P, potential: P.activate()})

let L1 = layer({perceptrons: [P]})
console.log({P: L1.perceptrons[0]})
let L2 = layer()
L2.init({count: 4, size: 3, nonlinearity: 'leakyRelu' })
console.log({L2: JSON.stringify(L2)})