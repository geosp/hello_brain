import _ from 'lodash/fp'
import {
  normalize,
  getExtremes,
  denormalizeAndRound,
} from '../../core/normalization'
import carData from '../../../data/training/cars/data.json'

export let rawData: { hp: number; mpg: number }[] = _.flow(
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
)(rawData)
export let hpExtreems = _.flow(
  _.map(({ hp }) => hp),
  getExtremes
)(rawData)
export let normalizeHp = (value: number) => ({
  hp: normalize({ ...hpExtreems, value }),
})
export let normalizeMpg = (value: number) => ({
  mpg: normalize({ ...mpgExtreems, value }),
})
export let trainingData: {
  input: { hp: number }
  output: { mpg: number }
}[] = _.flow(
  _.map(({ mpg, hp }) => ({
    input: normalizeHp(hp),
    output: normalizeMpg(mpg),
  }))
)(rawData)
export let preprocessor = () => trainingData
export let denormalizeMpg = ({ mpg }: { mpg: number }) => ({
  mpg: denormalizeAndRound(0, { ...mpgExtreems, value: mpg }),
})
export let denormalizeHp = ({ hp }: { hp: number }) => ({
  hp: denormalizeAndRound(0, { ...hpExtreems, value: hp }),
})
