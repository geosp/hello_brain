import _ from 'lodash/fp'
import { perceptron } from './perceptron'
import { supportedActivationFunctions } from './math'
export let layer = ({ perceptrons = [perceptron()], label = '' } = {}) => {
  let layer = {
    perceptrons,
    label,
    init: ({ count = 1, size = 1, nonlinearity = 'sigmoid' as supportedActivationFunctions }) => {
      layer.perceptrons = _.times(() => perceptron(), count)
      _.each(p => {
        p.nonlinearity = nonlinearity
        p.init(size)
      }, layer.perceptrons)
    },
    predict: (activations = [] as number[]) =>
      _.reduce(
        (potentials, p) => {
          if(_.size(activations))
            p.activations = activations
          // @ts-ignore
          potentials.push(p.activate())
          return potentials
        },
        [],
        layer.perceptrons
      ),
    serialize: () => JSON.stringify(layer.perceptrons),
  }
  return layer
}
