import brain from 'brain.js'
import { train } from '../core/train'

export let sentiment = () => {
  let neuro = new brain.recurrent.LSTM()
  let trainingOptions = {
    iterations: 1000,
    errorThresh: 0.011,
  } as brain.INeuralNetworkOptions
  neuro.fromJSON(
    train({
      brainType: brain.recurrent.LSTM,
      trainingOptions,
      name: 'sentiment',
      retrain: false,
      trainingSets: ['first'],
    })
  )
  let sentimentInput = 'I am unhappy!'
  console.log({ sentimentInput, sentimentOutput: neuro.run(sentimentInput) })
}
