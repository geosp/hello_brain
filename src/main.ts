import { xor } from './examples/xor'
import { brightness } from './examples/brightness'
import { colors } from './examples/colors'
import { restaurants } from './examples/restaurants'
import { market } from './examples/market'

const params = process.argv.slice(2)

const examples = {
  xor: xor,
  brightness: brightness,
  colors: colors,
  restaurants: restaurants,
  market
}
examples[params[0]]()