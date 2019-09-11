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
    if(retrain) return neuro
    neuronet = neuro.toJSON()
    fs.writeFileSync(neuroNetPath, JSON.stringify(neuronet))
  } else {
    console.log({ message: 'Trained' })
    let fileContent = fs.readFileSync(neuroNetPath, 'utf8')
    console.log({fileContent})
    neuronet = JSON.parse(fileContent)
  }

  return neuronet
}
