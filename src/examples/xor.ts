import brain from 'brain.js'
import _ from 'lodash/fp'
import { train } from '../core/train'

export let xor = () => {
  let neuroXor = new brain.NeuralNetwork()
  neuroXor.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'xor',
      retrain: false,
      options: { hiddenLayers: [3] },
      trainingSets: ['first']
    })
  )
  let xorRun = _.flow(
    x => neuroXor.run(x),
    _.head,
    Math.round
  )
  let xorInput = [0, 1]
  console.log({ xorInput, xorOutput: xorRun(xorInput) })
}
