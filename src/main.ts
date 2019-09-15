import { xor } from './examples/xor'
import { brightness } from './examples/brightness'
import { colors } from './examples/colors'
import { restaurants } from './examples/restaurants'
import { count } from './examples/count'
import { market } from './examples/market'
import { simpleMath } from './examples/simpleMath'
import { readNumber } from './examples/readNumber'
import { book } from './examples/book'
import { sentiment } from './examples/sentiment'
import { hpvsmpg } from './examples/hpvsmpg'

const params = process.argv.slice(2)

const examples = {
  xor,
  brightness,
  colors,
  restaurants,
  count,
  market,
  simpleMath,
  readNumber,
  book,
  sentiment,
  hpvsmpg
}
examples[params[0]]()