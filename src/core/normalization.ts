import _ from 'lodash/fp'

/**
 * Gets the lowest and highest in a array of numbers.
 */
// @ts-ignore
export let getExtremes: (
  data: number[]
) => { lowest: number, highest: number } = _.flow(
  _.sortBy(_.identity),
  x => ({ lowest: _.head(x), highest: _.last(x) })
)
/**
 * Rounds value to the nearest precission.
 *
 * @param value     Any number.
 * @param precision The number of desired decimal places in the result.
 */
export let round = _.curry((precision: number, value: number) => {
  let multiplier = Math.pow(10, precision || 0)
  return Math.round(value * multiplier) / multiplier
})
/**
 * Scales a value to a number between 0 and 1.
 *
 * @param value   Any number.
 * @param lowest  The lowest instance of value in a dataset.
 * @param highest The highest instance of value in a dataset.
 */
export let normalize = ({
  lowest,
  highest,
  value,
}: {
  lowest: number
  highest: number
  value: number
}) => (value - lowest) / (highest - lowest)
/**
 * Computes the original scalled value.
 *
 * @param value     Any normalized number within this range.
 * @param lowest    The lowest instance of value in a dataset.
 * @param highest   The highest instance of value in a dataset.
 */
export let denormalize = ({
  lowest,
  highest,
  value,
}: {
  lowest: number
  highest: number
  value: number
}) => value * (highest - lowest) + lowest
/**
 * Denormaize to a given precission
 *
 * @param data      Normalized value with range.
 * @param precision The number of desired decimal places in the result.
 */
export let denormalizeAndRound = _.curry(
  (
    precision: number,
    data: { lowest: number, highest: number, value: number }
  ) =>
    _.flow(
      denormalize,
      round(precision)
    )(data)
)
