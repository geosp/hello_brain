import brain from 'brain.js'
import _ from 'lodash/fp'
import { train } from '../core/train'

export default ({retrain, name}) => {
  let neuroXor = new brain.NeuralNetwork()
  let networkOptions = {
    hiddenLayers: [3]
  } as brain.INeuralNetworkOptions
  neuroXor.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      networkOptions,
      name,
      retrain,
      trainingSets: ['first']
    })
  )
  let xorInput = [1, 1]
  console.log({ xorInput, xorOutput: Math.round(neuroXor.run(xorInput)[0]) })
}
