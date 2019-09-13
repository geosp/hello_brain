import brain from 'brain.js'
import { train } from '../core/train'

export let simpleMath = () => {
  let neuroAddition = new brain.recurrent.LSTM()
  neuroAddition.fromJSON(
    train({
      brainType: brain.recurrent.LSTM,
      name: 'simpleMath',
      retrain: false,
      options: { hiddenLayers: [20] },
      trainingOptions: { errorThresh: 0.025 },
      trainingSets: ['addition']
    })
  )
  let additionInput = '1+1='
  console.log({ additionInput, additionOutput: neuroAddition.run(additionInput) })
}