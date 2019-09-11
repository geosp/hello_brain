import brain from 'brain.js'
import { train } from '../core/train'

export let count = () => {
  let neuroCount = new brain.recurrent.LSTMTimeStep()
  neuroCount.fromJSON(
    train({
      brainType: brain.recurrent.LSTMTimeStep,
      name: 'count',
      retrain: false,
      options: { hiddenLayers: [3] },
    })
  )
  let countInput = [1, 2, 3]
  console.log({ countInput, colorOutput: neuroCount.run(countInput) })
}