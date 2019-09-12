import brain, { INeuralNetworkJSON } from 'brain.js'
import fs from 'fs'

export let train = ({ brainType, prepocessor = x => x, retrain, name, options = {}, trainingOptions = {} }) => {
  let neuronet: INeuralNetworkJSON
  let neuroNetPath = `data/neuronet/${name}.json`
  let trainingPath = `data/training/${name}.json`
  if (retrain || !fs.existsSync(neuroNetPath)) {
    let trainingData = prepocessor(JSON.parse(fs.readFileSync(trainingPath, 'utf8')))
    let neuro = new brainType(options)
    console.log({ message: 'Training...', data: JSON.stringify(trainingData), trainingOptions })
    neuro.train(trainingData, { log: console.log, logPeriod: 100, ...trainingOptions })
    neuronet = neuro.toJSON()
    if (retrain && fs.existsSync(neuroNetPath)) {
      console.log({message: 'Backingup current neuronet.'})
      fs.renameSync(neuroNetPath, `${neuroNetPath}_${Math.round(+new Date / 1e3)}.bck`)
    } else if (!retrain) {
      fs.writeFileSync(neuroNetPath, JSON.stringify(neuronet))
    }
  } else {
    console.log({ message: 'Trained' })
    neuronet = JSON.parse(fs.readFileSync(neuroNetPath, 'utf8'))
  }

  return neuronet
}
