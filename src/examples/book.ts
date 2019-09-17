import brain from 'brain.js'
import { train } from '../core/train'

export let book = () => {
  let neuro = new brain.recurrent.LSTM()
  let trainingOptions = {
    iterations: 1500,
    errorThresh: 0.011,
  } as brain.INeuralNetworkTrainingOptions
  neuro.fromJSON(
    train({
      brainType: brain.recurrent.LSTM,
      trainingOptions,
      name: 'book',
      retrain: false,
      trainingSets: ['first'],
    })
  )
  let bookInput = 'Jane saw seat'
  console.log({ bookInput, additionOutput: neuro.run(bookInput) })
}
