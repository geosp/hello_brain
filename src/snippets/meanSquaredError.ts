import _ from 'lodash/fp'
import F from 'futil-js'

export let meanSquaredError = ({ predicted = [] as number[], expected = [] as number[] }) =>
  _.flow(
    F.reduceIndexed(
      (sum, expectedValue, i) =>
        (sum += Math.pow(predicted[i] - expectedValue, 2)),
      0
    ),
    (sum: number) => sum / expected.length
  )(expected)
