import _ from 'lodash/fp'
import { plot, stack } from 'nodeplotlib'
import * as tf from '@tensorflow/tfjs-node'
import { meshGrid } from '../snippets/neuralnetwork/math'

let size = 50
let x = tf.linspace(-10, 10, size).arraySync()
let y = tf.linspace(-10, 10, size + 1).arraySync()
let { X, Y } = meshGrid({ xRange: x, yRange: y })
let paraboloid = tf.add(tf.pow(X, 2).div(2), tf.pow(Y, 2).div(4))
let plane = tf.add(tf.add(-0.84, X), tf.add(-0.84, Y))

stack(
  [
    {
      // @ts-ignore
      z: paraboloid.arraySync(), type: 'surface',
      name: 'paraleloid',
      colorscale: 'Viridis',
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: '#42f462',
          project: { z: true },
        },
      },
    },
    {
      // @ts-ignore
      z: plane.arraySync(), type: 'surface',
      name: 'gradient plane',
      opacity:0.9,
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: '#42f462',
          project: { z: true }
        },
      },
    },
  ],
  {
    title: 'Gradient',
    width: 1000,
    height: 1000,
  }
)

plot()
