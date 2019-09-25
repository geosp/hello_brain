import _ from 'lodash/fp'
import { perceptron, supportedActivationFunctions } from './perceptron'

export let layer = ({
    perceptrons = [perceptron()]
  } = {}) => {
    let layer = {
      perceptrons,
      init: ({count = 1, size = 1, nonlinearity = 'sigmoid' as supportedActivationFunctions }) => {
        layer.perceptrons = _.times(() => perceptron(), count)
        _.each(p => {
          p.nonlinearity = nonlinearity
          p.init(size)
        }, layer.perceptrons)
      },
      serialize: () => JSON.stringify(layer.perceptrons)
    }
    return layer
  }