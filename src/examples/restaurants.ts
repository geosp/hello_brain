import brain from 'brain.js'
import { train } from '../core/train'
import _ from 'lodash'

export let restaurants = () => {
  let neuroRestaurants = new brain.NeuralNetwork()
  let preprocessor = data => {
    let values = _.values(data)
    return _.map(_.keys(data), (name, idx) => ({
      input: { [values[idx]]: 1 },
      output: { [name]: 1 },
    }))
  }
  neuroRestaurants.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'restaurants',
      retrain: false,
      options: { hiddenLayers: [3] },
      trainingSets: ['first'],
      preprocessor,
    })
  )
  let restaurantsInput = { Monday: 1 }
  console.log({
    restaurantsInput,
    restaurantsOutput: brain.likely(restaurantsInput, neuroRestaurants),
  })
}
