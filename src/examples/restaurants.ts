import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'

export default ({retrain, name}) => {
  let preprocessor = data => {
    let values = _.values(data)
    return _.map(_.keys(data), (name, idx) => ({
      input: { [values[idx]]: 1 },
      output: { [name]: 1 },
    }))
  }

  let neuroRestaurants = new brain.NeuralNetwork()
  let networkOptions = {
    hiddenLayers: [3],
  } as brain.INeuralNetworkOptions
  neuroRestaurants.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      networkOptions,
      name,
      retrain,
      trainingSets: ['first'],
      preprocessor,
      svg: true,
    })
  )
  // Principle of representative values encoded as a vector is applied.
  // This implies an object like this: { Monday: 1, Tuesday: 0, Wednesday: 0 ....}
  let restaurantsInput = { Monday: 1 }
  console.log({
    restaurantsInput: _.keys(restaurantsInput)[0],
    restaurantsOutput: brain.likely(restaurantsInput, neuroRestaurants),
  })
}
