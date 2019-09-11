import brain from 'brain.js'
import { train } from '../core/train'

export let addition = () => {
  let neuroAddition = new brain.recurrent.LSTM()
  neuroAddition.fromJSON(
    train({
      brainType: brain.recurrent.LSTM,
      name: 'addition',
      retrain: false,
      options: { hiddenLayers: [20] },
      trainingOptions: { errorThresh: 0.025 },
    })
  )
  let additionInput = '2+1='
  console.log({ additionInput, additionOutput: neuroAddition.run(additionInput) })
}