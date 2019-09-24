import {pointfreePerceptron} from './perceptron'

// Change the values a and w to see if you can get it to go above 1.
let a = [0.1, 0.5, .3, .4]
let P = pointfreePerceptron(a, 2)
let w = [0.5, 0.6, 0.7, 0.8]

console.log({ potential: P(w) })