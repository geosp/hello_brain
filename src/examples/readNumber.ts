import brain from 'brain.js'
import { train, trainingErrors, getErrorPlot } from '../core/train'
import _ from 'lodash/fp'
import { plot, stack } from 'nodeplotlib'

export default ({ retrain, name }) => {
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
  let networkOptions = {
    // Input size 49 and output size 9 so a good number is (inputSize - OutputSize) / 2 for the first layer to start.
    // Adding more nodes or an additional layer over fits our neural network so this seems to be the sweet spot.
    hiddenLayers: [20],
    activation: 'leaky-relu', // Interesting comparison here between sigmoid  and leaky-relu.
  } as brain.INeuralNetworkOptions
  let trainingOptions = {
    // Experiment with learningRate and momentum watch the effect on iterations and classification accuracy in ther error graph.
    // learningRate: 0.1,
    // momentum: 0.7,
  } as brain.INeuralNetworkTrainingOptions
  neuro.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name,
      retrain,
      svg: true,
      svgOptions: { width: 1200, height: 1500 },
      networkOptions,
      trainingOptions,
      preprocessor: () => data,
      trainingSets: ['empty'],
    })
  )

  let testData = [..._.values(numbers), ..._.values(almostNumbers)]
  let results = _.map(number => brain.likely(number, neuro))(testData)
  console.log({
    input: `${_.keys(numbers).join()},${_.keys(almostNumbers)}`,
    output: results.join(),
  })
  if (trainingErrors.length > 0) {
    let errorPlot = getErrorPlot()
    errorPlot.layout.title = JSON.stringify(
      { 
        results: results.join(),
        networkOptions,
        trainingOptions
      }, null, 1
    ).replace(/{|}|"|:/gi, '')
    // @ts-ignore
    stack(errorPlot.plot, errorPlot.layout)
    plot()
  }
}
