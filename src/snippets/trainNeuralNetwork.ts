import { neuralNetwork } from './neuralnetwork'
import _ from 'lodash/fp'

let neuronet = neuralNetwork({layers: [3], nonlinearity: 'sigmoid'})
let data = [
    {input: [0,0], output: [0]},
    {input: [1,0], output: [1]},
    {input: [0,1], output: [1]},
    {input: [1,1], output: [0]}
]

let inputs = [[0,0],[1,0]]
neuronet.train({data}, {epochs: 4000, learningRate: 0.005})
let outputs = _.map(input => neuronet.predict(input), inputs)
console.log({input: inputs[0], output: outputs[0]})
console.log({input: inputs[1], output: outputs[1]})
