import brain from 'brain.js'
import { train } from '../core/train'

export let colors = () => {
  let neuroColors = new brain.NeuralNetwork()
  neuroColors.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'colors',
      retrain: false,
      options: { hiddenLayers: [3] },
    })
  )
  let colorInput = { light: 0.5 }
  console.log({ colorInput, colorOutput: neuroColors.run(colorInput) })
}
