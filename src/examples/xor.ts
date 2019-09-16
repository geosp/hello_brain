import brain from 'brain.js'
import _ from 'lodash/fp'
import { train } from '../core/train'

export let xor = () => {
  let neuroXor = new brain.NeuralNetwork()
  neuroXor.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'xor',
      retrain: true,
      options: { hiddenLayers: [3] },
      trainingSets: ['first']
    })
  )
  let xorInput = [1, 1]
  console.log({ xorInput, xorOutput: Math.round(neuroXor.run(xorInput)[0]) })
}
