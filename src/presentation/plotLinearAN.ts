import _ from 'lodash/fp'
import F from 'futil-js'
import { plot, stack } from 'nodeplotlib'
import { random } from '../snippets/neuralnetwork/math'

// Linear with no sigmoid.
let weights = _.times(w => random() * w, 10)
let activations = _.times(a => random() * a, 10)
let linearAN = ({ input, weight, bias }) => input * weight + bias
let lines: object[] = []

F.eachIndexed((bias, i) => {
  let signals: number[] = []
  F.eachIndexed((activation, j) => {
    signals.push(linearAN({ input: activation, weight: weights[i], bias }))
  }, activations)
  lines.push({ x: activations, y: signals, name: `y${i}` })
}, _.times(random, 10))

stack(lines, {
  title: 'Linear 2d',
  width: 1000,
  height: 1000,
})
plot()
