import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'

export let colors = () => {
  let preprocessor = data =>
    _.map(data.colors, (color, idx) => ({
      input: color,
      output: data.brightnesses[idx],
    }))
  let neuroColors = new brain.NeuralNetwork()
  neuroColors.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'colors',
      retrain: false,
      options: { hiddenLayers: [3] },
      preprocessor,
      trainingSets: ['first']
    })
  )
  let colorInput = {
    blue: 0.3
  }
  console.log({ colorInput, colorOutput: neuroColors.run(colorInput) })
}
