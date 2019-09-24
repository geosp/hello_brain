import _ from 'lodash/fp'
import F from 'futil-js'
import { pointfreePerceptron } from './perceptron'
import { meanSquaredError } from './meanSquaredError'

let numberofActivationValues = 4
let bias = Math.random()
let randomValues = (): number[] =>
_.times(Math.random, numberofActivationValues)
let [P1, P2, P3, P4] = _.times(
x => pointfreePerceptron(randomValues(), bias),
numberofActivationValues
)
let expected = _.map(f => f(randomValues()), [P1, P2])
let predicted = _.map(f => f(randomValues()), [P3, P4])
  
console.log({error: meanSquaredError({ predicted, expected })})
