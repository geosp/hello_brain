import _ from 'lodash/fp'
import { plot, stack } from 'nodeplotlib'
import * as tf from '@tensorflow/tfjs-node'

let f = x => x ** 2 + 5
let x = tf.range(-20, 20, 1).arraySync() as number[]
let y = _.map(f, x)
let dy_dx = x => 2 * x
let tangent = tangentX => _.map(x => dy_dx(tangentX) * x + f(tangentX) - dy_dx(tangentX) * tangentX, x)

stack(
  [
    { x, y, name: 'parabola' },
    { x, y: tangent(3), name: `tangent line slope: ${dy_dx(3)}` },
  ],
  {
    title: 'Derivative',
    width: 1000,
    height: 1000,
  }
)
plot()
