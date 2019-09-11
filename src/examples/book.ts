import brain from 'brain.js'
import { train } from '../core/train'

export let book = () => {
    let neuro = new brain.recurrent.LSTM()
    neuro.fromJSON(
      train({
        brainType: brain.recurrent.LSTM,
        name: 'book',
        retrain: false,
        trainingOptions: { iterations: 1500, errorThresh: 0.011 },
      })
    )
    let bookInput = 'Jane saw seat'
    console.log({ bookInput, additionOutput: neuro.run(bookInput) })
}
