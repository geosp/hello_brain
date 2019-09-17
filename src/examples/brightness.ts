import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'
import chalk from 'chalk'

export default ({retrain, name}) => {
  let preprocessor = data =>
    _.map(data.colors, (color, idx) => ({
      input: data.brightnesses[idx],
      output: color,
    }))
  let denormalize = color =>
    _.map(_.keys(color), k => Math.floor(256 * color[k]))
    
  let neuroBrightness = new brain.NeuralNetwork()
  let networkOptions = {
    hiddenLayers: [3],
  } as brain.INeuralNetworkOptions
  neuroBrightness.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      networkOptions,
      name,
      retrain,
      preprocessor,
      trainingSets: ['first'],
    })
  )
  // Generating colors based on brightness prefferences.
  let brightnessInput = { light: 0.65, neutral: 0.35 }
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
