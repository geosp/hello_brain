import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'

export default ({ retrain, name }) => {
  let preprocessor = data =>
    _.map(data.colors, (color, idx) => ({
      input: color,
      output: data.brightnesses[idx],
    }))

  let neuroColors = new brain.NeuralNetwork()
  let networkOptions = {
    hiddenLayers: [3],
  } as brain.INeuralNetworkOptions
  neuroColors.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      networkOptions,
      name,
      retrain,
      preprocessor,
      trainingSets: ['first'],
      svg: true,
    })
  )
  let colorInput = {
    blue: 0.3,
  }
  console.log({ colorInput, colorOutput: neuroColors.run(colorInput) })
}
