import brain from 'brain.js'
import { train } from '../../core/train'
import _ from 'lodash/fp'
import { range } from 'lodash'
import { plot, Plot } from 'nodeplotlib'
import { preprocessor, normalizeHp, denormalizeMpg, hpExtreems } from './util'

export let hpvsmpg = () => {
  let neuroHpVsMPG = new brain.NeuralNetwork()
  neuroHpVsMPG.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'hpvsmpg',
      retrain: false,
      options: { hiddenLayers: [1] },
      trainingSets: ['empty'],
      preprocessor,
    })
  )

  let x = range(hpExtreems.lowest, hpExtreems.highest, 10)
  let y =  _.map(hp => denormalizeMpg(neuroHpVsMPG.run(normalizeHp(hp))).mpg, x)
  plot([{x, y}], {
    title: 'HP vs MPG Correlation',
    xaxis: { title: 'HP' },
    yaxis: { title: 'MPG' }
  })
}
