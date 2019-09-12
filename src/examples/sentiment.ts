import brain from 'brain.js'
import { train } from '../core/train'

export let sentiment = () => {
    let neuro = new brain.recurrent.LSTM()
    neuro.fromJSON(
      train({
        brainType: brain.recurrent.LSTM,
        name: 'sentiment',
        retrain: false,
        trainingOptions: { iterations: 1000, errorThresh: 0.011 },
      })
    )
    let sentimentInput = "I am unhappy!"
    console.log({ sentimentInput, sentimentOutput: neuro.run(sentimentInput) })
}
