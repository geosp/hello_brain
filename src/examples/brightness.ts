import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'
import chalk from 'chalk'

export let brightness = () => {
  let prepocessor = data =>
    _.map(data.colors, (color, idx) => ({
      input: data.brightnesses[idx],
      output: color,
    }))
  let denormalizer = value => Math.floor(256 * value)
  let denormalize = color => [
    denormalizer(color.red),
    denormalizer(color.green),
    denormalizer(color.blue),
  ]
  let neuroBrightness = new brain.NeuralNetwork()
  neuroBrightness.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'brightness',
      retrain: false,
      options: { hiddenLayers: [3] },
      prepocessor,
    })
  )
  let brightnessInput = { light: 0.55 }
  let colorOutput = denormalize(neuroBrightness.run(brightnessInput))
  console.log(
    //@ts-ignore
    chalk.bold.rgb(...colorOutput)(
      `${JSON.stringify({
        brightnessInput,
        colorOutput: colorOutput,
      })}`
    )
  )
}
