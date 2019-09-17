import _ from 'lodash/fp'
import {
  getExtremes,
  normalize,
  denormalizeAndRound,
} from '../../core/normalization'
import marketData from '../../../data/training/market/first.json'

const processData = ({ data, extremes, fn }) =>
  _.map(
    ({ date, open, high, low, close }) => ({
      open: fn({ ...extremes, value: open }),
      high: fn({ ...extremes, value: high }),
      low: fn({ ...extremes, value: low }),
      close: fn({ ...extremes, value: close }),
      date
    }) as {date: string, open: number, high: number, low: number, close: number },
    data
  )
let getDayExtremes = _.flow(
  // @ts-ignore
  _.reduce((acc, { open, high, low, close }) => {
    return [...acc, open, high, low, close]
  }, []),
  getExtremes
)
let normalizeMarketData = _.curry((data, extremes) =>
  processData({ data, extremes, fn: normalize })
)
let denormalizeMarketData = _.curry((data, extremes) =>
  processData({ data, extremes, fn: denormalizeAndRound(4) })
)
export let marketDataPreprocessor = data =>
  _.flow(
    getDayExtremes,
    normalizeMarketData(data),
    _.chunk(5)
  )(data)
export let denormailizeData = data =>
  _.flow(
    getDayExtremes,
    denormalizeMarketData(data)
  )(marketData)
export let trainingData = marketDataPreprocessor(marketData)
