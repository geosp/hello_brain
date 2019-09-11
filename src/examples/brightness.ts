import brain from 'brain.js'
import { train } from '../core/train'

export let brightness = () => {
  let neuroBrightness = new brain.NeuralNetwork()
  neuroBrightness.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'brightness',
      retrain: false,
      options: { hiddenLayers: [3] },
    })
  )
  let brightNessInput = { red: 0.02, blue: 0.5, green: 0.5 }
  console.log({
    brightNessInput,
    colorOutput: neuroBrightness.run(brightNessInput),
  })
}
