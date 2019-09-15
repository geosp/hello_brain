import brain from 'brain.js'
import { train } from '../../core/train'
import _ from 'lodash/fp'
import { range } from 'lodash'
import { plot } from 'nodeplotlib'
import {
  preprocessor,
  normalizeHp,
  denormalizeMpg,
  hpExtreems,
  rawData,
} from './util'

export let hpvsmpg = () => {
  let model = new brain.NeuralNetwork()
  model.fromJSON(
    train({
      brainType: brain.NeuralNetwork,
      name: 'hpvsmpg',
      retrain: false,
      options: { hiddenLayers: [2] },
      trainingOptions: { iterations: 40000 },
      trainingSets: ['empty'],
      preprocessor,
    })
  )
  let x0 = _.map(x => x.hp, rawData)
  let y0 = _.map(y => y.mpg, rawData)
  let x = range(hpExtreems.lowest, hpExtreems.highest, 10)
  let y = _.map(hp => denormalizeMpg(model.run(normalizeHp(hp))).mpg, x)

  plot(
    [
      {
        x: x0,
        y: y0,
        type: 'scatter',
        name: 'raw',
        mode: 'markers'
      },
      { x, y, name: 'prediction' },
    ],
    {
      title: 'HP vs. MPG Correlation',
      xaxis: { title: 'HP' },
      yaxis: { title: 'MPG' },
    }
  )
}
