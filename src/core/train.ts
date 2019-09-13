import brain, { INeuralNetworkJSON } from 'brain.js'
import fs from 'fs'
import _ from 'lodash/fp'

const recall = path => JSON.parse(fs.readFileSync(path, 'utf8'))
export let train = ({
  brainType,
  preprocessor = x => x,
  retrain,
  name,
  options = {},
  trainingOptions = {},
  trainingSets,
}) => {
  let neuronet: INeuralNetworkJSON | any
  let neuroNetRootPath = `data/neuronet/${name}`
  let neuroNetPath = `${neuroNetRootPath}/${name}.json`
  if (retrain || !fs.existsSync(neuroNetPath)) {
    let trainingData = _.reduce(
      // @ts-ignore
      (data, setName) => [
        ...data,
        ...preprocessor(
          JSON.parse(
            fs.readFileSync(`data/training/${name}/${setName}.json`, 'utf8')
          )
        ),
      ],
      [],
      trainingSets
    )
    let neuro = new brainType(options)
    console.log({
      message: `Training on set: ${trainingSets.join()}`,
      data: JSON.stringify(trainingData),
      trainingOptions,
    })
    let stats = neuro.train(trainingData, { ...trainingOptions })
    console.log({ stats })
    neuronet = neuro.toJSON()
    if (fs.existsSync(neuroNetPath)) {
      console.log({ message: 'Backingup last neuronet.' })
      fs.renameSync(
        neuroNetPath,
        `${neuroNetRootPath}/${Math.round(+new Date() / 1e3)}.bck`
      )
    }
    fs.writeFileSync(neuroNetPath, JSON.stringify(neuronet))
  } else if (fs.existsSync(neuroNetPath)) {
    console.log({ message: 'Trained' })
    neuronet = recall(neuroNetPath)
  }
  if (!neuronet) throw Error('Missing training sets or trained network.')
  else return neuronet
}
