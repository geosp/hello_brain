import _ from 'lodash/fp'
import F from 'futil-js'
import { neuron } from './neuralnetwork'
import { meanSquaredError } from './neuralnetwork/math'
import { arrayGenerator, random } from './neuralnetwork/math'

let numberofActivationValues = 4
let bias = random()
let [P1, P2, P3, P4] = _.times(
x => neuron({activations: arrayGenerator(numberofActivationValues), bias}),
numberofActivationValues
)
let initAndActivate = p => {
    p.init(numberofActivationValues)
    p.activations = arrayGenerator(numberofActivationValues)
    return p.activate()
}
let expected = _.map(initAndActivate, [P1, P2])
let predicted = _.map(initAndActivate, [P3, P4])
console.log({error: meanSquaredError({ predicted, expected })})
