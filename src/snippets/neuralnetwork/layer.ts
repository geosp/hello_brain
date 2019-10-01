import _ from 'lodash/fp'
import { neuron } from './neuron'
import { supportedActivationFunctions } from './math'
export let layer = ({ neurons = [neuron()] } = {}) => {
  let layer = {
    neurons,
    signals: [] as number[],
    type: '',
    init: ({ count = 1, size = 1, nonlinearity = 'sigmoid' as supportedActivationFunctions }) => {
      layer.neurons = _.times(() => neuron(), count)
      _.each(p => {
        p.nonlinearity = nonlinearity
        p.init(size)
      }, layer.neurons)
    },
    predict: (activations = [] as number[]) => {
      layer.signals = _.map(
        (p) => {
          if (_.size(activations))
            p.activations = activations
          return p.activate()
        },
        layer.neurons
      )
      return layer.signals
    },
    serialize: () => JSON.stringify(layer.neurons),
  }
  return layer
}
