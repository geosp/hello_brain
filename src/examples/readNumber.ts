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
      '#      ' +
      '#     #' +
      '# # # #' +
      '       ' +
      '      #' +
      '      #'
  )

  let almostEight = normalizeNumber(
    '# # # #' +
      '#      ' +
      '#     #' +
      '# # # #' +
      '#      ' +
      '      #' +
      '#      '
  )

  let almostSeven = normalizeNumber(
    '#   # #' +
      '       ' +
      '      #' +
      '    # #' +
      '       ' +
      '      #' +
      '      #'
  )

  let almostSix = normalizeNumber(
      '###  ##' +
      '#      ' +
      '#      ' +
      '## ## #' +
      '#     #' +
      '      #' +
      '# ##  #'
  )
  let numbers = { zero, one, two, three, four, five, six, seven, eight, nine }
  let almostNumbers = { almostSix, almostSeven, almostEight, almostNine }
  let data = _.flow(
    _.keys,
    _.map(key => ({ input: numbers[key], output: { [key]: 1 } }))
  )(numbers)

  let neuro = new brain.NeuralNetwork()
  neuro.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'readNumber',
      retrain: true,
      svg: true,
      svgOptions: { width: 1200, height: 1500},
      options: {
        // Input size 49 and output size 9 so a good number is (inputSize - OutputSize) / 2 for the first layer.
        // Adding more nodes or an additional layer over fits our neural network so this seems to be the sweet spot.
        hiddenLayers: [20, 10],
      },
      preprocessor: () => data,
      trainingSets: ['empty']
    })
  )

  let testData = [..._.values(numbers), ..._.values(almostNumbers)]
  let results = _.map(number => brain.likely(number, neuro))(testData)
  console.log({input: `${_.keys(numbers).join()},${_.keys(almostNumbers)}`, output: results.join()})
}
