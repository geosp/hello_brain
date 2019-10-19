import brain from 'brain.js'
import { train } from '../core/train'

export default ({retrain, name}) => {
  let neuroAddition = new brain.recurrent.LSTM()
  let networkOptions = {
    hiddenLayers: [20]
  } as brain.INeuralNetworkOptions
  let trainingOptions = {
    errorThresh: 0.025
  } as brain.INeuralNetworkTrainingOptions
  neuroAddition.fromJSON(
    train({
      brainType: brain.recurrent.LSTM,
      networkOptions,
      trainingOptions,
      name,
      retrain,
      trainingSets: ['addition'],
      svg: true,
    })
  )
  let additionInput = '1+1='
  console.log({ additionInput, additionOutput: neuroAddition.run(additionInput) })
}