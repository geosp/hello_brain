import _ from 'lodash/fp'
import F from 'futil-js'
import { layer } from './'
import {
  supportedActivationFunctions,
} from './math'
import * as tf from '@tensorflow/tfjs-node'

export let neuralNetwork = ({
  layers = [1] as number[],
  nonlinearity = 'sigmoid' as supportedActivationFunctions,
}) => {
  let neuralNetwork = {
    hiddenLayers: [layer()],
    outputLayer: layer(),
    train: (
      { data = [{ input: [1], output: [1] }] },
      options = { epochs: 1, learningRate: 0.01 }
    ) => {
      // Build network graph.
      // @ts-ignore
      let size: number = _.flow(
        _.first,
        _.get('input.length')
      )(data)
      neuralNetwork.hiddenLayers = _.map(count => {
        let hiddenLayer = layer()
        hiddenLayer.type = 'hidden'
        hiddenLayer.init({ count, size, nonlinearity })
        size = count
        return hiddenLayer
      }, layers)
      neuralNetwork.outputLayer.init({
        // @ts-ignore
        count: _.flow(
          _.first,
          _.get('output.length')
        )(data),
        size: _.flow(
          _.last,
          _.get('neurons.length')
        )(neuralNetwork.hiddenLayers),
        nonlinearity,
      })
      neuralNetwork.outputLayer.type = 'output'
      // Start training.
      let iterations = 0
      do {
        _.each(({ input, output }) => {
          let predicted = input
          let expected = output
          // Propagate forward.
          _.each(
            l => {
              predicted = l.predict(predicted)
            },
            [...neuralNetwork.hiddenLayers, neuralNetwork.outputLayer]
          )
          // Propagate backwards.
          _.each(l => {           
            // Calculate error.
            let mse = tf.losses.meanSquaredError(tf.tensor(expected), tf.tensor(predicted))
            // Update weights
            F.eachIndexed((p,i) => {
              F.eachIndexed((weight, j) => {
              }, p.weights)
            }, l.neurons)
          }, [...neuralNetwork.hiddenLayers, neuralNetwork.outputLayer].reverse())
        }, data)
        iterations++
      } while (options.epochs >= iterations)
    },
    predict: input => {
      _.each(
        l => {
          input = l.predict(input)
        },
        [...neuralNetwork.hiddenLayers, neuralNetwork.outputLayer]
      )
      return input
    },
  }
  return neuralNetwork
}
