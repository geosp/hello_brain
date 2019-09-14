import _ from 'lodash/fp'
import { getExtremes, normalize, denormalize } from '../../core/normalization'

const processData = ({ data, extremes, fn }) =>
  _.map(
    ({ open, high, low, close }) => ({
      open: fn({...extremes, value: open}),
      high: fn({...extremes, value: high}),
      low: fn({...extremes, value: low}),
      close: fn({...extremes, value: close}),
    }),
    data
  )
export let getDayExtremes = _.flow(
  // @ts-ignore
  _.reduce((acc, { open, high, low, close }) => {
    return [...acc, open, high, low, close]
  }, []),
  getExtremes
)
export let normalizeMarketData = _.curry((data, extremes) =>
  processData({ data, extremes, fn: normalize }))
export let denormalizeMarketData = _.curry((data, extremes) => 
processData({data, extremes, fn: denormalize}))
