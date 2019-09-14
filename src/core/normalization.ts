import _ from 'lodash/fp'

/**
 * Gets the lowest and highest in a array of numbers.
 */
export let getExtremes = _.flow(
  _.sortBy(_.identity),
  x => ({ lowest: _.head(x), highest: _.last(x) })
)

/**
 * Scales a value to a number between 0 and 1.
 *
 * @param value   Any number.
 * @param lowest  The lowest instance of value in a dataset.
 * @param highest The highest instance of value in a dataset.
 */
export let normalize = ({ lowest, highest, value }) =>
  (value - lowest) / (highest - lowest)
/**
 * Computes the original scalled value.
 *
 * @param value     Any normalized number within this range.
 * @param lowest    The lowest instance of value in a dataset.
 * @param highest   The highest instance of value in a dataset.
 */
export let denormalize = ({ lowest, highest, value }) =>
  value * (highest - lowest) + lowest
