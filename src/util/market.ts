import _ from 'lodash/fp'

const normalize = ({ lowest, highest }, price) => 
  (price - lowest) / (highest - lowest)
const denormalize = ({ lowest, highest }, normalizedPrice) =>
  normalizedPrice * (highest - lowest) + lowest
const processData = ({ data, extremes, fn }) =>
  _.map(
    ({ open, high, low, close }) => ({
      open: fn(extremes, open),
      high: fn(extremes, high),
      low: fn(extremes, low),
      close: fn(extremes, close),
    }),
    data
  )
export let getExtremes = _.flow(
  // @ts-ignore
  _.reduce((acc, { open, high, low, close }) => {
    return [...acc, open, high, low, close]
  }, []),
  _.sortBy(_.identity),
  x => ({ lowest: _.head(x), highest: _.last(x) })
)
export let normalizeMarketData = _.curry((data, extremes) =>
  processData({ data, extremes, fn: normalize }))
export let denormalizeMarketData = _.curry((data, extremes) => 
processData({data: [data], extremes, fn: denormalize}))
