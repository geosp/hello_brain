import _ from 'lodash/fp'
import {
  normalize,
  denormalize,
  getExtremes,
  round,
} from '../../core/normalization'
import carData from '../../../data/training/cars/data.json'

let data = _.flow(
  _.map(({ Horsepower, Miles_per_Gallon }) => ({
    mpg: Miles_per_Gallon,
    hp: Horsepower,
  })),
  _.remove(({ mpg, hp }) => _.isNull(mpg) || _.isNull(hp)),
  _.shuffle
)(carData)

export let mpgExtreems = _.flow(
  _.map(({ mpg }) => mpg),
  getExtremes
)(data)
export let hpExtreems = _.flow(
  _.map(({ hp }) => hp),
  getExtremes
)(data)
export let normalizeHp = value => ({ hp: normalize({ ...hpExtreems, value }) })
export let normalizeMpg = value => ({
  mpg: normalize({ ...mpgExtreems, value }),
})
export let trainingData = _.flow(
  _.map(({ mpg, hp }) => ({
    input: normalizeHp(hp),
    output: normalizeMpg(mpg),
  }))
)(data)
export let preprocessor = () => trainingData
export let denormalizeMpg = ({ mpg }) => ({
  mpg: round(0, denormalize({ ...mpgExtreems, value: mpg })),
})
export let denormalizeHp = ({ hp }) => ({
  hp: round(0, denormalize({ ...hpExtreems, value: hp })),
})
