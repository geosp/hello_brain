import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash/fp'

export let readNumber = () => {
  let normalizeNumber = (number: String) => {
    if (number.length === 49) return [...number].map(c => (c === '#' ? 1 : 0))
    else throw 'Invalid length!!!'
  }

  let zero = normalizeNumber(
      '#######' +
      '#     #' +
      '#     #' +
      '#     #' +
      '#     #' +
      '#     #' +
      '#######'
  )

  let one = normalizeNumber(
      '   #   ' +
      '   #   ' +
      '   #   ' +
      '   #   ' +
      '   #   ' +
      '   #   ' +
      '   #   '
  )

  let two = normalizeNumber(
      '#######' +
      '      #' +
      '      #' +
      '#######' +
      '#      ' +
      '#      ' +
      '#######'
  )

  let three = normalizeNumber(
      '#######' +
      '      #' +
      '      #' +
      '#######' +
      '      #' +
      '      #' +
      '#######'
  )

  let four = normalizeNumber(
      '#     #' +
      '#     #' +
      '#######' +
      '      #' +
      '      #' +
      '      #' +
      '      #'
  )

  let five = normalizeNumber(
      '#######' +
      '#      ' +
      '#      ' +
      '#######' +
      '      #' +
      '      #' +
      '#######'
  )

  let six = normalizeNumber(
      '#######' +
      '#      ' +
      '#      ' +
      '#######' +
      '#     #' +
      '#     #' +
      '#######'
  )

  let seven = normalizeNumber(
      '#######' +
      '      #' +
      '      #' +
      '      #' +
      '      #' +
      '      #' +
      '      #'
  )

  let eight = normalizeNumber(
      '#######' +
      '#     #' +
      '#     #' +
      '#######' +
      '#     #' +
      '#     #' +
      '#######'
  )

  let nine = normalizeNumber(
      '#######' +
      '#     #' +
      '#     #' +
      '#######' +
      '      #' +
      '      #' +
      '      #'
  )

  let almostNine = normalizeNumber(
    '# # # #' +
    '#     #' +
    '#     #' +
    '# # # #' +
    '      #' +
    '       ' +
    '      #'
)

  let numbers = { zero, one, two, three, four, five, six, seven, eight, nine }
  let data = _.flow(
      _.keys,
      _.map(key => ({input: numbers[key], output: {[key]: 1}}))
  )(numbers)

  let neuro = new brain.NeuralNetwork()
  neuro.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'readNumber',
      retrain: false,
      options: { hiddenLayers: [3] },
      prepocessor: () => data
    })
  )
  let numberInput = almostNine
  console.log({ numberInput: JSON.stringify(numberInput), numberOutput: brain.likely(numberInput, neuro) })
}
