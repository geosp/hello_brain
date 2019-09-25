import _ from 'lodash/fp'
import F from 'futil-js'
import { perceptron } from './neuralnetwork'
import { meanSquaredError } from './neuralnetwork/math'

let numberofActivationValues = 4
let bias = Math.random()
let randomValues = (): number[] =>
_.times(Math.random, numberofActivationValues)
let [P1, P2, P3, P4] = _.times(
x => perceptron({activations: randomValues(), bias}),
numberofActivationValues
)
let initAndActivate = p => {
    p.init()
    return p.activate()
}
let expected = _.map(initAndActivate, [P1, P2])
let predicted = _.map(initAndActivate, [P3, P4])
console.log({error: meanSquaredError({ predicted, expected })})
