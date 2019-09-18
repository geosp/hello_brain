import brain, { INeuralNetworkJSON } from 'brain.js'
import fs from 'fs'
import _ from 'lodash/fp'

export let trainingErrors: number[] = []
const recall = path => JSON.parse(fs.readFileSync(path, 'utf8'))
export let train = ({
  brainType,
  preprocessor = x => x,
  retrain = false,
  name = 'anonymous',
  networkOptions = {} as brain.INeuralNetworkOptions,
  trainingOptions = {} as brain.INeuralNetworkTrainingOptions,
  trainingSets = [] as string[],
  svg = false,
  svgOptions = {},
}): INeuralNetworkJSON => {
  let neuronet: INeuralNetworkJSON | any
  let neuroNetRootPath = `data/neuronet/${name}`
  let neuroNetPath = `${neuroNetRootPath}/${name}.json`
  if (retrain || !fs.existsSync(neuroNetPath)) {
    trainingErrors = []
    trainingOptions = _.merge(trainingOptions, {
      callbackPeriod: 1,
      callback: errorLogger,
    })
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
    // Alternative using streams but the output formats look different for some reason.
    // let trainingStream = new brain.TrainStream({
    //   neuralNetwork: neuro,
    //   floodCallback: () => {
    //     readTrainingSets()
    //   },
    //   doneTrainingCallback: state => {
    //     console.log({state: neuro.run([0,0])})
    //   },
    //   ...trainingOptions
    // })
    // let readTrainingSets = () => {
    //   for (let setName of trainingSets) {
    //     let setPath = `data/training/${name}/${setName}.json`
    //     let data = preprocessor(
    //       JSON.parse(
    //         fs.readFileSync(`data/training/${name}/${setName}.json`, 'utf8')
    //       )
    //     )
    //     for (let item of data) {
    //       trainingStream.write(item)
    //     }
    //   }
    //   trainingStream.endInputs()
    // }
    // readTrainingSets()
    let neuro = new brainType(networkOptions)
    console.log({
      message: `Training on set: ${trainingSets.join()}`,
      data: JSON.stringify((trainingData as []).slice(0, 10)),
      trainingOptions,
    })
    let stats = neuro.train(trainingData, { ...trainingOptions })
    console.log({ stats })
    neuronet = neuro.toJSON()
    if (!fs.existsSync(neuroNetRootPath)) {
      fs.mkdirSync(neuroNetRootPath)
    }
    fs.writeFileSync(neuroNetPath, JSON.stringify(neuronet))
    if (svg) {
      // Waiting for fix to issue witht toSVG.
      //@ts-ignore
      // fs.writeFileSync(`${neuroNetRootPath}/${name}.svg`, brain.utilities.toSVG(neuro, svgOptions))
    }
  } else if (fs.existsSync(neuroNetPath)) {
    console.log({ message: 'Trained' })
    neuronet = recall(neuroNetPath)
  }
  if (!neuronet) throw Error('Missing training sets or trained network.')
  else return neuronet
}
export let errorLogger = ({ error }) => {
  trainingErrors.push(error)
}
export let getErrorPlot = () => ({
  plot: [{ x: _.range(1, trainingErrors.length), y: trainingErrors }],
  layout: {
    title: 'Iterations vs. % Error',
    xaxis: { title: 'Iterations', type: 'log' },
    yaxis: { title: '% Error' },
    font: {size: 10}
  },
})
