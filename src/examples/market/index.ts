import _ from 'lodash/fp'
import brain from 'brain.js'
import { plot, stack } from 'nodeplotlib'
import moment from 'moment'
import {
  train,
  trainingErrors,
  errorLogger,
  getErrorPlot,
} from '../../core/train'
import { trainingData, marketDataPreprocessor, denormailizeData } from './util'

export default ({retrain, name}) => {
  let neuroMarket = new brain.recurrent.LSTMTimeStep()
  let networkOptions = {
    hiddenLayers: [8, 8],
    inputSize: 4,
    outputSize: 4,
  } as brain.INeuralNetworkOptions
  let trainingOptions = {
    learningRate: 0.005,
    errorThresh: 0.02,
    // iterations: 10000,
    callbackPeriod: 1,
    callback: errorLogger,
  } as brain.INeuralNetworkTrainingOptions
  neuroMarket.fromJSON(
    train({
      brainType: brain.recurrent.LSTMTimeStep,
      networkOptions,
      trainingOptions,
      name,
      retrain,
      svg: true,
      svgOptions: { width: 1000, height: 1250 },
      preprocessor: marketDataPreprocessor,
      trainingSets: ['first'],
    })
  )
  let forcastInterval = 20
  let marketForcastInput = _.last(trainingData)
  let marketForcastOutput = neuroMarket.forecast(
    marketForcastInput,
    forcastInterval
  ) as {
    date: string
    open: number
    high: number
    low: number
    close: number
  }[]
  let flatData = _.flatten(trainingData)
  flatData = denormailizeData(flatData)
  let trainingSeries = {
    x: _.map(({ date }) => date, flatData),
    open: _.map(({ open }) => open, flatData),
    high: _.map(({ high }) => high, flatData),
    low: _.map(({ low }) => low, flatData),
    close: _.map(({ close }) => close, flatData),
    type: 'ohlc',
    xaxis: 'x',
    yaxis: 'y',
  }
  marketForcastOutput = denormailizeData(marketForcastOutput)
  let forcastSeries = {
    x: _.times(
      // @ts-ignore
      n => moment(_.last(marketForcastInput).date)
          .add(n, 'day')
          .format('YYYY-MM-DD'),
      forcastInterval
    ),
    open: _.map(({ open }) => open, marketForcastOutput),
    high: _.map(({ high }) => high, marketForcastOutput),
    low: _.map(({ low }) => low, marketForcastOutput),
    close: _.map(({ close }) => close, marketForcastOutput),
    type: 'ohlc',
    xaxis: 'x',
    yaxis: 'y',
  }

  // @ts-ignore
  stack([trainingSeries], {
    title: 'Training Market Data - November 2018 GM',
    yaxis: { title: 'US Dollars' },
  })

  // @ts-ignore
  stack([forcastSeries], {
    title: `${forcastInterval} Day Market Data Forcast - GM`,
    yaxis: { title: 'US Dollars' },
  })

  if (trainingErrors.length > 0) {
    let errorPlot = getErrorPlot()
    // @ts-ignore
    stack(errorPlot.plot, errorPlot.layout)
  }

  plot()
}
