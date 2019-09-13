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
      trainingSets: ['forward', 'backward']
    })
  )
  let countInput = [3,4]
  // @ts-ignore
  console.log({ countInput, countOutput: Math.round((neuroCount.run(countInput) as Number))})
}