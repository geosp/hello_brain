import _ from 'lodash/fp'
import * as tf from '@tensorflow/tfjs-node'

export let meshGrid = ({ xRange, yRange }) => {
    let x = _.reduce(
      mesh => {
        // @ts-ignore
        mesh.push(xRange)
        return mesh
      },
      [],
      _.times(_.identity, yRange.length)
    )
    let y = _.reduce(
      mesh => {
        // @ts-ignore
        mesh.push(yRange)
        return mesh
      },
      [],
      _.times(_.identity, xRange.length)
    )
    return { X: tf.stack(x), Y: tf.stack(y).transpose() }
  }