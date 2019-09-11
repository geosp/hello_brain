import { xor } from './examples/xor'
import { brightness } from './examples/brightness'
import { colors } from './examples/colors'
import { restaurants } from './examples/restaurants'
import { count } from './examples/count'
import { market } from './examples/market'
import { addition } from './examples/addition'

const params = process.argv.slice(2)

const examples = {
  xor,
  brightness,
  colors,
  restaurants,
  count,
  market,
  addition
}
examples[params[0]]()