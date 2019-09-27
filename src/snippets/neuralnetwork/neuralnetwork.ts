import _ from 'lodash/fp'
import F from 'futil-js'
import { layer } from './'
import { supportedActivationFunctions, activationFunctionDerivatives, meanSquaredError } from './math'
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
      let k = 0
      neuralNetwork.hiddenLayers = _.map(count => {
        let hiddenLayer = layer()
        hiddenLayer.init({ count, size, nonlinearity })
        size = count
        hiddenLayer.label = `H${k}`
        return hiddenLayer
      }, layers)
      neuralNetwork.outputLayer.label = 'O'
      neuralNetwork.outputLayer.init({
        // @ts-ignore
        count: _.flow(
          _.first,
          _.get('output.length')
        )(data),
        size: _.flow(
          _.last,
          _.get('perceptrons.length')
        )(neuralNetwork.hiddenLayers),
        nonlinearity,
      })
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
              let errors = tf.losses
              .meanSquaredError(tf.tensor(predicted), tf.tensor(expected))
              .dataSync()
            let totalError = tf.sum(errors).dataSync()[0]
            let deltaErrors = _.map(error => {
              return activationFunctionDerivatives[nonlinearity]({
                value: error,
                error: totalError,
              })
            }, errors)
            predicted = l.predict()
            _.each(p => {
              //@ts-ignore
              let deltas = F.mapIndexed(
                (weight, j) => p.activtionDerivative({ weight, error: deltaErrors[j] }),
                p.weights
              )
              // console.log({deltas})
              // @ts-ignore
              F.eachIndexed((weight, j) => {
                let adjustment = options.learningRate * deltas[j]
                p.weights[j] = weight - adjustment
                console.log({weight, b: p.bias})
                p.bias = p.bias - adjustment
              }, p.weights)
            }, l.perceptrons)
            expected = l.predict()
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
