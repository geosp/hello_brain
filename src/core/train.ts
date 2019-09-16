import brain, { INeuralNetworkJSON } from 'brain.js'
import fs from 'fs'
import _ from 'lodash/fp'

let parseNumber = value => Number(_.trim(value))
export let error: number[] = []
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
    error = []
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
      // data: JSON.stringify(trainingData),
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
export let parseLog: (log: string) => { x: number; y: number } = _.flow(
  _.split(','),
  _.map(x => x.split(':')),
  x => ({ x: parseNumber(x[0][1]), y: parseNumber(x[1][1]) * 100 })
)
export let errorLogger = (info: string) => {
  let errorInfo = parseLog(info)
  error.push(errorInfo.y)
}
export let getErrorPlot = () => ({
  plot: [{ x: _.range(1, error.length), y: error }],
  layout: {
    title: 'Iterations vs. % Error',
    xaxis: { title: 'Iterations', type: 'log' },
    yaxis: { title: '% Error' },
  },
})
