import brain from 'brain.js'
import { train } from '../core/train'

export let restaurants = () => {
  let neuroRestaurants = new brain.NeuralNetwork()
  neuroRestaurants.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'restaurants',
      retrain: false,
      options: { hiddenLayers: [3] },
      trainingSets: ['first']
    })
  )
  let restaurantsInput = { Monday: 1 }
  console.log({
    restaurantsInput,
    restaurantsOutput: brain.likely(restaurantsInput, neuroRestaurants),
  })
}
